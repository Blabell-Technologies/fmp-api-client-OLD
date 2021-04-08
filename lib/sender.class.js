const fetch = require("node-fetch");
const ierrors = require("./errors");

const { Body, Headers, Request } = require("node-fetch");
const { URL } = require("url");
const { assert } = require("console");
const { rejects } = require("assert");

class Sender {
  // Gestion de token de acceso
  #auth_token;

  constructor (token) { this.auth_token = token }

  /** @private @ignore */
  set auth_token(token) {
    this.#auth_token = token;
  }

  /** @private @ignore */
  res_check(res) {
    switch (res.code) {
      case 400:
        if (res.field) throw new ierrors.DatabaseValidationError(`Error ${res.code} (${res.type}) -> ${res.field} has a problem`); 
        throw new ierrors.UndefinedRequiredData(`Error ${res.code} (${res.type})`);
      case 401: throw new ierrors.InvalidToken('Invalid API Token');
      case 404: 
        if (res.details)
          switch (res.details) {
            case 'animal-not-found': throw new ierrors.InvalidAnimal(`Error ${res.code} (${res.type}) -> ${res.details}`);
            default: throw new ierrors.UnknownError('Unknown error');
          }
        throw new ierrors.ResourceNotFound(`Error ${res.code} (${res.type}) -> ${res.details ? res.details : 'resource not found'}`);
      case 406: 
        switch (res.field) {
          case 'owner_email': throw new ierrors.InvalidEmail(`Error ${res.code} (${res.type}) -> ${res.field} has invalid data`);
          case 'owner_phone': throw new ierrors.InvalidPhone(`Error ${res.code} (${res.type}) -> ${res.field} has invalid data`);
          case 'disappearance_place': throw new ierrors.InvalidCoordinates(`Error ${res.code} (${res.type}) -> ${res.field} has invalid data`);
          case 'owner_home': throw new ierrors.InvalidCoordinates(`Error ${res.code} (${res.type}) -> ${res.field} has invalid data`);
          case 'disappearance_date': throw new ierrors.InvalidDate(`Error ${res.code} (${res.type}) -> ${res.field} has invalid data`);
          case 'pet_animal': throw new ierrors.InvalidAnimal(`Error ${res.code} (${res.type}) -> ${res.field} has invalid data`);
          case 'pet_race': throw new ierrors.InvalidRace(`Error ${res.code} (${res.type}) -> ${res.field} has invalid data`);
          case 'reward': throw new ierrors.InvalidReward(`Error ${res.code} (${res.type}) -> ${res.field} has invalid data`);
          case 'found': throw new ierrors.InvalidFoundState(`Error ${res.code} (${res.type}) -> ${res.field} has invalid data`);
          default: throw new ierrors.UnknownError('Unknown error');
        }
      case 500: 
        switch (res.type) {
          case 'database-error': throw new ierrors.DatabaseError(`Error ${res.code} (${res.type})`);
          case 'image-error': throw new ierrors.UnexpectedApiError(`Error ${res.code} (${res.type}) ${res.field ? ` -> ${res.field} has invalid data` : ''}`);
          case 'api-error': throw new ierrors.UnexpectedApiError(`Error ${res.code} (${res.type}) ${res.details ? ` -> ${res.details}` : ''}`);
          default: throw new ierrors.UnknownError('Unknown error');
        }
      default: throw new ierrors.UnknownError('Unknown error');
    }
  }

	/** @returns {{ connection: Request, body: Body, attempts: number }} @private @ignore */
  async send(url, method, headers = {}, body = null) {
    headers["access-token"] = this.#auth_token;

    let attempts = 0;
    const try_fetch = async () => {
      attempts++; // Se suma un intento
      try {
        var data = await fetch(url, { timeout: 30000, method, body, headers });
        if (data.size == 0) throw new ierrors.UnexpectedApiError('Response size is 0 bytes (API could be down)');
        var fetched_body = await data.json();
      } catch (err) {
        console.error(err);

        if (err.type == "request-timeout") {
          if (attempts < 5) try_fetch();
          else throw ierrors.RetryLimit("Maximum number of retries exceeded");
        }

        throw err;
      }

      // ahora si tira invalid animal ee
      if (fetched_body.code != 200) return this.res_check(fetched_body);
      
      return { connection: data, body: fetched_body, attempts };
    };

    return await try_fetch();
  }

	/** Genera una petición GET
	 * @param {string|URL} url - URL objetivo de la petición
	 * @param {Headers} headers - Cabeceras de la consulta HTTP
   * 
   * @private
   * @ignore
	 */
  async get(url, headers = {}) {
    try {
      return await this.send(url, "GET", headers);
    } catch (err) {
      throw err;
    }
  }

  /** Genera una petición POST
	 * @param {string|URL} url - URL objetivo de la petición
   * @param {object} body - Cuerpo e información a enviar
	 * @param {Headers} headers - Cabeceras de la consulta HTTP
   * 
   * @private
   * @ignore
	 */
  async post(url, body, headers = {}) {
    try {
      return await this.send(url, "POST", headers, body);
    } catch (err) {
      throw err;
    }
  }

  /** Genera una petición PUT
	 * @param {string|URL} url - URL objetivo de la petición
   * @param {object} body - Cuerpo e información a enviar
	 * @param {Headers} headers - Cabeceras de la consulta HTTP
   * 
   * @private
   * @ignore
	 */
  async put(url, body, headers = {}) {
    try {
      return await this.send(url, "PUT", headers, body);
    } catch (err) {
      throw err;
    }
  }

  /** Genera una petición DELETE
	 * @param {string|URL} url - URL objetivo de la petición
   * @param {object} body - Cuerpo e información a enviar
	 * @param {Headers} headers - Cabeceras de la consulta HTTP
   * 
   * @private
   * @ignore
	 */
  async delete(url, body, headers = {}) {
    try {
      return await this.send(url, "DELETE", headers, body);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = Sender;

const parse_phone = require("libphonenumber-js");
var FormData = require('form-data');
const fs = require('fs');

/** Verifica si los valores son nulos o no estan definidos
 * @param  {...any} values Valores a comprobar
 *
 * @throws {ReferenceError} Lanazara un error si alguno de los argumentos son indefinidos, nulos o estan vacios
 * @returns {boolean}
 */
const is_set = (...values) => {
  for (const value of values) {
    if (value == undefined || value == null || value == "" || value.lenght == 0)
      throw new ReferenceError(`The variable is not defined or is null`);
  }

  return true;
};

/** Verifica si la variable es nula o indefinida
 * @param  {any} value Valor a comprobar
 *
 * @returns {boolean} Retornará el valor booleano correspondiente al resultado
 */
const only_setted = (value) => {
  if (value == undefined || value == null || value == "" || value.lenght == 0)
    return false;
  return true;
};

/** Genera una url a necesidad
 * @param {string} path - Ruta de la dirección
 * @param {object} query - Parámetros a enviar por query (usando sus key/value)
 */
const url = (path, query) => {
  if (!only_setted(path))
    throw new UndefinedRequiredData("There are required data not declared");
  const base = "https://foundmypet.org/";
  const url = new URL(path, base);
  if (only_setted(query))
    for (val in query) if (only_setted(query[val])) url.searchParams.append(val, query[val]);
  return url;
};

/** Comprueba que el tipo de variable sea correcta
 * 
 * @param {string} variable Variable a comprobar
 * @param {'bigint'|'boolean'|'function'|'number'|'object'|'string'|'symbol'|'undefined'} type Tipado de la variable
 * @param {*} default_value Valor por defecto en caso de indefinido
 */
const verify = (variable, type, default_value = undefined) => {
  if (typeof variable !== type) {
    if (default_value !== undefined && variable === undefined) return default_value;
    throw new TypeError('Unexpected variable type');
  }
  
  return variable;
}

/** Separa y añade datos de un Objeto a un FormData
 * @param {Object<string, any>} data Objeto de datos a analizar
 */
const form_parse = (data) => {
  const formData = new FormData();
  for (const entry in data) {
    if (only_setted(data[entry])) {
      if (typeof data[entry].name == 'string')
        data[entry] = fs.createReadStream(data[entry].path);
      formData.append(entry, data[entry]);
    }
  }
  return formData;
}

const phone_validation = (phone) => {
  try { phone = parse_phone(phone) }
  catch { return false }

  if (phone == undefined || !phone.isValid()) {
    return false;
  }

  return phone;
}

const id_validation = (id) => {
  return /(?=.{6,6}$)^[A-Za-z0-9]+$/i.test(id);
}

module.exports = { only_setted, is_set, url, verify, form_parse, phone_validation, id_validation };

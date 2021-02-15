const Sender = require("./sender.class");
const common = require("./common");

class Animals extends Sender {
  constructor(token) {
    super();
		/** @private @ignore */
    this.auth_token = token;
  }

  /** Obtiene todos los animales o las razas de un animal específico
	 * @param {string} [animal] Animal del cual obtener sus razas. En caso de no ser especificado se obtendrá la lista de animales
	 * 
	 * @returns {string[]} Array con los animales o razas obtenidas
   */
  async get(animal = undefined) {
		if (animal == undefined) var url = common.url('/animals');
		if (common.only_setted(animal)) var url = common.url(`/animals/${common.verify(animal, 'string')}/races`);
		
		const res = await super.get(url);
		return res.body.details.items;
	}

	/** Comprueba la existencia de un animal o una raza
	 * @param {string} animal - Animal a comprobar
	 * @param {string} [race] - Raza a comprobar
	 * 
	 * @returns {boolean} Estado de existencia del animal o raza
	 */
  async check(animal, race = undefined) {
		var url = common.url(`/animals/${common.verify(animal, 'string')}/`); // banca
		if (common.only_setted(race)) url.href += `races/${common.verify(race, 'string')}/`;
		url.href += 'check';

		const res = await super.get(url);
		return res.body.details.check;
	}
	
}

module.exports = Animals;
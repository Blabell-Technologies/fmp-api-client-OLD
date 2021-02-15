const InterfaceErrors = require("./errors");
const Animals = require('./animals.class');
const Pets = require('./pets.class');

class FMP {
  
  #oauth_token;
  constructor (token) { this.#oauth_token = token; }
  

  #petcontroller;
  static get pets() { return Pets }
  /** @returns {Pets} */
  get pets() { 
    if ( this.#petcontroller == null ) this.#petcontroller = new FMP.pets(this.#oauth_token);
    return this.#petcontroller;
  }

  #animalcontroller;
  static get animals() { return Animals }
  /** @returns {Animals} */
  get animals() { 
    if ( this.#animalcontroller == null ) this.#animalcontroller = new FMP.animals(this.#oauth_token);
    return this.#animalcontroller;
  }

  /** Tipos de errores */
  static get IErrors() { return InterfaceErrors }
}

module.exports = FMP;
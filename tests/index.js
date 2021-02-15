const FMP = require('../lib/fmp');

const fmp = new FMP()
const search = await fmp.pets.nearby();

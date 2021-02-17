const FMP = require('../lib/fmp');
(async () => {
  const fmp = new FMP()
  try { var del = await fmp.pets.delete('8ef1bf04-fb2e-443c-a90e-b9360ac0d474'); }
  catch (err) { return console.error(err); }

  console.log(del);
})()

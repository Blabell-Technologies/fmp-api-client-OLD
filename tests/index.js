const FMP = require('../lib/fmp');
// (async () => {
//   const fmp = new FMP()
//   try { var del = await fmp.pets.delete('8ef1bf04-fb2e-443c-a90e-b9360ac0d474'); }
//   catch (err) { return console.error(err); }

//   console.log(del);
// })()


(async () => {
  const fmp = new FMP()
  try { var res = await fmp.pets.add({
    pet_animal: 'dog',
    pet_name: 'Romero',
    disappearance_date: '2020/05/05T00:00',
    disappearance_place: '-56,-32',
    details: 'Lorem ipsum',
    owner_email: 'santidenicolas@gmail.com',
    owner_name: 'SantiDN',
    owner_phone: ['+542323421413', 'Dario', '+542323421413'],
    pet_photo_0: 'ALOJA'
  }); }
  catch (err) { return console.error(err); }

  console.log(res);
})()

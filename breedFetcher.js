const request = require('request');

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, response, body) =>{
  if (err) {
    console.log(`Error:`, err);
    return;
  }
  if (response.statusCode !== 200) {
    console.log(`That breed does not exist.`);
    return;
  }
  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`That breed does not exist.`);
    return;
  } else {
    console.log(data[0].description);
  }

});
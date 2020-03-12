const request = require('request');

const fetchBreedDescription = (breedName, callBack) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) =>{
    if (err) {
      callBack(err, null);
    } else {
      const data = JSON.parse(body);
    
      if (data.length === 0) {
        callBack(`Error: That breed does not exist.`, undefined);
      } else {
        callBack(null, data[0].description.trim());
      }
    }
  });
  
};

module.exports = {fetchBreedDescription};
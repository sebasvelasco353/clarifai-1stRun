const express = require('express')
const Clarifai = require('clarifai');
const app = express()
const clarifaiApp = new Clarifai.App({
 apiKey: 'bae553989a58436ba67a21ea89b2afeb'
});

app.get('/viaURL', function (req, res) {
  //send req for url image.
  clarifaiApp.models.predict(Clarifai.GENERAL_MODEL, "http://static.vix.com/es/sites/default/files/styles/large/public/btg/curiosidades.batanga.com/files/Como-gira-la-cabeza-un-buho.jpg?itok=tjKZ7qWF").then(
  function(response) {
    // do something with response
      res.send(response);
  },
  function(err) {
    // there was an error
    console.log(err);
  });
});

app.get('/searchConcept', function (req, res) {

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

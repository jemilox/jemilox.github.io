// FRONT END SERVICE CALLING BACKEND

var getHighScores = async function () {
  console.log('......................');
  return await fetch('/bubbleLeaders')
  .then(function(response) {
    console.log('response', response);
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    return myJson;
  })
  .catch(function(error){
    console.log('error', error);
  });
}


var callFetch = function () {
  console.log('......................');
  fetch('/bubbleLeaders')
  .then(function(response) {
    console.log('response', response);
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  })
  .catch(function(error){
    console.log('error', erorr);
  });
}

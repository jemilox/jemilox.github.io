let highScores = [];

const retriveHighScores = async () => {
  return await getHighScores().then( (response) => {
    console.log('scoresmeow', response);
    highScores = response.scores;
    highScores.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  
    document.getElementById('highScore1').innerHTML = highScores[0].score;
    for(let i = 0; i < highScores.length; i++) {
      document.getElementById('highScore' + (i + 1)).innerHTML = highScores[i].score + '     ' + highScores[i].name;
    }
    console.log('highScores', highScores);
  })
}


const checkForHighScore = (points) => {
  retriveHighScores().then( () => {
    if (points > highScores[highScores.length - 1].score) {
      console.log('mew mew i did it!');
      highScores.pop();
      highScores.push({name: 'meow', score: points.toString()});
      console.log('adding to high scores!', highScores);
    }
  });
}

retriveHighScores();
function getResponse(score,machineActive) {
    let response;
  
    // Add your code here
    if (!machineActive){
      response = 'Turn the machine on!!!';
    }
    else{
      if (score < 0 || score > 100){
        response = 'This is not possible, an error has occurred.';
      }
      else if (score <= 19){
        response = 'That was a terrible score — total fail!';
      }
      else if (score <=39){
        response = 'You know some things, but it\'s a pretty bad score. Needs improvement.';
      }
      else if (score <= 69){
        response = 'You did a passable job, not bad!';
      }
      else if (score <= 89){
        response = 'That\'s a great score, you really know your stuff.';
      }
      else {
        response = 'What an amazing score! Did you cheat? Are you for real?';
      }
    } 
    // Don't edit the code below here!
    return response;
     }
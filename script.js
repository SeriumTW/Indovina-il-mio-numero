'use strict';

// console.log(document.querySelector('.message').textContent); // come selezionare un elemento su js
// document.querySelector('.message').textContent = '🎉 Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 30;

// ---------------------------------------------------------------

//addEventListener('') è un metodo che ci permettere di creare eventi e dare la possibilità di interagire con la pagina.

// For playing again

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 10;

const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '❌ Nessun numero';

    // when players wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Hai vinto!';
    displayMessage('🎉 Hai vinto!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').style.display = 'none';
    document.querySelector('.check').style.display = 'none';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    Number((document.querySelector('.highscore').textContent = score));

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Troppo alto!' : '📉 Troppo basso!';
      displayMessage(
        guess > secretNumber ? '📈 Troppo alto!' : '📉 Troppo basso!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 Hai perso!';
      displayMessage('💥 Hai perso!');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.guess').style.display = 'none';
      document.querySelector('.check').style.display = 'none';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  //   // when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📈 Troppo alto!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤐 Hai perso!';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.guess').style.display = 'none';
  //     document.querySelector('.check').style.display = 'none';
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = '📉 Troppo basso!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '🤐 Hai perso!';
  //     document.querySelector('body').style.backgroundColor = 'red';
  //     document.querySelector('.guess').style.display = 'none';
  //     document.querySelector('.check').style.display = 'none';
  //   }
  // }
  // document.querySelector('.again').addEventListener('click', function () {
  //   window.location.reload();
  // });

  document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Inizia a indovinare...';
    displayMessage('Inizia a indovinare...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // modifiche estetiche
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').style.display = '';
    document.querySelector('.check').style.display = '';
  });
});

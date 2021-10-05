const correctAnswers = ["2", "3", "4"]; 
const form = document.querySelector('.quiz'); 
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0; 
  const userAnswers = 
  [
    form.q1.value, form.q2.value, form.q3.value
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]) {
      score += 100;
    }
  }) 
  console.log(score);
  result.classList.remove('d-none'); 
  result.querySelector('span').innerHTML = score;
  } 

); 
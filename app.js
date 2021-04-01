const correctAnswers = ["B", "D", "B", "C", "A", "D", "D", "A", "A", "D"];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const response = document.querySelector('.response');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    const formAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value,
    form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value,];

    // Comparing answers and changing the score
    formAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 10;
        }
    });

    // Results 
    scrollTo(0,0);
    result.classList.remove('d-none')

    let output = 0; 
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer); 
        } else {
            output++; 
        }
    }, 10); 

// Result Encoragement
    if (score >= 80) {
        result.querySelector('.great').textContent = `You've got a green thumb!`
    } else {
        result.querySelector('.great').textContent = `Don't worry, with a little bit of learning you will be an expert!`
    }

});
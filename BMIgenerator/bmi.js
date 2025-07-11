const form=document.querySelector('form');
form.addEventListener('submit',function(r){
  r.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
   let message = '';

    if (bmi < 18.5) {
      message = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = 'Overweight';
    } else {
      message = 'Obese';
    }

    results.innerHTML = `<span>Your BMI is ${bmi} (${message})</span>`;
  }
   
},false);

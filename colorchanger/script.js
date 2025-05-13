const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the computed background color from the clicked button
    const bgColor = window.getComputedStyle(e.target).backgroundColor;

    // Apply that color to the body
    body.style.backgroundColor = bgColor;
  });
});





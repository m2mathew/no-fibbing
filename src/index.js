document.addEventListener('DOMContentLoaded', () => {
  // document ready
  const attempts = [];
  let count = 0;

  // Get elements needed
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const list = document.querySelector('ul');

  // Add event listeners
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit button clicked');


    
    // Add value to attempts list
    attempts.push({ value: input.value });


    input.value = '';
    console.log('attemps', attempts);

    // Add to list in the DOM
    list.innerHTML += attempts[count]
    count += 1;
  });

  console.log('attemps', attempts);

});

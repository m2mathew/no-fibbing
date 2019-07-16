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
    const currentValue = parseInt(input.value);

    const result = fibChecker(currentValue)
    
    // Add value to attempts list
    attempts.push({
      result,
      value: currentValue,
    });

    input.value = '';
    console.log('attemps', attempts);

    // Add to list in the DOM
    list.innerHTML += `<li>${attempts[count].value} — ${attempts[count].result}</li>`;
    count += 1;
  });

});

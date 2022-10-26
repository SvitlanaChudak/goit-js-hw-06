const textInput = document.querySelector('#validation-input');
textInput.addEventListener("blur", () => {
    if (textInput.value.length == textInput.getAttribute('data-length')) {
        console.log('Вірно')
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    } else {
        console.log('Не вірно')
        textInput.classList.add('invalid')
        textInput.classList.remove('valid');
    }
  });
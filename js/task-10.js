function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input')
const btnCreateEl = document.querySelector('[data-create]')
const btnDestroyEl = document.querySelector('[data-destroy]')
const boxesList = document.querySelector('#boxes')
btnCreateEl.addEventListener('click', () => {
//   console.log('click'); console.log(inputEl.value)
  const boxesArray = []
  for (let i = 1; i <= Number(inputEl.value); i += 1){
    const box = document.createElement('div')
    box.style.width = `${i*10+20}px`
    box.style.height = `${i*10+20}px`
    box.style.backgroundColor = getRandomHexColor()
    boxesArray.push(box)
  }
  boxesList.append(...boxesArray)
  inputEl.value = ''
})
btnDestroyEl.addEventListener('click', () => {
  boxesList.innerHTML= ''
})
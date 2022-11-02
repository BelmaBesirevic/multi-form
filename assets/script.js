const formItems = document.getElementsByClassName('form-item'),
  button = document.getElementsByClassName('btn'),
  steps = document.getElementsByClassName('step')

let currentFormItem = 0

formItems[currentFormItem].style.display = 'block'

if (currentFormItem == 0) {
  button[0].style.display = 'none'
  steps[0].style.backgroundColor = '#ef6593'
}

button[1].addEventListener('click', () => {
  currentFormItem++
  const prevFormItem = currentFormItem - 1
  if (currentFormItem > 0 && currentFormItem < 4) {
    button[0].style.display = 'inline-block'
    formItems[currentFormItem].style.display = 'block'
    formItems[prevFormItem].style.display = 'none'
    steps[currentFormItem].style.backgroundColor = '#ef6593'
    if (currentFormItem == 3) {
      button[1].innerHTML = 'Submit'
    }
  } else {
    if (currentFormItem > 3) {
      // validate Form
      alert('Form submitted successfully')
    }
  }
})

// prev button
button[0].addEventListener('click', () => {
  if (currentFormItem > 0) {
    currentFormItem--
    const nextFormItem = currentFormItem + 1
    formItems[currentFormItem].style.display = 'block'
    formItems[nextFormItem].style.display = 'none'
    steps[nextFormItem].style.backgroundColor = '#bfbfbf'

    if (currentFormItem == 0) {
      button[0].style.display = 'none'
    }

    if (currentFormItem < 3) {
      button[1].innerHTML = 'Next'
    }
  }
})

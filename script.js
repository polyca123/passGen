document.getElementById('generate').addEventListener('click', event => {
  event.preventDefault()

  let length = prompt('choose between 8 - 128 character long')
    while (length < 8 || length > 128) {
      alert('Please enter correct amount')
      length = prompt('choose between 8 - 128 character long')
    }
  
  let lowercaseRes = confirm('lowercase?')
  let uppercaseRes = confirm('uppercase?')
  let numericRes = confirm('numeric?')
  let specialRes = confirm('special chracter?')
     
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numeric = '1234567890'
  const special = '!@#$%&*'

  let tempPass = ''

  let randomPass = ''

  if (lowercaseRes) {
    tempPass += lowercase
  }

  if (uppercaseRes) {
    tempPass += uppercase
  }

  if (numericRes) {
    tempPass += numeric
  }

  if (specialRes) {
    tempPass += special
  }

  for (let i = 0; i < length; i++) {
    randomPass += tempPass[Math.floor(Math.random() * tempPass.length)]
  }

  document.getElementById('password').textContent = randomPass

})
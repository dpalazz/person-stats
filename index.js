function updateHeading(event){
  event.preventDefault()
  const heading = document.querySelector('h1')
  const f = event.target
  const name = f.personName.value
  heading.textContent = name
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', updateHeading)

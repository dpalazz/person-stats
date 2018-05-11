function handleSubmit(event){
  event.preventDefault()
  const stats = document.querySelector('#stats')
  const f = event.target
  const name = f.personName.value
  stats.innerHTML = '<p>' + name + '</p>'
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)

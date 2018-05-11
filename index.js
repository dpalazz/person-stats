function handleSubmit(event){
  event.preventDefault()
  const stats = document.querySelector('#stats')
  const f = event.target
  const name = f.personName.value
  const age = f.age.value
  stats.innerHTML = `<p>${name}, age ${age}</p>`
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)

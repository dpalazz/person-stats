function handleSubmit(event){
  event.preventDefault()

  const f = event.target
  const name = f.personName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const p = document.createElement('p')
  p.textContent = `${name}, age ${age}, favorite color ${favoriteColor}`
  p.style.backgroundColor = favoriteColor

  const stats = document.querySelector('#stats')
  stats.appendChild(p)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)

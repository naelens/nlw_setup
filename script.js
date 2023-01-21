const form = document.querySelector('#form_habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button") 

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert('Dia já incluso')
    return
  }
  nlwSetup.addDay(today)
}

function save() {
  
}





/*const data = {
  run: ["01-01", "01-02"],
  water: ["01-04", "01-05"],
  food: ["01-01", "01-03"],
  read: ['01-03', '01-04']
}

nlwSetup.setData(data)
nlwSetup.load() */


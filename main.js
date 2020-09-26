const possibilities = []
const add = document.querySelector('.add')
const clean = document.querySelector('.clean')
const input = document.querySelector('input')
const show = document.querySelector('.showOptions')



const addText = (e) => {
    e.preventDefault();
    possibilities.push(input.value);
    alert(`Została dodana opcja ${input.value}`)
    input.value = "";
}

const cleanText = (e) =>{
    e.preventDefault();
    possibilities.length = 0;
    document.querySelector('h1').textContent = '';
}
const showAdvice = () => {
    const index = Math.floor(Math.random() * possibilities.length);
    console.log(index);
    document.querySelector('h1').textContent = possibilities[index];
}
const showOptions = () => {
    alert(possibilities.join('---'));
}


add.addEventListener('click', addText)
clean.addEventListener('click', cleanText)
document.querySelector('.showAdvice').addEventListener('click', showAdvice)
show.addEventListener('click', showOptions)
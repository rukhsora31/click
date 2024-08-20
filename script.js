// const btn = document.querySelector('#btn')
// console.log(btn);
// btn.onclick = () => {
//     alert('vi najali na knopku!')
// }


const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
const body = document.querySelector('body')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const box = document.querySelector('.box img')
const boxx = document.querySelector('.boxx img')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')


btn.onclick = () => {
    body.classList.add('red')
    body.classList.remove('blue')
}
btn2.onclick = () => {
    body.classList.add('blue')
    body.classList.remove('red')
}
btn3.onclick = () => {
    box.classList.add('open')
    box.classList.remove('close')
}
btn4.onclick = () => {
    box.classList.add('close')
    box.classList.remove('open')
}
btn5.onclick = () => {
    box.classList.add('anim')
}
btn6.onclick = () => {
    boxx.classList.add('open')
    box.classList.add('close')
}
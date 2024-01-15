// Start Forms
const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})

// overlay
let btnRegister = document.getElementById('Register')
let singupBtn = document.querySelector('.singup-btn')
let overlay = document.querySelector('.overlay')
let singUp = document.querySelector('.singup')
let container = document.querySelector('.container')
let closeBtn = document.querySelector('.closeBtn');
let overlay2 = document.querySelector('.overlay2')

btnRegister.addEventListener('click',()=>{
    overlay.style.display = 'block';
    singUp.style.display = 'block';
    overlay2.style.display = "block";
});
closeBtn.addEventListener('click',()=>{
    overlay.style.display = 'none';
    singUp.style.display = 'none';
    overlay2.style.display = "none";
})



// End Forms
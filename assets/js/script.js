const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const menuBar = document.querySelector('.links')
const links = document.querySelectorAll('.links a')

window.addEventListener('scroll', () => {
   document.querySelector('header').classList.toggle('show', scrollY > 48);
});

menuBtn.addEventListener('click', ()=>{
   menuBar.classList.add('show')
})

closeBtn.addEventListener('click', ()=>{
   menuBar.classList.remove('show')
})

links.forEach(link => {
   link.addEventListener('click', ()=>{
      menuBar.classList.remove('show')
   })
});
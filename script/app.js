// window.addEventListener('click', (e) => {
//   console.log(window.innerWidth);
// })

const toggleBtn = document.querySelector('.toggle-btn')
const navLinks = document.querySelector('.nav-links')
let mobileToggle = false

toggleBtn.addEventListener('click', () => {
  mobileToggle = !mobileToggle
  if (mobileToggle) {
    toggleBtn.innerHTML = `<i class="fa fa-times"></i>`
  } else {
    toggleBtn.innerHTML = `<i class="fa fa-bars"></i>`
  }
  navLinks.classList.toggle('mobile')
})
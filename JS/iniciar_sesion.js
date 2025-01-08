/* Navbar */
const imgmenu = document.querySelector(".img-navbar-izquierda");
const menuvertical = document.querySelector(".menu-vertical");

imgmenu.addEventListener("click", () => {
    menuvertical.classList.toggle("showhide")
});


/* Formulario */
document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.form-iniciar');
  
    formulario.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  });
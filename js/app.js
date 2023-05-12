//CODE TO DISPLAY THE BUTTON IN PC
const buttonRegister = document.getElementById("registrarse");
const options = document.getElementById("options");
const background = document.getElementById("background");
const buttonMobile = document.querySelector(".button-register-container");

options.style.display = "none";

buttonRegister.addEventListener("click", function (e) {
  e.preventDefault();
  if (options.style.display === "block") {
    options.style.display = "none";
    buttonRegister.style.backgroundColor = "#36bd00";
  } else {
    options.style.display = "block";
    buttonRegister.style.backgroundColor = "#41e600";
  }
});

background.addEventListener("click", (e) => {
  e.preventDefault();
  options.style.display = "none";
  buttonRegister.style.backgroundColor = "#36bd00";
});

//CODE TO DISPLAY THE BUTTON IN MOBILE
// Verificar si se trata de un dispositivo móvil al cargar la página
window.addEventListener("load", function () {
  if (isMobileDevice()) {
    buttonRegister.classList.remove("hidden");
  }
});

// Función para verificar si se trata de un dispositivo móvil
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

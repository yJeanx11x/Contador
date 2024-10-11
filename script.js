const numero = document.querySelector(".n1");

const setaMenos = document.querySelector(".seta-menos");
  setaMenos.addEventListener("click", () => {
    for (let i =1; i > 0; --i) {
      setInterval(() => {
        numero.innerHTML = `${--i}`;
     
      }, 1000);
    }
  });

const setaMais = document.querySelector(".seta-mais");
setaMais.addEventListener("click", () => {
  for (let i = 0; i < 1; i++) {
    setInterval(() => {
      numero.innerHTML = `${i++}`;
      setaMais.classList.add("verde");
    }, 1000);
  }
});

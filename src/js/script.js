let dado = document.querySelector('.dado')
let audio = document.querySelector("audio")

const lados = [
  'src/imagens/1.gif',
  'src/imagens/2.gif',
  'src/imagens/3.gif',
  'src/imagens/4.gif',
  'src/imagens/5.gif',
  'src/imagens/6.gif'
]

const lastPosition = lados.length - 1

const gerar = () => {
  dado.classList.add('animation')
  audio.play()
  
  setTimeout(() => {
    dado.classList.remove('animation')
  }, 800)

  setTimeout(() => {
    const aleatorio = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min
    const ladoAleatorio = () =>
      lados[aleatorio(0, lastPosition)]
    dado.setAttribute('src', ladoAleatorio())
  }, 300)
}

document.querySelector(".dado").addEventListener('click', gerar)
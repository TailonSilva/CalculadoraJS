const teclasNumero = [...document.querySelectorAll("[data-select='numero']")]
const teclasOperacao = [...document.querySelectorAll("[data-select='op']")]
const teclaResultado = document.querySelector("[data-select='res']")
const teclaApagar = document.querySelector("[data-select='apagar']")
const teclaCopiar = document.querySelector("[data-select='copiar']")
const teclaSeparador = document.querySelector("[data-select='separador']")
const tela = document.querySelector('#tela')
const teclaModulo = document.querySelector("[data-select='modulo']")
const teclaRaiz = document.querySelector("[data-select='raiz']")

let operador = false
let separador = false


teclasNumero.forEach((item, index, array) => {
    item.addEventListener('click',(evento) => {
        if(tela.innerHTML=="0") {
            tela.innerHTML = ""
        } 
        tela.innerHTML += evento.target.innerHTML
        operador = false
    })
})

teclaSeparador.addEventListener('click', (evento) => {
    if(!operador && !separador) {
        separador = true
        tela.innerHTML += evento.target.innerHTML
    }
})

teclasOperacao.forEach((item, index, array) => {
    item.addEventListener('click',(evento) => {
        if(!operador) {
            operador = true
            separador = false
            if(evento.target.innerHTML=='x') {
                tela.innerHTML +="*"
            } else {
                tela.innerHTML += evento.target.innerHTML
            }
        }
    })
})

teclaApagar.addEventListener('click', () => {
    tela.innerHTML = 0
    operador=false
    separador=false
})

teclaResultado.addEventListener('click' , (evento) => {
    operador=false
    separador=false
    const resultado = eval(tela.innerHTML)
    tela.innerHTML = resultado    
})

teclaCopiar.addEventListener('click' , (evento) => {
    navigator.clipboard.writeText(tela.innerHTML)
})

teclaRaiz.addEventListener('click', (evento) => {
    let n = tela.innerHTML
    let raiz = Math.sqrt(n)
    tela.innerHTML = raiz
})



var formulario = document.querySelector('form')
var botaoContinuar = document.querySelector('div.continuar a')
var todos = document.querySelectorAll('*')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    const formData = new FormData(this);
    let resposta;

    console.log(formData.classList);
    for (const [key, value] of formData) {
         console.log(key, value);
        if (key == 'alternativa') {
            resposta = value
        }
    }
// validacao // afirmativa correta ou errada 
    var alternativas = document.querySelectorAll('input[type="radio"]')
    alternativas.forEach(a => {
        a.parentElement.style.backgroundColor = 'white'
    });

    var marcado = document.querySelector('input[type="radio"]:checked')
    marcado.parentElement.style.borderRadius = '4px'
    
    if (resposta == 'true') {
        // alert('Acertou!!!')
        botaoContinuar.classList.remove('disabled')
        marcado.parentElement.style.backgroundColor = '#4ee44e'
    } else {
        // alert('Errou!!!')
        marcado.parentElement.style.backgroundColor = '#ff0000'
    }

})


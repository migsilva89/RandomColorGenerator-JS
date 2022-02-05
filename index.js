var colorPad = document.getElementById('colorpad')
var color = document.getElementById('color')

//FUNCAO PARA GERAR UMA COR ALEATORIA 
function getRandomColor() {
    var letters = `0123456789ABCDEF` // Variavel com as letras e numeros que irar gerar as cores
    var color = `#` // Var so com # para ser adicionados os mumeros 
    
    //For para incrementacao = GERAR NUMEROS ALEATORIOS E CONCATENALOS AO COLOR '#'
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)] //Match para gerar autos 
    }
    return color
}

function setColor() {
    colorPad.style.backgroundColor = getRandomColor()
    color.innerText = (getRandomColor())
    
}

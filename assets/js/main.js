const cores = [
    'tomato',
    'purple',
    'GreenYellow',
    'GoldenRod',
    'Aqua',
    'Green'
]

let senha = $('.tentativa_segredo');
let indexCores = 0;
let index = 0;

senha.click(()=>{
    senha.forEach(() => {
        senha[index].css('background',cores[0])
        index++;
    });
})
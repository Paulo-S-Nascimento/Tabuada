// Vou ultilizar o prefixo ''PS'' essa é minha assisnatura. (Paulo Sergio)

var psNumbers = document.querySelectorAll ('.numbers div');
var psOperations = document.querySelectorAll ('.operations div');
var psConfirmBtn = document.getElementById ('go');
var psClearBtn = document.getElementById ('clear');
var psResult = document.getElementById ('result');

let psSelectedNum = null;
let psSelectedOp = null;

// Seleciona os numeros. 
psNumbers.forEach (psNumber => {
    psNumber.addEventListener ('click', () => {
        psNumbers.forEach (psNum => psNum.classList.remove ('selected'));
        psNumber.classList.add ('selected');
        psSelectedNum = psNumber.id; 
    });   
});

// Seleciona as operações.
 psOperations.forEach (psOperation => { 
    psOperation.addEventListener ('click' , () => {
        psOperations.forEach (psOs => psOs.classList.remove ('selected'))
        psOperation.classList.add ('selected');
        psSelectedOp = psOperation.textContent;
 });
});

// Botão Confirmar 
 psConfirmBtn.addEventListener('click' , () => {
     
    psConfirmBtn.classList.add('Selected');
    setTimeout(() => {
        psConfirmBtn.classList.remove('Selected');
    }, 50);  

    if (psSelectedNum && psSelectedOp) {
        const psTabuada = calcularTabuada(parseInt(psSelectedNum), psSelectedOp);
        psResult.innerHTML = psTabuada;}
    
     else {
         alert ('Por favor, selecione um número e uma operação!');
     }
    })

// Botão Limpar
psClearBtn.addEventListener ('click' , () => {

   psClearBtn.classList.add('Selected');
    setTimeout(() => {
        psClearBtn.classList.remove('Selected');
    }, 50);  

    psNumbers.forEach (psNum => {
        psNum.classList.remove ('selected');
        psSelectedNum = null;
    });

    psOperations.forEach (psOp  => {
        psOp.classList.remove ('selected');
        psSelectedOp = null;
});
    psResult.textContent = 'Tabuada aqui';
});

// Função para calcular 

function calcularTabuada(numero, operador) {
     let tabuada = '';
      for (let i = 1; i <= 10; i++) {
        let psResultado = '';
        switch (operador) {
            case '+':
                psResultado = numero + i;
                break;
            case '-':
                psResultado = numero - i;
                break;
            case '*':
                psResultado = numero * i;
                break;
            case '/':
                psResultado = (i !== 0) ? numero / i : '∞';
                break;  
            default:
                psResultado = 'Operador inválido';
            }
            tabuada += `${numero} ${operador} ${i} = ${psResultado}<br> <hr>`;
}
    return tabuada;
 };

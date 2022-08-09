const num = Number(prompt('Deposite aqui seu número da sorte'));

if(num % 2 === 0){
    if (num % 3 === 0){
15
        console.log('seu número da sorte é divisível por 3')

    }else{
        console.log('seu número da sorte não é divisível por 3')
    }
    console.log('seu número da sorte é divisível por 2')

}else{
    console.log('seu número da sorte é não divisível por 2')
}
    


/*if (num%2===0){
    console.log ('seu número da sorte é divisível por 2')
} if (num%3===0) {
    console.log ('seu número da sorte é divisível por 3')
} else {
    console.log ('seu número da sorte não é divisível por 2 nem por 3')
}; */
// não consegui fechar essa parte do exercício, não vejo como fazer.
//para fazer esse programa eu usaria else if

/*
if (num%2===0){
    console.log('seu número da sorte é divisível por 2')
} else if (num%3===0){
    console.log('seu número da sorte é divisível por 3')
} else {
    console.log ('seu número da sorte não é divisível por 2 nem por 3')
} */


if (num%2===0 || num%3===0) {
    console.log('seu número da sorte é divisível por 2 ou por 3')
} else {
    console.log ('seu número da sorte não é divisível por 2 nem por 3')
};

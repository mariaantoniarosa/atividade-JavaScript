function validadora() {
    var escolha = document.validador.escolher.value;

    switch (escolha) {
        case "suco":
            alert("Escolha perfeita!");
            return false;
            break;

        case "refrigerante":
            alert("Infelizmente esse produto esgotou!");
            return false;
            break;

        case "sorvete":
            alert("Ótima escolha!");
            return false;
            break;

        case "":
            alert("Escolha algum produto do catálogo");
            return false;
            break;



    }
    return true;
}
function calcularSub() {

    var numero1 = parseInt(document.validador2.numero1.value);
    var numero2 = parseInt(document.validador2.numero2.value);
    var resultado = numero1 - numero2;
    document.getElementById("resultado").value = resultado;


    return resultado;

}

function calcularDiv() {

    var numero1 = parseInt(document.validador3.numero1.value);
    var numero2 = parseInt(document.validador3.numero2.value);

    if (document.validador3.numero2.value == 0) {
        alert("Não foi possivel dividir por 0");



    } else {
        var resultado2 = numero1 / numero2;
        document.getElementById("resultado2").value = resultado2;



        return resultado2;
    }
}

function contando() {
    elemento = document.getElementById("numeros")

    elemento.value = parseInt(1);

    //arrow function
    setInterval(() => {
        valor = parseInt(elemento.value);
        if (valor < 1000) {
            elemento.value = parseInt(valor + 1);
        }
    }, 100);


}


function objetos() {

    var endereço = {
        cidade: 'Joinville',
        estado: 'sc',
        bairro: 'centro',
        rua: 'rua dos pinheiros',
        numeroRua: "123"

    };

    console.log("O usuário mora em " + (endereço.cidade) + " / " + (endereço.estado) + ", no bairro " + (endereço.bairro) + ", na " + (endereço.rua) + " nº " + (endereço.numeroRua));
    alert("O usuário mora em " + (endereço.cidade) + " / " + (endereço.estado) + ", no bairro " + (endereço.bairro) + ", na " + (endereço.rua) + " nº " + (endereço.numeroRua));

}

function constante() {
    const flor = "lis"

    console.log("O nome da musica é flor de " + flor);
    alert("O nome da musica é flor de " + flor);
}

function calcularNota() {

    var numero1 = parseInt(document.validador4.numero1.value);
    var numero2 = parseInt(document.validador4.numero2.value);

    if ((document.validador4.numero2.value < 0) || (document.validador4.numero1.value < 0)) {
        alert("Não foi possivel reconhecer sua nota!");

    }else if ((document.validador4.numero2.value>10) || (document.validador4.numero1.value>10)) { 
        alert("Não foi possivel reconhecer sua nota!");
    
    }else {
        var resultado2 = (numero1 + numero2) / 2;
        document.getElementById("resultado2").value = resultado2;


    }
    if (resultado2 < 5) {
        alert("Aluno reprovado, estude mais, resultado: "+ resultado2);

    } else if ((resultado2 >5) && (resultado2<7)){
        alert("Aluno em recuperação , resultado: "+ resultado2);
    }else if (resultado2>7) {
        alert("Parabéns, aprovado! resultado: "+ resultado2);
    }

}

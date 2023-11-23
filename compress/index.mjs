

const GenerateTableASI = () => {
    // Letras maiúsculas
    let letrasMaiusculas = [];
    for (let i = 65; i <= 90; i++) {
        letrasMaiusculas.push(String.fromCharCode(i));
    }

    // Letras minúsculas
    let letrasMinusculas = [];
    for (let i = 97; i <= 122; i++) {
        letrasMinusculas.push(String.fromCharCode(i));
    }

    // Números
    let numeros = [];
    for (let i = 48; i <= 57; i++) {
        numeros.push(String.fromCharCode(i));
    }

    // Caracteres especiais
    let caracteresEspeciais = [];
    for (let i = 32; i <= 47; i++) {
        caracteresEspeciais.push(String.fromCharCode(i));
    }
    for (let i = 58; i <= 64; i++) {
        caracteresEspeciais.push(String.fromCharCode(i));
    }
    for (let i = 91; i <= 96; i++) {
        caracteresEspeciais.push(String.fromCharCode(i));
    }
    for (let i = 123; i <= 126; i++) {
        caracteresEspeciais.push(String.fromCharCode(i));
    }

    // Array completo
    let arrayCompleto = letrasMaiusculas.concat(letrasMinusculas, numeros, caracteresEspeciais);

    return arrayCompleto;

}

export {GenerateTableASI};
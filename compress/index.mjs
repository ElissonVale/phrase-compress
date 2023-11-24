import {Decimal} from 'decimal.js'

const GenerateTableASI = () => 
{
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

const ConvertToByteHash = (stringText) => 
{
    let byteHash = "";
    let arrayText = Array.from(stringText);
    let arrayByteHash = GenerateTableASI();

    arrayText.forEach(letter => {
        if(arrayByteHash.indexOf(letter) < 10)
            byteHash += `0${arrayByteHash.indexOf(letter)}`;
        else
            byteHash += `${arrayByteHash.indexOf(letter)}`;
    });

    return byteHash;
}

const ConvertByteHashToText = (stringHash) => 
{
    let stringText = "";
    let arrayHash = [];
    let arrayByteHash = GenerateTableASI();

    for (let i = 0; i < stringHash.length; i += 2) {
        let par = stringHash.substr(i, 2);
        arrayHash.push(par);
    }

    console.log(arrayHash)

    arrayHash.forEach(byte => {
        stringText += arrayByteHash[parseInt(byte)];
    });

    return stringText;
}

const CompressText = (text) => {
    const command = {
        base: 1, 
        sort: 101, 
        decimal: null, 
        counter: 0, 
        maxCounter: 99, 
        found: false
    };

    while(!command.found && command.counter <= command.maxCounter) 
    {
        command.counter += 1;

        console.log(`searching: ${command.counter} -- sort: ${command.sort}`);

        command.decimal = new Decimal(command.base).dividedBy(command.sort);

        command.found = command.decimal.toString().includes(text);

        command.sort += 3.2;
    }

    if(command.found)
        console.log(`found in: ${command.decimal}`);
    else
        console.log("not found");
}

export {GenerateTableASI, ConvertToByteHash, ConvertByteHashToText, CompressText}
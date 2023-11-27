
import Decimal from "decimal.js";

Decimal.set({ precision: 9999999 });

const isPerodic = (decimal) => {

    const response = { success: false, periodicPart: null };
     // Converte o número para uma string
     const decimalStr = decimal.toString();

     // Encontra a posição do ponto decimal
     const decimalPointIndex = decimalStr.indexOf('.');
 
     // Verifica se há uma parte decimal
     if (decimalPointIndex !== -1) {
         // Obtém a parte decimal
         const decimalPart = decimalStr.substring(decimalPointIndex + 1);
 
         for(let i = 2; i <= 6; i++) {
            let periodic = decimalPart.substr(0, i);
            let periodicFiltered = decimalPart.replaceAll(periodic, "");
            if(periodicFiltered === "") {
                response.periodicPart = periodic;
                response.success = true;
                break;
            }
        }
     }

     console.log(response);

     return response;
}

const getPeriodicMap = (decimal) => {

    let long = new Decimal(decimal);

    let response  = { result: null, den: 0, map: null };

    for(let i = 1.1; i <= 100; i += 0.1) {
        response.den = parseFloat(i.toFixed(2));
           
        response.result = new Decimal(i.toFixed(2)).dividedBy(long);

        response.map = isPerodic(response.result);

        if(response.map.success) {
            
            break;
        }
    }

    return response;
}

export {isPerodic, getPeriodicMap};
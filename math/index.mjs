
import Decimal from "decimal.js";

Decimal.set({ precision: 99999 });

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

    //  console.log(response);

     return response;
}

const getPeriodicMap = (decimal) => {

    let long = new Decimal(decimal);

    let response  = { result: null, den: 0, map: null };

    for(let i = 1.01; i <= 500; i += 0.01) {
        response.den = new Decimal(parseFloat(i.toFixed(2)));
           
        response.result = long.times(100).dividedBy(response.den); //new Decimal(response.den).times(long);

        console.log("\n");
        console.log(response.result);

        response.map = isPerodic(response.result);

        if(response.map.success) {
            
            console.log(response.map);

            break;
        }
    }

    return response;
}

export {isPerodic, getPeriodicMap};
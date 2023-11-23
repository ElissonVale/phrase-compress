import { GenerateTableASI } from "../compress/index.mjs";

const GenerateDictionary = () => {

    let dictionary = {};
    const tableASI = GenerateTableASI();
    
    for(let i = 0; i <= tableASI.length; i++) {
        if(i < 10) {
            dictionary[`0${i}`] = tableASI[i];
        } else {
            dictionary[`${i}`] = tableASI[i];
        } 
    }

    console.log(dictionary);
    return dictionary;
}

export {GenerateDictionary};
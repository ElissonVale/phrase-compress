
const GetBytes = (string) => {
    let bytes = [];
    for (let i = 0; i < string.length; i++) {
        let charCode = string.charCodeAt(i);
        let byte = charCode & 0xFF; // Pega o byte menos significativo
        bytes.push(byte);
    }
    return bytes;
}

const GetString = (bytes) => {
    return String.fromCharCode.apply(null, bytes);
}

export {GetBytes, GetString}
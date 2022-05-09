
const pangram = (str) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let strLower = str.toLowerCase();
    let strArr = strLower.split('');
    let alphabetArr = alphabet.split('');   
    let result = [];
    for (let i = 0; i < alphabetArr.length; i++) {
        if (strArr.includes(alphabetArr[i])) {
            result.push(alphabetArr[i]);
        }
    }
    if (result.length === 26) {
        return 1;
    } else {
        return 0;
    }

}


console.log(pangram('The quick brown fox jumps over the lazy dog'));
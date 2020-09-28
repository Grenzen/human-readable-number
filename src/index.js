module.exports = function toReadable (number) {
    let N = [
        ['hundred'], 
        ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    ];
    let resultString = '';
    let period = null;

    if (number === 0) {
        return N[1][0];
    } else {
        if (Math.trunc(number / 100) >= 1) {
            period = Math.trunc(number/100);
            resultString += `${N[1][period]} ${N[0][0]} `;
            number = number - (period * 100);
        };
        if (Math.trunc(number / 10) > 1 || number / 10 === 1) {
            period = Math.trunc(number / 10);
            resultString += `${N[3][period]} `;
            number = number - (period * 10);
        } else if (number > 10 && number < 20) {
            resultString += `${N[2][number % 10]}`;
            number = number - number;
        };
        if (number < 10 && number > 0) {
            resultString += `${N[1][number]}`;
            number = number - number;
        };
        if (number === 0) {
            return resultString.trim();
        };
    };
}

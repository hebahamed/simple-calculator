const isNotNumber = e => {
    let tryNumber = Number(e);
    return Number.isNaN(tryNumber);
};

const isNumber = e => {
    let tryNumber = Number(e);
    return !Number.isNaN(tryNumber);
}
const cleanDashes = e => e.startsWith('--')?  e.substring(2) : e;


module.exports = {
    cleanDashes,
    isNotNumber,
    isNumber
}
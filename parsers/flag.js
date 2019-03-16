const {isNumber, isNotNumber, cleanDashes} = require('./../helpers');
module.exports = (argv) => {


    const params = argv.slice(2);
    debugger;
    const [operation] = params.filter(isNotNumber).map(cleanDashes);
    const operands = params.filter(isNumber).map(Number);
        return({
            operation,
            operands,
        })
       

   
        
}
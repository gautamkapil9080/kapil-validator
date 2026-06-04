
function isIndianPhone(number){

    if(
        number.length === 10 &&
        !isNaN(number) &&
        ['6','7','8','9'].includes(number[0])
    ){
        return true;
    }
    else{
        return false;
    }

}

module.exports = isIndianPhone;
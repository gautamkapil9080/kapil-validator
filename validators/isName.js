function isName(name){

    if(!isNaN(name)){
        return false;
    }

    if(name.length < 2){
        return false;
    }

    return true;

}

module.exports = isName;
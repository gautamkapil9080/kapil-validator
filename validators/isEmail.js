
function isEmail(email){

    if(email.includes('@') && email.includes('.')){
        return true;
    }
    else{
        return false;
    }

}
module.exports=isEmail;
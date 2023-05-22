function checkUsernames(array) {
    const validUsername = /^[a-z]{5, 20}$/g;
    for (let i = 0; i < array.length; i++) {
      
       console.log(validUsername.test(array[i])); 
       if (!validUsername.test(array[i])) {
        return false; 
       
    }
}
    
    
return true;
}



module.exports = checkUsernames;

const PASSWORD_REGEX = `/^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))$/gm`;

const isStrongPassword = (password) => {
    if(password.length <= 5){
        return false;
    }

    if(PASSWORD_REGEX.test(password)){
        return true;
    }
    return false;
}

console.log(isStrongPassword('Ritesh'))
console.log(isStrongPassword('Ritesh1'))
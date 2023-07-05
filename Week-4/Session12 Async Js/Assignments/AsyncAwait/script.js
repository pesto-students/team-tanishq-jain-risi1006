const getExchangeRate = async(countryCode) => {
    try{
        let apiRes = await (await fetch('https://api.exchangerate.host/latest')).json();
        if(apiRes?.rates[countryCode]){
            return apiRes?.rates[countryCode];
        } else {
            return null;
        }
    } catch(err){
        console.log(err);
    }
}

let indianExchangeRate = getExchangeRate('INR');
console.log(indianExchangeRate)

let wrongExchangeRate = getExchangeRate('INR!!');
console.log(wrongExchangeRate)
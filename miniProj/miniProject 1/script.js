const API_ENDPOINT = 'https://api.openai.com/v1/images/generations';
const ACCESS_KEY = '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';

const input = document.getElementById('input-field');
const image = document.querySelector('#image');
const button = document.getElementById('submit');
console.log(input, image, button)
const generateImage = async(text) => {
    let options = {
        method:'POST',
        header:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ACCESS_KEY}`
        },
       body: JSON.stringify({
        "prompt": text,
        "n": 1,
        "size": "1024x1024"
      })
    };

    let data = await (await fetch(API_ENDPOINT, options)).json();
    return data;
}

button.addEventListener('click', ()=>{
    let text = input?.value;    
    const res = generateImage(text);
    const uriData = res.data[0].uri;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const imageElem = document.createElement('img');
    imageElem.setAttribute(src, uriData);

    imageContainer.append(imageElem);
    image.append(imageContainer);
})
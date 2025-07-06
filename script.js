const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text');
const goBtn = document.querySelector('#go-btn');
const copyBtn = document.querySelector('#copy-btn');

goBtn.addEventListener('click', () => {
    if(inputText.value !== ''){
        outputText.value = processLink(inputText.value);
    }
    console.log('go button pressed');
});

copyBtn.addEventListener('click', () => {
    if(outputText.value !== ''){
        navigator.clipboard.writeText(outputText.value);
    }
});

function processLink(url) {
    let regex;
    let match;
    let id;

    if(url.includes('photo')){
        regex = /fbid=([0-9]+)/g;
        match = regex.exec(url);

        id = match[1];
        console.log(id);
        return 'https://www.facebook.com/' + id;
    }else if(url.includes('post')){
        regex = /pfbid[0-z]+/g;
        match = regex.exec(url);

        id = match[0];
        regex = /\/\?([a-zA-Z0-9_.]+)/g;
        match = regex.exec(url);

        let username = match[1];

        return 'https://www.facebook.com/' + username + '/posts/' + id;
    }
}
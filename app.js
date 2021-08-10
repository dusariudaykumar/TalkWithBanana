// var btn = document.querySelector("#btn");
// var txtInput = document.querySelector("#text-area");
// var divOutput = document.querySelector("#output");

// var serverUrl = "https://api.funtranslations.com/translate/valyrian.json";
// // var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

// function getTranslateURL(txtInput){
//     return serverUrl+"?"+"text="+txtInput;
// }

// function errorHandler(error){
//     console.log("something went wrong",error)
//     alert('something went wrong in sever')
// }

// function clickHandler(){
//     var inputText = txtInput.value;
//     fetch(getTranslateURL(inputText))
//         .then(response => response.json())
//         .then(json => {
//             var translatedText = json.contents.translated;
//             divOutput.innerText = translatedText;
//             })
//         .catch(errorHandler)
// };

// btn.addEventListener("click",clickHandler);





var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occurred", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // output
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)

























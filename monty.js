// function makeRequest (GET, url="https://thatsthespir.it/api", oki){
//     return new Promise(function(resolve, reject) {
//         let xhr = new XMLHttpRequest();
//         xhr.open(GET, url="https://thatsthespir.it/api");
//         xhr.onload = function () {
//             if (this.status >= 200 && this.status < 300) {
//                 resolve(xhr.response);
//             } else {
//                 reject({
//                     status: this.status,
//                     statusText:xhr.statusText
//                 });
//             }
//         };
//         xhr.onerror = function () {
//             reject ({
//                 status: this.status,
//                 statusText: xhr.statusText
//             });
//         };
//         if (method == GET && oki){
//             xhr.send(oki);
//         } else {
//             xhr.send("bad luck");
//         }
//     });
// }

// let quote = document.getElementById("quote");
// let run = document.getElementById("run");

// run.addEventListener('click', function(){
//     quote.innerHTML = xhr;
// })


// TAKE 2
function loadDoc() {
    let xdp = new XMLHttpRequest();
    let photo = document.getElementById("photo");
    let x = document.createElement("blockquote", id = "quote");
    xdp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("quote").innerHTML = JSON.parse(this.response).quote;
            photo.innerHTML = JSON.parse(this.response).photo;
        }
    };
    xdp.open("GET", "https://thatsthespir.it/api", true);
    xdp.send();
}


// TAKE 3
// let xhr = new XMLHttpRequest();

// xhr.onload = function () { // this function will be called when response has finished 
//     const quote = document.getElementById("quote");
//     quote.innerHTML = this.responseText;
// };

// xhr.open("POST", "https://thatsthespir.it/api");
// // set a request 
// xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhr.send("name");
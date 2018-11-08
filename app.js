//Create the XHR Object
let httpreq = new XMLHttpRequest;
let block = document.querySelector("#quote")
    //Call the open function, GET-type of request, url, true-asynchronous
httpreq.open('GET', 'https://thatsthespir.it/api', true)
    //call the onload 
httpreq.onload = function() {
        //check if the status is 200(means everything is okay)
        if (this.status === 200) {
            //return server response as an object with JSON.parse
            console.log("200");

            let response = JSON.parse(this.responseText);

            block.innerHTML = response.quote;

            if (response.photo == "") {
                block.className = `nopic`

            }

            //image background
            // block.style.backgroundImage = `url(${response.photo})`;
            document.body.style.backgroundImage = `url(${response.photo})`;



            let auth = document.createElement("h3");
            block.appendChild(auth);
            auth.innerText = response.author;





            console.log(JSON.parse(this.responseText));



        } else {
            console.log("error");
            block.innerText = "Sorry we couldn't reach the server";
        }
    }
    //call send
setInterval(httpreq.send, 1000);
//Common Types of HTTP Statuses
// 200: OK
// 404: ERROR
// 403: FORBIDDEN

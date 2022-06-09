const url = "https://api.giphy.com/v1/gifs/search";
let urlCompleta = "";
let busqueda = "?q=";
const key= "&api_key=qKGfiXPLx5J51aRKUuiAPfCFqm5Br4nZ";
let q = "";
let limite = "&limit=";
let limit="";


const buton = document.getElementById("btn");
btn.onclick = () =>{
    document.getElementById("portfolio").innerHTML="";
    q = document.getElementById("busqueda").value;
    limit = document.getElementById("inputState").value;
    urlCompleta = url + busqueda + q + key + limite + limit;
    getData();
}

const getData= async ()=>{
    await fetch(urlCompleta).then((response)=>{
        return response.json();
    }).then((giphy)=>{
        console.log(giphy);
        for(let i = 0; i < giphy.data.length; i++){
            const gif = document.createElement('img');
            gif.src=giphy.data[i].images["downsized_medium"].url;
            gif.className="mb-2"
            
            document.getElementById("portfolio").appendChild(gif)
        }
    })
}
getData();


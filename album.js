

let id;
let i;
function start(){

    let myalbum=JSON.parse(localStorage.getItem("images"))
    let container=document.getElementById("container");
    container.innerHTML=null;
    let i=0;

    let img=document.createElement("img");
    img.src=myalbum[0];
    container.append(img)
    i++;
    
    id=setInterval(function(){
    
        if(i==3){
            i=0;
        }
            img.src=myalbum[i];
            container.append(img)
            i++
        

    },3000)
}

function stop(){
    clearInterval(id);
}
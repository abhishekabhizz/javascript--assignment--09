const button=document.querySelector("#button")
button.addEventListener("click",()=>{
    if(button.innerHTML==="DARK"){
        document.body.style.backgroundColor="black"
        button.innerHTML="light"
        document.body.style.color="white"
    }
    else{
        
document.body.style.backgroundColor="white"
button.innerHTML="DARK"
document.body.style.color="black"

    }
    })


    

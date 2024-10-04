let input = document.getElementById("in");
let print = document.getElementById("print");

function send(){
    
    if(input.value ==""){ 
        alert("enter something");
        return 0;
    } 
    let send = {
        data:`${input.value}`
    };
    async function back(){
        await axios.post(`http://192.168.212.43:3000/`,send).then().catch(err=>{
            document.getElementById("h2").innerHTML=`404`;
        });
    }
    back(send);
    input.value="";
}

print.onclick=()=>{
    document.getElementById("h2").innerHTML=`Console.log()`;
    send();
}
input.onclick=()=>{
    document.getElementById("h2").innerHTML=`Console.log()`;
       
}
document.addEventListener('keydown', (event)=>{
    if (event.key === 'Enter') {
        document.getElementById("h2").innerHTML=`Console.log()`;
         send();
    }
});
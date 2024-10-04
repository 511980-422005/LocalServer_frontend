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
        await axios.post(`http://192.168.212.43:3000/`,send).then(()=>{
           
        });
    }
    back(send);
    input.value="";
}

print.onclick=()=>{
    send();
}

document.addEventListener('keydown', (event)=>{
    if (event.key === 'Enter') {
         send();
    }
});
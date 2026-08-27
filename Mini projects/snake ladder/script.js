let arr=[1,1,1,1]
function dice(i){
    let num=Math.floor(Math.random()*6)+1
    console.log(num)
    let p=document.querySelector(`#player${i}`)
    p.innerText=num
    
        if(arr[i]==23){
            arr[i]=39
            alert("ladder climed")
        }
        else if(arr[i]==50){
            arr[i]=68
            alert("ladder climed")
        }
        else if(arr[i]==61){
            arr[i]=79
            alert("ladder climed")
        }
        else if(arr[i]==65){
            arr[i]=85
            alert("ladder climed")
        }
        else if(arr[i]==75){
            arr[i]=96
            alert("ladder climed")
        }
        else if(arr[i]==99){
            arr[i]=41
            alert("Snake bite")
        }
        else if(arr[i]==71){
            arr[i]=52
            alert("Snake bite")
        }
        else if(arr[i]==74){
            arr[i]=46
            alert("Snake bite")
        }
        else if(arr[i]==57){
            arr[i]=37
            alert("Snake bite")
        }
        else if(arr[i]==34){
            arr[i]=29
            alert("Snake bite")
        }
        else if(arr[i]==27){
            arr[i]=15
            alert("Snake bite")
        }
        else if(arr[i]==21){
            arr[i]=2
            alert("Snake bite")
        }
        else{
            arr[i]+=num
            if(arr[i]>=100){
        par.innerHTML="Player "+i +" <h1>You win</h1>"
    }
    alert("Player "+(i+2)+ " chance")
        }
        
    render()
}

function render(){
let par=document.querySelector(".parent")
par.innerHTML=""
    for(let k=100;k>0;k--){
        
        let div=document.createElement("div")
        div.className="child"
        if(k==23 ||k==50||k==61||k==65||k==75){
            div.innerHTML="<img src=image.png width=30px height=30px>"
        }
        else if(k==99 ||k==71||k==74||k==57||k==34||k==27){
            div.innerHTML="<img src=snake.jpg width=30px height=30px>"
        }
        else{
            if(arr[0]==k){
            div.style.backgroundColor="red"
            div.innerText="P1"
            }
            else if(arr[1]==k){
            div.style.backgroundColor="green"
            div.innerText="P2"
            }
            else if(arr[2]==k){
            div.style.backgroundColor="blue"
            div.innerText="P3"
            }
            else if(arr[3]==k){
            div.style.backgroundColor="pink"
            div.innerText="P4"
            }
            else{
                div.innerText=k
            }
        }


            

        
    par.appendChild(div)
    }
}

render()
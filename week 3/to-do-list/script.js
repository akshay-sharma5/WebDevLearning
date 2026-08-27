var ctr=1
function deleteItem(index)
{
    let ele=document.getElementById(index)
    ele.parentNode.removeChild(ele)
}

function addItem()
{
    let list=document.querySelector(".main")
    let item=document.createElement("div")
    let val=document.querySelector("input").value
    item.setAttribute("id",ctr)
    item.innerHTML="<h4>"+val+"</h4><button onclick='deleteItem("+ctr+")'>Delete</button>"
    list.appendChild(item)
    ctr=ctr+1
}
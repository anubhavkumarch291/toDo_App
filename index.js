document.querySelector("form").addEventListener("submit",todo);
let count=0;
function todo(event){
    event.preventDefault();
    let work=document.querySelector("#task").value;
    let prior=document.querySelector("#prior").value;
    let bag=document.createElement("tr");
    let td1=document.createElement("td");
    if(work==""){
        alert("Please Enter The Task Name");
    }else{
        td1.innerText=work;
    }
    let td2=document.createElement("td");
   if(prior==""){
    alert("Please Select The Priority")
   }else{
    td2.innerText=prior;
   }
    if(prior=="High"){
        td2.style.backgroundColor="green";
    }else{
        td2.style.backgroundColor="red";
    }
    let td3=document.createElement("td");
    td3.innerText="Delete";
    td3.style.cursor="pointer";
    td3.addEventListener("click",function(event){
        event.target.parentNode.remove();
        count--;
        document.querySelector("#total").innerText=count;
    })
    bag.append(td1,td2,td3);
    document.querySelector("tbody").append(bag);
    count++;
    document.querySelector("#total").innerText=count;
}
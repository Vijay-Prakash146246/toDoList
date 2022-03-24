var completedToDoList=JSON.parse(localStorage.getItem("completedToDo"))||[];
//console.log(completedToDoList);
//var completedToDoData=JSON.parse(localStorage.getItem("completedToDoData"))||[];
completedToDoList.map(function(el){
     var tr=document.createElement("tr");
     var td1=document.createElement("td");
     td1.innerText=el.itemname;
     var td2=document.createElement("td");
     td2.innerText=el.itemquantity;
     var td3 = document.createElement("td");
     td3.innerText=el.itempriority;
     tr.append(td1,td2,td3);
     document.querySelector("#body").append(tr);

})
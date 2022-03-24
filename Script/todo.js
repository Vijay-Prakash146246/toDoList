var todoItems = JSON.parse(localStorage.getItem("todoData"));
 //console.log(todoItems);
 var completed=JSON.parse(localStorage.getItem("completedToDo"))||[];
todoItems.map(function(el,i,arr){
// console.log(el.name);
var tr = document.createElement("tr");
var td1 = document.createElement("td");
td1.innerText=el.itemname;
var td2=document.createElement("td");
td2.innerText=el.itemquantity;
var td3=document.createElement("td");
td3.innerText=el.itempriority;
var td4 = document.createElement("td");
td4.innerText="Completed.";
td4.style.color= "red";
td4.style.cursor="pointer";
td4.addEventListener("click",function(){
     markCompletedFunction(el);
})
tr.append(td1,td2,td3,td4);
document.querySelector("tbody").append(tr);
});
function markCompletedFunction(el)
{
    // console.log(el);
     completed.push(el);
     localStorage.setItem("completedToDo",JSON.stringify(completed));
}
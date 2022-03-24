document.querySelector("#form").addEventListener("submit",myFunction);
var todoArray= JSON.parse(localStorage.getItem("todoData"))||[];
function myFunction()
{
     event.preventDefault();
     //console.log("inside function");
     var name1 = document.querySelector("#name").value ;
     var quantity1=document.querySelector("#qty").value;
     var priority1 = document.querySelector("#priority").value;
     //console.log(name1,quantity1,priority1);

     var todoObj={
          itemname: name1,
          itemquantity: quantity1,
          itempriority: priority1,
     }
     //console.log(todoObj);
     todoArray.push(todoObj);
      //console.log(todoList);
     localStorage.setItem("todoData",JSON.stringify(todoArray));

}

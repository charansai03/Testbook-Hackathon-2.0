function onclick(){
    if(Input=text){
        document.getElementById(lists)innerHTML=text;
    }
}


















//document.querySelector('#push').onclick=function(){
    if(document.querySelector('#newtask input').Value.length==0){
        alert("kindly Enter task name!!!!")
    }
    else{
        document.querySelector('#tasks').innerHTML +=`${document.querySelector('#newtask input').value}`;
        var current_tasks =document.querySelectorAll(".delete");
        for(var i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick=function(){
                this.parentNode.removeChild();
            }
        }
    }
//}




//<h2>To Do List</h2>
//Read <input type="button" value="Delete">
//<br><br>
//Write <input type="button" value="Delete">
//<br><br>
//Speak <input type="button" value="Delete">





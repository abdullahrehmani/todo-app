
class Todo {

    constructor() {
        this.name = null;
        this.lllocation = null;
        this.description = null;


    }






}


var todo = JSON.parse(localStorage.getItem("todoData")) || [];




function datasubmit() {

    var todoobject = new Todo();
    todoobject.name = title.value;
    todoobject.lllocation = llocation.value;

    todoobject.description = description.value;
    todo.push(todoobject);

    localStorage.setItem("todoData", JSON.stringify(todo));


}
function itemdelet(index)
  {
     todo.splice(index,1);
    localStorage.setItem("todoData", JSON.stringify(todo));
    maps();
     

}

function maps() {
    var todo = JSON.parse(localStorage.getItem("todoData")) || [];
    display.innerHTML="";

    todo.map((item, index) => {
        display.innerHTML += `<table>
  <thead>
          <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Description</th>
    <th>option</th>     
    
          </tr>
        </thead>
        <tbody>
        <tr>
        <td><p>
        <label>
          <input type="checkbox" checked="checked" />
          <span>${item.name}</span>
        </label>
      </p></td>
      <td><p>
        <label>
          <input type="checkbox" checked="checked" />
          <span>${item.lllocation}</span>
        </label>
      </p></td>
      <td><p>
        <label>
          <input type="checkbox" checked="checked" />
          <span>${item.description}</span>
        </label>
      </p></td>
      <td><button class="waves-effect waves-light btn" onclick=itemdelet(${index})>Delete</button></td </tr>
    
        </tbody>



  
  </table>`

    });

}
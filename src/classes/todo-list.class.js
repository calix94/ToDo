export class TodoList{


    constructor(){

        this.todos=[];
    }



    nuevoTodo(todo){
        this.todos.push(todo);
    }

    eliminarTodo(id){
        // this.todos.pop(todo);
    }

    marcarCompletado(id){
        
    }

    eliminarCompletados(){
        
    }


}
import { addTodo, changeTodo, removeAllTodos} from "../ts/functions";
import { Todo } from "../ts/models/Todo";

describe("addTodo", () => {
    test("should add Todos", () => {
       //arrange
        let todo: Todo [] = [];

        //act
        addTodo("", todo);

        //assert
        expect(todo.length).toBe(1);  
    });
    test("should not add Todos", () => {
        //arrange
        let todo: Todo [] = [];
    
        //act
        addTodo("", todo);
    
        //assert
        expect(todo.length).toBe(0);
      });
})

describe("changeTodo", () => {
    test("should change Todos", () => {
        //arrange
        let todo = new Todo("", false);
        
        //act
        changeTodo(todo);

        //assert
        expect(todo.done).toBe(true);
    });
})

describe("removeAllTodos", () => {
    test ("should remove AllTodos",() => {
        //arrage
        let todos: Todo[] = [new Todo("", true), new Todo("", true)];
    
        //act 
        removeAllTodos(todos);
    
        //assert
        expect(todos.length).toBe(0);
    });
})


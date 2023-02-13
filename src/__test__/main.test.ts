  /**
 * @jest-enviroment jsdom
 */

  import * as main from "../ts/main";
  import { Todo } from "../ts/models/Todo";

  beforeEach(() => {
    document.body.innerHTML = "";
    jest.restoreAllMocks();
  });

  describe("createNewTodo", () => {
    test("should createNewTodo", () => {
        // arrange
        let todo = "test";
        let todos: Todo[] = [];
        let spyOnCreateHtml = jest.spyOn(main, "createHtml").mockReturnValue();

        // act
        main.createNewTodo(todo, todos);

        // assert
        expect(spyOnCreateHtml).toBeCalled();
    });

    test("should show error", () => {
        //arrange
        document.body.innerHTML = `<div id="error" class="error"></div>`;
        let todo = "";
        let todos: Todo[] = [];
        let spyOnDisplayError = jest.spyOn(main, "displayError").mockReturnValue();

        //act
        main.createNewTodo(todo, todos);

        //assert
        expect(spyOnDisplayError).toBeCalled();
    });
});

describe("removeAllTodos", () => {
  test("should call function clearTodos correctly", () => {
    //arrange
    let spyOnClearTodos = jest.spyOn(main, "clearTodos").mockReturnValue();
  
    //act
    main.clearTodos([]);
  
    //assert
    expect(spyOnClearTodos).toBeCalled();
  });
});

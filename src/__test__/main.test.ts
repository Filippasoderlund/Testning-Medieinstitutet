  /**
 * @jest-enviroment jsdom
 */

  import * as main from "../ts/main";
  import * as functions from "../ts/functions";
  import { Todo } from "../ts/models/Todo";

  beforeEach(() => {
    document.body.innerHTML = "";
  });


import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import testReducer from "../../features/testArea/testReducer";
import eventReducer from "../../features/event/eventReducer";
import modalReducer from "../../features/modal/modalReducer";

const rootReducers = combineReducers({
  form: formReducer,
  test: testReducer,
  events: eventReducer,
  modal: modalReducer
});

export default rootReducers;

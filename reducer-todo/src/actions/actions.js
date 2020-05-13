export const SET_INPUT = "SET_INPUT";
export const setInput = (newValue) => {
  return { type: SET_INPUT, payload: newValue };
};

export const ADD_TODO = "ADD_TODO";
export const addTodo = (newTask) => {
  return { type: ADD_TODO, payload: newTask };
};

export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const toggleComplete = (id) => {
  return { type: TOGGLE_COMPLETE, payload: id };
};

export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const clearCompleted = () => {
  return { type: CLEAR_COMPLETED };
};

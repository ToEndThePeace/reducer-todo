import { v4 as uuid } from "uuid";

const list = [
  { id: uuid(), name: "Dance", completed: false },
  { id: uuid(), name: "Sing", completed: false },
  { id: uuid(), name: "Laugh", completed: false },
  { id: uuid(), name: "Twerk", completed: true }
];

const initialState = {
  list: list,
  newValue: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INPUT":
      return {
        ...state,
        newValue: action.payload
      };
    case "ADD_TODO":
      return {
        ...state,
        newValue: "",
        list: [
          ...state.list,
          {
            id: uuid(),
            name: action.payload,
            completed: false
          }
        ]
      };
    case "TOGGLE_COMPLETE":
      return {
        ...state,
        list: state.list.map((item, index) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !state.list[index].completed
            };
          } else {
            return item;
          }
        })
      };
    case "CLEAR_COMPLETED":
      return {
        ...state,
        list: state.list.filter((item) => !item.completed)
      };
    default:
      return state;
  }
};

export default [reducer, initialState];

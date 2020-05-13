import { v4 as uuid } from "uuid";
import moment from "moment";

const list = [
  { id: uuid(), name: "Dance", completed: false, timestamp: null },
  { id: uuid(), name: "Sing", completed: false, timestamp: null },
  { id: uuid(), name: "Laugh", completed: false, timestamp: null }
];

const initialState = {
  list: list,
  newValue: ""
};

const reducer = (state = initialState, action) => {
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
              completed: !state.list[index].completed,
              timestamp: !state.list[index].completed
                ? moment().format("MM/DD/YY [at] hh:mm:ss")
                : null
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

export default reducer;

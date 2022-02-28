export interface IState {
  search: string,
}

type Action = {
  type: "SEARCH",
  payload: string,
}

export const searchTextReducer = (state: IState = { search: "" }, action: Action) => {
  switch (action.type) {
    case "SEARCH":
      console.log(action.payload);
      return { ...state, search: action.payload };
    default:
      return state;
  }
};
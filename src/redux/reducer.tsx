export const searchTextReducer = (state = '', action: any) => {
  let param = action.search;
  switch (action.type) {
    case 'SEARCH':
      console.log(param);
      return state + param;
    default:
      return state;
  }
};
// 1. must not return undefined
// 2. Must return data based on previous state and an action
// 3. Pure reducer: never reach out of the function to decide on the new value (no request, dom getter, read from file, anything)
// Only rely on previous state and the incoming action.

// 4. Don't mutate the first argument (actually you can
// , but watch out for a corner case, so you avoid re-rendering unnecessarily, or missing re-renders (if mutated old state and returned it))
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
  
    default:
      return state;
  }
}
export default (users = [], action) => {
  
  switch (action.type) {
    case 'FETCH_USER':
      console.log('reducer')
      return [...users, action.payload];
  
    default:
      return users;
  }
}
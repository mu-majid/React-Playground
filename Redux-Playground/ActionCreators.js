
// Action Creator (person dropping off a form)
export const createPolicy = (name, amount) => {
  // Action creatot return an Action
  return {
    type: 'CREATE_POLICY',
    payload: {
      name, amount
    }
  }
}

// Action Creator (person dropping off a form)
export const deletePolicy = (name, amount) => {
  // Action creatot return an Action
  return {
    type: 'DELETE_POLICY',
    payload: {
      name
    }
  }
}

// Action Creator (person dropping off a form)
export const createClaim = (name, amountToCollect) => {
  // Action creatot return an Action
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name, amountToCollect
    }
  }
}

'use strict'

//redux reducers both define the state and the interactions to the state
//add the function signature of a redux reducer. this is different from the Array.proto.reduce()
//function signature is fn name(prevState, action) => returns a new state
//an action is an object with two properties: (type, payload)
//it gets passed into a reducer, and the reducer can use the action to update the state
//we will never mutate the data in this function, so using something like initialState ++ is BAD
//when we define types we use snake case: INCREMENT_NUM
//default will always be return state, so that if it isn't entered, it doesn't set your state to undefined, which would cause it to no longer exist

const reducer = module.exports = (state = 0, action) => {
  let {type, payload} = action

  switch(type){
  case 'INCREMENT':
    console.log('things happened')
    console.log(state)
    return state + (payload ? payload : 1)
    // return state + payload || 1
  case 'DECREMENT':
    console.log('things happened 2')
    console.log(state)
    return state - (payload ? payload : 1)
    // return state - payload || 1
  default:
    console.log('things happened 3')
    console.log(state)
    return state
  }
}

// let state = reducer(undefined, {type: 'INCREMENT'})

console.log(reducer(undefined, {type: 'INCREMENT'}))

'use strict'

//categories will have:
//id
//title
//timestamp

let initialState = []
const reducer = (state = initialState, action) => {
  let {type, payload} = action
  switch(type){
  case 'CATEGORY_CREATE':
    return [...state, payload]
  case 'CATEGORY_UPDATE':
    return
  case 'CATEGORY_DELETE':

  default:
    return state
  }
}

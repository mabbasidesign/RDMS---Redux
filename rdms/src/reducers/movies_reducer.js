
// 1- Action returns object

// const action = {
//     type: "MOVIES_LIST",
//     payload:[
//         {id: '1', name: 'Pulp Fiction'},
//         {id: '2', name: 'True Lies'}
//     ]
// }

// 2- Reducer finds a match

const state = 0;

export default function(state ={}, action){
    switch(action.type){
        case "MOVIES_LIST":
            return {...state, movies:action.payload}
        break;
        default:
            return state;
    }
}

export function moviesList(){
    return{
        type: "MOVIES_LIST",
        payload:[
                    {id: '1', name: 'Pulp Fiction'},
                    {id: '2', name: 'True Lies'}
                ]
    }
}
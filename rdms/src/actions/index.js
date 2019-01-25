
export function moviesList(){
    return{
        type: "MOVIES_LIST",
        payload:[
            {id: '1', name: 'Pulp Fiction'},
            {id: '2', name: 'True Lies'}
        ]
    }
}

export function directorList(){
    return{
        type: "DIR_LIST",
        payload:[
            {id: '1', name: 'Mike Hofer'},
            {id: '2', name: 'Thomas Penchek'}
        ]
    }
}
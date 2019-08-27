
export const fetchTodos = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/todos',
        success: () => { console.log("success fetching!") },
        error: () => { console.log("fail fetching") }
    })
}

export const createTodo = (todo) => {
    return $.ajax({
        method: 'POST',
        url: 'api/todos',
        data: todo
        // success: () => { console.log("success creating todo!") },
        // error: () => { console.log("fail creating todo") }
    })
}
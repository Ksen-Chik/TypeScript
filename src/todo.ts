export class Todo {
    userId!: number
    id!: number
    title!: string
    completed!: boolean
}

export async function getTodosByCount(count: number): Promise<Todo[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=${count}`);
    const json = await response.json();
    
    json.forEach((todo: Todo) => Object.setPrototypeOf(todo, Todo.prototype));

    console.log(json);

    return json;
}
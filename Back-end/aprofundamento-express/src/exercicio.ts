
//exer2
export type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}


//exer3
export const todos: ToDo[] = [
    {
      userId: 1,
      id: 11,
      title: "primeiro title",
      completed: false
    },
    {
      userId: 2,
      id: 22,
      title: "segundo title",
      completed: true
    },
    {
      userId: 3,
      id: 33,
      title: "terceiro title",
      completed: false
    },
]
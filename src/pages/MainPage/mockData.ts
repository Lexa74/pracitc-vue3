export interface Task {
  id: number
  title: string
  description: string
  completed: boolean
}

export const taskList: Task[] = [
  {
    id: 1,
    title: 'Задача 1',
    description: 'Обязательно до 20.05.2024',
    completed: false
  },
  {
    id: 2,
    title: 'Задача 2',
    description: 'Необходимо выполнить до 20.05.2023',
    completed: false
  }
]

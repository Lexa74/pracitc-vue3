<script setup lang="ts">
import { ref } from 'vue'
import { taskList } from '@/pages/MainPage/mockData'
import AddTaskComponent from '@/pages/MainPage/components/AddTasksComponent/AddTaskComponent.vue'
import './mainPage.css'

const tasks = ref(taskList)
const dom = ref(null)

const onAddTask = (taskTitle: string) => {
  const newTask = {
    id: tasks.value.length + 1,
    title: taskTitle,
    completed: false,
    description: taskTitle
  }

  tasks.value = [...tasks.value, newTask]
}

const toggleCompleted = (id: number) => {
  const idx = tasks.value.findIndex((el) => el.id === id)
  const taskById = tasks.value[idx]

  tasks.value[idx] = { ...taskById, completed: !taskById.completed }
}

const onDelTask = (e: Event, id: number) => {
  e.stopPropagation()
  tasks.value = tasks.value.filter((el) => el.id !== id)
}
</script>

<template>
  <div class="tasks">
    <AddTaskComponent :onAddTask="onAddTask" />
    <h1 ref="dom">Список задач:</h1>
    <ul>
      <li
        @click="() => toggleCompleted(id)"
        :class="{ task: true, active: completed }"
        v-for="{ id, title, completed } in tasks"
        :key="id"
      >
        <RouterLink :to="{ path: `/home/task/${id}` }"> {{ title }} </RouterLink>
        <span class="close" @click="(e) => onDelTask(e, id)">X</span>
      </li>
    </ul>
    <RouterView />
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from 'vue'

const { onAddTask } = defineProps<{
  onAddTask: (taskTitle: string) => void
}>()

const inputTitle = ref('')

const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  inputTitle.value = target.value
}

const addTaskHandler = () => {
  if (!inputTitle.value.trim()) {
    return
  }
  onAddTask(inputTitle.value)
  inputTitle.value = ''
}
</script>

<template>
  <input
    type="text"
    @change="handleInputChange"
    :value="inputTitle"
    placeholder="Название задачи"
  />
  <button @click="addTaskHandler">Создать задачу</button>
</template>

<style scoped></style>

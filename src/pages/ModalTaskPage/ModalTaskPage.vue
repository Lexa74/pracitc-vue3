<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { Ref, ref, watch, watchEffect } from 'vue'
import { Task, taskList } from '@/pages/MainPage/mockData'

const route = useRoute()
const router = useRouter()

const currentTask: Ref<null | Task> = ref(null)

watch(
  () => route.params.id,
  () => null
)

watchEffect(() => {
  const task = taskList.find((task) => task.id === Number(route.params.id))
  if (task) {
    currentTask.value = task
  }
})

const navToMain = () => {
  router.push('/home')
}

const noNavigate = (e: Event) => {
  e.stopPropagation()
}
</script>

<template>
  <div class="layout" @click="navToMain">
    <div class="modal" @click="noNavigate">
      <h3>Странциа текущей задачи {{ route.params.id }}</h3>
      <p>{{ !currentTask ? 'Нет такой задачи' : currentTask.description }}</p>
      <button @click="navToMain" class="btn">Закрыть</button>
    </div>
  </div>
</template>

<style scoped>
.btn {
  margin-top: 20px;
}
.layout {
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: black;
}

.modal {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

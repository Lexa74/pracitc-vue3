<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <RouterLink to="/home">Главная</RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
      <RouterLink to="/contacts">Контакты</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>

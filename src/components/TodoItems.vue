<script setup>
import TodoItem from './TodoItem.vue';
import {onMounted} from 'vue';
import {storeToRefs } from 'pinia'
import {getAllTodos} from "../services/todo";
import {useTodoStore} from "../store/todo"

const useStore = useTodoStore();
const {getTodos} = storeToRefs(useStore)

onMounted(() => {
  getAllTodos();
})


</script>

<template>
  <div class="space-y-2">
    <TodoItem v-for="item in getTodos"
              :key="item.id"
              :id="item.id"
              :title="item.title"
              :completed="item.completed"
              v-if="getTodos.length > 0"/>
  </div>
</template>

<style scoped>

</style>
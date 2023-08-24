<script setup>
import {ref} from "vue";
import {addTodo} from "../services/todo";
import {useI18n} from "vue-i18n";

let title = ref("")
const {t} = useI18n();

function addTask(title) {
  if (title) {
    addTodo(title);
  }
}

</script>

<template>
  <form class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mb-3"
        @submit.prevent="addTask(title)">
    <input
        :placeholder="t('add-label')"
        type="text"
        class="bg-gray-900 placeholder-gray-500 text-gray-500 font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
        v-model="title"
    >

    <button
        class="text-green-400 text-xs font-semibold focus:outline-none"
        type="submit"
    >
      {{ $t('add') }}
    </button>
  </form>
</template>

<style scoped>

</style>
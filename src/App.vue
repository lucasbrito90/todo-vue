<script setup>
import TodoForm from "./components/TodoForm.vue";
import TodoItems from "./components/TodoItems.vue";
import {useI18n} from "vue-i18n";
import {onMounted} from "vue";
import {useTodoStore} from "./store/todo";
import TodoLanguageDropDown from "./components/TodoLanguageDropDown.vue";

const useStore = useTodoStore();

const i18n = useI18n();

onMounted(() => {
  const prefLanguage =
      localStorage.getItem('pref_language') || setBrowserLanguage();

  if (prefLanguage) {
    i18n.locale.value = prefLanguage;
  }

});

const setBrowserLanguage = () => {
  const lgBrowser = navigator.language;
  if (lgBrowser) {
    i18n.locale.value = lgBrowser.slice(0, 2);
  }
};

</script>

<template>
  <!-- Content -->
  <div class="px-3 py-10 md:px-10 bg-gray-800">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoLanguageDropDown />

      <TodoForm />

      <TodoItems />

      <!-- Todo empty -->
      <div class="text-center text-lg text-gray-500">
        {{ i18n.t("emptytask", {n: useStore.getTodos.length}) }}
      </div>
      <!--/ Todo empty -->
    </div>
  </div>
  <!--/ Content -->
</template>

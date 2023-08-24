<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="flex items-center rounded-full bg-gray-800 text-gray-400 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-gray-800">
        <span class="sr-only">Open options</span>
        <EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a @click.stop.prevent="setLocale('en')" href="#" :class="[active ? 'bg-gray-900 text-green-400' : 'text-gray-400', 'block px-4 py-2 text-sm']">English</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a @click.stop.prevent="setLocale('pt')" href="#" :class="[active ? 'bg-gray-900 text-green-400' : 'text-gray-400', 'block px-4 py-2 text-sm']">Portuguese</a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a @click.stop.prevent="setLocale('fr')" href="#" :class="[active ? 'bg-gray-900 text-green-400' : 'text-gray-400', 'block px-4 py-2 text-sm']">French</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import {useI18n} from "vue-i18n";

const i18n = useI18n();

const setLocale = (local) => {
  localStorage.setItem('pref_language', local);
  i18n.locale.value = local;
};

</script>
<template>
  <div ref="dropdownRef">
    <button @click="toggleDropdown" class="flex items-center cursor-pointer">
      <span :class="`fi fi-${flagMap[selectedLang]}`" class="mr-2 max-sm:mr-1"></span>
      {{ selectedLangName }}
      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <div v-if="dropdownOpen" class="absolute mt-2 p-1 w-fit bg-white dark:bg-black border rounded shadow-md z-10">
      <ul class="list-none p-0 m-0">
        <li @click="changeLang('es', 'Español')" class="flex items-center p-2 cursor-pointer hover:bg-gray-100 
        dark:hover:bg-gray-700">
          <span class="fi fi-cr mr-2"></span> Español
        </li>
        <li @click="changeLang('en', 'English')" class="flex items-center p-2 cursor-pointer hover:bg-gray-100 
        dark:hover:bg-gray-700">
          <span class="fi fi-us mr-2"></span> English
        </li>
        <li @click="changeLang('fr', 'Français')" class="flex items-center p-2 cursor-pointer hover:bg-gray-100 
        dark:hover:bg-gray-700">
          <span class="fi fi-fr mr-2"></span> Français
        </li>
        <li @click="changeLang('ja', '日本語')" class="flex items-center p-2 cursor-pointer hover:bg-gray-100 
        dark:hover:bg-gray-700">
          <span class="fi fi-jp mr-2"></span> 日本語
        </li>
        <li @click="changeLang('de', 'Deutsch')" class="flex items-center p-2 cursor-pointer hover:bg-gray-100 
        dark:hover:bg-gray-700">
          <span class="fi fi-de mr-2"></span> Deutsch
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
const dropdownRef = ref<HTMLElement | null>(null)
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const dropdownOpen = ref(false)
const selectedLang = ref(locale.value)
const selectedLangName = ref(getLangName(selectedLang.value))

const flagMap: Record<string, string> = {
  es: 'cr',
  en: 'us',
  fr: 'fr',
  ja: 'jp',
  de: 'de'
}

function getLangName(lang: string) {
  const langNames: Record<string, string> = {
    es: 'Español',
    en: 'English',
    fr: 'Français',
    ja: '日本語',
    de: 'Deutsch',
  }
  return langNames[lang] || lang
}


function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
}

function changeLang(lang: string, langName: string) {
  selectedLang.value = lang
  selectedLangName.value = langName
  locale.value = lang
  localStorage.setItem('lang', lang)
  dropdownOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  const dropdownElement = dropdownRef.value
  if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
    dropdownOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside)
})

watch(selectedLang, (newLang) => {
  locale.value = newLang
  localStorage.setItem('lang', newLang)
})
</script>

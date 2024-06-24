<script setup lang="ts">
const colorMode = useColorMode()
const isLight = computed({
  get () {
    return colorMode.value === 'light'
  },
  set () {
    colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
  }
})
</script>
<template>
  <UToggle
    @click="isLight = !isLight"
    :model-value="isLight"
    size="lg"
    color="amber"
    on-icon="i-heroicons-sun-20-solid"
    off-icon="i-heroicons-moon-20-solid"
  />
</template>

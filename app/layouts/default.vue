<template>
  <div class="flex flex-col w-full h-full p-4 gap-4">
    <Header />
    <div class="flex flex-row w-full grow gap-4">
      <Sidebar />
      <UCard class="w-full">
        <NuxtPage />
      </UCard>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/molecules/Header/AppHeader.vue'
import Sidebar from '~/components/molecules/Sidebar/AppSidebar.vue'
import Footer from '~/components/molecules/Footer/AppFooter.vue'
</script>

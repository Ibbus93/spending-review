<template>
  <div class="flex flex-col w-full h-full p-4 gap-4">
    <AppHeader />
    <div class="flex flex-row w-full grow gap-4">
      <AppSidebar />
      <UCard class="w-full">
        <NuxtPage />
      </UCard>
    </div>
    <AppFooter />
  </div>
</template>

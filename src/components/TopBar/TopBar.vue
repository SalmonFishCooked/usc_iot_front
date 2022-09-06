<template>
  <div class="w-full topbar bg-white transition h-16 flex items-center">
    <p class="ml-6 font-bold text-base flex-1">设备传感器</p>
    <div class="mx-6 flex p-2">
      <img class="w-10 rounded-full" src="http://p1.music.126.net/9t8prqgau-c1WD3c6KabZw==/109951167414323368.jpg?param=180y180" alt="">
      <div class="justify-center ml-2">
        <p class="text-xs font-bold">南华大学物联网</p>
        <t-tag theme="warning" size="small" @click="onClick">超级用户</t-tag>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.topbar {
  box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.05);
}
.topbar:hover {
  box-shadow: 0 0 30px 3px rgba(0, 0, 0, 0.1);
}
</style>
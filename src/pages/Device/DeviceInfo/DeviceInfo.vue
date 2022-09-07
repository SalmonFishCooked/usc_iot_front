<template>
  <div class="bg-white shadow-box p-4 rounded-md">
    <div class="flex items-center space-x-2">
      <img class="w-32" src="../../../assets/svg/device.svg" alt="">
      <div class="space-y-1">
        <t-tooltip class="mr-2" content="当前设备处于离线状态">
          <t-icon name="tips" size="20px" />
        </t-tooltip>
        <t-tag theme="danger">离线</t-tag>
        <div class="text-gray-600 font-bold text-sm">设备ID：142324</div>
        <div class="text-gray-600 font-bold text-sm">设备名称：测试一号</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>
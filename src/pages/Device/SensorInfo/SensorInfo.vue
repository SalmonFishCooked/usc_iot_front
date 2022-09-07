<template>
  <div class="bg-white shadow-box p-4 rounded-md">
    <div class="flex items-center space-x-2 mb-4">
      <img class="w-8" src="../../../assets/svg/sensor.svg" alt="">
      <p class="font-bold text-lg flex-1">传感器</p>
      <t-button theme="primary">
        <t-icon name="add" />
        新建
      </t-button>
      <t-button theme="danger">
        <t-icon name="delete" />
        删除
      </t-button>
    </div>
<!--    <t-alert theme="info" message="当前没有任何传感器可用。" />-->
    <Table />
  </div>
</template>

<script setup>

import Table from "./Table/Table.vue";
</script>

<style scoped>

</style>
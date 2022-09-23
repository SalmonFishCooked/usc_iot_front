<template>
  <div class="flex flex-col items-center space-y-4 mt-8">
    <p class="text-2xl font-bold">南华大学IoT云平台</p>
    <t-button size="large" @click="listVisibleModal.data = true" variant="outline">
      <t-icon name="swap" />
      选择设备
    </t-button>
  </div>
  <ChangeDeviceList :show="listVisibleModal" />
</template>

<script setup>
import ChangeDeviceList from "../Device/DeviceInfo/ChangeDeviceList/ChangeDeviceList.vue";
import {reactive} from "vue";

const listVisibleModal = reactive({data: false})
</script>

<style scoped>

</style>
<template>
  <div class="bg-white shadow-box p-4 rounded-md">
    <t-loading :loading="loading">
      <div class="flex items-center space-x-2">
        <img class="w-32" src="../../../assets/svg/device.svg" alt="">
        <div class="space-y-1">
          <t-tooltip theme="light" content="当前通讯协议：TCP">
            <t-tag theme="primary">TCP</t-tag>
          </t-tooltip>
          <t-tooltip v-if="!deviceData.data.IsOnline" theme="light" class="mr-2" content="当前设备处于离线状态">
            <t-tag class="ml-2" theme="danger">离线</t-tag>
          </t-tooltip>
          <t-tooltip v-if="deviceData.data.IsOnline" theme="light" class="mr-2" content="当前设备处于离线状态">
            <t-tag class="ml-2" theme="success">在线</t-tag>
          </t-tooltip>
          <div class="text-gray-600 font-bold text-sm">设备ID：{{deviceData.data.ID}}</div>
          <div class="text-gray-600 font-bold text-sm">设备名称：{{deviceData.data.Name}}</div>
        </div>
      </div>
    </t-loading>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import api from "../../../api/index.js";

const loading = ref(false)

const deviceData = reactive({
  data: {}
})

async function handleInit() {
  if (!loading.value) {
    loading.value = true

    const data = await api.device.getDeviceInfo({id: 3})
    if (data) {
      deviceData.data = data.data[0]
    }

    loading.value = false
  }
}

onMounted(async () => {
  await handleInit()
})
</script>

<style scoped>

</style>
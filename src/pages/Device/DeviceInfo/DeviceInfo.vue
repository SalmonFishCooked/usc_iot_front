<template>
  <div class="bg-white shadow-box p-4 rounded-md relative">
    <t-loading :loading="loading">
      <div class="absolute right-0">
        <t-button @click="listVisibleModal.data = true" variant="outline">
          <t-icon name="swap" />
          切换设备
        </t-button>
      </div>
      <div class="flex items-center space-x-2">
        <img class="w-32" src="../../../assets/svg/device.svg" alt="">
        <div class="space-y-1">
          <t-tooltip theme="light" content="当前通讯协议：TCP">
            <t-tag theme="primary">TCP</t-tag>
          </t-tooltip>
          <t-tooltip v-if="!deviceData.data.IsOnline" theme="light" class="mr-2" content="当前设备处于离线状态">
            <t-tag class="ml-2" theme="danger">离线</t-tag>
          </t-tooltip>
          <t-tooltip v-if="deviceData.data.IsOnline" theme="light" class="mr-2" content="当前设备处于在线状态">
            <t-tag class="ml-2" theme="success">在线</t-tag>
          </t-tooltip>
          <div class="text-gray-600 font-bold text-sm">设备ID：{{deviceData.data.ID}}</div>
          <div class="text-gray-600 font-bold text-sm">设备名称：{{deviceData.data.Name}}</div>
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-sm">自动更新设备状态:</p>
        <t-select :options="common_config.options.optionsUpdateTime" style="width: 300px;"></t-select>
      </div>
    </t-loading>
  </div>
  <ChangeDeviceList :show="listVisibleModal" />
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import api from "../../../api/index.js";
import { NotifyPlugin } from 'tdesign-vue-next';
import {useDeviceStore} from "../../../store/Device/index.js";
import {useRoute} from "vue-router";
import common_config from "../../common_config.js";
import ChangeDeviceList from "./ChangeDeviceList/ChangeDeviceList.vue";

const route = useRoute()
const deviceStore = useDeviceStore()
const loading = ref(false)

const listVisibleModal = reactive({data: false})

const deviceData = reactive({
  data: {}
})

async function handleInit() {
  if (!loading.value) {
    loading.value = true

    const data = await api.device.getDeviceInfo({ID: Number(route.params.id), Page:1, PageSize: 5})
    if (data) {
      deviceData.data = data.data[0]
      deviceStore.deviceInfo = data.data[0]
    } else {
      await NotifyPlugin('error', {
        title: '未能连接到后端服务器',
        content: '请确保后端服务器已经打开',
        closeBtn: true,
        duration: 0
      })
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
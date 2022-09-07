<template>
  <div class="bg-white shadow-box p-4 rounded-md">
    <t-loading :loading="loading">
      <div class="flex items-center space-x-2 mb-4">
        <img class="w-8" src="../../../assets/svg/sensor.svg" alt="">
        <p class="font-bold text-lg flex-1">传感器</p>
        <t-button theme="primary" @click="showModal.data = true">
          <t-icon name="add" />
          新建
        </t-button>
        <t-button theme="danger">
          <t-icon name="delete" />
          删除
        </t-button>
      </div>
      <t-alert v-show="!tableData.data.length" theme="info" message="当前没有任何传感器可用。" />
      <Table v-show="tableData.data.length" v-model:data="tableData" />
      </t-loading>

    <AddForm v-model:show="showModal" />
  </div>
</template>

<script setup>
import Table from "./Table/Table.vue";
import {onMounted, reactive, ref, watch} from "vue";
import AddForm from "./AddForm/AddForm.vue";
import api from "../../../api/index.js";
import {useDeviceStore} from "../../../../store/Device/index.js";

const deviceStore = useDeviceStore()
const loading = ref(false)
let deviceID = 0

const showModal = reactive({
  data: false
})

const tableData = reactive({
  data: []
})

//如果deviceStore里面的设备信息发生变化，获取对应设备传感器列表
watch(() => deviceStore.deviceInfo, async (newVal) => {
  deviceID = newVal.ID
  await handleInit()
})

async function handleInit() {
  if (!loading.value) {
    loading.value = true

    const data = await api.sensor.getSensorInfo({deviceID})
    if (data) {
      tableData.data = data.data
    }

    loading.value = false
  }

}
</script>

<style scoped>

</style>
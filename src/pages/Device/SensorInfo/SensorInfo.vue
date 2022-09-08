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
        <t-button @click="handleDelete" theme="danger">
          <t-icon name="delete" />
          删除
        </t-button>
      </div>
      <t-alert v-show="!tableData.data.length" theme="info" message="当前没有任何传感器可用。" />
      <Table v-model:SelectVal="selectVal" v-model:DeviceID="DeviceID" v-show="tableData.data.length" v-model:data="tableData" />
      </t-loading>

    <AddForm v-model:DeviceID="DeviceID" v-model:show="showModal" />
  </div>
</template>

<script setup>
import Table from "./Table/Table.vue";
import {onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import AddForm from "./AddForm/AddForm.vue";
import api from "../../../api/index.js";
import {useDeviceStore} from "../../../../store/Device/index.js";
import PubSub from "pubsub-js";
import {DialogPlugin, MessagePlugin} from "tdesign-vue-next";

const deviceStore = useDeviceStore()
const selectVal = reactive({
  value: []
})
const loading = ref(false)
const DeviceID = reactive({
  data: 0
})

const showModal = reactive({
  data: false
})

const tableData = reactive({
  data: []
})

//如果deviceStore里面的设备信息发生变化，获取对应设备传感器列表
watch(() => deviceStore.deviceInfo, async (newVal) => {
  DeviceID.data = newVal.ID
  await handleRefresh()
})

async function handleRefresh(msg, data) {
  if (!loading.value) {
    loading.value = true

    const data = await api.sensor.getSensorInfo({DeviceID: DeviceID.data})
    if (data) {
      tableData.data = data.data
    }

    loading.value = false
  }

}

async function handleDelete() {
  if (!loading.value) {
    if (!selectVal.value.length) {
      await MessagePlugin.info("未选中项")
      return
    }

    loading.value = true

    const confirmDia = DialogPlugin({
      header: '删除',
      body: '确定删除该项数据？',
      confirmBtn: '确定',
      cancelBtn: '取消',
      onConfirm: async ({ e }) => {
        let flag = 1
        for (let i of selectVal.value) {
          const data = await api.sensor.deleteSensor({DeviceID: DeviceID.data, ApiTag: i})
          if (!data) {
            flag = 0
          }
        }
        if (flag) {
          await MessagePlugin.success("所选项已全部删除")
        } else {
          await MessagePlugin.warning("所选项可能由于网络波动原因导致未全部删除")
        }

        PubSub.publish("refreshSensorTable")

        confirmDia.hide();
      },
      onClose: ({ e, trigger }) => {
        confirmDia.hide();
      },
    });

    loading.value = false
  }
}

onMounted(() => {
  PubSub.subscribe("refreshSensorTable", handleRefresh)
})
onBeforeUnmount(() => {
  PubSub.unsubscribe("refreshSensorTable")
})
</script>

<style scoped>

</style>
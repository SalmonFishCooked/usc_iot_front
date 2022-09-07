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
import {onMounted, reactive, ref} from "vue";
import AddForm from "./AddForm/AddForm.vue";
import api from "../../../api/index.js";

const loading = ref(false)

const showModal = reactive({
  data: false
})

const tableData = reactive({
  data: []
})

async function handleInit() {
  if (!loading.value) {
    loading.value = true

    const data = await api.sensor.getSensorInfo({deviceID: '3'})
    if (data) {
      tableData.data = data.data
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
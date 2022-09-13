<template>
  <div class="space-y-4">
    <div class="bg-white shadow-box p-4 rounded-md">
      <t-form ref="form" :rules="config.formRule" :data="formData" :colon="true" @reset="onReset" @submit="onSubmit">
        <t-form-item label="时间段" name="time">
          <t-date-range-picker v-model="formData.time" enable-time-picker allow-input clearable />
        </t-form-item>
        <t-form-item label="状态" name="Status">
          <t-select v-model="formData.Status" :options="config.options.optionsCommandStatus" placeholder="请选择"></t-select>
        </t-form-item>
        <t-form-item style="padding-top: 8px">
          <t-button theme="primary" type="submit" style="margin-right: 10px">查询</t-button>
          <t-button theme="default" variant="base" type="reset" style="margin-right: 10px">重置</t-button>
        </t-form-item>
      </t-form>
    </div>

      <div class="bg-white shadow-box p-4 rounded-md">
        <t-loading :loading="loading">
          <div class="flex items-center space-x-2 mb-4">
            <img class="w-8" src="../../../assets/svg/Data.svg" alt="">
            <p class="font-bold text-lg flex-1">历史命令数据</p>
          </div>

          <t-alert v-show="!tableData.data.length" theme="info" message="没有任何数据。" />
          <DataTable v-model:PageInfo="pagination" v-model:SelectVal="selectVal" v-show="tableData.data.length" v-model:data="tableData" />
        </t-loading>
      </div>
  </div>
</template>

<script setup>
import {onMounted, reactive, ref, watch} from "vue";
import {MessagePlugin} from "tdesign-vue-next";
import DataTable from "../DataTable/DataTable.vue";
import api from "../../../api/index.js";
import {useRoute} from "vue-router";
import config from "../config.js";

const route = useRoute()
const loading = ref(false)
const form = ref(null)
const formData = ref({...config.FORM_DATA})

const selectVal = reactive({
  value: []
})
const tableData = reactive({
  data: []
})

const paginationINIT = {
  current: 1,
  pageSize: 5,
  // defaultCurrent: 1,
  // defaultPageSize: 10,
  total: 0,
  showJumper: false,
  onChange: async (pageInfo) => {
    pagination.data.pageSize = pageInfo.pageSize
    pagination.data.current = pageInfo.current
    await handleRefresh()
  },
}
const pagination = reactive({
  data: {...paginationINIT}
})

async function handleRefresh() {
  if (!loading.value) {
    loading.value = true

    // const data = await api.sensor.getSensorInfo({...{DeviceID: DeviceID.data, ApiTag: '', Type: tabs.value}, ...{Page: pagination.data.current, PageSize: pagination.data.pageSize}})
    // if (data) {
    //   tableData.data = data.data
    //   pagination.data.total = data.total
    // }

    loading.value = false
  }
}

const onReset = () => {
  MessagePlugin.success('重置成功')
}
const onSubmit = ({ validateResult, firstError }) => {
  if (validateResult === true) {
    MessagePlugin.success('提交成功');
  } else {
    MessagePlugin.warning(firstError);
  }
}

onMounted(async () => {
  await handleRefresh()
})
</script>

<style scoped>

</style>
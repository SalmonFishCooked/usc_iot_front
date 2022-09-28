<template>
  <div class="space-y-4">
    <div class="bg-white shadow-box p-4 rounded-md">
      <t-form ref="form" :rules="config.formRule" :data="formData" :colon="true" @reset="onReset" @submit="onSubmit">
        <t-form-item label="时间段" name="time">
          <t-date-range-picker v-model="formData.time" enable-time-picker allow-input clearable />
        </t-form-item>
        <t-form-item label="传感器" name="ApiTag">
          <ItemSelect
            v-model:ValueSelect="sensorApiTagSelectVal"
            :BaseUrl="base.sensorBase.getSensorInfo"
            KeyWord="ApiTag"
            :SearchForm="sensorSearchForm"
            LabelWord="Name"
            ValueWord="ApiTag"
          />
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
            <p class="font-bold text-lg flex-1">历史传感数据</p>
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
import base from "../../../api/base/index.js";
import api from "../../../api/index.js";
import {useRoute} from "vue-router";
import ItemSelect from "../../../components/FormItem/SelectSingle/ItemSelect.vue";
import config from "../config.js";
import utils from "../../../utils/index.js";

const route = useRoute()
const loading = ref(false)
const form = ref(null)
const formData = ref({...config.FORM_DATA})

const sensorSearchFormINIT = {
  DeviceID: Number(route.params.id),
  SensorApiTag: '',
  Type: -1,
  Page: 1,
  PageSize: 10000,
}
const sensorSearchForm = reactive({
  data: {...sensorSearchFormINIT}
})

const selectVal = reactive({
  value: []
})
const sensorApiTagSelectVal = reactive({
  data: ''
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

    sensorSearchForm.data.SensorApiTag = sensorApiTagSelectVal.data
    const data = await api.history.getHistoryInfo(sensorSearchForm.data)
    if (data) {
      tableData.data = data.data

      //转换时间格式
      for (let i of tableData.data) {
        i.CreatedAt = utils.common.dateFormat('YYYY-mm-dd HH:MM', i.CreatedAt)
      }

      pagination.data.total = data.total
      await MessagePlugin.success('查询成功')
    }

    loading.value = false
  }
}

const onReset = () => {
  MessagePlugin.success('重置成功')
}
const onSubmit = async ({ validateResult, firstError }) => {
  if (!loading.value) {
    if (validateResult === true) {
      await handleRefresh()
    } else {
      await MessagePlugin.warning(firstError)
    }
  }
}

watch(route, async (v) => {
  if (route.name === "DeviceHistory") {
    sensorSearchForm.data.DeviceID = Number(route.params.id)
    await handleRefresh()
  }
})

onMounted(async () => {
  await handleRefresh()
})
</script>

<style scoped>

</style>
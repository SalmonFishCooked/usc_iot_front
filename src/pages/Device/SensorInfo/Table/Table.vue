<template>
  <div class="tdesign-demo-block-column-large">
    <!-- 当数据为空需要占位时，会显示 cellEmptyContent -->
    <t-table
      row-key="ApiTag"
      :data="data.data"
      :columns="columns"
      :stripe="stripe"
      :bordered="bordered"
      :hover="hover"
      :table-layout="tableLayout ? 'auto' : 'fixed'"
      :size="size"
      :pagination="pagination.data"
      :selected-row-keys="selectedRowKeys.value"
      @select-change="rehandleSelectChange"
      cell-empty-content="-"
      @row-click="handleRowClick"
    >
      <template #TransmissionType="{ row }">
        <t-tooltip theme="light" content="只支持设备数据上报至云端">
          <t-tag theme="primary" v-if="row.TransmissionType === 0" size="small">只上报</t-tag>
        </t-tooltip>
        <t-tooltip theme="light" content="当设备发生指定的状态或达到指定值时，上报警报信号">
          <t-tag theme="warning" v-if="row.TransmissionType === 1" size="small">报警</t-tag>
        </t-tooltip>
        <t-tooltip theme="light" content="当设备发生指定的状态或达到指定值时，上报故障信息">
          <t-tag theme="danger" v-if="row.TransmissionType === 2" size="small">故障</t-tag>
        </t-tooltip>
      </template>
      <template #DataType="{ row }">
        <t-tag theme="success" v-if="row.DataType === 0" size="small">整数型</t-tag>
        <t-tag theme="success" v-if="row.DataType === 1" size="small">浮点型</t-tag>
        <t-tag theme="success" v-if="row.DataType === 2" size="small">布尔型</t-tag>
        <t-tag theme="success" v-if="row.DataType === 3" size="small">字符型</t-tag>
        <t-tag theme="success" v-if="row.DataType === 4" size="small">枚举型</t-tag>
        <t-tag theme="success" v-if="row.DataType === 5" size="small">二进制型</t-tag>
      </template>
      <template #SerialNumber="{ row }">
        <t-tag theme="success" size="small">{{row.SerialNumber}}</t-tag>
      </template>
      <template #op-column>
        <p>操作</p>
      </template>
      <template #op="slotProps">
        <t-icon class="cursor-pointer" name="delete" @click="rehandleClickOp(slotProps)">删除</t-icon>
      </template>
    </t-table>
  </div>
</template>

<script setup>
import {nextTick, reactive, ref, watch} from 'vue';
import {DialogPlugin, MessagePlugin} from 'tdesign-vue-next';
import api from "../../../../api/index.js";
import PubSub from "pubsub-js";
import config from "../config.js";

const props = defineProps({
  data: Object,
  DeviceID: Object,
  SelectVal: Object,
  PageInfo: Object,
  Tabs: Object
})

const data = reactive(props.data);
const myDeviceID = reactive(props.DeviceID)
const myTabs = reactive(props.Tabs)
const columns = ref(config.columns.columnsCustom)

const stripe = ref(false);
const bordered = ref(true);
const hover = ref(true);
const tableLayout = ref(true);
const size = ref('small');

//Tabs选项卡一变化，改变对应columns
watch(myTabs, (newVal) => {
  switch (newVal.value) {
    case 0:
      columns.value = config.columns.columnsCustom;break;
    case 1:
      columns.value = config.columns.columnsNewlab;break;
  }
})

const handleRowClick = (e) => {

};

const selectedRowKeys = reactive(props.SelectVal)
const rehandleSelectChange = (value, { selectedRowData }) => {
  selectedRowKeys.value = value;
}

const rehandleClickOp = ({ text, row }) => {
  const confirmDia = DialogPlugin({
    header: '删除',
    body: '确定删除该项数据？',
    confirmBtn: '确定',
    cancelBtn: '取消',
    onConfirm: async ({ e }) => {
      const data = await api.sensor.deleteSensor({DeviceID: myDeviceID.data, ApiTag: row.ApiTag})
      if (data) {
        await MessagePlugin.success("删除成功")
        PubSub.publish("refreshSensorTable")
      }
      confirmDia.hide();
    },
    onClose: ({ e, trigger }) => {
      confirmDia.hide();
    },
  });
};

const pagination = reactive(props.PageInfo)
</script>

<style scoped>

</style>
<template>
  <div class="tdesign-demo-block-column-large">
    <!-- 当数据为空需要占位时，会显示 cellEmptyContent -->
    <t-table
      row-key="id"
      :data="data.data"
      :columns="columns"
      :stripe="stripe"
      :bordered="bordered"
      :hover="hover"
      :table-layout="tableLayout ? 'auto' : 'fixed'"
      :size="size"
      :pagination="pagination"
      :selected-row-keys="selectedRowKeys"
      @select-change="rehandleSelectChange"
      cell-empty-content="-"
      @row-click="handleRowClick"
    >
      <template #device_transmission_type="{ row }">
        <t-tooltip theme="light" content="只支持设备数据上报至云端">
          <t-tag theme="primary" v-if="row.device_transmission_type === 0" size="small">只上报</t-tag>
        </t-tooltip>
        <t-tooltip theme="light" content="当设备发生指定的状态或达到指定值时，上报警报信号">
          <t-tag theme="warning" v-if="row.device_transmission_type === 1" size="small">报警</t-tag>
        </t-tooltip>
        <t-tooltip theme="light" content="当设备发生指定的状态或达到指定值时，上报故障信息">
          <t-tag theme="danger" v-if="row.device_transmission_type === 2" size="small">故障</t-tag>
        </t-tooltip>
      </template>
      <template #device_data_type="{ row }">
        <t-tag theme="success" v-if="row.device_data_type === 0" size="small">整数型</t-tag>
        <t-tag theme="success" v-if="row.device_data_type === 1" size="small">浮点型</t-tag>
        <t-tag theme="success" v-if="row.device_data_type === 2" size="small">布尔型</t-tag>
        <t-tag theme="success" v-if="row.device_data_type === 3" size="small">字符型</t-tag>
        <t-tag theme="success" v-if="row.device_data_type === 4" size="small">枚举型</t-tag>
        <t-tag theme="success" v-if="row.device_data_type === 5" size="small">二进制型</t-tag>
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
import {reactive, ref} from 'vue';

const props = defineProps({
  data: Object
})

const data = reactive({
  data: []
});
const total = 28;
// for (let i = 0; i < total; i++) {
//   data.push({
//     id: i,
//     device_name: '测试传感器' + i + '号',
//     device_flag: 'testcgq' + i ,
//     device_transmission_type: [0, 1, 2][i % 3],
//     device_data_type: [0, 1, 2, 3, 4, 5][i % 6],
//   });
// }

const columns = [
  {
    colKey: 'row-select',
    type: 'multiple',
    width: 50,
  },
  {
    colKey: 'device_name',
    align: 'center',
    title: '名称',
    ellipsis: true
  },
  {
    colKey: 'device_flag',
    align: 'center',
    title: '标志名',
    ellipsis: true
  },
  {
    colKey: 'device_transmission_type',
    align: 'center',
    title: '传输类型',
    width: 100,
  },
  {
    colKey: 'device_data_type',
    align: 'center',
    title: '数据类型',
    width: 100,
  },
  {
    colKey: 'op',
    width: 60,
    align: 'center',
    title: 'op-column',
    cell: 'op',
  },
];

const stripe = ref(false);
const bordered = ref(true);
const hover = ref(true);
const tableLayout = ref(true);
const size = ref('small');

const handleRowClick = (e) => {
  console.log(e);
};

const selectedRowKeys = ref([])
const rehandleSelectChange = (value, { selectedRowData }) => {
  selectedRowKeys.value = value;
}

const rehandleClickOp = ({ text, row }) => {
  console.log(text, row);
};

const pagination = {
  defaultCurrent: 1,
  defaultPageSize: 5,
  total,
};
</script>

<style scoped>

</style>
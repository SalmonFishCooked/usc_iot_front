<template>
  <div>
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
    </t-table>
  </div>
</template>

<script setup>
import {nextTick, reactive, ref, watch} from 'vue';
import config from "../config.js";

const props = defineProps({
  data: Object,
  SelectVal: Object,
  PageInfo: Object,
  Tabs: Object
})

const data = reactive(props.data);
const myTabs = reactive(props.Tabs)
const columns = ref(config.columns.columnsHistory)

const stripe = ref(false);
const bordered = ref(true);
const hover = ref(true);
const tableLayout = ref(true);
const size = ref('small');

//Tabs选项卡一变化，改变对应columns
watch(myTabs, (newVal) => {
  switch (newVal.value) {
    case 0:
      columns.value = config.columns.columnsHistory;break;
  }
})

const handleRowClick = (e) => {

};

const selectedRowKeys = reactive(props.SelectVal)
const rehandleSelectChange = (value, { selectedRowData }) => {
  selectedRowKeys.value = value;
}

const pagination = reactive(props.PageInfo)
</script>

<style scoped>

</style>
<template>
  <div class="bg-white shadow-box p-4 rounded-md">
    <div class="flex items-center space-x-2 mb-4">
      <img class="w-8" src="../../../assets/svg/actuator.svg" alt="">
      <p class="font-bold text-lg flex-1">执行器</p>
      <t-button theme="primary">
        <t-icon name="add" />
        新建
      </t-button>
      <t-button theme="danger">
        <t-icon name="delete" />
        删除
      </t-button>
    </div>
    <t-alert v-show="!tableData.data.length" theme="info" message="当前没有任何执行器可用。" />
    <Table v-show="tableData.data.length" v-model:data="tableData" />
  </div>
</template>

<script setup>
import Table from "./Table/Table.vue";
import {reactive} from "vue";

const tableData = reactive({
  data: []
})
</script>

<style scoped>

</style>
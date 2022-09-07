<template>
  <t-dialog
    v-model:visible="visibleModal.data"
    header="添加传感器"
    mode="modal"
    draggable
    :on-confirm="() => (visibleModal.data = false)"
    top="24px"
  >
    <template #body>
      <t-tabs v-model="tabs">
        <t-tab-panel :value="0" label="自定义" :destroy-on-hide="false">
          <Custom class="mt-4" />
        </t-tab-panel>
        <t-tab-panel :value="1" label="NEWLab" :destroy-on-hide="false">
          <template #panel>
            <p style="padding: 25px">选项卡2的内容，使用 t-tab-panel 渲染</p>
          </template>
        </t-tab-panel>
      </t-tabs>
    </template>
  </t-dialog>
</template>

<script setup>
import {reactive, ref} from 'vue'
import Custom from "./Custom/Custom.vue";

const props = defineProps({
  show: Object
})

const tabs = ref(0)

const visibleModal = reactive(props.show)
</script>

<style scoped>

</style>
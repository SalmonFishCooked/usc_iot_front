<template>
  <t-dialog
    v-model:visible="visibleModal.data"
    header="添加执行器"
    mode="modal"
    draggable
    :footer="false"
    top="24px"
  >
    <template #body>
      <t-tabs v-model="tabs">
        <t-tab-panel :value="0" label="自定义" :destroy-on-hide="false">
          <Custom v-model:DeviceID="myDeviceID" class="mt-4" />
        </t-tab-panel>
        <t-tab-panel :value="1" label="NEWLab" :destroy-on-hide="false">
          <Newlab v-model:DeviceID="myDeviceID" class="mt-4" />
        </t-tab-panel>
        <t-tab-panel :value="2" label="Modbus" :destroy-on-hide="false">
          <Modbus v-model:DeviceID="myDeviceID" class="mt-4" />
        </t-tab-panel>
        <t-tab-panel :value="3" label="模拟量" :destroy-on-hide="false">
          <Simulation v-model:DeviceID="myDeviceID" class="mt-4" />
        </t-tab-panel>
        <t-tab-panel :value="4" label="数字量" :destroy-on-hide="false">
          <Number v-model:DeviceID="myDeviceID" class="mt-4" />
        </t-tab-panel>
        <t-tab-panel :value="5" label="ZigBee" :destroy-on-hide="false">
          <ZigBee v-model:DeviceID="myDeviceID" class="mt-4" />
        </t-tab-panel>
        <t-tab-panel :value="6" label="农业传感" :destroy-on-hide="false">
          <Agriculture v-model:DeviceID="myDeviceID" class="mt-4" />
        </t-tab-panel>
        <t-tab-panel :value="7" label="家居传感" :destroy-on-hide="false">
        </t-tab-panel>
      </t-tabs>
    </template>
  </t-dialog>
</template>

<script setup>
import {onBeforeUnmount, onMounted, reactive, ref} from 'vue'
import Custom from "./Custom/Custom.vue";
import PubSub from "pubsub-js";
import Newlab from "./Newlab/Newlab.vue";
import Simulation from "./Simulation/Simulation.vue";
import Number from "./Number/Number.vue";
import ZigBee from "./ZigBee/ZigBee.vue";
import Agriculture from "./Agriculture/Agriculture.vue";
import Modbus from "./Modbus/Modbus.vue";

const props = defineProps({
  show: Object,
  DeviceID: Object
})

const tabs = ref(0)
const myDeviceID = reactive(props.DeviceID)
const visibleModal = reactive(props.show)

function handleClose() {
  visibleModal.data = false
  PubSub.publish("refreshSensorTable")
}

onMounted(() => {
  PubSub.subscribe("closeSensorAddForm", handleClose)
})

onBeforeUnmount(() => {
  PubSub.unsubscribe("closeSensorAddForm")
})
</script>

<style scoped>

</style>
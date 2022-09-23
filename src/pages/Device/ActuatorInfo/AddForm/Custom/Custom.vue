<template>
  <t-form ref="form" :rules="config.formRule" :data="formData" @submit="onSubmit">
    <t-form-item label="传感器名称" name="Name" help="用于描述该设备或设备功能的名称（如：灯泡开关、灯泡亮度调节）">
      <t-input v-model="formData.Name" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="标识名" name="ApiTag" help="数据上报及API调用的变量名（如：LightSwitch，LighBrightness）">
      <t-input v-model="formData.ApiTag" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="传输类型" name="TransmissionType">
      <t-radio-group variant="default-filled" v-model="formData.TransmissionType">
        <t-radio-button :value="0">
          <t-tooltip theme="light" content="数据设备可上报至云端，云端指令可下发给设备">
            上报和下发
          </t-tooltip>
        </t-radio-button>
        <t-radio-button :value="1">
          <t-tooltip theme="light" content="当设备发生指定的状态或达到指定值时，上报警报信号">
            报警
          </t-tooltip>
        </t-radio-button>
        <t-radio-button :value="2">
          <t-tooltip theme="light" content="当设备发生指定的状态或达到指定值时，上报故障信息">
            故障
          </t-tooltip>
        </t-radio-button>
      </t-radio-group>
    </t-form-item>
    <t-form-item label="数据类型" name="DataType">
      <t-select :disabled="formData.TransmissionType !== 0" v-model="formData.DataType" :options="config.options.optionsDataType" placeholder="请选择数据类型" />
    </t-form-item>
    <t-form-item label="操作类型" name="OperationType">
      <t-select v-model="formData.OperationType" :options="config.options.optionsOperationType" placeholder="请选择操作类型" />
    </t-form-item>
    <t-form-item style="padding-top: 8px;">
      <t-button :loading="btnLoading" theme="primary" type="submit" style="margin-right: 10px">提交</t-button>
      <t-button theme="default" variant="base" type="reset" style="margin-right: 10px">重置</t-button>
    </t-form-item>
  </t-form>
</template>

<script setup>
import {reactive, ref, watch} from 'vue'
import { MessagePlugin } from 'tdesign-vue-next';
import api from "../../../../../api/index.js";
import PubSub from 'pubsub-js'
import config from "../../config.js";

const props = defineProps({
  DeviceID: Object
})

const myDeviceID = reactive(props.DeviceID)
const btnLoading = ref(false)
const form = ref(null);
const formData = ref({ ...config.actuatorData });

const onSubmit = async ({ validateResult, firstError, e }) => {
  if (!btnLoading.value) {
    e.preventDefault();
    btnLoading.value = true

    if (validateResult === true) {
      const data = await api.actuator.createActuator({...formData.value, ...{DeviceID: myDeviceID.data, Type: 0}})
      if (data) {
        await MessagePlugin.success('提交成功');
        PubSub.publish("closeSensorAddForm")
        formData.value = {...config.actuatorData}
      }
    } else {
      // console.log('Validate Errors: ', firstError, validateResult);
      await MessagePlugin.warning(firstError);
    }

    btnLoading.value = false
  }
}

watch(() => formData.value.TransmissionType, (newVal) => {
  if (newVal === 1 || newVal === 2) {
    formData.value.DataType = 2
  }
})
</script>

<style scoped>

</style>
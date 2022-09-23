<template>
  <t-form ref="form" :rules="config.formRule" :data="formData" @submit="onSubmit">
<!--    <t-form-item label="传感类型" name="SensorType">-->
<!--      <t-select v-model="formData.SensorType" :options="config.options.optionsSensorTypeZigBee" placeholder="请选择传感类型" />-->
<!--    </t-form-item>-->
    <t-form-item label="传感器名称" name="Name" help="用于描述该设备或设备功能的名称（如：温度、空气质量）">
      <t-input v-model="formData.Name" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="标识名" name="ApiTag" help="数据上报及API调用的变量名（如：AirQuality）">
      <t-input v-model="formData.ApiTag" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="序列号" help="对应Zigbee烧写工具时的序列号值（十六进制）（如：AA01）"
                 name="SerialNumber"
                 :rules="[
          { required: true, message: '序列号必填' },
          { validator: utils.validator.SerialNumberHex },
        ]"
    >
      <t-input v-model="formData.SerialNumber" placeholder="请输入内容" />
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
import utils from "../../../../../utils/index.js";
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
      const data = await api.actuator.createActuator({...formData.value, ...{DeviceID: myDeviceID.data, Type: 5}})
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
</script>

<style scoped>

</style>
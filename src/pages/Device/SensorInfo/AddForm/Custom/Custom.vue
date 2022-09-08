<template>
  <t-form ref="form" :rules="FORM_RULES" :data="formData" @submit="onSubmit">
    <t-form-item label="传感器名称" name="Name" help="用于描述该设备或设备功能的名称（如：温度、空气质量）">
      <t-input v-model="formData.Name" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="标识名" name="ApiTag" help="数据上报及API调用的变量名（如：AirQuality）">
      <t-input v-model="formData.ApiTag" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="传输类型" name="TransmissionType">
      <t-radio-group variant="default-filled" v-model="formData.TransmissionType">
        <t-radio-button :value="0">
          <t-tooltip theme="light" content="只支持设备数据上报至云端">
            只上报
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
      <t-select :disabled="formData.TransmissionType !== 0" v-model="formData.DataType" :options="optionsDataType" placeholder="请选择数据类型" />
    </t-form-item>
    <t-form-item label="设备单位" name="Unit" help="填写单位，如 ℃, Pa">
      <t-input v-model="formData.Unit" placeholder="请输入内容" />
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
import sensorData from "../config.js";
import api from "../../../../../api/index.js";
import PubSub from 'pubsub-js'

const props = defineProps({
  DeviceID: Object
})

const myDeviceID = reactive(props.DeviceID)
const btnLoading = ref(false)
const form = ref(null);
const FORM_RULES = {
  Name: [
    { required: true, message: '传感名称必填'},
    { max: 15, message: '最多输入十五个字符'},
  ],
  ApiTag: [{ required: true, message: '标识名必填' }],
  TransmissionType: [{ required: true, message: '传输类型必填' }],
  DataType: [{ required: true, message: '数据类型必填' }]
};

const formData = ref({ ...sensorData });

const optionsDataType = [
  { label: '整数型', value: 0 },
  { label: '浮点型', value: 1 },
  { label: '布尔型', value: 2 },
  { label: '字符型', value: 3 },
  { label: '枚举型', value: 4 },
  { label: '二进制型', value: 5 },
];

const onSubmit = async ({ validateResult, firstError, e }) => {
  if (!btnLoading.value) {
    e.preventDefault();
    btnLoading.value = true

    if (validateResult === true) {
      const data = await api.sensor.createSensor({...formData.value, ...{DeviceID: myDeviceID.data, Type: 0}})
      if (data) {
        await MessagePlugin.success('提交成功');
        PubSub.publish("closeSensorAddForm")
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
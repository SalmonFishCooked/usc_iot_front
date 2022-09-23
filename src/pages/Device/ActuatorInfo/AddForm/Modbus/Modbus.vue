<template>
  <t-form ref="form" :rules="config.formRule" :data="formData" @submit="onSubmit">
    <t-form-item label="传感器名称" name="Name" help="用于描述该设备或设备功能的名称（如：温度、空气质量）">
      <t-input v-model="formData.Name" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="标识名" name="ApiTag" help="数据上报及API调用的变量名（如：AirQuality）">
      <t-input v-model="formData.ApiTag" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="从机地址" name="SlaveAddress" help="十六进制范围：01-FF"
                 :rules="[
          { required: true, message: '起始地址必填' },
          { validator: utils.validator.SlaveAddress },
        ]"
    >
      <t-input v-model="formData.SlaveAddress" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="功能号" name="FunctionNumber">
      <t-select v-model="formData.FunctionNumber" :options="config.options.optionsSensorModbusFunction" placeholder="请选择" />
    </t-form-item>
    <t-form-item label="起始地址" name="DataAddress" help="十六进制范围：0000-FFFF"
                 :rules="[
          { required: true, message: '起始地址必填' },
          { validator: utils.validator.SerialNumberHex },
        ]"
    >
      <t-input v-model="formData.DataAddress" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="数据长度" name="DataLength" help="十六进制范围：0001-FFFF"
                 :rules="[
          { required: true, message: '起始地址必填' },
          { validator: utils.validator.DataLength },
        ]"
    >
      <t-input v-model="formData.DataLength" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="采样间隔" name="SampleTime">
      <t-select v-model="formData.SampleTime" :options="config.options.optionsSensorModbusSampleTime" placeholder="请选择" />
    </t-form-item>
    <t-form-item label="采样公式" name="SampleFormula" help="如：R0/10">
      <t-tooltip theme="light" content="以R代表一个寄存器单元。R0即第一个寄存器的数据，R1为下一个寄存器的数据，以此类推。可用运算符 + - * / % ()">
        <t-input v-model="formData.SampleFormula" placeholder="请输入内容" />
      </t-tooltip>
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
      const data = await api.actuator.createActuator({...formData.value, ...{DeviceID: myDeviceID.data, Type: 2}})
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
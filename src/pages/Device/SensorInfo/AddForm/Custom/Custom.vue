<template>
  <t-form ref="form" :rules="FORM_RULES" :data="formData">
    <t-form-item label="传感名称" name="device_name" help="用于描述该设备或设备功能的名称（如：温度、空气质量）">
      <t-input v-model="formData.device_name" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="标识名" name="device_flag" help="数据上报及API调用的变量名（如：AirQuality）">
      <t-input v-model="formData.device_flag" placeholder="请输入内容" />
    </t-form-item>
    <t-form-item label="传输类型" name="device_transmission_type">
      <t-radio-group variant="default-filled" v-model="formData.device_transmission_type">
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
    <t-form-item label="数据类型" name="device_data_type">
      <t-select :disabled="formData.device_transmission_type !== 0" v-model="formData.device_data_type" :options="optionsDataType" placeholder="请选择数据类型" />
    </t-form-item>
    <t-form-item label="设备单位" name="device_unit" help="填写单位，如 ℃, Pa">
      <t-input v-model="formData.device_unit" placeholder="请输入内容" />
    </t-form-item>
  </t-form>
</template>

<script setup>
import {ref} from 'vue'

const form = ref(null);
const FORM_RULES = {
  device_name: [
    { required: true, message: '传感名称必填'},
    { max: 15, message: '最多输入十五个字符'},
  ],
  device_flag: [{ required: true, message: '标识名必填' }],
  device_transmission_type: [{ required: true, message: '传输类型必填' }],
  device_data_type: [{ required: true, message: '数据类型必填' }]
};

const INITIAL_DATA = {
  device_name: '',
  device_flag: '',
  device_transmission_type: 0,
  device_data_type: 0,
  device_unit: '',
};
const formData = ref({ ...INITIAL_DATA });

const optionsDataType = [
  { label: '整数型', value: 0 },
  { label: '浮点型', value: 1 },
  { label: '布尔型', value: 2 },
  { label: '字符型', value: 3 },
  { label: '枚举型', value: 4 },
  { label: '二进制型', value: 5 },
];
</script>

<style scoped>

</style>
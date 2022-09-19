<template>
  <t-dialog
    v-model:visible="visibleModal.data"
    header="添加设备"
    mode="modal"
    draggable
    :footer="false"
    top="24px"
  >
    <template #body>
      <t-form ref="form" :rules="config.formRule" :data="formData" @submit="onSubmit">
        <t-form-item label="设备名称" name="Name" help="最多输入十五个字符">
          <t-input v-model="formData.Name" placeholder="请输入内容" />
        </t-form-item>
        <t-form-item label="标识名" name="ApiTag" help="最多输入三十个字符">
          <t-input v-model="formData.ApiTag" placeholder="请输入内容" />
        </t-form-item>
        <t-form-item style="padding-top: 8px;">
          <t-button :loading="btnLoading" theme="primary" type="submit" style="margin-right: 10px">提交</t-button>
          <t-button theme="default" variant="base" type="reset" style="margin-right: 10px">重置</t-button>
        </t-form-item>
      </t-form>
    </template>
  </t-dialog>
</template>

<script setup>
import {onBeforeUnmount, onMounted, reactive, ref} from "vue";
import PubSub from "pubsub-js";
import config from "./config.js";
import api from "../../../api/index.js";
import {MessagePlugin} from "tdesign-vue-next";

const props = defineProps({
  show: Object,
})
const visibleModal = reactive(props.show)

const btnLoading = ref(false)
const formData = ref({...config.deviceData})

function handleClose() {
  visibleModal.data = false
  PubSub.publish("refreshDeviceTable")
}

const onSubmit = async ({ validateResult, firstError, e }) => {
  if (!btnLoading.value) {
    e.preventDefault()
    btnLoading.value = true

    if (validateResult === true) {
      const data = await api.device.createDevice(formData.value)
      if (data) {
        await MessagePlugin.success('提交成功');
        PubSub.publish("closeDeviceAddForm")
        formData.value = {...config.deviceData}
      }
    } else {
      await MessagePlugin.warning(firstError);
    }

    btnLoading.value = false
  }
}

onMounted(() => {
  PubSub.subscribe("closeDeviceAddForm", handleClose)
})

onBeforeUnmount(() => {
  PubSub.unsubscribe("closeDeviceAddForm")
})
</script>

<style scoped>

</style>
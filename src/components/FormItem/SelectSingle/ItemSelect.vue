<template>
  <t-select
    v-model="value"
    filterable
    clearable
    placeholder="请选择"
    :on-search="remoteMethod"
    :loading="loading"
    :options="optionsRef"
    style="width: 400px;"
    @click.once="handleClickOnce"
  />
</template>

<script setup>
import {reactive, ref} from 'vue'
import {useRoute} from "vue-router";
import axios from "axios";

const props = defineProps({
  BaseUrl: String,
  KeyWord: String,
  SearchForm: Object,
  LabelWord: String,
  ValueWord: String,
})

const value = ref(null)
const loading = ref(false)
const optionsRef = ref([])
const route = useRoute()
const searchForm = reactive(props.SearchForm)

async function remoteMethod(search) {
  if (search) {
    loading.value = true

    searchForm[props.KeyWord] = search
    optionsRef.value = []
    await handleRefresh()

    loading.value = false
  }
}

async function handleClickOnce() {
  await handleRefresh()
}

async function handleRefresh() {
  loading.value = true
  await axios.post(props.BaseUrl, searchForm.data).then((res) => {
    if (res.data.data) {
      pushToOptions(res.data.data)
    }
  }).catch((err) => {

  })
  loading.value = false
}

function pushToOptions(data) {
  for (let i of data) {
    optionsRef.value.push({label: i[props.LabelWord], value: i[props.ValueWord]})
  }
}
</script>

<style scoped>

</style>
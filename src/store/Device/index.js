import {defineStore} from "pinia";
import {ref} from "vue"

export const useDeviceStore = defineStore('device', () => {
  const deviceInfo = ref({})

  return {
    deviceInfo
  }
})
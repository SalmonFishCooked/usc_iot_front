<template>
  <div>
    <DeviceInfo />
    <div class="grid grid-cols-12 mt-4 gap-4">
      <SensorInfo class="oversize:col-span-4 xl:col-span-6 col-span-12" />
      <ActuatorInfo class="oversize:col-span-4 xl:col-span-6 col-span-12" />
      <CameraInfo class="oversize:col-span-4 xl:col-span-6 col-span-12" />
    </div>
  </div>
</template>

<script setup>

import DeviceInfo from "./DeviceInfo/DeviceInfo.vue";
import SensorInfo from "./SensorInfo/SensorInfo.vue";
import ActuatorInfo from "./ActuatorInfo/ActuatorInfo.vue";
import CameraInfo from "./CameraInfo/CameraInfo.vue";
</script>

<style scoped>
@media (min-width: 1920px) {
  .oversize\:col-span-4 {
    grid-column: span 4 / span 4;
  }
}
</style>
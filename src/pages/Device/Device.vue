<template>
  <div>
    <DeviceInfo />
    <div class="grid grid-cols-12 mt-4 gap-4">
      <SensorInfo class="col-span-6" />
      <ActuatorInfo class="col-span-6" />
      <CameraInfo class="col-span-6" />
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

</style>
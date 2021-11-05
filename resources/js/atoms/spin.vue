<template>
        <div class="loader grey"></div>
</template>

<script>
    export default {
        name: 'a-spin',        
    }
</script>

<style scoped lang="scss">
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(lightgray, transparent);
  animation: rotating 1s linear infinite;
  transform: translate(-50%, -50%);
}
.loader::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 30px;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  background: #333a40;
}
@keyframes rotating {
    from {
        transform: rotate(360deg);
        
    }
    to {
        transform: rotate(0deg);
    }
}
</style>
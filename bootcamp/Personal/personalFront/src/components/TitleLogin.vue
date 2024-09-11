<script setup></script>
<template>
  <h2>PADEL</h2>
  <img id="ballPadel" src="../assets/img/navbar/ballPadel2.png" alt="" />
  <h2>MATCH</h2>
</template>
<style scoped>
h2 {
  font-size: 120px;
  font-weight: bold;
  color: #2d3b57;
}
#ballPadel {
  width: 120px;
  height: 120px;
  animation: girar 20s linear infinite;
}

@keyframes girar {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

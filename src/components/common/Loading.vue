<template>
  <div class="etc_warning">
    <div class="etc_inner">
      <div class="con">
        <div class="loading">loading</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.etc_warning {
  color: #5a5a5a;
  font-size: 14px;
  padding: 0;
}

.etc_warning .etc_inner {
  text-align: center;
  position: relative;
  z-index: 9999;
}

.etc_warning .con {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 58px;
}

.etc_warning .loading {
  width: 60px;
  height: 60px;
  font-size: 0;
  color: transparent;
  position: relative;
  display: block;
  border-radius: 50%;
  border: 6px solid transparent;
  border-top-color: #dcdcdc;
  border-left-color: #dcdcdc;
  border-bottom-color: #dcdcdc;
  animation: ring 1s ease-in-out infinite;
  transform: rotate(-45deg);
}
</style>

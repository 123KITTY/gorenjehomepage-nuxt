<template>
   <div class="layout-logo">
      <img src="~static/img/logo2.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
.layout-logo{
    height: 103px;
    border-radius: 3px;
    text-align: center;
    animation: 1s appear;
    padding-top: 28px;
    img{
        height: 65px;
    }
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>

<template>
  <n-space>
    <div>
      <n-layout position="absolute">
        <n-layout-header style="height: 64px; padding: 24px" bordered> 颐和园路 </n-layout-header>
        <div class="kuang">
          <n-carousel autoplay>
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
            />
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
            />
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
            />
            <img
              class="carousel-img"
              src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
            />
          </n-carousel>
        </div>
      </n-layout>
    </div>
  </n-space>
</template>

<script setup></script>

<style lang="less" scoped>
  .carousel-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    margin: 0 auto;
  }
  .kuang {
    align-content: center;
  }
</style>

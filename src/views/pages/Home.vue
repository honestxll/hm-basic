<script setup lang="ts"></script>

<template>
  <div class="page-link space-x-1">
    <router-link to="/blog" class="hm-btn">Blog</router-link>
    <router-link to="/login" class="hm-btn">Login</router-link>
  </div>
  <div class="he-mei">HM.</div>
</template>

<style scoped lang="scss">
.page-link {
  position: fixed;
  top: 24px;
  right: 24px;
}
.he-mei {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #799dcc;
  font-weight: lighter;
  font-size: 100px;
  letter-spacing: 24px;
  background: url('/src/assets/images/splash.png') no-repeat center center;
}
</style>

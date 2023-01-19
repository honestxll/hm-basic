<script setup lang="ts">
import { useUserStore } from '@/store'
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const userStore = useUserStore()
const formData = reactive({
  username: 'admin',
  password: '123456',
})
const router = useRouter()
const route = useRoute()
const onLogin = async () => {
  try {
    await userStore.login(formData)

    if (route.query.redirect) {
      router
        .replace({
          path: route.query.redirect as string,
        })
        .catch((e) => console.log(e))
    } else {
      router.push('/')
    }
  } catch (error) {
    alert((error as any).data.message || '登录失败')
  }
}
</script>

<template>
  <div class="login-form">
    <form @submit.prevent="onLogin" class="space-y-1 py-5">
      <input type="text" id="username" v-model="formData.username" placeholder="请输入用户名" />
      <input type="text" id="password" v-model="formData.password" placeholder="请输入密码" />
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 500px;
  margin: 0 auto;
  overflow: hidden;

  input,
  button {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 0 1em;
    font-size: 16px;
    line-height: 40px;
    letter-spacing: 4px;
    border: 1px solid #000;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #000;
  }
}
</style>

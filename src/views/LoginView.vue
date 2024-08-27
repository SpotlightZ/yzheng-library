<template>
<div class="login">
  <h1>FIT5032  A0 - Week 5 - eFolio</h1>
  <div class="col-3 login-box">
    <h4 class="text-center">Welcome to Login</h4>
    <!-- <form @submit.prevent="doLogin"> -->
      <div class="row mb-3">
        <div>
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            id="username"
            v-model="userName"
            />
            <!-- @blur="() => validateName(true)"
            @input="() => validateName(false)" -->
          <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
        </div>

        <div>
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="password"
            v-model="password"
            />
            <!-- id="password"
            @blur="() => validatePassword(true)"
            @input="() => validatePassword(false)" -->
          <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
        </div>
      </div>
      <button @click="doLogin" type="submit" >Login</button>
    <!-- </form> -->
  </div>
</div>
</template>
  
<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store';
import router from '../router/index'


const userName = ref('');
const password = ref('');
const userStore = useUserStore();


// const doLogin = () => {
  // userStore.login(userName.value, password.value);
  // validateName(true)
  // validatePassword(true)
  // if (userStore.isAuthenticated) {
  //   if (userStore.isAdmin) {
  //     console.log(userStore);
  //     // router.push('/admin-dashboard');
  //   } else if (userStore.isUser) {
  //     console.log('进入1');
  //   } else {
  //     console.log(userStore);
  //     // router.push('/guest-dashboard');
  //   }
  // }
// };


const doLogin = () => {
    // loginLoading.value = true;
    try {
        if (userName.value == "") {
            alert("Please enter your username");
            return;
        }
        if (password.value == "") {
            alert("Please enter your password");
            return;
        }

        userStore.login(userName.value, password.value);
        router.replace("/about");
    }
    finally {
        // loginLoading.value = false;
    }

}


const errors = ref({
  username: null,
  password: null
})
</script>
  
<style scoped>
.login {
  /* display: flex;
  justify-content: end;
  align-items: center; */
  position: relative;
  height: 100vh;
  padding: 40px;
  background: url('../assets/images/login.png');
}
.login-box {
  position: absolute;
  top: 50%;
  right: 80px;
  transform: translateY(-50%);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  /* background: red; */
}

button {
  width: 100%;
  height: 40px;
  background: #75A5FF;
  color: #fff;
  border: none;
  border-radius: 16px;
}
</style>
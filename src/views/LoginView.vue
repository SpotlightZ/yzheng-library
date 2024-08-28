<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store';
import router from '../router/index'


const userName = ref('');
const password = ref('');
const userStore = useUserStore();


const errors = ref({
  username: null,
  password: null
})

const validateName = (blur) => {
  if (userName.value == "") {
    if (blur) errors.value.username = 'Please enter your username'
  } else {
    errors.value.username = null
  }
}
const validatePassword = (blur) => {
  if (password.value == "") {
    if (blur) errors.value.password = 'Please enter your password'
  } else {
    errors.value.password = null
  }
}

const doLogin = () => {
    // loginLoading.value = true;
    try {
        if (userName.value == "") {
            errors.value.username = "Please enter your username";
            return;
        }
        if (password.value == "") {
            errors.value.password = "Please enter your password";
            return;
        }

        userStore.login(userName.value, password.value);
        const role = JSON.parse(localStorage.getItem('loggedInUser')).role
        console.log(role, '=role');


        if (role === 'admin') {
          router.replace("/home");
        } else if (role === 'user') {
          router.replace("/about");
        } else {
          // router.push('/guest-dashboard');
        }
    }
    finally {
        // loginLoading.value = false;
    }

}

</script>

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
            @blur="() => validateName(true)"
            @input="() => validateName(false)"
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
              @blur="() => validatePassword(true)"
              @input="() => validatePassword(false)"
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
<script lang="ts">
import "tw-elements";
import { postData } from '@/modules/fetchData';
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      postData("159.223.234.44:3000" + "/auth/login", 
        { username: this.username, 
          password: this.password 
        }).then((data) => {
          if (data.status === 200) {
            this.$router.push({ name: 'home' });
          } else {
            alert("Invalid username or password");
          }
        });
    },
  },
}
</script>

<template>
  <div class="modal-container overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
      <div class="modal-dialog dialog-container modal-open">
        <div class="dialog-content">
          <div class="image-container">
            <img class="logo" src="/img/logo.png" alt="Page Logo">
          </div>
          <div class="login-content">
            <h3 class="login-title">Login</h3>
            <label for="username" class="username-text">Username*</label>
            <div class="username-container">
              <input v-model="username" type="text" id="username" name="username" placeholder="Enter your Username">
              <img class="user icon" src="/img/user-icon.svg">
            </div>
            <label for="password" class="password-text">Password*</label>
            <div class="password-container">
              <input v-model="password" type="password" id="password" name="password" placeholder="Enter your Password">
              <img class="password icon" src="/img/email-icon.svg">
            </div>
          </div>
          <div class="forgot-password">
            <a href="">Forgot Password?</a>
          </div>
          <div class="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me">
            <label for="remember-me">Remember Me</label>
          </div>
          <div class="login-button-container">
            <button v-on:click="login" class="login-button btn">Log In</button>
          </div>
          <div class="log-in-options">
            <span class="line"></span>
            <p>or Log in with</p>
            <span class="line"></span>
          </div>
          <div class="social-media">
            <a href=""><img src="/img/github-icon.svg" width=28 height=28></a>
            <a href=""><img src="/img/linkedin-icon.svg" width=28 height=28></a>
            <a href=""><img src="/img/google-icon.svg" width=28 height=28></a>
          </div>
          </div>
        </div>
      </div>
</template>
<style lang="scss">
    .modal-container {
      @apply modal fixed top-0 left-0 bg-primary-light w-full h-full outline-none;
      .dialog-container {
        @apply modal-dialog-centered relative w-auto pointer-events-none;
        .dialog-content {
          @apply container modal-content border-none shadow-lg relative flex flex-col w-96 pointer-events-auto bg-white bg-clip-padding rounded-2xl outline-none text-current p-12 gap-3 max-sm:w-[325px] max-sm:h-[650px] max-sm:m-auto max-sm:flex max-sm:justify-center;
          .image-container {
            @apply flex justify-center;
            .logo {
              @apply w-14 max-sm:w-10;
            }
          }
  
          .login-content {
            @apply flex flex-col gap-3;
            .login-title {
              @apply text-2xl text-center mb-2 text-primary font-bold max-sm:text-xl;
            }
            .username-text,
            .password-text {
              @apply text-sm font-medium;
            }
            .username-container,
            .password-container {
              @apply mb-0.5 relative flex w-full;
              #username,
              #password {
                @apply w-full px-4 py-1.5 rounded-lg bg-primary-lighter border-black border-2;
              }
              #username::placeholder {
                @apply text-sm text-black-lighter;
              }
              #password::placeholder {
                @apply text-sm text-black-lighter;
              }
              .icon {
                @apply w-4 absolute top-3 right-5;
              }
            }
          }
  
          .forgot-password {
            @apply flex justify-end text-sm text-primary hover:text-primary-lighter;
          }
  
          .remember-me {
            @apply flex gap-3 text-sm accent-primary;
          }
  
          .login-button-container {
            @apply flex;
            .login-button {
              @apply w-full mt-1 mb-2;
            }
          }
  
          .log-in-options {
            @apply flex items-center justify-center gap-5 mb-2 text-sm text-black-lighter max-sm:text-[12px];
            .line {
              @apply w-16 h-0.5 bg-black-lighter max-sm:w-12;
            }
          }
  
          .social-media {
            @apply flex justify-evenly mb-2;
          }
        }
      }
    }
</style>
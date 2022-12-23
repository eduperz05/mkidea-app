<script lang="ts">
    import { postData } from '@/modules/fetchData';
    export default {
        name: 'SignUpView',
        data() {
            return {
                username: '',
                email: '',
                password: '',
            };
        },
        methods: {
            signup() {
                postData("159.223.234.44:3000" + "/auth/register",
                    {
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        role: 4
                    }).then((data) => {
                        if (data.status === 200) {
                        this.$router.push({ name: 'home' });
                        } else {
                            alert("Invalid parameters");
                        }
                    });
            },
        },
    }
</script>

<template>
    <div class="modal-container overflow-x-hidden overflow-y-auto" id="ModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
        <div class="modal-dialog dialog-container modal-open">
            <div class="dialog-content">
                <div class="image-container">
                    <img class="logo" src="/img/logo.png" alt="Page Logo">
                </div>
                <div class="signup-content">
                    <h3 class="signup-title">Sign Up</h3>
                    <label for="username" class="username-text">Username*</label>
                    <div class="username-container">
                        <input v-model="username" type="text" id="username" name="username" placeholder="Enter your Username">
                        <img class="user icon" src="/img/user-icon.svg">
                    </div>
                    <label for="email" class="email-text">Email*</label>
                    <div class="email-container">
                        <input  v-model="email"  type="email" id="email" name="email" placeholder="name@email.com">
                        <img class="user icon" src="/img/email-icon.svg">
                    </div>
                    <label for="password" class="password-text">Password*</label>
                    <div class="password-container">
                        <input v-model="password" type="password" id="password" name="password" placeholder="Enter your Password">
                        <img class="password icon" src="/img/password-icon.svg">
                    </div>
                </div>
                <div class="remember-me">
                    <input type="checkbox" id="remember-me" name="remember-me">
                    <label for="remember-me">Remember Me</label>
                </div>
                <div class="signup-button-container">
                    <button v-on:click="signup" class="signup-button btn">Sign Up</button>
                </div>
                <div class="sign-up-options">
                    <span class="line"></span>
                    <p>or Sign Up with</p>            
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

                .signup-content {
                    @apply flex flex-col gap-3;
                    .signup-title {
                        @apply text-2xl text-center mb-2 text-primary font-bold max-sm:text-xl;
                    }

                .username-text,
                .email-text,
                .password-text {
                    @apply text-sm font-medium;
                }

                .username-container,
                .email-container,
                .password-container {
                    @apply mb-0.5 relative flex w-full;
                    #username,
                    #email,
                    #password {
                        @apply w-full px-4 py-1.5 rounded-lg bg-primary-lighter border-black border-2;
                    }

                    #username::placeholder {
                        @apply text-sm text-black-lighter;
                    }

                    #email::placeholder {
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

            .remember-me {
                @apply flex gap-3 text-sm accent-primary;
            }

            .signup-button-container {
                @apply flex;
                .signup-button {
                    @apply w-full mt-1 mb-2;
                }
            }

            .sign-up-options {
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
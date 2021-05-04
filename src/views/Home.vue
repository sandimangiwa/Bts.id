<template>
  <div class="login-navbar" role="banner">
    <!-- body -->
    <div class="container">
      <div class="row justify-content-center align-items-center mt-5">
        <div class="col-lg-4 p-2 shadow ">
          <div class="login-page">
            <div class="form form-login ">
              <form class="login-form" @submit.prevent="register()">
                <h2 class="Create">Create Account</h2>

                <input type="name" class="form-control mt-2" v-model="username" placeholder="username" />

                <input type="text" class="form-control mt-2" v-model="email" placeholder="Email" />

                <div class="row mt-2">
                  <div class="col" style="margin-right: -20px">
                    <input type="password" class="form-control mt-2" v-model="password" placeholder="Password" />
                  </div>
                </div>

                <button class="btn btn-info mt-2" type="submit">Sign Up</button><br /><br />
                <div>
                  Sudah punya akun?
                  <router-link class="login-link" to="/Login">Login</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import axios from "@/axios";
export default {
  name: "Home",
  data() {
    return {
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    register() {
      let data = {
        email: this.email,
        password: this.password,
        username: this.username,
      };
      axios
        .post("register", data)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>

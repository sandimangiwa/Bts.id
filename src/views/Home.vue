<template>
  <div class="login-navbar" role="banner">
    <!-- body -->
    <div class="container">
      <div class="row">
        <div class="col images"></div>

        <!-- bagian Kanan -->
        <div class="col-lg-4 p-2">
          <div class="login-page">
            <div class="form form-login shadow">
              <form class="login-form" @submit.prevent="register()">
                <h2 class="Create">Create Account</h2>

                <input type="name" v-model="username" placeholder="username" />

                <input type="text" v-model="email" placeholder="Email" />

                <div class="row">
                  <div class="col" style="margin-right: -20px">
                    <input type="password" v-model="password" placeholder="Password" />
                  </div>
                </div>

                <button class="btn" type="submit">Sign Up</button><br /><br />
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>

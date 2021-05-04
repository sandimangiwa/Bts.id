<template>
  <div class="login-navbar" role="banner">
    <!-- body -->
    <div class="container ">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-4 p-2 shadow mt-5 text-center">
          <div class="login-page">
            <div class="form form-login ">
              <form class="login-form" @submit.prevent="Login()">
                <h2 class="Create">login</h2>
                <input type="text" class="form-control mt-2" v-model="username" placeholder="Username" />

                <div class="row mt-2">
                  <div class="col" style="margin-right: -20px">
                    <input type="password" class="form-control" v-model="password" placeholder="Password" />
                  </div>
                </div>

                <button class="btn btn-info mt-2" type="submit">login</button><br /><br />
                <div>
                  Sudah punya akun?
                  <router-link class="login-link" to="/">register</router-link>
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
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    Login() {
      let data = {
        username: this.username,
        password: this.password,
      };
      axios
        .post("login", data)
        .then((response) => {
          localStorage.setItem("token", "Bearer " + response.data.data.token);
          console.log(response.data.data.token);
          this.$router.push({ name: "ChecklistController" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>

<template>
  <div>
    <div class="container">
      <h1>checklist-controller</h1>
      <form class="login-form" @submit.prevent="postChecklist()">
        <input type="text" class="" placeholder="name" v-model="name" />
        <button class="btn btn-info">Post</button>
      </form>

      <b-table striped hover :items="checklist"></b-table>
      {{ checklist }}
      <button class="btn btn-danger" @click="deleteChecklist()">hapus</button>
      {{ checklistItem }}
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
export default {
  name: "ChecklistController",
  data() {
    return {
      checklist: {},
      name: "",
      checklistItem: {},
    };
  },
  created() {
    this.getChecklist();
    this.getChecklistItem();
  },
  methods: {
    getChecklist() {
      axios
        .get("checklist")
        .then((response) => {
          this.checklist = response.data.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    postChecklist() {
      const data = {
        name: this.name,
      };
      axios
        .post("checklist", data)
        .then((response) => {
          //   this.checklist = response.data.data;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteChecklist() {
      axios
        .delete("checklist/1")
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getChecklistItem() {
      axios
        .get("item/1")
        .then((response) => {
          this.checklistItem = response.data.data;
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

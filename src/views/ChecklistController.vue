<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>Checklist Controller</h1>
      <form class="login-form mb-2 mt-2 d-flex" @submit.prevent="postChecklist()">
        <input type="text" class="form-control" placeholder="name" v-model="name" />
        <button class="btn btn-info">Post</button>
      </form>

      <b-table striped hover :fields="fields" :items="checklist">
        <template #cell(action)="data">
          <div class="d-flex text-cemter">
            <b-button class="mx-1" size="sm" variant="danger" @click="deleteChecklist(checklist[data.index].id)">Hapus</b-button>
          </div>
        </template>
      </b-table>

      <h1>Checklist Item Controller</h1>
      {{ checklistItem }}
    </div>
  </div>
</template>

<script>
import axios from "@/axios";
import Navbar from "@/components/Navbar";
export default {
  name: "ChecklistController",
  components: {
    Navbar,
  },
  data() {
    return {
      checklist: {},
      fields: [
        {
          key: "id",
          sortable: true,
        },
        {
          key: "name",
          sortable: true,
        },
        {
          key: "items",
          sortable: true,
        },
        {
          key: "checklistCompletionStatus",
          sortable: true,
        },
        {
          key: "action",
          label: "Aksi",
          sortable: true,
        },
      ],
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
          axios
            .get("checklist")
            .then((response) => {
              this.checklist = response.data.data;
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteChecklist(id) {
      axios
        .delete("checklist/" + id)
        .then((response) => {
          axios
            .get("checklist")
            .then((response) => {
              this.checklist = response.data.data;
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });
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

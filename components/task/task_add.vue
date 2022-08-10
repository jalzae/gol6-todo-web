<template>
  <div>
    <form @submit="add" method="post" class="m-3 col-1">
      <div class="grid gap-6 mb-6 md:grid-cols-1">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Task Name</label
          >
          <input
            v-model="forms.name_task"
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter task Name"
            required
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Task Date</label
          >
          <input
            v-model="forms.entry_date"
            type="date"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter date"
            required
          />
        </div>
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Employe Assign</label
          >
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Employe Name"
            required
            v-model="forms.id_employe"
          >
            <option v-for="item in list" :key="item.id_employe" :value="item.id_employe">
              {{ item.name_employe }}
            </option>
          </select>
        </div>

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import task from "@/controller/task";
import employe from "@/controller/employe";
export default {
  head() {
    return {};
  },
  mixins: [task, employe],
  components: {},
  computed: {},
  props: [],
  data() {
    return {
      list: [],
      forms: {
        id_employe: "",
        name_task: "",
        status_task: 0,
        entry_user: "Admin",
        entry_date: "",
        update_user: "Admin",
      },
    };
  },
  methods: {
    async fetch() {
      try {
        let response = await this.getallemploye();
        this.list = response;
        this.forms.id_employe = this.list[0].id_employe;
      } catch (error) {}
    },
    async add(e) {
      e.preventDefault();
      this.forms.entry_date = new Date(this.forms.entry_date).toISOString();
      await this.addtask(this.forms);
      this.$parent.fetch();
      this.$parent.reset();
    },
  },
  async created() {
    this.fetch();
  },
};
</script>

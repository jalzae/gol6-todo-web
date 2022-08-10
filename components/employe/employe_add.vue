<template>
  <div>
    <form @submit="add" method="post" class="m-3 col-1">
      <div class="grid gap-6 mb-6 md:grid-cols-1">
        <div>
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Employe Name</label
          >
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Employe Name"
            v-model="forms.name_employe"
            required
          />
        </div>

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import employe from "@/controller/employe";
export default {
  head() {
    return {};
  },
  mixins: [employe],
  components: {},
  computed: {},
  props: [],
  data() {
    return {
      forms: {
        name_employe: "",
        status_delete: 0,
      },
    };
  },
  methods: {
    async add(e) {
      e.preventDefault();

      await this.addemploye(this.forms);
      this.$parent.fetch();
      this.$parent.reset();
    },
  },
  created() {},
};
</script>

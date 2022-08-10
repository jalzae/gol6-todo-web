<template>
  <div>
    <form @submit="update" method="post" class="m-3 col-1">
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
            v-model="selected.name_employe"
            required
          />
        </div>

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
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
  props: ["selected"],
  data() {
    return {};
  },
  methods: {
    async update(e) {
      e.preventDefault();
      await this.updateemploye(this.selected.id_employe, this.selected);
      this.$parent.fetch();
      this.$parent.reset();
    },
  },
  created() {},
};
</script>

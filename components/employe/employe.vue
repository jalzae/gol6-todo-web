<template>
  <div>
    <legend class="text-3xl font-normal leading-normal mt-0 mb-5">Employe</legend>
    <div class="m-3">
      <button
        v-if="isAdd == true || isEdit == true"
        class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        @click="reset"
      >
        List Employe
      </button>
      <button
        v-else
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="isAdd = true"
      >
        Add Employe
      </button>
    </div>
    <br />
    <div v-if="isAdd != true && isEdit != true">
      <table class="table-full w-full border border-slate-400 content-center">
        <thead>
          <tr>
            <th class="border border-slate-300 items-center">No</th>
            <th class="border border-slate-300">Employe</th>
            <th class="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody v-if="list.length == 0">
          <tr>
            <td colspan="3" class="border border-slate-300 text-center">No Data</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-for="(item, index) in list" :key="item.id_employe">
            <td class="border border-slate-300 text-center">{{ index + 1 }}</td>
            <td class="border border-slate-300 text-center">{{ item.name_employe }}</td>
            <td class="border border-slate-300 text-center">
              <button
                @click="del(item.id_employe)"
                class="bg-red-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-2 rounded"
              >
                <i class="fas fa-trash"></i>
              </button>
              <button
                @click="edit(item.id_employe)"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-2 rounded"
              >
                <i class="fas fa-pencil"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="isAdd != true && isEdit == true">
      <Edit :selected="selected"></Edit>
    </div>
    <div v-else>
      <Add></Add>
    </div>
  </div>
</template>
<script>
import Add from "./employe_add";
import Edit from "./employe_edit";
import employe from "@/controller/employe";
export default {
  head() {
    return {};
  },
  mixins: [employe],
  components: {
    Add,
    Edit,
  },
  computed: {},
  props: [],
  data() {
    return {
      isAdd: false,
      isEdit: false,
      list: [],
      selected: {},
    };
  },
  methods: {
    reset() {
      this.isAdd = false;
      this.isEdit = false;
    },
    async del(id) {
      try {
        await this.deleteemploye(id);
      } catch (error) {
      } finally {
        await this.fetch();
      }
    },
    async edit(id) {
      this.selected = this.list.find((e) => e.id_employe == id);
      this.isEdit = true;
    },
    async fetch() {
      try {
        let response = await this.getallemploye();
        this.list = response;
      } catch (error) {}
    },
  },
  async created() {
    await this.fetch();
  },
};
</script>

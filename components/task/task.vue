<template>
  <div>
    <legend class="text-3xl font-normal leading-normal mt-0 mb-5">Task</legend>
    <div class="m-3">
      <button
        v-if="isAdd == true || isEdit == true"
        class="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        @click="reset"
      >
        List Task
      </button>
      <button
        v-else
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="isAdd = true"
      >
        Add Task
      </button>
    </div>
    <div v-if="isAdd != true && isEdit != true">
      <table class="table-full w-full border border-slate-400 content-center">
        <thead>
          <tr>
            <th class="border border-slate-300 items-center">No</th>
            <th class="border border-slate-300">Task</th>
            <th class="border border-slate-300">Employe</th>
            <th class="border border-slate-300">Status</th>
            <th class="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody v-if="list.length == 0">
          <tr>
            <td colspan="5" class="border border-slate-300 text-center">No Data</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr v-for="(item, index) in list" :key="item.id_task">
            <td class="border border-slate-300 text-center">{{ index + 1 }}</td>
            <td class="border border-slate-300 text-center">{{ item.name_task }}</td>
            <td class="border border-slate-300 text-center">{{ item.name_employe }}</td>
            <td class="border border-slate-300 text-center" v-if="item.status_task == 0">
              <button
                @click="change(item.id_task)"
                class="bg-red-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-2 rounded"
              >
                Belum Selesai
              </button>
            </td>
            <td class="border border-slate-300 text-center" v-else>
              <button
                @click="change(item.id_task)"
                class="bg-green-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-2 rounded"
              >
                Selesai
              </button>
            </td>
            <td class="border border-slate-300 text-center">
              <button
                @click="del(item.id_task)"
                class="bg-red-500 hover:bg-blue-700 text-white font-bold m-3 py-2 px-2 rounded"
              >
                <i class="fas fa-trash"></i>
              </button>
              <button
                @click="edit(item.id_task)"
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
import Add from "./task_add";
import Edit from "./task_edit";
import task from "@/controller/task";
export default {
  head() {
    return {};
  },
  mixins: [task],
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
        await this.deletetask(id);
      } catch (error) {
      } finally {
        await this.fetch();
      }
    },
    async edit(id) {
      this.selected = this.list.find((e) => e.id_task == id);
      this.isEdit = true;
    },
    async change(id) {
      let data = this.list.findIndex((e) => e.id_task == id);
      let statusnow = this.list[data].status_task;
      if (statusnow == 0) {
        this.list[data].status_task = 1;
        this.changeStatus(id, 1);
      } else {
        this.list[data].status_task = 0;
        this.changeStatus(id, 0);
      }
    },
    async changeStatus(id, val) {
      await this.updatetask(id, { status_task: val });
    },
    async fetch() {
      try {
        let response = await this.getalltask();
        this.list = response;
      } catch (error) {}
    },
  },
  created() {
    this.fetch();
  },
};
</script>

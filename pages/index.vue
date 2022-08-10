<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
      integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <Nav />
    <!-- Content -->
    <div class="grid grid-cols-1 m-6 p-6">
      <div class="grid-cols-1 rounded overflow-hidden shadow-lg">
        <div v-if="menu == 'home'" class="px-6 py-4 justify-center">
          <Home></Home>
        </div>
        <div v-else-if="menu == 'employe'" class="px-6 py-4 justify-center">
          <Employe></Employe>
        </div>
        <div v-else class="px-6 py-4 justify-center">
          <Task></Task>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "@/components/home/home.vue";
import Employe from "@/components/employe/employe.vue";
import Task from "@/components/task/task.vue";
export default {
  head() {
    return {};
  },
  mixins: [],
  components: { Home, Employe, Task },
  computed: {},
  props: [],
  data() {
    return {
      menu: "task",
    };
  },
  methods: {
    selectMenu(val) {
      this.menu = val;
    },
  },
  created() {},
};
</script>

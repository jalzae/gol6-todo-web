<template>
  <div>
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
      menu: "home",
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

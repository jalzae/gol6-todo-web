import moment from 'moment'
export default {
  methods: {
    getalltask() {
      return this.$axios.$get("task", {
        headers: null
      });
    },

    addtask(data) {
      return this.$axios.$post("task", data, {
        headers: null
      });
    },

    updatetask(id, data) {
      return this.$axios.$post("task/" + id, data, {
        headers: null
      });
    },

    updatedynamictask(data) {
      return this.$axios.$post("task", data, {
        headers: null
      });
    },

    detailtask(id) {
      return this.$axios.$get("task/" + id, {
        headers: null
      });
    },

    deletetask(id) {
      return this.$axios.$delete("task/" + id, {
        headers: null
      });
    },
    formatDate(date) {
      return moment(String(date)).format('MM/DD/YYYY');
    }
  }
}
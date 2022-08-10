export default {
  methods: {
    getallemploye() {
      return this.$axios.$get("employe", {
        headers: null
      });
    },

    addemploye(data) {
      return this.$axios.$post("employe", data, {
        headers: null
      });
    },

    updateemploye(id, data) {
      return this.$axios.$post("employe/" + id, data, {
        headers: null
      });
    },

    updatedynamicemploye(data) {
      return this.$axios.$post("employe", data, {
        headers: null
      });
    },

    detailemploye(id) {
      return this.$axios.$get("employe/" + id, {
        headers: null
      });
    },

    deleteemploye(id) {
      return this.$axios.$delete("employe/" + id, {
        headers: null
      });
    },
  }
}
<template>
  <div class="contentCard">
    <TopButtons page="labels" :labelObj="labelObj" />
    <LabelButtons @click="showNotes($event)" :labelObj="labelObj" />
  </div>
</template>

<script>
import LabelButtons from "@/components/buttons/LabelButtons.vue";
import TopButtons from "@/components/buttons/TopButtons.vue";

export default {
  components: {
    LabelButtons,
    TopButtons,
  },
  data() {
    return {
      labelObj: [
        {
          id: 1,
          name: "test",
        },
        {
          id: 2,
          name: "work",
        },
        {
          id: 3,
          name: "groceries",
        },
      ],
    };
  },
  methods: {
    showNotes(e) {
      // console.log(e.target.id);
      if (e.target.id) {
        console.log("will get notes attached with this label id", e.target.id);
      }
    },
  },
};
</script>

<style></style>

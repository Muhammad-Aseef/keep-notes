<template>
  <div class="contentCard">
    <TopButtons page="archive" :noteObj="noteObj" @onUnarchive="unarchive()" />
    <NoteCard :noteObj="noteObj" />
  </div>
</template>

<script>
import NoteCard from "@/components/allNotes/NoteCard.vue";
import TopButtons from "@/components/buttons/TopButtons.vue";
import { useToast } from "vue-toastification";

export default {
  name: "Archive",
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  components: {
    NoteCard,
    TopButtons,
  },
  data() {
    return {
      noteObj: [
        {
          id: 1,
          title: "Mart",
          note: "Lorem ipsum eos facere, nam vel sequi assumenda fugibus?",
          color: "#FFF5B2",
          label: "jkjkjd",
          archive: true,
        },
        {
          id: 2,
          title: "tasks",
          note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?  consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus endis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?  consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dig?",
          color: "#DBCBD8",
          label: "jdskjdk",
          archive: true,
        },
      ],
    };
  },
  methods: {
    unarchive() {
      this.noteObj = [];
      this.showMessage();
    },
    showMessage() {
      this.toast.success("All notes unarchived successfully!");
    },
  },
};
</script>

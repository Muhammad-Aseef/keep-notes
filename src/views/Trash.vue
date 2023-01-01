<template>
  <div class="contentCard">
    <TopButtons
      page="trash"
      :noteObj="noteObj"
      @onEmpty="empty()"
      @onRestore="restore()"
    />
    <NoteCard :noteObj="noteObj" />
  </div>
</template>

<script>
import NoteCard from "@/components/allNotes/NoteCard.vue";
import TopButtons from "@/components/buttons/TopButtons.vue";
import { useToast } from "vue-toastification";

export default {
  name: "Trash",
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
          color: "#FADCD9",
          label: "jkjkjd",
          trash: true,
          archive: false,
        },
        {
          id: 2,
          title: "tasks",
          note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?  consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus endis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?  consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dig?",
          color: "#DBCBD8",
          label: "jdskjdk",
          trash: true,
          archive: false,
        },
        {
          id: 2,
          title: "tasks",
          note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?  consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus endis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?  consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dig?",
          color: "#DBCBD8",
          label: "jdskjdk",
          trash: true,
          archive: false,
        },
      ],
    };
  },
  methods: {
    empty() {
      this.noteObj = [];
      this.showMessgae();
    },
    restore() {
      this.noteObj = [];
      this.restoreMessage();
    },
    showMessgae() {
      this.toast.success("Trash emptied successfully!");
    },
    restoreMessage() {
      this.toast.success("All note restored successfully!");
    },
  },
};
</script>
<style></style>

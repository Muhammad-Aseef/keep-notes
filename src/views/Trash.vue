<template>
  <div class="contentCard">
    <NoteCard :noteObj="noteObj" />
  </div>
</template>

<script>
import NoteCard from "@/components/allNotes/NoteCard.vue";

export default {
  name: "Trash",
  components: {
    NoteCard,
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
        },
        {
          id: 2,
          title: "tasks",
          note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?  consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus endis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?  consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dig?",
          color: "#DBCBD8",
          label: "jdskjdk",
          trash: true,
        },
      ],
    };
  },
};
</script>

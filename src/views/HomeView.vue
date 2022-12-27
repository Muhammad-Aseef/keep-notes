<template>
  <div class="contentCard">
    <!-- <Header/> -->
    <NoteCard :noteObj="noteObj" />
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from "@/components/Header.vue";
import NoteCard from "@/components/allNotes/NoteCard.vue";

export default {
  name: "HomeView",
  components: {
    // Header,
    NoteCard,
  },
  data() {
    return {
      noteObj: [
        {
          id: 1,
          title: "2nd year",
          note: "Lorem ipsum dolor, sit am Necessitatibus?",
          color: "#BCECE0",
          label: "university",
        },
        {
          id: 2,
          title: "project abc",
          note: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?  consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus endis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam veerendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?  consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dignissimos veniam veritatis ipsa, aperiam, mollitia pariatur minima. Necessitatibus?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil earum perferendis eos facere, nam vel sequi assumenda fugit unde dolores sed dig?",
          color: "#B4F8C8",
          label: "work",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="note">
    <div
      class="noteCard"
      v-for="note in this.noteObj"
      :key="note.id"
      :style="cardColor(note)"
    >
      <div class="cardWrapper" style="height: 100%" @click="openCard(note)">
        <p class="cardTitle">{{ note.title }}</p>
        <hr style="background-color: #555; border: none; height: 1px" />
        <div class="cardContentDiv">
          <p>{{ note.note }}</p>
          <div class="label" v-if="note.label !== ''">
            <span>{{ note.label }}</span>
          </div>
        </div>
      </div>
      <!-- <div class="cardBottom">
        <div class="cardBottomWrapper">
          <hr style="background-color: #555; border: none; height: 1px" />
          <NoteActions :note="note" />
        </div>
      </div> -->
    </div>

    <div v-if="isOpen" class="openOverlayDiv" @click="isOpen = false">
      <div class="openCard" @click="cardClick($event)" :style="cardColor(note)">
        <div class="openWrapper">
          <p class="openCardTitle">{{ note.title }}</p>
          <hr style="background-color: #555; border: none; height: 1px" />
          <div class="openCardContent">
            <p>{{ note.note }}</p>
          </div>
        </div>
        <div class="openCardBottom">
          <NoteActions :class="{ openActions: true }" :note="note" />
          <div class="label openLabel" v-if="note.label !== ''">
            <span>{{ note.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NoteActions from "./NoteActions.vue";

export default {
  props: ["noteObj"],
  components: {
    NoteActions,
  },
  data() {
    return {
      isOpen: false,
      note: {},
    };
  },
  methods: {
    openCard(n) {
      this.note = n;
      // console.log(this.note);
      this.isOpen = true;
    },
    cardClick(e) {
      // console.log("card");
      e.stopPropagation();
    },
    cardColor(n) {
      return "background-color: " + n.color;
    },
  },
};
</script>

<style>
.note {
  /* margin: 10px; */
  padding: 10px;
  /* background-color: lightblue; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.noteCard {
  width: 250px;
  border-radius: 10px;
  /* background-color: lightcoral; */
  font-size: 16px;
  color: #333;
  line-height: 1.2;
  margin: 15px;
}

.cardTitle {
  text-align: center;
  padding: 7px 0px;
  font-weight: 500;
}
.cardContentDiv {
  padding: 10px 15px;
}
.cardContentDiv > p {
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 10; /*define how many line you want to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.label {
  margin-top: 20px;
}
.label > span {
  font-size: 13px;
  font-weight: 600;
  padding: 5px 13px;
  border-radius: 20px;
  background-color: lightgray;
  border: 1px solid #555;
}
.openLabel {
  margin: 0px;
}
.cardBottom {
  width: 100%;
}

.noteCard:hover {
  transform: scale(1.02);
  box-shadow: 1px 2px 9px 0px gray;
}
/* .noteCard:hover .cardBottomWrapper {
  display: block;
} */
.openOverlayDiv {
  width: 100vw;
  height: 100vh;
  background-color: rgb(95 88 88 / 31%);
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.openCard {
  width: 600px;
  /* background-color: burlywood; */
  font-size: 18px;
  color: #333;
  line-height: 1.3;
  border-radius: 10px;
}

.openCardTitle {
  text-align: center;
  padding: 7px;
  font-weight: 500;
}
.openCardContent {
  padding: 20px 10px;
  display: -webkit-box;
  -webkit-line-clamp: 18;
  -webkit-box-orient: vertical;
  overflow-y: scroll;
}
.openCardContent::-webkit-scrollbar {
  width: 12px;
}
.openCardContent::-webkit-scrollbar-track {
  border: none;
  background-color: rgb(224, 219, 219);
  border-radius: 20px;
}
.openCardContent::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: rgb(125, 128, 128);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.openCardBottom {
  margin-top: 10px;
  padding: 15px 15px;
  border-radius: 0px 0px 10px 10px;
  background-color: inherit;
  box-shadow: 0px -1px 7px 0px rgba(0, 0, 0, 0.411);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.openActions {
  width: 50%;
}
</style>

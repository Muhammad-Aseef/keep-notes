<template>
  <div class="note" v-if="noteObj.length !== 0">
    <div
      class="noteCard slideInTop"
      v-for="note in noteObj"
      :key="note.id"
      :style="{
        backgroundColor: note.color,
        border: note.color === 'white' ? '2px solid lightgray' : 'none',
      }"
    >
      <div class="cardWrapper" style="height: 100%" @click="openCard(note)">
        <div style="display: flex; align-items: center; position: relative">
          <p
            class="cardTitle"
            :style="{ height: note.title.length > 0 ? 'fit-content' : '20px' }"
          >
            {{ note.title }}
          </p>
          <vue-feather
            type="more-vertical"
            style="cursor: pointer"
            size="18"
            @click="openAction($event, note.id)"
          ></vue-feather>

          <NoteActions
            :id="'action' + note.id"
            class="hideAction"
            :note="note"
            @colorUpdated="closeAction(note.id)"
          />
        </div>
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
      <div
        class="openCard"
        @click="cardClick($event)"
        :style="{ backgroundColor: note.color }"
      >
        <div class="openWrapper">
          <!-- <p class="openCardTitle">{{ note.title }}</p> -->
          <input
            :disabled="note.trash"
            type="text"
            maxlength="45"
            v-model="note.title"
            class="openCardTitle"
          />
          <hr style="background-color: #555; border: none; height: 1px" />
          <textarea
            :disabled="note.trash"
            rows="16"
            v-model="note.note"
            class="openCardContent"
          ></textarea>

          <!-- <div class="openCardContent">
            <p>{{ note.note }}</p>
          </div> -->
        </div>
        <div class="openCardBottom">
          <OpenNoteActions :note="note" :isAdding="false" />
          <div class="label openLabel" v-if="note.label !== ''">
            <span>{{ note.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="note" v-else>
    <div class="noNotes"><h2>No Notes Added</h2></div>
  </div>
</template>

<script>
import NoteActions from "./NoteActions.vue";
import OpenNoteActions from "./OpenNoteActions.vue";

export default {
  props: ["noteObj"],
  components: {
    NoteActions,
    OpenNoteActions,
  },
  data() {
    return {
      isOpen: false,
      note: {},
      showActions: false,
    };
  },
  methods: {
    openCard(n) {
      this.note = n;
      // console.log(this.note);
      this.isOpen = true;
    },
    openAction(e, id) {
      e.stopPropagation();
      let card = document.getElementById("action" + id);
      // console.log(card);
      if (this.showActions) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
      this.showActions = !this.showActions;
    },
    closeAction(id) {
      let card = document.getElementById("action" + id);
      card.style.display = "none";
      console.log(id);
    },
    cardClick(e) {
      // console.log("card");
      e.stopPropagation();
    },
  },
};
</script>

<style>
.note {
  /* margin: 10px; */
  padding: 0px 10px;
  /* background-color: lightblue; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: flex-start; */
}
.noteCard {
  width: 250px;
  border-radius: 10px;
  /* background-color: lightcoral; */
  font-size: 16px;
  color: #333;
  line-height: 1.2;
  margin: 10px;
  position: relative;
}
.slideInTop {
  animation: 1s ease-in-out 0s 1 slideInTop;
}
@keyframes slideInTop {
  from {
    transform: translateY(-20%);
    opacity: 0.4;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.cardTitle {
  width: 85%;
  text-align: center;
  font-weight: 500;
  padding: 7px;
  background-color: inherit;
  border: none;
  outline: none;
  word-break: break-all;
}
.cardContentDiv {
  padding: 10px 15px;
}
.cardContentDiv > p {
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 7; /*define how many line you want to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
}
.label {
  margin-top: 10px;
  cursor: pointer;
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
  /* transform: scale(1.02); */
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
  z-index: 100;
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
  width: 100%;
  height: fit-content;
  text-align: center;
  padding: 7px 0px;
  font-weight: 500;
  background-color: inherit;
  color: inherit;
  font-size: 18px;
}
.openCardContent {
  width: -webkit-fill-available;
  padding: 10px 20px;
  font-size: 16px;
  line-height: 1.3;
  background-color: inherit;
  color: #333;

  /* display: -webkit-box;
  -webkit-line-clamp: 18;
  -webkit-box-orient: vertical;
  overflow-y: scroll; */
}
.openCardContent::-webkit-scrollbar {
  width: 10px;
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
  /* margin-top: 10px; */
  padding: 12px 15px;
  border-radius: 0px 0px 10px 10px;
  background-color: inherit;
  box-shadow: 0px -1px 7px 0px rgba(0, 0, 0, 0.411);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hideAction {
  display: none;
}
.noNotes {
  width: 100%;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.noNotes > h2 {
  font-family: "Caveat", cursive;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  color: #333;
}
</style>

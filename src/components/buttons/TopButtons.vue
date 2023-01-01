<template>
  <!-- methods will be call here and loadnote will be call on emit later -->
  <div class="buttonsDiv" v-if="page == 'trash' && noteObj.length !== 0">
    <button class="topButton fade" @click="this.$emit('onEmpty')">
      Empty Trash
    </button>
    <button class="topButton fade" @click="this.$emit('onRestore')">
      Restore all
    </button>
  </div>
  <div class="buttonsDiv" v-if="page == 'archive' && noteObj.length !== 0">
    <button class="topButton fade" @click="this.$emit('onUnarchive')">
      Unarchive All
    </button>
  </div>
  <div class="buttonsDiv" v-if="page == 'home' && noteObj.length !== 0">
    <button class="topButton fade" v-if="!addNote" @click="addNote = true">
      Add Note
    </button>
    <button class="topButton fade" v-else @click="saveNote()">save</button>
  </div>
  <div
    class="addNote"
    v-if="addNote"
    :style="{
      backgroundColor: note.color,
      border: note.color === 'white' ? '2px solid lightgray' : 'none',
    }"
  >
    <input
      type="text"
      placeholder="Enter title"
      maxlength="45"
      v-model="note.title"
      class="addTitle"
    />
    <hr style="background-color: #777; border: none; height: 1px" />
    <textarea
      rows="4"
      placeholder="Enter note"
      v-model="note.note"
      class="addContent"
    ></textarea>
    <OpenNoteActions :note="note" :isAdding="true" />
  </div>
</template>
<script>
import OpenNoteActions from "../allNotes/OpenNoteActions.vue";
import { useToast } from "vue-toastification";

export default {
  props: ["page", "noteObj"],
  components: {
    OpenNoteActions,
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  //   created() {
  //     console.log(this.noteObj);
  //   },
  data() {
    return {
      addNote: false,
      note: {
        id: 0,
        title: "",
        note: "",
        color: "white",
        label: "label",
      },
    };
  },
  methods: {
    saveNote() {
      if (this.note.title === "" || this.note.note === "") {
        this.toast.error("Please fill the note correctly!");
      } else {
        this.toast.success("Note saved successfully!");
        this.noteObj.push(this.note);
        this.note = {
          id: 0,
          title: "",
          note: "",
          color: "white",
          label: "label",
        };
        this.addNote = false;
      }
    },
  },
};
</script>
<style>
/* .buttonsDiv {
  display: flex;
  justify-content: center;
} */
.topButton {
  padding: 10px 20px;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: whitesmoke;
  color: #444;
  border: 2px solid;
}

.topButton:hover {
  background-color: #444;
  color: whitesmoke;
}
.fade {
  animation: 3.5s 0s 1 fade;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.addNote {
  color: #333;
  width: 450px;
  /* box-shadow: 2px 2px 9px 0px lightgray; */
  border-radius: 10px;
  padding: 10px;
  background-color: white;
}
.addTitle {
  width: -webkit-fill-available;
  height: fit-content;
  text-align: left;
  font-size: 15px;
  letter-spacing: 1px;
  padding: 10px 0px;
  word-break: break-all;
  background-color: inherit;
  color: inherit;
}
.addContent {
  width: -webkit-fill-available;
  padding: 10px 0px;
  font-size: 15px;
  line-height: 1.2;
  background-color: inherit;
  color: inherit;
}
.addContent::-webkit-scrollbar {
  width: 10px;
}
.addContent::-webkit-scrollbar-track {
  border: none;
  background-color: rgb(224, 219, 219);
  border-radius: 20px;
}
.addContent::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background-color: rgb(125, 128, 128);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.addActions {
  padding: 0px;
}
.addButtons {
  justify-content: flex-start;
}
</style>

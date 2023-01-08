<template>
  <div :class="['cardActions', note.trash && 'adjust']" @click="stop($event)">
    <ul class="actionButtons" v-if="!note.trash">
      <li class="actionItem hoverItem" @click="openPalette($event)">
        <vue-feather type="codesandbox" size="20"></vue-feather>
        <p>Change color</p>
        <div class="colorPalette" v-if="paletteOpen" @click="stop($event)">
          <div
            class="colorOption"
            v-for="color in colorOptions"
            :key="color"
            @click="changeColor(color)"
            :style="{
              backgroundColor: color,
              border: note.color === color && '1px solid black',
            }"
          >
            <vue-feather
              type="check"
              size="20"
              style="float: right"
              v-if="note.color === color"
            ></vue-feather>
          </div>
        </div>
      </li>
      <li class="actionItem hoverItem">
        <vue-feather type="trash-2" size="20"></vue-feather>
        <p>Delete</p>
      </li>
      <li class="actionItem hoverItem" v-if="!note.archive">
        <vue-feather type="folder-minus" size="20"></vue-feather>
        <p>Archive</p>
      </li>
      <li class="actionItem hoverItem" v-else>
        <vue-feather type="folder-plus" size="20"></vue-feather>
        <p>Unarchive</p>
      </li>
      <li class="actionItem hoverItem" @click="openLabel()">
        <vue-feather type="plus-circle" size="20"></vue-feather>
        <p>Add Label</p>
        <div class="selectLabel" v-if="labelOpen" @click="stop($event)">
          <p style="border-bottom: 2px solid">Choose Label</p>

          <div v-for="label in allLabels" :key="label.id" class="labelOption">
            <input
              type="checkbox"
              :value="label.id"
              :checked="label.name === note.label"
              :id="'checkbox' + label.id"
              @change="getValue(label)"
            />
            <span class="">
              {{ label.name }}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <ul class="actionButtons" v-else>
      <li class="actionItem hoverItem">
        <vue-feather type="trash-2" size="20"></vue-feather>
        <p>Delete</p>
      </li>
      <li class="actionItem hoverItem">
        <vue-feather type="refresh-ccw" size="20"></vue-feather>
        <p>Restore</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["note"],
  data() {
    return {
      paletteOpen: false,
      labelOpen: false,
      colorOptions: [
        "#BFD0E0",
        "#BCECE0",
        "#B4F8C8",
        "#FFF5B2",
        "#EFE7BC",
        "#FBE7C6",
        "#FADCD9",
        "#DBCBD8",
      ],
      allLabels: [
        {
          id: 1,
          name: "university",
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
    openPalette(e) {
      //   console.log(this.note);
      this.paletteOpen = !this.paletteOpen;
      // e.stopPropagation();
    },
    stop(e) {
      e.stopPropagation();
    },
    changeColor(c) {
      if (this.note.color === c) {
        return;
      } else {
        this.note.color = c;
        console.log(this.note);
        this.paletteOpen = false;
        this.$emit("changesUpdated");
      }
    },
    openLabel() {
      this.labelOpen = !this.labelOpen;
    },
    getValue(label) {
      if (this.note.label === label.name) {
        this.note.label = "";
      } else {
        let cb = document.querySelectorAll("input[type=checkbox]");
        const selectedLabel = document.getElementById("checkbox" + label.id);
        console.log(cb, selectedLabel);
        cb.forEach((el) => {
          if (el !== selectedLabel) {
            el.checked = false;
          }
        });
        this.note.label = label.name;
        this.labelOpen = false;
        this.$emit("changesUpdated");
      }
    },
  },
};
</script>

<style>
.cardActions {
  /* padding: 10px 15px; */
  background-color: whitesmoke;
  position: absolute;
  top: 100%;
  right: -40%;
  border-radius: 10px;
  z-index: 99;
}
.adjust {
  right: -30%;
}
.actionButtons {
  padding: 0px;
  list-style: none;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
}
.actionItem {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}
.hoverItem:hover {
  background-color: #e8eef2;
}
.actionItem > p {
  /* display: none; */
  width: max-content;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px 3px;
  letter-spacing: 1px;
  /* background-color: #444;
  color: white;
  position: absolute;
  top: -5px;
  right: 18px;
  margin-top: 5px; */
  color: #333;
  margin-left: 7px;
}
/* .actionItem:hover p {
  display: flex;
} */
.colorPalette {
  background-color: white;
  /* width: 300px; */
  padding: 10px;
  display: flex;
  /* flex-wrap: wrap; */
  border-radius: 10px;
  box-shadow: 1px 2px 9px 0px lightgray;
  position: absolute;
  top: 80%;
  left: -50%;
  z-index: 99;
}
.colorOption {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0px 7px;
}
.colorOption:hover {
  border: 1px solid gray;
}
.selectLabel {
  width: max-content;
  background-color: white;
  color: #333;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 1px 2px 9px 0px lightgray;
  position: absolute;
  left: 100%;
  top: 0px;
  z-index: 99;
}
.labelOption {
  margin: 5px 0px;
  display: flex;
  align-items: center;
}
.labelOption > span {
  margin-inline: 8px;
  word-break: break-all;
}
</style>

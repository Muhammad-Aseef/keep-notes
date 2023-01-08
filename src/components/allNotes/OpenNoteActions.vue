<template>
  <div
    class="openActions"
    @click="note.trash && showMessage()"
    :style="{ padding: isAdding && '0px' }"
  >
    <ul
      v-if="!isAdding"
      :class="['actionButtons', 'openButtons', note.trash && 'disableClass']"
    >
      <li
        class="actionItem OpenhoverItem"
        @click="!note.trash && openPalette($event)"
      >
        <vue-feather type="codesandbox"></vue-feather>
        <span>Change Color</span>
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
      <li class="actionItem OpenhoverItem">
        <vue-feather type="trash-2"></vue-feather>
        <span>Delete</span>
      </li>
      <li class="actionItem OpenhoverItem" v-if="!note.archive">
        <vue-feather type="folder-minus"></vue-feather>
        <span>Archive</span>
      </li>
      <li class="actionItem OpenhoverItem" v-else>
        <vue-feather type="folder-plus"></vue-feather>
        <span>Unarchive</span>
      </li>
      <li class="actionItem OpenhoverItem" @click="!note.trash && openLabel()">
        <vue-feather type="plus-circle"></vue-feather>
        <span>Add Label</span>
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
    <ul v-else :class="['actionButtons', 'addButtons']">
      <li class="actionItem OpenhoverItem" @click="openPalette($event)">
        <vue-feather type="codesandbox"></vue-feather>
        <span>Change Color</span>
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
      <li class="actionItem OpenhoverItem" @click="openLabel()">
        <vue-feather type="plus-circle"></vue-feather>
        <span>Add Label</span>
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
  </div>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  props: ["note", "isAdding"],
  data() {
    return {
      paletteOpen: false,
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
      labelOpen: false,
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
    stop(e) {
      e.stopPropagation();
    },
    openPalette(e) {
      //   console.log(this.note);
      this.paletteOpen = !this.paletteOpen;
    },
    changeColor(c) {
      if (this.note.color === c) {
        return;
      } else {
        this.note.color = c;
        console.log(this.note);
        this.paletteOpen = false;
        // this.$emit("colorUpdated");
      }
    },
    showMessage() {
      this.toast.error("You cannot edit trashed note!");
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
      }
    },
  },
};
</script>

<style>
.openActions {
  width: 100%;
  padding: 0px 10px;
  flex: 2;
}
.openButtons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.addButtons {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
.actionItem {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}
.OpenhoverItem:hover > span {
  display: block;
}
.actionItem > span {
  display: none;
  width: max-content;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px 10px;
  background-color: #444;
  color: rgba(255, 255, 255, 0.89);
  position: absolute;
  top: 68%;
  left: 52%;
}
.disableClass {
  opacity: 0.7;
}
</style>

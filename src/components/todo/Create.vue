<template>
  <div class="create">
    <ToDoInput :text="updatedText"
               :id="defaultInputId"
               @change-text="changeText"
    />

    <SaveBtn :disabled="isBtnDisabled"
             @save="saveInput"
    />
  </div>
</template>

<script>
import ToDoInput from './Input.vue';
import SaveBtn from "./SaveBtn.vue";

export default {
  name: 'ToDoCreate',
  components: {
    ToDoInput,
    SaveBtn,
  },
  data() {
    return {
      disable: false,
      updatedText: '',
      defaultInputId: 0,
    }
  },
  computed: {
    isBtnDisabled () {
      return !this.updatedText;
    },
  },
  methods: {
    changeText (text) {
      this.updatedText = text;
    },
    saveInput () {
      if (!this.updatedText.length) {
        return;
      }
      this.$store.commit('addToDo', this.updatedText);
      this.updatedText = '';
    },
  },
}
</script>

<style type="text/css">
.create {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>

<template>
  <div class="create">
    <ToDoInput :text="updatedText"
               :id="defaultInputId"
               ref="mainInput"
               @change-text="changeText"
               @handle-enter="saveInput"
    />

    <SaveBtn data-name="save"
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
    focusInput () {
      this.$refs.mainInput.$refs.input.focus();
    },
  },
  mounted () {
    this.focusInput();
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

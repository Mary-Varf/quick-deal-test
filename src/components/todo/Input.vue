<template>
  <input class="input"
         type="text"
         placeholder='Задание'
         ref="input"
         :value="text"
         @input="handelChangeInput"
         @focus="setEditModeTaskId"
         @keydown="handleKeyDown"
  />
</template>

<script>
export default {
  name: 'ToDoInput',
  props: {
    text: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handelChangeInput (e) {
      this.$emit('change-text', e.target.value);
    },
    setEditModeTaskId () {
      this.$store.commit('setEditModeTaskId', this.id);
    },
    handleKeyDown (e) {
      if(e.keyCode === 13) {
        this.$emit('handle-enter');
      }
    },
  },
}
</script>

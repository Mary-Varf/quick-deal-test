<template>
  <div>
    <ul class="list"
        v-if="hasTodos">
      <ToDoListItem
        v-for="task of todos"
        :key="task.id"
        :task="task"
      />
    </ul>

    <h2 v-else>Задачи отсутствуют</h2>
  </div>
</template>

<script>
import ToDoListItem from './ListItem.vue';
export default {
  name: 'ToDoList',
  components: { ToDoListItem },
  data() {
    return {
      todos: this.$store.state.todos,
    };
  },
  computed: {
    hasTodos () {
      return this.todos ? !!this.todos.length : false;
    },
  },
  mounted () {
    this.$store.commit('setTodos');
  },
}
</script>

<style type="text/css">
.list {
  padding: 30px;
}
@media(max-width: 560px) {
  .list {
    padding: 15px 0;
  }
}
</style>

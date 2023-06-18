<template>
  <section class="container">
    <h1>Список задач</h1>

    <ToDoCreate/>
    <ToDoList />

    <button class="btn btn-fixed"
            data-name="go back">
      <router-link to="/">
        <GoBackIcon />
      </router-link>
    </button>
  </section>
</template>

<script>
import ToDoList from "./List.vue";
import ToDoCreate from './Create.vue';
import GoBackIcon from "./icons/Goback.vue";

export default {
  name: 'ToDoPage',
  components: {
    ToDoList,
    ToDoCreate,
    GoBackIcon,
  },
}

</script>

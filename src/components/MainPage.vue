 <template>
   <section class="container glass-effect">
     <h1>{{ title }}</h1>

     <h2>Задача</h2>
     <p>Разработать простое приложение таск-менеджера с использованием Vue 2 (можно использовать composition API), включая работу с vuex и vue-router.
       Приложение должно иметь главную страницу и страницу со списком задач
       На странице со списком задач должна быть форма создания задачи.
       Задачи можно удалить и отредактировать. При обновлении страницы должны отображаться сохранённые задачи.</p>

     <router-link to="/todo">
       <button class="text_btn">Список задач</button>
     </router-link>
   </section>
 </template>

 <script>
 export default {
   name: 'MainPage',
   components: {},
   props: {
     title: {
      type: String,
       default: 'Вводное тестовое задание Quick Deal '
     }
   },
 }

 </script>

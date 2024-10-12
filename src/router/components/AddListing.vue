<template>
  <div>
    <header class="header flex-center">
      <h1 class="header__logo">New Life</h1>
      <div class="header__links flex-center">
        <router-link to="/">Главная</router-link>
        <router-link to="/add">Добавить объявление</router-link>
        <router-link to="/login">Авторизоваться</router-link>
        <router-link to="/register">Зарегистрироваться</router-link>
      </div>
    </header>

    <section class="main">
      <h2 class="main__title">Добавить объявление</h2>
      <form @submit.prevent="addListing" class="main__form">
        <input type="text" class="main__input" placeholder="Телефон" />
        <input type="text" class="main__input" placeholder="Почта" />
        <input type="text" class="main__input" placeholder="Вид животного" />
        <input type="text" class="main__input" placeholder="Имя животного" />
        <textarea class="main__area1" placeholder="Описание..."></textarea>
        <button class="main__button">Отправить информацию</button>
      </form>
    </section>

    <footer class="footer">
      <h2 class="footer__title">@ 2024 Новая жизнь. Все права защищены.</h2>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    addListing() {
      // Логика добавления объявления
    },
  },
}
</script>

<style scoped>
/* Ваши стили здесь */
</style>
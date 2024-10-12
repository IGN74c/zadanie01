<template>
    <div>
      <header class="header flex-center">
        <h1 class="header__logo">New Life</h1>
        <div class="header__links flex-center">
          <router-link to="/">Главная</router-link>
          <router-link to="/add">Добавить объявление</router-link>
          <router-link to="/login">Авторизоваться</router-link>
        </div>
      </header>
  
      <section class="main">
        <h2 class="main__title">Регистрация</h2>
        <form @submit.prevent="register" class="main__form">
          <input type="text" class="main__input" placeholder="Почта" />
          <input type="text" class="main__input" placeholder="Телефон" />
          <input type="text" class="main__input" placeholder="Логин" />
          <input type="password" class="main__input" placeholder="Пароль" />
          <input type="text" class="main__input" placeholder="Имя" />
          <button class="main__button">Зарегистрироваться</button>
          <router-link to="/login" class="main__link-login">Есть аккаунта?</router-link>
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
      register() {
      },
    },
  }
  </script>

  
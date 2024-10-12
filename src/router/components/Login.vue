<template>
    <div>
      <header class="header flex-center">
        <h1 class="header__logo">New Life</h1>
        <div class="header__links flex-center">
          <router-link to="/">Главная</router-link>
          <router-link to="/add">Добавить объявление</router-link>
          <router-link to="/login" class="header__link header__link--login">Авторизоваться</router-link>
          <router-link to="/register" class="header__link header__link--register">Зарегистрироваться</router-link>
        </div>
      </header>
  
      <section class="main">
        <h2 class="main__title">Авторизация</h2>
        <form @submit.prevent="login" class="main__form">
          <input type="text" class="main__input" placeholder="Почта" />
          <input type="password" class="main__input" placeholder="Пароль" />
          <div class="main__check">
            <label class="main__checkbox">
              <input type="checkbox" /> Запомнить меня
            </label>
          </div>
          <button class="main__button">Авторизоваться</button>
          <router-link to="/register" class="main__link--register">Нет аккаунта?</router-link>
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
      login() {
      },
    },
  }
  </script>
  
  
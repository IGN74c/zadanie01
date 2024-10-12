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
        <img :src="pet.image" alt="Pet" class="main__image" />
        <h3 class="main__title">Вид животного: {{ pet.type }}</h3>
        <h4 class="main__title">Имя нашего человека:</h4>
        <h4 class="main__subtitle">{{ pet.ownerName }}</h4>
        <h4 class="main__title">Контактный номер телефона:</h4>
        <h4 class="main__subtitle">{{ pet.phone }}</h4>
        <h4 class="main__title">Дата нахождения:</h4>
        <h4 class="main__subtitle">{{ pet.dateFound }}</h4>
        <h4 class="main__title">Описание:</h4>
        <h4 class="main__subtitle">{{ pet.description }}</h4>
        <button class="main__button" @click="viewMore">Отправить информацию</button>
      </section>
  
      <footer class="footer">
        <h2 class="footer__title">@ 2024 Новая жизнь. Все права защищены.</h2>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pet: {
          image: '',
          type: '',
          ownerName: '',
          phone: '',
          dateFound: '',
          description: '',
        }
      };
    },
    mounted() {
      this.fetchPetData();
    },
    methods: {
      fetchPetData() {
      },
      viewMore() {
      },
    },
  }
  </script>
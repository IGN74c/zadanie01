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

    <section class="hero flex-center">
      <h2 class="hero__title">Найдите своего потерянного питомца</h2>
      <input type="text" class="hero__search"
        placeholder="Введите данные о питомце (например, вид, цвет, местоположение)" />
      <button class="hero__buttonSearch">Искать сейчас</button>
    </section>

    <section class="recentlyFoundPets flex-center">
      <h2 class="recentlyFoundPets__title">Недавно найденные домашние животные</h2>
      <div class="recentlyFoundPets__petGrid">
        <div v-for="pet in pets" :key="pet.id" class="recentlyFoundPets__card">
          <img :src="pet.image" alt="Pet" class="recentlyFoundPets__imageCard" />
          <h3 class="recentlyFoundPets__titleCard">{{ pet.name }}</h3>
          <h4 class="recentlyFoundPets__subtitleCard">{{ pet.location }}</h4>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <h2 class="testimonials__title">Истории успеха</h2>
      <div class="testimonialsSlider flex-center">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonials__card">
          <img :src="testimonial.image" alt="User" class="testimonials__imageCard" />
          <h3 class="testimonials__cardName">{{ testimonial.name }}</h3>
          <p class="testimonials__textCard">{{ testimonial.text }}</p>
        </div>
      </div>
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
      pets: [
        {
          id: 1,
          name: 'Бобик',
          location: 'Москва',
          image: ''
        },
        {
          id: 2,
          name: 'Мурка',
          location: 'Санкт-Петербург',
          image: ''
        },
        {
          id: 3,
          name: 'Том',
          location: 'Казань',
          image: ''
        },
        {
          id: 4,
          name: 'Бобик',
          location: 'Москва',
          image: ''
        },
        {
          id: 5,
          name: 'Мурка',
          location: 'Санкт-Петербург',
          image: ''
        },
        {
          id: 6,
          name: 'Том',
          location: 'Казань',
          image: ''
        },
      ],
      testimonials: [
        {
          id: 1,
          text: 'Спасибо за быстрое решение проблемы с потерянным питомцем!',
          name: 'Анастасия',
          image: ''
        },
        {
          id: 2,
          text: 'Отличное приложение, нашел своего кота всего за день!',
          name: 'Игорь',
          image: ''
        },
      ]
    };
  },
  mounted() {
  },
}
</script>

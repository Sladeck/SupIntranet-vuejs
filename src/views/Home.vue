<template>
  <main id="home-view">
    <div class="container">
      <h1>Bienvenue dans l'intranet</h1>

      <p>La plate-forme sociale de l'entreprise</p>

      <hr>

      <p>Avez-vous dit bonjour aujourd'hui à :</p>

      <user-card :user="user"></user-card>

      <div class="actions">
        <a href="#" @click.prevent="randomUser" class="btn">
          <icon name="random" /> Dire bonjour à quelqu'un d'autre
        </a>
      </div>
    </div>
  </main>
</template>


<script>
import users        from '../data/_users.json'
import UserCard     from '../components/UserCard.vue'

export default {
  name: 'home-view',

  components: { UserCard },

  data () {
    return {
      user : null
    }
  },

  methods: {
    // Prend un utilisateur au hasard dans le tableau 'users'
    randomUser() {
      this.user = users[ Math.floor(Math.random() * users.length) ]
    }
  },

  // Lorsque le composant App est initialisé par Vue.js, on charge un utilisateur au hasard
  created() {
    this.randomUser()
  }
}
</script>

<style lang="css">
</style>

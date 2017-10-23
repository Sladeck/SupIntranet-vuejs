<template>
  <main id="app">
    
    <header>
      <nav class="container">
        <a href="#">Accueil</a>
        <a href="#">Liste des collaborateurs</a>
        <a href="#">Ajouter un collaborateur</a>
      </nav>
    </header>
    
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

    </div><!-- .container -->
  </main>
</template>

<script>
import users from './data/_users.json'
import UserCard from './components/UserCard.vue'

export default {
  name: 'app',
  
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

<style lang="scss">
body {
  margin: 0;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/**
 * Style du header
 */

header {
  background-color: #42b983;
  overflow: hidden;
  margin-bottom: 3em;

  > .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  a:link,
  a:visited {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 0.75em 1em;
    transition: all 150ms;
    transform: scale(1);
  }
  
  a:hover {
    background-color: #128953;
    transform: scale(1.05);
  }
  a:active {
    transition: none;
    color: #128953;
    background-color: #82f9c3
  }

  a:last-of-type {
    margin-left: auto;
  }
}

/**
 * Styles pour un bouton
 */

.btn {
  display: inline-block;
  padding: 0.5em 1.4em;
  color: #fff;
  text-decoration: none;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  background: linear-gradient(to bottom, #42b983, #128953);
}
.btn:hover {
  background: linear-gradient(to bottom, #42b983 50%, #128953);
}
.btn:active {
  background: linear-gradient(to bottom, #128953, #42b983 50%);
}

/**
 * Styles génériques
 */

.actions {
  margin-top: 1.4em;
}

.fa-icon { vertical-align: middle }

</style>

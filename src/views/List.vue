<template>
  <main id="list-view">
    <div class="container">
      <input type="text" name="search_name" placeholder="Recherchez un nom...">
      <select class="" name="list_by">
        <option value="name">nom</option>
        <option value="alphab">alphabétique</option>
      </select>
      <hr>
      <div v-for="user in users" class="card">
        <user-card :user="user"></user-card>
      </div>
    </div>
  </main>
</template>


<script>
import users        from '../data/_users.json'
import UserCard     from '../components/UserCard.vue'

export default {
  name: 'list-view',

  components: { UserCard },

  data () {
    return {
      users : users
    }
  },

}
</script>

<style lang="scss">
#list-view {
    margin-top: 20px;
}

.card {
  position: relative;
  display: inline-block;
  padding: 20px;
}

.card article.user-card {
  width: 340px;
  height: 140px;
}

hr {
  margin-top: 25px;
  width: 80%;
}

</style>

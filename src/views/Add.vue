<template >
  <main id="add-view">
    <div class="container">
      <h1>Ajouter un utilisateur</h1>
      <hr>

      <form class="userform">
        <label for="firstname">Nom :</label>
        <input type="text" name="firstname" id="firstname"><br>

        <label for="lastname">Prénom :</label>
        <input type="text" name="lastname" id="lastname"><br>

        <label for="email">Email :</label>
        <input type="email" name="email" id="email"><br>

        <label for="date_ob">Date de naissance :</label>
        <input type="date" name="date_ob" id="date_ob"><br>

        <label for="town">Ville</label>
        <input type="text" name="town" id="town"><br>

        <label for="Country">Pays</label>
        <input type="text" name="country" id="country"><br>

        <label for="number">Téléphone : </label>
        <input type="number" name="tel" id="number">

      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'add-view',
}
</script>

<style lang="css">
</style>

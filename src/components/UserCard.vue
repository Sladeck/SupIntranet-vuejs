<template>
    <article class="user-card">
        <figure>
            <img :src="user.photo" :alt="fullname">
        </figure>
        <div>
            <h1>{{fullname}}</h1>
            <p>
            <icon name="envelope" /> <a href="mailto:edouard.brun@example.com" :title="'Envoyer un email à ' + fullname">{{user.email}}</a><br>
            <icon name="phone" /> <a :href="'tel:'+user.phone" :title="'Téléphoner à ' + fullname">{{user.phone}}</a><br>
            <icon name="calendar" /> {{user.birthdate}} ({{user.birthdate | age}} ans)<br>
            <icon name="map-marker" /> {{user.city}}, {{user.country}}
            </p>
        </div>
    </article>
</template>

<script>
export default {
    props : {
        user : { type: Object, required : true }
    },

    computed: {
        fullname() {
        return this.user.firstname + ' ' + this.user.lastname
        }
    }
}
</script>

<style lang="scss" scoped>

/**
 * Style pour la card user
 */

.user-card {
  display: inline-flex;
  align-items: stretch;
  box-shadow: 0 0 15px #c0c0c0;
  border-radius: 2px;
  background-color: #fafafa;
  overflow: auto;
  text-align: left;
  padding: 0.25em 1.25em 0.25em 0;

  > figure {
    margin: 0.25em;
    text-align: center;
    display: flex;
    align-items: center;
    > img {
      display: block;
      border-radius: 300px;
    }
  }

  > div {
    margin: 0.25em;
    font-size: 0.8em;
    line-height: 1.6em;
  }

  h1 {
    margin: 0.25em 0 0.5em;
  }
}

</style>


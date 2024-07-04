<template>
  <nav>
   
   <!-- <router-link to="/">Home</router-link>  -->
   <!--  <router-link to="/about">About</router-link> -->
    <router-link to="/bien">Bien</router-link>
    <router-link to="/mouvement">Mouvement_Bien</router-link>
    <router-link to="/fournisseur">Fournisseur</router-link>
    <router-link to="/amortissement">Amortissement</router-link>
    <router-link to="/categorie2">Categorie</router-link>
    <router-link to="/service">Service</router-link>
    <router-link to="/type">Type_Bien</router-link>
    
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  
  }
  
}
</style>

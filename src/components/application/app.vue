<template>
  <div class="main">
    <Header
      :leve1=false
      :leve2=true
      :leve3=false
      :leve4=true
      :leve5=false
      :leve6=true
      :leve7=false
      :leve8=true
      :leve9=false
      :leve10=true
      :leve11=false
      :leve12=true
      :leve13=true
      :leve14=false
      :leve15=false
      :leve16=true
    ></Header>
      <router-view></router-view>
  </div>

</template>

<script>
import '../../css/index.css';
import Header from '../publi/header';
export default {
  components: { Header},
}

</script>

<style scoped>

</style>
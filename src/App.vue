<template>
  <div class="container-fluid">
    <Header />
    <ApplyPersonalLoan />
    <OtherPages />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import OtherPages from './components/OtherPages'
import ApplyPersonalLoan from './components/ApplyPersonalLoan'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    OtherPages,
    ApplyPersonalLoan
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

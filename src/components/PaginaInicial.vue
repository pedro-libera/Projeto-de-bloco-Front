<template>

  <div>

    <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="#">Página Inicial</b-nav-item>

      <b-navbar-nav>
        <b-nav-item target="_blank" href="http://localhost:8080/Cardapio"><strong>Cardapio</strong></b-nav-item>
      </b-navbar-nav>

      <b-nav-item-dropdown text="Idiomas" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
        <b-dropdown-item href="#">MAN</b-dropdown-item>
        <b-dropdown-item href="#">JP</b-dropdown-item>
        <b-dropdown-item href="#">COR</b-dropdown-item>
        <b-dropdown-item href="#">POR</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown text="Cliente" right>
        <b-dropdown-item href="#">Sua Conta</b-dropdown-item>
        <b-dropdown-item href="http://localhost:8080/">Sair da Conta</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>



      <b-jumbotron header="Página Inicial" :lead="$route.params.nome +'-> TURISTAS HELP'">
    <p><strong> Sempre com você </strong></p>

    </b-jumbotron>
    <hr>
    <div class="input-group input-group-lg">
      <input
        v-model="texto"
        placeholder="Busque pelo seu restaurante"
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
      />
    </div>

    <hr />

    <iframe
      :src=" srcRestaurante"
      frameborder="0"
      height="500px"
      width="100%"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Página Inicial",
  data() {
    return {
      texto: "",
    };
  },
  computed: {
    srcRestaurante: function () {
      return (
        "https://maps.google.com/maps?q=restaurante%20" +
        this.texto.toString() +
        "%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
      );
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Cliente Cadastro</b-nav-item>

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
          <b-dropdown-item href="#">Opções</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>

    <b-jumbotron
      header="Turistas Help"
      lead="Se cadastre em nossa plataforma digital de restaurante!"
    >
      <p>
        <strong
          >Ache o restaurante que seja a sua cara!</strong
        >
      </p>
    </b-jumbotron>

    <b-form-group>
      <b-form-group>
      <b-form-input
        v-model="form.email"
        type="email"
        required
        placeholder="E-mail (@):"
      ></b-form-input>
    </b-form-group>
      <b-form-input
        v-model="form.nome"
        type="text"
        required
        placeholder="Nome Completo:"
      ></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input
        v-model="form.Rua"
        type="text"
        required
        placeholder="Rua:"
      ></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input
        v-model="form.Bairro"
        type="text"
        required
        placeholder="Bairro:"
      ></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input
        v-model="form.Cep"
        type="text"
        required
        placeholder="CEP:"
      ></b-form-input>
    </b-form-group>

    <hr />
    <b-button
      variant="success"
      :to="{ name: 'PaginaInicial', params: { nome: form.nome} }"
      >Cadastrar</b-button
    >
  </div>
</template>

<script>
export default {
  name: "Cadastro",
  data() {
    return {
      form: { nome: "", email: "", Rua:"", Bairro:"", Cep:"" },
    };
  },
};
</script>

<style>
</style>
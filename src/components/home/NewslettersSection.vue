<template>
  <div class="news_section">
    <v-container>
      <h1>{{ $t("misc.newsletter") }}</h1>
      <p>{{ $t("misc.getUpdates") }}</p>
      <v-form>
        <v-row>
          <v-col cols="12" lg="4" md="4" xs="4" style="padding: 0">
            <InputText
              type="text"
              v-model="name"
              required
              :placeholder="$t('placeholder.name')"
            />
          </v-col>
          <v-col cols="12" lg="4" md="4" xs="4" style="padding: 0">
            <InputText
              type="text"
              v-model="email"
              required
              :placeholder="$t('placeholder.email')"
            />
          </v-col>
          <v-col cols="12" lg="4" md="4" xs="4" style="padding: 0">
            <button type="submit">{{ $t("buttons.subscribe") }}</button></v-col
          >
        </v-row>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.news_section {
  h1 {
    text-align: center;
    margin-bottom: 10px;
    font-family: Roboto, sans-serif;
    color: #b99bb6;
    font-size: 13.5px;
    font-weight: 700;
  }
  p {
    text-align: center;
    font-size: 23px;
    color: #5f4d5d;
    margin-bottom: 30px;
  }
  .v-form {
    margin: auto;
    width: 60%;
  }
  input,
  button {
    border: 1px solid #b99bb6;
    font-family: Roboto, sans-serif;
    padding: 10px;
    width: 100%;
    height: 60px;
    outline: none;
    width: 100%;
    &::placeholder {
      color: #b99bb6;
      padding: 0 5px;
      font-size: 16px;
    }
    &:focus {
      outline: 2px solid #9696f8;
      border: none;
    }
  }
  button {
    background-color: #b99bb6;
    transition: 0.3s all ease-in-out;
    color: white;
    &:hover {
      color: #b99bb6;
      background-color: white;
      transition: 0.3s all ease-in-out;
    }
  }
}
</style>

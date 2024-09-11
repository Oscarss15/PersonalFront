<script setup>
import TitleLogin from "@/components/TitleLogin.vue";
import TitleSecondaryLogin from "@/components/TitleSecondaryLogin.vue";
import Login from "@/components/Login.vue";
</script>

<template>
  <main>
    <div id="contTitleLogin">
      <div id="contTitle">
        <div id="contTextPrincipal">
          <TitleLogin></TitleLogin>
        </div>
        <div id="contTextSecondary">
          <TitleSecondaryLogin></TitleSecondaryLogin>
        </div>
      </div>
    </div>
    <div id="containerLogin">
      <Login></Login>
    </div>
  </main>
</template>
<style scoped>
main {
  width: 100%;
  min-height: 657px;
  background: url("../assets/img/login/fondo.png") no-repeat center center;
  background-size: cover;
  object-fit: cover;
  background-attachment: fixed;
}

#contTitleLogin {
  width: 65%;
  height: 655px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
#containerLogin {
  width: 35%;
  height: 655px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
}

#contTitle {
  width: 100%;
  height: 40%;
}

#contTextPrincipal {
  width: 100%;
  height: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
}

#contTextSecondary {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

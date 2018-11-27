<template>
  <div class="modal-body">
    <!-- <h3>{{ users.title }}</h3>Municipio/Ciudad:<h5> {{ users.location }}</h5>Calle: <h5>Antonio Machado 45</h5><hr> -->
    <!-- <h5>Teléfono : {{ users.tlf }} <i class="material-icons">&#xe0cd;</i></h5> -->
    <h2>子ページです</h2>
    <p>【ID】：{{users}}</p>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ["users"],
  data() {
    return {
      idnum: null
    };
  }
};
</script>
<style scoped media="screen">
h3 {
  color: #a85122;
}
</style>

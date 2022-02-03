<template>
  <section
    class="
      container-fluid
      main-wrap
      d-flex
      justify-content-center
      align-items-center
      flex-column
    "
  >
    <div class="profile-info container">
      <div class="row">
        <div class="col">1 of 3</div>
        <div class="col-6">2 of 3 (wider)</div>
        <div class="col">3 of 3</div>
      </div>
    </div>
    <div class="pictures-wrap container">
      <div class="row row-cols-3">
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
        <div class="col">Column</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-wrap {
  height: 100vh;
  outline: solid 5px red;
}
.profile-info {
  outline: solid 5px blue;
}
.pictures-wrap {
  outline: solid 5px green;
}
</style>

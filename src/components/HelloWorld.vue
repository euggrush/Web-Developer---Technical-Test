<template>
  <section
    class="
      main-wrap
      d-flex
      justify-content-center
      align-items-center
      flex-column
    "
  >
    <div class="profile-info container p-3 rounded">
      <div class="row">
        <div class="col">
          <img
            src="../assets/img/profile.jpeg"
            class="rounded-circle"
            alt="logo"
            width="120"
            height="120"
          />
        </div>
        <div class="col-6">
          <h3>{{ accountInfo.name }}</h3>
          <p>Bio</p>
          <p>
            {{ accountInfo.bio }}
          </p>
        </div>
        <div class="col">
          <p>Phone</p>
          <a href="tel:+555-555-5555">{{ accountInfo.phone }}</a>

          <p>Email</p>
          <a href="mailto:nick.reynolds@domain.co">{{ accountInfo.email }}</a>
        </div>
      </div>
    </div>

    <div class="pictures-wrap container mt-3">
      <div class="row row-cols-auto gap-3">
        <div
          v-for="(image, index) in accountInfo.album"
          :key="index"
          class="col image-wrap rounded p-0"
        >
          <img
            src="@/assets/img/landscape1.jpeg"
            class="img-fluid"
            alt="image"
          />
          <div class="image-information">
            <h4 class="text-white ps-1">{{ image.title }}</h4>
            <span class="d-block pt-3 ps-3 pe-3 pb-1">
              {{ image.description }}
            </span>
            <div class="d-flex justify-content-between pt-1 ps-3 pe-3">
              <div v-show="image.featured" class="featured-icon">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m12.82 5.58-.82.822-.824-.824a5.375 5.375 0 1 0-7.601 7.602l7.895 7.895a.75.75 0 0 0 1.06 0l7.902-7.897a5.376 5.376 0 0 0-.001-7.599 5.38 5.38 0 0 0-7.611 0Z"
                    fill="#FF0000"
                  />
                </svg>
              </div>
              <span>{{ image.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      account: [],
    };
  },
  computed: {
    accountInfo() {
      return this.account;
    },
  },
  async mounted() {
    await axios
      .get(`http://localhost:3000/accounts`)
      .then((response) => {
        this.account = response.data[0];
        console.log(this.account);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
}
a {
  color: rgb(163, 59, 77);
  text-decoration: none;
}
.main-wrap {
  font-size: 11px;
  line-height: normal;
  min-height: 100vh;

  background: #7941ec;
  background: -webkit-linear-gradient(top, #7941ec, #e3dd82);
  background: -moz-linear-gradient(top, #7941ec, #e3dd82);
  background: linear-gradient(to bottom, #7941ec, #e3dd82);
}
.profile-info {
  text-align: start;
  background-color: $colorWhite;
  @include media-breakpoint-up(lg) {
    max-width: 950px;
  }
}
.pictures-wrap {
  @include media-breakpoint-up(lg) {
    max-width: 930px;
  }
}
.image-wrap {
  width: 100%;
  min-height: 250px;
  background-color: $colorWhite;
  text-align: justify;
  @include media-breakpoint-up(md) {
    width: 31.6%;
  }
  @include media-breakpoint-up(lg) {
    width: 32%;
  }
}
.image-information {
  margin-top: -40px;
}
</style>

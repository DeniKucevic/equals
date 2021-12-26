<template>
  <div id="app">
    <b-container fluid>
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="white"
        fixed="top"
        style="
          border-bottom: 1.5px solid rgba(41, 170, 225, 0.5);
          text-align: center;
        "
      >
        <b-navbar-brand href="#">
          <div id="images_">
            <!-- img -->
            <img
              fluid-grow
              src="./assets/grb.png"
              alt="Grb Srbije"
              class="d-inline-block align-top"
              id="grb"
            />

            <img
              fluid-grow
              src="./assets/logo-srb.png"
              alt="Fondacija Ana i Vlade Divac"
              class="d-inline-block align-top"
              id="divac"
            />
            <div style="display: inline-block">
              <img
                fluid-grow
                src="./assets/Headline.jpg"
                alt="FOTO_Fondacija Ana i Vlade Divac - Ana Košel, Slavica Đukić Dejanović, Mateja Norčič Štamcar, Tina Aničić"
                class="d-inline-block align-top"
                id="eu"
              />
            </div>
          </div>
          <!-- end img -->
        </b-navbar-brand>

        <!-- button nav -->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav right>
              <b-nav-item>
                <b-link to="/" class="text-decoration-none">{{
                  $t("nav.home")
                }}</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link to="/about" class="text-decoration-none">{{
                  $t("nav.about")
                }}</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link to="/news" class="text-decoration-none">{{
                  $t("nav.news")
                }}</b-link>
              </b-nav-item>
              <b-nav-item>
                <b-link to="/publications" class="text-decoration-none">{{
                  $t("nav.publications")
                }}</b-link>
              </b-nav-item>
            </b-navbar-nav>
            <select
              v-model="$i18n.locale"
              style="height: 27px; margin: auto"
              class="language-select"
            >
              <option
                v-for="(lang, i) in langs"
                :key="`Lang${i}`"
                :value="lang"
              >
                {{ lang }}
              </option>
            </select>
          </b-navbar-nav>
        </b-collapse>
        <div class="social-icons">
          <div style="display: inline-block" class="facebookSvg">
            <a
              href="https://www.facebook.com/Jednaki-102330545226798"
              target="_blank"
              rel="noopener noreferrer"
              class="anchor"
            >
              <svg
                viewBox="0 0 320 512"
                id="facebook"
                class="svg-inline--fa fa-facebook-f fa-w-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
          </div>
          <div style="display: inline-block" class="twitterSvg">
            <a
              href="https://twitter.com/Jednaki3"
              target="_blank"
              rel="noopener noreferrer"
              class="anchor"
            >
              <svg
                viewBox="0 0 512 512"
                id="twitter"
                class="svg-inline--fa fa-twitter fa-w-16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </b-navbar>
      <!-- end navbar-->

      <router-view />

      <Footer />
    </b-container>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
  name: "locale-changer",
  data() {
    return {
      langs: {
        srb: "srb",
        eng: "eng",
        cir: "ћир",
      },
    };
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.navbar-brand {
  padding: 0 0 0 0 !important;
}
#grb {
  width: 55px;
  height: 55px;
}
#divac {
  width: 120px;
  height: 55px;
}
#eu {
  width: 350px;
  height: 55px;
}
#facebook {
  width: 62px;
  height: 28px;
  margin-left: 1rem;
}
#facebook:hover {
  fill: blue;
  cursor: pointer;
}
#twitter {
  width: 62px;
  height: 32px;
}

#twitter:hover {
  fill: rgb(0, 160, 253);
  cursor: pointer;
}
.anchor {
  padding: 0 !important;
  margin: 0 !important;
}
.container-fluid {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.row {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

a.router-link-exact-active {
  background-color: #1c144f;
  color: white !important;
  text-decoration: none;
}
.navbar a {
  font-weight: bold;
  color: #2c3e50;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
  font-size: 14px;
}
.navbar-toggler {
  border-color: #1c144f !important;
}
.navbar-toggler-icon {
  background-color: #1c144f !important;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/***************nav bar Mobile*/
@media only screen and (min-width: 300) and (max-width: 355px) {
  #images_ {
    width: auto;
  }
  #facebook {
    margin-left: 0;
  }

  .social-icons {
    margin: auto;
  }

  .navbar {
    padding-left: 6px !important;
    padding-right: 6px !important;
    min-height: 71px;
  }

  .language-select {
    width: 50%;
  }

  #grb {
    width: 27px;
    height: 22.5px;
  }
  #divac {
    width: 59px;
    height: 22.5px;
  }
  #eu {
    width: 150px;
    height: 22.5px;
  }
}

@media only screen and (min-width: 356px) and (max-width: 450px) {
  #images_ {
    width: auto;
  }

  .language-select {
    width: 50%;
    text-align: center;
  }

  #facebook {
    margin-left: 0;
  }

  .social-icons {
    margin: auto;
  }

  .navbar {
    padding-left: 10px !important;
    padding-right: 10px !important;
    min-height: 71px;
  }

  #grb {
    width: 28px;
    height: 22.5px;
  }

  #divac {
    width: 60px;
    height: 22.5px;
  }

  #eu {
    width: 175px;
    height: 22.5px;
  }
}

@media only screen and (min-device-width: 451px) and (max-device-width: 630px) {
  #images_ {
    width: auto;
  }
  #facebook {
    margin-left: 0;
  }
  .social-icons {
    margin: auto;
  }

  .langauge-select {
    width: 50%;
  }
  .navbar {
    padding-left: 10px !important;
    padding-right: 10px !important;
    min-height: 71px;
  }
  #grb {
    width: 30px;
    height: 30px;
  }
  #divac {
    width: 80px;
    height: 30px;
  }
  #eu {
    width: 200px;
    height: 30px;
  }
}
</style> 
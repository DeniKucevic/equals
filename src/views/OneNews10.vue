<template>
  <div class="wrapper">
    <b-row
      fluid
      class="one_news"
      align-h="center"
      style="background-color: #1c144f; height: 165px"
    >
      <b-col
        xl="10"
        lg="10"
        md="10"
        sm="12"
        cols="12"
        align-self="center"
        class="mt-2"
      >
        <h3>{{ $t("oneNews10.header") }}</h3>
      </b-col>
    </b-row>

    <b-row align-h="center" style="height: auto" class="col1">
      <b-col xl="7" sm="12" md="12" lg="12">
        <p>
          <b>{{ $t("oneNews10.b1") }} </b>{{ $t("oneNews10.p1")
          }}<a
            href="https://divac.com/rs/Naslovna"
            target="_blank"
            rel="noopener noreferrer"
            class="anchor"
            >{{ $t("oneNews10.link1") }}</a
          >{{ $t("oneNews10.p111") }}<b>{{ $t("oneNews10.b2") }}</b
          >{{ $t("oneNews10.p112") }}<br /><br />{{ $t("oneNews10.p2")
          }}<b>{{ $t("oneNews10.b3") }}</b
          >{{ $t("oneNews10.p221") }}<br /><br /><b>{{ $t("oneNews10.b4") }}</b
          >{{ $t("oneNews10.p3") }} <br /><br />
          {{ $t("oneNews10.p4") }} <br /><br />
          {{ $t("oneNews10.p5") }}<b>{{ $t("oneNews10.b5") }}</b
          >{{ $t("oneNews10.p551") }} <br /><br />
          {{ $t("oneNews10.p6") }}<b>{{ $t("oneNews10.b6") }}</b
          >{{ $t("oneNews10.p661") }}<br /><br />
          {{ $t("oneNews10.p7") }} <br /><br /><b>{{ $t("oneNews10.b7") }}</b
          >{{ $t("oneNews10.p8") }} <br /><br />
          <b>{{ $t("oneNews10.b8") }}</b
          >{{ $t("oneNews10.p9") }} <br /><br />
          {{ $t("oneNews10.p10") }}<b>{{ $t("oneNews10.b9") }}</b
          >{{ $t("oneNews10.p101") }} <br /><br />
          {{ $t("oneNews10.p11")
          }}<a
            href="mailto:marija.batinica@divac.com"
            target="_blank"
            rel="noopener noreferrer"
            class="anchor"
            >{{ $t("oneNews10.m1") }}</a
          ><br /><br />{{ $t("oneNews10.p12") }} <br /><br />
        </p>
      </b-col>
    </b-row>

    <b-row align-h="center" style="height: auto" class="mt-5">
      <b-col xl="8">
        <b-img
          :src="require('../assets/vest10.png')"
          fluid-grow
          alt="Fluid-grow image"
        ></b-img>
      </b-col>
    </b-row>

    <b-row align-h="center" class="mb-5">
      <b-col xl="1">
        <button @click="back()">←{{ $t("news.back") }}</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push({
        name: "News",
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  margin-top: 71px;
  height: auto;
}

.col1 p {
  font-size: 14px;
  color: #333333;
  line-height: 1.7;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: justify;
}

.one_news h3 {
  font-size: 22px;
  font-weight: normal;
  color: white;
  margin-top: 6px;
}

span {
  font-style: italic;
}
</style>
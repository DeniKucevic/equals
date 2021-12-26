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
        <h3>{{ $t("oneNews4.header") }}</h3>
      </b-col>
    </b-row>

    <b-row align-h="center" style="height: auto" class="col1">
      <b-col xl="7" sm="12" md="12" lg="12">
        <p>
          {{ $t("oneNews4.p1") }}
          <br /><br />
          <span>{{ $t("oneNews4.p2") }}</span> <br /><br />
          <span>{{ $t("oneNews4.p3") }}</span> <br /><br />
          <span>{{ $t("oneNews4.p4") }}</span> <br /><br />
          {{ $t("oneNews4.p5") }} <br /><br />
          {{ $t("oneNews4.p6") }} <br /><br />
          {{ $t("oneNews4.p7") }} <br /><br />
          {{ $t("oneNews4.p8") }} <br /><br />
          {{ $t("oneNews4.p9") }} <br /><br />
          {{ $t("oneNews4.p10") }} <br /><br />
          {{ $t("oneNews4.p11") }} <br /><br />
          {{ $t("oneNews4.p12") }} <br /><br />
          {{ $t("oneNews4.p13") }} <br /><br />
          {{ $t("oneNews4.p14") }} <br /><br />
          {{ $t("oneNews4.p15") }} <br /><br />
          {{ $t("oneNews4.p16") }} <br /><br />
          {{ $t("oneNews4.p17") }} <br /><br />
          {{ $t("oneNews4.p18") }} <br /><br />
          {{ $t("oneNews4.p19") }}
        </p>
      </b-col>
    </b-row>

    <b-row align-h="center" style="height: auto" class="mt-5">
      <b-col xl="8">
        <b-img
          :src="require('../assets/8mart1.png')"
          fluid-grow
          alt="Fluid-grow image"
        ></b-img>
      </b-col>
    </b-row>

    <b-row align-h="center" style="height: auto" class="mt-5">
      <b-col xl="8">
        <b-img
          :src="require('../assets/8mart2.png')"
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
  mounted() {
    window.scrollTo(0, 0);
  },
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
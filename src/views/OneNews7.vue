<template>
  <div class="wrapper">

    <b-row fluid class="one_news" align-h="center" style="background-color: #1c144f; height: 165px;">
      <b-col  xl="10" lg="10" md="10" sm="12" cols="12" align-self="center" class="mt-2"  >
        <h3>{{$t('oneNews7.header')}}</h3>
      </b-col>
    </b-row>

    <b-row  align-h="center" style="height: auto;" class="col1" >
      <b-col xl="7" sm="12" md="12" lg="12" >
        <p>
                    <b>   {{$t('oneNews7.date')}}</b>
          <br /><br /> <span>{{$t('oneNews7.p1')}}</span>
          <br /><br /> <span>{{$t('oneNews7.p2')}}</span>
          <br /><br /> {{$t('oneNews7.p3')}}
          <br /><br /> {{$t('oneNews7.p4')}}
          <br /><br /> <span>{{$t('oneNews7.p5')}}</span>
          </p>

      </b-col>
    </b-row>

    <b-row align-h="center" style="height: auto;" class="mt-5">
      <b-col xl="8">
        <b-img :src="require('../assets/18septembar.png')" fluid-grow alt="Fluid-grow image"></b-img>  
      </b-col>
    </b-row>
    
    <b-row align-h="center" class="mb-5">
      <b-col xl="1">
        <button @click="back()" >←{{$t('news.back')}}</button>
      </b-col>
    </b-row>
     
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push({
        name: "News"
      });
    }
  }
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

.one_news h3{
  font-size: 22px;
  font-weight: normal;
  color: white;
  margin-top: 6px;
}

span{
    font-style: italic;
}

</style>
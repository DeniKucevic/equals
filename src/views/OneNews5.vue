<template>
  <div class="wrapper">

    <b-row fluid class="one_news" align-h="center" style="background-color: #1c144f; height: 165px;">
      <b-col  xl="10" lg="10" md="10" sm="12" cols="12" align-self="center" class="mt-2"  >
        <h3>{{$t('oneNews5.header')}}</h3>
      </b-col>
    </b-row>

    <b-row  align-h="center" style="height: auto;" class="col1" >
      <b-col xl="7" sm="12" md="12" lg="12" >
        <p>
                       <b>{{$t('oneNews5.p1')}}</b>
          <br /><br /> <span>{{$t('oneNews5.p2')}}</span> 
          <br /><br /> <span>{{$t('oneNews5.p3')}}</span> 
          <br /><br /> <span>{{$t('oneNews5.p4')}}</span> 
          <br /><br /> <b>{{$t('oneNews5.date')}}</b>
          <br /><br /> {{$t('oneNews5.p5')}}<b>{{$t('oneNews5.b')}}</b>{{$t('oneNews5.p51')}}
          <br /><br /> {{$t('oneNews5.p6')}}
          <br /><br /> {{$t('oneNews5.p7')}}
          <br /><br /> {{$t('oneNews5.p8')}}<b>{{$t('oneNews5.b1')}}</b>
          <br /><br /> {{$t('oneNews5.p9')}}
          <br /><br /> {{$t('oneNews5.p10')}}<b>{{$t('oneNews5.b2')}}</b> 
          <br /><br /> {{$t('oneNews5.p11')}}
          <br /><br /> {{$t('oneNews5.p12')}}
          </p>

      </b-col>
    </b-row>

    <b-row align-h="center" style="height: auto;" class="mt-5">
      <b-col xl="8">
        <b-img :src="require('../assets/9mart.png')" fluid-grow alt="Fluid-grow image"></b-img>  
      </b-col>
    </b-row>

    <b-row align-h="center" style="height: auto;" class="mt-5">
      <b-col xl="8">
        <b-img :src="require('../assets/9mart2.png')" fluid-grow alt="Fluid-grow image"></b-img>  
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
    font-weight: bold;
}

</style>
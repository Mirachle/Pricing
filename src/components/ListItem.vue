<template>
  <div :class="['card', cardClicked]">
    <div class="professional" v-if="this.item.name === 'Professional'">
      RECOMMENDED
    </div>
    <div class="professional2" v-if="this.item.name != 'Professional'"></div>
    <h2>{{this.item.name}}</h2>
    <div class="line">
      <div class="line gold">
        $
      </div>
      <div class="item line">
        {{this.item.price}}
      </div>
      {{dateType}}
    </div>
    <div class="description" v-for="(desriptionItem, dIndex) in descriptionList" :key="dIndex">
      <img class="line" src="@/assets\icon.png" alt="">
      <div class="line" style="margin-left:5%;">{{desriptionItem}}</div>
    </div>
    <input type="button"
           value="SIGN UP TODAY"
           class="button">
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['item', 'index', 'dateType'],
  data() {
    return {
      descriptionList: this.item.descriptionList,
    };
  },
};
</script>

<style scoped>
.card{
  border: 0px;
  box-shadow: 0 2px 18px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.card:hover{
  box-shadow: 0 6px 35px 0 rgba(0, 0, 0, 0.2);
  border: solid 2px #00d28a;
  transform: scale(1, 1.1);
  z-index: 1;
}

.card:hover input{
  background-color: #3ccf8e;
  color: #ffffff;
  border: 0px;
}

h2{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18.1px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #242f40;
  margin-top: 10%;
}

.line{
  display: inline-block;
}

.item{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40.1px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #242f40;
  margin-top: 5%;
  margin-bottom: 7%;
  margin-right: 2%;
}

.button{
  background-color: #ffffff;
  margin: 20%;
  height: 50px;
  border-radius: 2.3px;
  border: solid 0.6px #5b6b82;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #5b6b82;
  cursor: pointer;
}

.gold{
  margin-right: 3%;
  font-size: 25px;
}

.description{
  font-size: 13.1px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.29;
  letter-spacing: normal;
  color: #5b6b82;
  text-align: left;
  margin-left: 15%;
}

img{
  height: 15px;
  width: 15px;
}

.professional{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16.1px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  border-radius: 1.7px;
  background-color: #ffb34b;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  margin-top: 10%;
}

.professional2{
  margin-top: 20%;
}

</style>

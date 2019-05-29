<template>
  <div class="card">
    <h1>{{title}}</h1>
    <h3>{{subtitle}}</h3>
    <div class="buttons">
      <input @click="monthlyClicked" :class="monthlyClass" type="button" value="MONTHLY">
      <input @click="annuallyClicked" :class="annuallyClass" type="button" value="ANNUALLY">
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardComp',
  data() {
    return {
      title: 'Pricing',
      subtitle: `Sign up in less than 30 seconds. Try out our 7 day risk free trial, upgrade at anytime, no
      questions, no hassle.`,
      monthlyClass: 'monthly',
      annuallyClass: 'annually',
    };
  },
  methods: {
    monthlyClicked() {
      this.$emit('monthly');
      this.monthlyClass = 'monthly';
      this.annuallyClass = 'annually';
    },
    annuallyClicked() {
      this.$emit('annually');
      this.monthlyClass = 'change-monthly';
      this.annuallyClass = 'change-annually';
    },
  },
};
</script>

<style scoped>
h1{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30.9px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #242f40;
  margin-top: 10vh;
}

h3{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17.3px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.62;
  letter-spacing: normal;
  text-align: center;
  color: #5b6b82;
  white-space: pre-line;
  margin-top: 4vh;
}

.buttons{
  text-align: center;
  font-size: 0px;
  margin-top: 6vh;
}

input{
  object-fit: contain;
  border: 0px;
  width: 263.4px;
  height: 70.9px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15.1px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
}

.monthly{
  border-radius: 2.3px 0px 0px 2.3px;
  background-color: #3ccf8e;
  color: #ffffff;
}

.annually{
  border-radius: 0px 2.3px 2.3px 0px;
  background-color: #e4edf2;
  color: #5b6b82;
}

.change-monthly{
  border-radius: 2.3px 0px 0px 2.3px;
  background-color: #e4edf2;
  color: #5b6b82;
}

.change-annually{
  border-radius: 0px 2.3px 2.3px 0px;
  background-color: #3ccf8e;
  color: #ffffff;

}

.card{
  background-color: transparent;
  border: 0ch;
}

@media only screen and (max-width: 768px) {
    h3{
      white-space: normal;
    }
  }

@media only screen and (max-width: 544px) {
    .annually{
      border-radius: 0px 0px 2.3px 2.3px;
    }
    .monthly{
      border-radius: 2.3px 2.3px 0px 0px;
    }
  }

</style>

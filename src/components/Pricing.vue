<template>
  <div>
    <card-comp @monthly="mClick" @annually="aClick"/>
    <list-comp :list="list" :dateType="dateType"/>
  </div>
</template>

<script>
import CardComp from '@/components/CardComp';
import ListComp from '@/components/ListComp';

export default {
  name: 'Pricing',
  components: {
    'card-comp': CardComp,
    'list-comp': ListComp,
  },
  data() {
    return {
      dateType: '/mo',
      list: [
        {
          name: 'Free',
          price: '49',
          descriptionList:
            ['Cras sodales lobortis erat', 'Vitae pellentesque diam', 'Consequat eted tempus'],
        },
        {
          name: 'Small Business',
          price: '99',
          descriptionList:
            [
              'Aliquet diam gravida',
              'Phasellus eu condimentum',
              'Metus non venenatis turpis',
            ],
        },
        {
          name: 'Professional',
          price: '219',
          descriptionList:
            [
              'Donec enim nulla malesuada',
              'Sed venenatis vel, blandit vel',
              'Duis ultricies scelerisque',
            ],
        },
        {
          name: 'Enterprise',
          price: '419',
          descriptionList:
            {
              one: 'justo id molestie',
              two: 'Nullam sodales justo fringilla',
              three: 'Donec molestie neque urna',
            },
        },
      ],
    };
  },
  methods: {
    mClick() {
      this.dateType = '/mo';
      this.list[0].price = '49';
      this.list[1].price = '99';
      this.list[2].price = '219';
      this.list[3].price = '419';
    },
    aClick() {
      this.dateType = '/y';
      this.list[0].price = '99';
      this.list[1].price = '149';
      this.list[2].price = '319';
      this.list[3].price = '559';
    },
  },
};
</script>

<style scoped>

</style>

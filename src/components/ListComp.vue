<template>
  <div class="row">
    <div class="col-lg-3 col-sm-6 col-12 item" v-for="(item,index) in list" :key="index">
      <list-item :item="item" :index="index" :dateType="dateType"/>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';

export default {
  name: 'ListComp',
  components: {
    'list-item': ListItem,
  },
  props: ['list', 'dateType'],
};
</script>

<style scoped>

.row{
  text-align: center;
  align-items: center;
  margin-right: 3vw;
  margin-left: 3vw;
  margin-top: 6vh;
  margin-bottom: 6vh;
}

.item{
  padding: 0px;
  margin-top: 25px;
  margin-bottom: 25px;
}

</style>

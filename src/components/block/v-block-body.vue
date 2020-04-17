<template>
  <div class="v-block-body">
    <div class="v-block__up">
      <div class="body__title">місто</div>
      <div class="body__name">{{ blockData.name }}</div>
    </div>
    <div class="v-block__down">
      <div class="v-block__population">
        <div class="body__title">населення</div>
        <div class="body__population">{{ blockData.population }} тис.</div>
      </div>
      <div class="v-block__square">
        <div class="body__title">площа</div>
        <div class="body__square">{{ blockData.square }} км<sup>2</sup></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "v-block-body",
  props: {
    blockData: {
      type: Object,
      default: () => {
        return {}
      }
    },

  },
  data() {
    return {}
  },

  computed: {},


}
</script>


<style scoped>
.v-block-body {
  display: flex;
  flex-direction: column;
  margin: 30px;
  padding: 15px;
  justify-content: space-between;
  max-width: 300px;
  width: 19%;
  height: 150px;
  border: 1px ;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.v-block__up {
  text-align: left;
  padding-left: 20px;
  padding-top: 10px;
}

.v-block__down {
  display: flex;
  align-items: flex-end;

}


.body__title  {
  padding: 5px;
}

.body__name {
  padding: 5px;
}

.body__name, .body__population, .body__square {
  font-weight: 750;
  text-align: left;
}


.v-block__population {
  margin-left: 20px;
  padding-right: 20px;
}
.v-block__square {
  border-left: 1px solid black;
  padding-left: 20px;
}

</style>
<template>
  <div class="v-block">
    <div class="title__group">
      <div class="project__name">
        <h1>Сортування міст України</h1>
        <h4>тестове завдання від kover</h4>
      </div>
      <div class="project__photo">
        <svg xmlns="http://www.w3.org/2000/svg" width="111.568" height="30.887" viewBox="0 0 111.568 30.887">
          <g id="logo" transform="translate(-1502.432 -57.613)">
            <path id="Path_2" data-name="Path 2" d="M235.678,985.31h-6.306l-8.734-8.546v8.546h-5.55v-30.2h5.55V971.6l7.108-8.532h6.407L225.278,974.2Z" transform="translate(1287.344 -897.5)" fill="#1c1a1b"/>
            <path id="Path_3" data-name="Path 3" d="M462.182,1000.465h6.8l5.968,15,5.884-15h6.78l-10.175,23.608h-5.088Z" transform="translate(1085.82 -935.572)" fill="#1c1a1b"/>
            <path id="Path_4" data-name="Path 4" d="M754.949,999.926l.039,5.106a27.651,27.651,0,0,0-3.393.144c-3.219.705-5.6,3.036-5.082,8.066v10.39h-5.062V999.969h5.062v1.8C748.815,999.461,751.06,1000,754.949,999.926Z" transform="translate(859.011 -935.132)" fill="#1c1a1b"/>
            <path id="Path_5" data-name="Path 5" d="M609.334,1000.177a11.779,11.779,0,0,0-7.478,2.658l4.234,4.234a5.873,5.873,0,0,1,3.244-.973,5.984,5.984,0,0,1,.637.035,5.908,5.908,0,0,1,5.064,4.183H597.623a11.975,11.975,0,0,0-.12,1.694,11.832,11.832,0,1,0,11.831-11.831Zm1.227,17.614a5.905,5.905,0,0,1-6.1-2.437h9.777A5.909,5.909,0,0,1,610.561,1017.791Z" transform="translate(975.92 -935.339)" fill="#1c1a1b"/>
            <path id="Path_6" data-name="Path 6" d="M366.907,774.014v-.032l12.006,11.264-4.52,4.371-6.766,6.627h-7.171l10.757-10.757-4.075-4.075-7.4-7.4Z" transform="translate(1883.188 861.797) rotate(180)" fill="#1c1a1b"/>
            <path id="Path_7" data-name="Path 7" d="M251.687,770.561a11.832,11.832,0,1,0,11.832,11.832A11.821,11.821,0,0,0,251.687,770.561Zm0,17.928a6.1,6.1,0,1,1,6.1-6.1A6.1,6.1,0,0,1,251.687,788.489Z" transform="translate(1787.329 859.061) rotate(180)" fill="#1c1a1b"/>
          </g>
        </svg>
      </div>
    </div>
    <div class="block__header">
      <button class="name" @click="sortByName"> За назвою </button>
      <button class="population" @click="sortByPopulations"> За населенням </button>
      <button class="square" @click="sortBySquare"> За площею </button>
    </div>
    <div class="v-block__items">
      <vBlockBody
        v-for="block in paginatedTowns"
        :key="block.id"
        :blockData="block"
      />

    </div>
    <div class="v-block-pagination">
      <div class="page"
      v-for="page in pages"
      :key="page"
      :class="{'page__selector': page === pageNumbers}"
      @click="pageClick(page)"
      >
        {{page}}
      </div>
    </div>


  </div>
</template>

<script>
import vBlockBody from './v-block-body'

export default {
  name: "v-block",
  components: {
    vBlockBody,
  },
  props: {
    towns_data: {
      type: Array,
      defaul: () => {
        return []
      }
    }
  },
  data() {
    return {
      townsPerPage: 6,
      pageNumbers: 1
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.towns_data.length / 6)
    },
    paginatedTowns() {
      let from = (this.pageNumbers - 1) * this.townsPerPage;
      let to = from + this.townsPerPage;
      return this.towns_data.slice(from, to);
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumbers = page;
    },

    sortByName() {
      this.towns_data.sort((a, b) => a.name.localeCompare(b.name));
    },
    sortByPopulations() {
      this.towns_data.sort((a, b) => a.population - b.population);
    },

    sortBySquare() {
      this.towns_data.sort((a, b) => a.square - b.square);
    }
  }

  // methods() {

  //    for(let number = 0; number < 3000; number++) {
  //     console.log(number);
  //   }

  // }
}
</script>


<style scoped>

h1, h4 {
  margin: 10px 0px;
}
.v-block {
  max-width: 1200px;
  margin: 0 auto;

}

.title__group {
  display: flex;
  justify-content: space-around;
  align-items: center;

}

.project__name {
  text-align: left;

}
.block__header {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
}

/* .block__header > button {
  width: 40px;
} */


.block__header > button {
    display: inline-block;
    border: none;
    border-radius: 20px;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #45156d;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
}

.block__header > button:hover,
.block__header > button:focus {
    background: #000;
}

.block__header > button:focus {
    outline: 1px solid rgba(16, 6, 39, 0.897);
    outline-offset: -10px;
}

.block__header > button:active {
    transform: scale(0.99);
}







.v-block__items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.v-block-pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
}

.page {
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #0a0e4b;
  background: rgba(16, 6, 39, 0.897);
  color: #fff;
  border-radius: 5px;
}

.page:hover {
  background: #000;
  cursor: pointer;
  color: #fff;
}

.page__selector {
  background: #000;
  cursor: pointer;
  color: white;
}

</style>
<template>
  <div class="buy main">
    <div class="container">
       {{GetbuyList}}
           <input type="number" v-model="buyNum" min="0" />
       <button @click="addProduct"></button>
       <!-- DATA會跟著一起改變 -->
       {{data}}
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import "@/assets/js/dom";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      buyNum: 0,
      id: 0,
      data: {},
    };
  },
  methods: {
    ...mapActions(["getbuyList", "getbuyListBind"]),
 addProduct() {
    //   let getindexOf = this.GetbuyList.map((x) => x.id).indexOf(this.data.id); 
      if (this.GetbuyLenght == 0) { 
        this.getbuyList(this.data);
      } else {
          console.log(this.buyNum)
        console.log("B1");
        console.log(this.data.count);
        this.getbuyListBind({ id: 0, data: this.data,count:this.buyNum });
      }

      // GetListSearch
      console.log(this.GetbuyList);
      
    },
  },
  computed: {
    ...mapGetters(["GetListSearch", "GetbuyList", "GetbuyLenght"]),
  },
    mounted() { 
    this.data = this.GetListSearch.productALL[0]; 
  },
};
</script>

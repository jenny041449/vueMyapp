<template>
  <div class="buy">
    <main class="buy main" >
      <div class="container">
        <div class="buyContent">
          <div class="buyContent-pict">
            <img :src="data.imgUrl" alt="甜點大圖" />
          </div>
          <div class="buyContent-txt">
            <h1>{{ data.title }}</h1>
            <h1>${{ data.price }}</h1>
            <small>宅配、四大超商店到店</small>
            <div class="pa-1 countArea pc-show xs-noshow">
              <div>數量</div>
              <div class="buy-count">
                <button @click="buyNum--" :disabled="buyNum <= 0">-</button>
                <input type="number" :value="buyNum" min="0" />
                <button @click="buyNum++">+</button>
              </div>
            </div>
            <section class="pc-btn-fixed xs-noshow">
              <div class="parimary_btn">
                <button @click="addProduct()">加入購物車</button>
                <button @click="router('/pay01')">直接購買</button>
              </div>
            </section>
          </div>
        </div>
        <div class="buyInfo">
          <h1>購物注意事項</h1>
          <div>
            <ul>
              <li>寄送時間：</li>
              <li>完成付款後 3 個工作天內送達(不含週六日)</li>
              <li>送貨方式：</li>
              <li>透過宅配或是超商店到店方式出貨。</li>
              <li>
                限台灣本島地區，注意！收件地址請勿為郵政信箱。(若有台灣本島以外地區送貨需求，收貨人地址請填台灣本島親友的地址)。
              </li>
              <li>產品保固/售後服務：</li>
              <li>
                若產品本身瑕疵或運送過程導致新品瑕疵，到貨7日內可更換新品。
              </li>
              <li>其他：</li>
              <li>本商店均為含稅價，皆需開發票。</li>
              <li>
                除了部分商品可超商取貨外，其餘皆由宅配運送，宅配送達約1~3天，無法保證宅配隔天一定到貨，請買家們提早購買。
              </li>
              <li>
                宅配六日基本無運送，如需週六運送，僅能備註但無法保證，週日宅配無配送
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Alert class="alert" v-if="alertShow" />
      <section class="xs-footer-bottom footer-fixed footer-xs-menu pc-noshow">
      <div class="btn-fixed">
        <div class="parimary_btn footer-bottom"> 
           <button @click="addProduct()">加入購物車</button>  
          
              <button @click="router('/pay01')">直接購買</button>
        </div>
      </div>
    </section>
    </main>
    
  </div>
</template>
 

<script>
import Alert from "@/components/alert/alert.vue";

import "@/assets/js/dom";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: {
    Alert,
  },
  data() {
    return {
      buyNum: 1,
      id: 0,
      data: {},
      alertShow: false,
    };
  },
  methods: {
    ...mapActions(["getbuyList", "getbuyListBind"]),
    router(v) {
      this.$router.push({ path: v });
    },
    addProduct() {
      //
      let getindexOf = this.GetbuyList.map((x) => x.id).indexOf(this.data.id);
      if (this.GetbuyLenght == 0) {
        this.getbuyList({ data: this.data, count: this.buyNum });
      } else {
        if (getindexOf == -1) {
          this.getbuyList({ data: this.data, count: this.buyNum });
        } else {
          this.getbuyListBind({
            id: getindexOf,
            data: this.data,
            count: this.buyNum,
          });
        }
      }
      this.alertShow = true;
      window.setTimeout(this.alertShowfalse, 2000);
      // GetListSearch
      // console.log(this.GetbuyList);
    },
    alertShowfalse() {
      this.alertShow = false;
    },
  },
  computed: {
    ...mapGetters(["GetListSearch", "GetbuyList", "GetbuyLenght"]),
  },
  mounted() {
    window.scroll(0, 1);
    this.id = this.$route.params.id;
    this.data = this.GetListSearch.productALL.filter(
      (word) => word.id == this.id
    )[0];
  },
};
</script>

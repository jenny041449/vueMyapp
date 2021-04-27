<template>
  <main class="order01 main">
    <article class="container">
      <h1>訂單資訊</h1>
      <table>
        <tr>
          <th>訂單編號</th>
          <th>產品</th>
          <th>總金額</th>
          <th>時間</th>
          <th>目前狀態</th>
        </tr>
        <tr v-for="(result, i) in results" :key="i" >
          <td style="text-align:start;">{{ result.M_id }}</td>
          <td>{{ result.ProductName }}</td>
          <td>{{ result.productCount }}</td>
          <td>{{ result.productTime }}</td>
          <td>備貨中</td>
        </tr>
      </table>
    </article>
  </main>
</template>
<script>
// import Paystep from "@/components/pay/pay-step.vue";
import buyProduct from "@/services/buyProduct.js"; //連接首頁api
import "@/assets/js/dom";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      total: 0,
      payment: 0,
      results: [],
    };
  },
  components: {
    // Paystep,
  },
  async mounted() {
    let buyProductApi = (await buyProduct.buyProduct()).data;
    if (buyProductApi.success == true) {
      this.results = buyProductApi.result;
    }
  },
  computed: {
    ...mapGetters(["GetListSearch", "GetbuyList", "GetbuyLenght"]),
  },
  watch: {
    GetbuyList: {
      immediate: true,
      handler(newValue) {
        this.total = 0;
        newValue.forEach((val) => {
          this.total += val.count * val.price;
        });
      },
    },
  },
  methods: {
    ...mapActions(["DeletebuyList"]),

    deltete(v) {
      this.DeletebuyList(v);
    },
    icon_click(v) {
      let data = document.querySelectorAll(".pay01-way-items li");
      let data2 = document.querySelectorAll(".pay01-way-items li i");
      Array.from(document.querySelectorAll(".pay01-way-items li")).forEach(
        (data) => {
          data.style.color = "black";
          return data;
        }
      );
      Array.from(document.querySelectorAll(".pay01-way-items li i")).forEach(
        (data) => {
          data.style.color = "black";
          return data;
        }
      );
      data[v - 1].style.color = "#fd7807";
      data2[v - 1].style.color = "#fd7807";
      this.payment = v;
    },
  },
};
</script>




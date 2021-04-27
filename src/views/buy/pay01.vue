<template>
  <main class="other">
    <article class="pay01">
      <div class="container" v-if="GetbuyLenght != 0">
        <Paystep :step="0" />
        <section class="pay01-list">
          <!-- 手機 -->
          <article class="pay01-buylist pc-noshow xs-show">
            <h2>商品選購清單</h2>
            <section
              class="pay01-buylist-info"
              v-for="(GetbuyList, i) in GetbuyList"
              :key="i"
            >
              <div class="pay01-list-img">
                <span class="">
                  <h2 style="margin: 0; padding: 0">
                    <i class="fas fa-times-circle" @click="deltete(i)"></i>
                  </h2>
                  <img :src="GetbuyList.imgUrl" alt="" srcset="" />
                  <h2>{{ GetbuyList.title }}</h2>
                </span>

                <h3>單價:NT{{ GetbuyList.price }}</h3>

                <h4>
                  數量:

                  {{ GetbuyList.count }}
                </h4>
                <h4>小計:NT{{ GetbuyList.price * GetbuyList.count }}</h4>
              </div>
            </section>
            <h2><span>總計:</span>NT${{ total }}</h2>
          </article>
          <!-- 電腦 -->
          <article class="pay01-buylist pc-show xs-noshow">
            <h2>商品選購清單</h2>

            <table class="pay01-list-table" cellpadding="8">
              <tr>
                <th><h4>商品品項</h4></th>
                <th><h4>商品名稱</h4></th>

                <th><h4>單價</h4></th>
                <th><h4>數量</h4></th>
                <th><h4>小計</h4></th>
                <th><h4>刪除</h4></th>
              </tr>
              <tr v-for="(GetbuyList, i) in GetbuyList" :key="i">
                <td>
                  <img :src="GetbuyList.imgUrl" alt="" srcset="" />
                </td>
                <td>
                  <h3>{{ GetbuyList.title }}</h3>
                </td>

                <td>NT${{ GetbuyList.price }}</td>
                <td>
                  <div>
                    {{ GetbuyList.count }}
                  </div>
                </td>
                <td>NT${{ GetbuyList.price * GetbuyList.count }}</td>
                <td @click="deltete(i)"><i class="fas fa-trash-alt"></i></td>
              </tr>
            </table>
            <h2><span>總計:</span>NT${{ total }}</h2>
          </article>
          <!-- 下方兩隔 -->
          <div class="flex xs-wrap">
            <article class="pay01-way xs-cols-1">
              <h3 class="title">選擇送貨及付款方式</h3>
              <ul>
                <li>付款方式(運費150元)</li>
                <li>
                  <ul class="pay01-way-items">
                    <li @click="icon_click(1)" style="color: #fd7807">
                      <span
                        ><i
                          class="fas fa-check-circle"
                          style="color: #fd7807"
                        ></i></span
                      >線上刷卡
                    </li>
                    <li @click="icon_click(2)">
                      <span><i class="fas fa-check-circle"></i></span
                      >ATM轉帳付款
                    </li>
                    <li @click="icon_click(3)">
                      <span><i class="fas fa-check-circle"></i></span>貨到付款
                    </li>
                  </ul>
                </li>
                <li>貨運說明</li>
                <li>
                  感謝您的訂購，我們將盡快為您出貨，之後可利用訂單查詢您的出貨狀況
                </li>
                <li>優惠代碼</li>
                <li class="discount">
                  <span>
                    <input
                      type="text"
                      placeholder="請輸入優惠代碼"
                      name=""
                      id=""
                  /></span>
                  <span> <button>搜尋</button></span>
                </li>
              </ul>
            </article>
            <article class="pay01-info xs-cols-1">
              <h3 class="title">訂單資訊</h3>
              <ul class="pay01-info-list">
                <li>
                  <span>商品總計:</span><span>NT${{ total }}</span>
                </li>
                <li><span>折扣總計:</span><span>NT$0</span></li>
                <li><span>折扣後總額:</span><span>NT$0</span></li>
                <li><span>商品運費:</span><span>NT$150</span></li>
                <li><span>貨到付款手續費：</span><span>NT$0</span></li>
                <li>
                  <span>結帳金額： </span><span>NT${{ total + 150 }}</span>
                </li>
                <li>請再次確認結帳金額及購買項目。</li>
              </ul>
            </article>
          </div>
        </section>
        <section class="pc-btn-fixed xs-noshow">
          <div class="parimary_btn">
            <router-link to="/pay02">
              <button>下一步</button>
            </router-link>
            <router-link to="/about">
              <button>繼續選購</button>
            </router-link>
          </div>
        </section>
        <section class="xs-footer-bottom footer-fixed footer-xs-menu pc-noshow">
          <div class="btn-fixed">
            <div class="parimary_btn footer-bottom">
              <router-link to="/pay02" class="bottom_btn"
                ><button>下一步</button></router-link
              >
              <router-link to="/about" class="bottom_btn">
                <button>繼續選購</button></router-link
              >
            </div>
          </div>
        </section>
      </div>
      <div class="container" v-else style="padding-top: 20px">
        <h2>目前還未有商品</h2>
        <router-link to="/about">
          <button class="more-color" style="font-size: 20px">選購區</button>
        </router-link>
      </div>
    </article>
  </main>
</template> 
<script>
import Paystep from "@/components/pay/pay-step.vue";
import "@/assets/js/dom";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      total: 0,
      payment: 0,
    };
  },
  components: {
    Paystep,
  },
  mounted() {
    
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

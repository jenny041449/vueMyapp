<template>
  <div class="pay02">
    <main>
      <article class="pay02">
        <div class="container">
          <Paystep :step="1" />
          <section class="pay02-Precautions">
            <h2>訂購須知</h2>
            <div>
              <ul>
                <li>購買時請確認資料及明細</li>
                <li>
                  本站絕不會主動以電話或簡訊通知客戶變更付款方式!如接獲請撥打165防詐騙專線檢舉
                </li>
              </ul>
            </div>
          </section>
          <h4>商品總金額:NT${{ total }}</h4>
          <section class="pay02-list">
            <div class="flex xs-wrap">
              <article class="pay02-buylist xs-cols-1">
                <section class="pay02-buylist-info">
                  <form>
                    <h2>訂購人資訊</h2>
                    <div>
                      <ul>
                        <li>
                          <h3>訂購人姓名</h3>
                          <span class="info-name">
                            <input
                              type="text"
                              minlength="2"
                              maxlength="10"
                              placeholder="姓名(不可有數字)"
                              v-model="list1.ProductName"
                              id="Name"
                              pattern="[^0-9]{2,10}"
                              required
                            />

                            <ul class="info-sex">
                              <li
                                @click="icon_sex1_click(1)"
                                style="color: #fd7807"
                              >
                                <i
                                  class="fas fa-check-circle"
                                  style="color: #fd7807"
                                ></i>
                                <span>先生</span>
                              </li>
                              <li @click="icon_sex1_click(2)">
                                <i class="fas fa-check-circle"></i>
                                <span>小姐</span>
                              </li>
                            </ul>
                          </span>
                        </li>
                        <li>
                          <h3>電子郵件</h3>
                          <input type="text" v-model="list1.email" />
                          <p>
                            訂購通知相關訊息將會發送至此，為維護您的權益以及即時收到重要通知，請正確填寫並建議使用非Yahoo信箱。
                          </p>
                        </li>
                        <li class="phone">
                          <h3>行動電話</h3>
                          <input type="text" v-model="list1.phone" />
                          <span>*格式:0900123123</span>
                        </li>
                        <li>
                          <h3>聯絡地址</h3>
                          <span class="address">
                            <select name="" v-model="list1.Countie">
                              <option value="">縣市</option>
                              <option
                                v-for="(data, i) in list1.Countiess"
                                :key="i"
                              >
                                {{ data }}
                              </option>
                            </select>
                            <select name="" v-model="list1.area">
                              <option value="">鄉鎮市區</option>
                              <option
                                v-for="(data, i) in areadata[list1.Countie]"
                                :key="i"
                              >
                                {{ data }}
                              </option>
                            </select>
                            <input
                              type="text"
                              placeholder="地址"
                              v-model="list1.otherAddress"
                            />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </form>
                </section>
              </article>
              <article class="pay02-buylist xs-cols-1">
                <section class="pay02-buylist-info">
                  <form>
                    <h2>收件人資訊</h2>
                    <div>
                      <ul>
                        <li>
                          <i
                            id="sameInfo"
                            class="fas fa-check-circle"
                            style="color: #fd7807"
                            @click="issameInfo"
                          ></i>
                          <span>同上</span>
                        </li>
                        <li>
                          <h3>收件人姓名</h3>
                          <span class="info-name info-name2">
                            <input type="text" :disabled="!same" />
                            <ul class="info-sex2">
                              <li
                                class="icon_click"
                                @click="icon_sex2_click(1)"
                                style="color: #fd7807"
                              >
                                <i
                                  class="fas fa-check-circle"
                                  style="color: #fd7807"
                                ></i>
                                <span>先生</span>
                              </li>
                              <li
                                class="icon_click"
                                @click="icon_sex2_click(2)"
                              >
                                <i class="fas fa-check-circle"></i>
                                <span>小姐</span>
                              </li>
                            </ul>
                          </span>
                        </li>

                        <li class="phone">
                          <h3>行動電話</h3>
                          <input
                            type="text"
                            v-model="list2.phone"
                            :disabled="!same"
                          />
                          <span>*格式:0900123123</span>
                        </li>
                        <li>
                          <h3>聯絡地址</h3>
                          <span class="address2">
                            <select
                              name=""
                              v-model="list2.Countie"
                              :disabled="!same"
                            >
                              <option value="">縣市</option>
                              <option
                                v-for="(data, i) in list2.Countiess"
                                :key="i"
                              >
                                {{ data }}
                              </option>
                            </select>
                            <select
                              name=""
                              id=""
                              v-model="list2.area"
                              :disabled="!same"
                            >
                              <option value="">鄉鎮市區</option>
                              <option
                                v-for="(data, i) in areadata[list2.Countie]"
                                :key="i"
                              >
                                {{ data }}
                              </option>
                            </select>
                            <input
                              type="text"
                              placeholder="地址"
                              :disabled="!same"
                            />
                          </span>
                        </li>
                        <li class="address-time">
                          <h3>收件時段</h3>
                          <select
                            :disabled="!same"
                            name=""
                            id=""
                            aria-placeholder="請選擇收件時段"
                          >
                            <option value="0">請選擇收件時段</option>
                            <option>都可</option>
                            <option>8:00~10:00</option>
                            <option>10:00~12:00</option>
                            <option>13:30~15:00</option>
                            <option>15:00~18:00</option>
                          </select>
                        </li>
                      </ul>
                    </div>
                  </form>
                </section>
              </article>
            </div>
            <div class="flex pay02-buylist">
              <article class="pay02-info">
                <h3 class="title">訂單資訊</h3>
                <ul class="pay02-info-list">
                  <li>
                    <span>商品總計:</span><span>NT${{ total }}</span>
                  </li>
                  <li><span>折扣總計:</span><span>NT$0</span></li>
                  <li><span>折扣後總額:</span><span>NT$0</span></li>
                  <li><span>商品運費:</span><span>NT$150</span></li>
                  <li><span>貨到付款手續費：</span><span>NT$0</span></li>
                  <li>
                    <span>結帳金額： </span><span>NT${{ fintotal }}</span>
                  </li>
                  <li>請再次確認結帳金額及購買項目。</li>
                </ul>
              </article>
            </div>
          </section>

          <section class="pc-btn-fixed xs-noshow">
            <div class="parimary_btn">
              <router-link to="/pay01">
                <button>上一步</button>
              </router-link>
              <router-link to="/message" id="pay01">
                <button @click="payClick">完成選購</button>
              </router-link>
            </div>
          </section>
        </div>
      </article>
      <section class="xs-footer-bottom footer-fixed footer-xs-menu pc-noshow">
        <div class="btn-fixed">
          <div class="parimary_btn footer-bottom">
            <router-link to="/pay01" class="bottom_btn">
              <button>上一步</button>
            </router-link>
            <router-link
              to=""
              class="bottom_btn"
              id="payGo"
              @click.native.prevent="payClick"
            >
              <button>完成選購</button>
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
 
<script>
import buyProduct from "@/services/buyProduct.js"; //連接首頁api
import Paystep from "@/components/pay/pay-step.vue";
import "@/assets/js/dom";
// import $ from "jquery";
import area from "@/assets/js/area.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      same: true,
      list1: {
        address: "",
        phone: "",
        ProductName: "",
        payment1: "",
        area: "",
        email: "",
        Countiess: [],
        Countie: "",
      },
      list2: {
        address2: "",
        phone: "",
        ProductName: "",
        payment1: "",
        area: "",
        email: "",
        Countiess: [],
        Countie: "",
      },
      total: 0,
      fintotal: 0,
      payment1: 1,
      areadata: {},
      payment2: 1,
      list: {
        ProductName: "",
        productCount: "",
        productTime: "",
      },
      default: {
        ProductName: "",
        productCount: "",
        productTime: "",
      },
    };
  },
  components: {
    Paystep,
  },
  computed: {
    ...mapGetters(["GetListSearch", "GetbuyList", "GetbuyLenght", "Getuser"]),
  },
  mounted() {
    this.areadata = area.area_data;
    this.list1.Countiess = Object.keys(area.area_data);
    this.list2.Countiess = Object.keys(area.area_data);

    this.fintotal = 150 + this.total;
    this.list.productCount = this.fintotal;
  },
  methods: {
    issameInfo() {
      let samebtn = document.getElementById("sameInfo");
      if (this.same) {
        samebtn.style.color = "black";
      } else {
        samebtn.style.color = "#fd7807";
      }
      this.same = !this.same;
    },
    time() {
      let dt = new Date();
      this.list.productTime =
        dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
    },
    async payClick() {
      this.time();
      let dt = new Date();
      this.list.ProductName = this.GetbuyList.map(function (data) {
        return data.title + "*" + data.count;
      }).join();
      this.list["M_id"] =
        "S0" +
        JSON.parse(this.Getuser).M_ID +
        JSON.parse(this.Getuser).ID +
        dt.getDate() +
        dt.getMinutes() +
        dt.getSeconds();

      let buyProductApi = (await buyProduct.setbuyProduct(this.list)).data;

      if (buyProductApi.success == true) {
        sessionStorage.removeItem("buy");
        this.$router.push({ path: "/message" });
        location.reload();
      } else {
        alert(buyProductApi.result);
      }
    },
    icon_sex1_click(v) {
      let data = document.querySelectorAll(".info-sex  li");

      let data2 = document.querySelectorAll(".info-sex  li i");
      Array.from(document.querySelectorAll(".info-sex li")).forEach((data) => {
        data.style.color = "black";
        return data;
      });
      Array.from(document.querySelectorAll(".info-sex li i")).forEach(
        (data) => {
          data.style.color = "black";
          return data;
        }
      );
      data[v - 1].style.color = "#fd7807";
      data2[v - 1].style.color = "#fd7807";

      this.payment = v;
    },
    icon_sex2_click(v) {
      let data = document.querySelectorAll(".info-sex2 li");
      let data2 = document.querySelectorAll(".info-sex2  li i");
      Array.from(document.querySelectorAll(".info-sex2 li")).forEach((data) => {
        data.style.color = "black";
        return data;
      });
      Array.from(document.querySelectorAll(".info-sex2 li i")).forEach(
        (data) => {
          data.style.color = "black";
          return data;
        }
      );
      data[v - 1].style.color = "#fd7807";
      data2[v - 1].style.color = "#fd7807";

      this.payment2 = v;
    },
  },
  watch: {
    GetbuyList: {
      immediate: true,
      handler(newValue) {
        newValue.forEach((val) => {
          this.total += val.count * val.price;
        });
      },
    },
    same: {
      immediate: false,
      deep: true,
      handler(newValue) {
        Array.from(document.querySelectorAll(".info-sex2 li")).forEach(
          (data) => {
            data.style.color = "black";
            return data;
          }
        );
        Array.from(document.querySelectorAll(".info-sex2 li i")).forEach(
          (data) => {
            data.style.color = "black";
            return data;
          }
        );
        let data = document.querySelectorAll(".info-sex2 li");
        let data2 = document.querySelectorAll(".info-sex2  li i");
        if (newValue == true) {
          data[0].style.color = "#fd7807";
          data2[0].style.color = "#fd7807";
        }
      },
    },
  },
};
</script>

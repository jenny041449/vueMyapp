<template>
  <div class="about">
    <!-- 
      main
     -->
    <main class="xs-no-overflow">
      <!-- 大圖 -->
      <section class="container mList">
        <section>
          <img class="banner" src="@/assets/image/a.jpg" alt="" srcset="" />
        </section>
        <!-- 中間內容 -->

        <!-- 中間list -->
        <ul class="list-menu">
          <li class="img01">
            <router-link to="/question">
              <div>
                <i class="fas fa-birthday-cake"></i>
              </div>
              <h4>蛋糕</h4>
            </router-link>
          </li>
          <li class="img02">
            <router-link to="/question">
              <div>
                <i class="fas fa-pie"></i>
              </div>
              <h4>各式派</h4>
            </router-link>
          </li>
          <li class="img03">
            <router-link to="/question">
              <div>
                <i class="fas fa-cookie"></i>
              </div>
              <h4>經典手工餅乾</h4>
            </router-link>
          </li>
          <li class="img05">
            <router-link to="/question">
              <div>
                <i class="fas fa-truck-moving"></i>
              </div>
              <h4>運送詳情</h4>
            </router-link>
          </li>
          <li class="img04">
            <router-link to="/question">
              <div>
              <i class="fas fa-user-alt"></i>
                <div class="img-hover">
                  <ul>
                    <li>
                      <a href="#">客製<br />諮詢</a>
                    </li>
                    <li>
                      <a href="#">客製<br />門市</a>
                    </li>
                  </ul>
                </div>
              </div>
              <h4>客製洽詢</h4>
            </router-link>
          </li>
        </ul>
        <h1 class="title">甜點集合</h1>
        <div class="content">
          <!-- 左欄列 -->
          <aside class="aside-content">
            <div class="aside-title">
              <h1 class="aside-size">產品購買</h1>
              <h5>Product</h5>
            </div>
            <!-- // @click="productItemSelected('ALL')" -->
            <div class="aside-md-selected">
              <ul class="" id="aside-menu-change" @click="asideMenuChange">
                <li>
                  <h2
                    style="
                      font-size: 22px;
                      font-weight: bold;
                      color: rgb(255, 143, 51);
                      display: flex;
                      justify-content: space-between;
                    "
                  >
                    所有產品
                    <template v-for="(product2, i) in productItem">
                      <span v-if="product2.show === 1" :key="i">
                        {{ product2.product
                        }}<i class="fas fa-angle-down"></i>
                      </span>
                    </template>
                  </h2>
                </li>
              </ul>

              <ul class="aside-menu aside-menu-isshow" id="aside-menu-isshow">
                <li
                  v-for="(product, i) in productItem"
                  :class="
                    product.show == 1
                      ? 'aside-menu-productSelectItem  aside-menu-selected'
                      : 'aside-menu-productSelectItem'
                  "
                  :key="i"
                  @click="productItemSelected(product)"
                >
                  <!-- " -->
                  <h2 class="title-product01">{{ product.product }}</h2>
                </li>
              </ul>
            </div>
          </aside>
          <!-- 右欄列 -->
          <section class="right-content">
            <ul class="product-menu">
              <li v-for="(data, i) in selectItem" :key="i">
                <div>
                  <router-link
                    :to="{
                      name: 'buy',
                      params: { id: data.id },
                    }"
                  >
                    <i class="fa fa-link"></i>
                    <img class="imgurl" :src="data.imgUrl" />
                  </router-link>
                </div>
                <div>
                  <h3>{{ data.title }}</h3>

                  <button class="parimary_button" @click="addProduct(data)">
                    加入購物車
                  </button>
                </div>
              </li>
            </ul>
            <!-- <ul class="product-step">
              <li><i class="fa fa-chevron-left"></i></li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li><i class="fa fa-chevron-right"></i></li>
            </ul> -->
          </section>
        </div>
        <!-- <div class="fiexed_top">
          <i class="fa fa-pagelines"></i>
        </div> -->
      </section>
      <section class="fixed-bottom" @click="routerlink">
        <div class="fas-number">{{ GetbuyLenght }}</div>
        <i class="fas fa-shopping-basket"></i>
      </section>
    </main>
    <Alert class="alert" v-if="alertShow" />

    <!-- 手機下方導覽列 電腦消失 -->
  </div>
</template>
 
<script>
import Alert from "@/components/alert/alert.vue";
import $ from "jquery";
import "@/assets/js/dom";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: {
    Alert,
  },
  data() {
    return {
      selectItem: [],
      alertShow: false,
      productItem: [
        {
          product: "蛋糕",
          bindName: "cake",
          show: 0,
        },
        {
          product: "餅乾",
          bindName: "cookie",
          show: 0,
        },
        {
          product: "馬卡龍",
          bindName: "macaron",
          show: 0,
        },
        {
          product: "巧克力",
          bindName: "chocolate",
          show: 0,
        },
        {
          product: "全部",
          bindName: "All",
          show: 1,
        },
      ],
    };
  },
  mounted() {
    //  this.alertShow=true;
    this.selectItem = this.GetListSearch.productALL;
  },
  methods: {
    ...mapActions(["getbuyList"]),
    asideMenuChange() {
      if (window.innerWidth < 800) {
        $("#aside-menu-isshow").toggleClass("aside-menu-isshow");
      }
    },
    alertShowfalse() {
      this.alertShow = false;
    },
    addProduct(val) {
      this.alertShow = true;
      //  console.log(this.alertShow)
      this.getbuyList({ data: val, count: 1 });
      window.setTimeout(this.alertShowfalse, 2000);
      //  console.log(this.alertShow)
      // this.getbuyList(val);
      // GetListSearch
    },
    routerlink() {
      this.$router.push({ path: "/pay01" });
    },
    productItemSelected(val) {
      // "蛋糕", "餅乾", "馬卡龍", "巧克力";
      // 消除全部樣式
      this.productItem.forEach((element) => {
        element.show = 0;
      });
      // 增加點選的樣式
      val.show = 1;
      if (val.bindName === "All") {
        this.selectItem = this.GetListSearch.productALL;
      } else {
        this.selectItem = this.GetListSearch.productALL.filter(
          (word) => word.category === val.bindName
        );
      }

      $("#aside-menu-isshow").addClass("aside-menu-isshow");
      // console.log(this.selectItem);
    },
  },
  computed: {
    ...mapGetters(["GetListSearch", "GetbuyLenght"]),
  },
  watch: {},
};
</script>

<template>
  <div>
    <!-- <article class="back" id="app" v-if="!showIN"> -->
    <article class="back" id="app" v-if="false">
      
      <div class="list list1">H</div>
      <div class="list list2">A</div>
      <div class="list list3">P</div>
      <div class="list list4">P</div>
      <div class="list list5">Y</div>
    </article>
    <div id="app" v-if="true">
    
    <!-- <div id="app" v-if="showIN"> -->
      <header>
        <!-- logo -->
        <div class="container nav" style="postion:fixed;top:0;left:0">
          <div class="align-center logo-txt">
            <router-link to="/" class="logo">
              <h1>歡樂小屋</h1>
            </router-link>
            <div class="relative-postion nav-btn-xs-noshow pc-show">
              <span class="">
                <input type="text" placeholder="請輸入關鍵字" name=""
              /></span>
              <i class="fa fa-search search-poition"></i>
            </div>
          </div>
          <nav>
            <ul class="logo-menu">
              <li>
                <router-link to="/about">
                  <div><i class="fa fa-shopping-basket"></i></div>
                  <h3>甜點專區</h3>
                </router-link>
              </li>
              <li>
                <router-link to="/pay01">
                  <div><i class="fa fa-shopping-cart"></i></div>
                  <h3>購物車</h3>
                </router-link>
              </li>
              <li>
                <router-link to="/order1">
                  <div><i class="fa fa-bookmark"></i></div>
                  <h3>訂單查詢</h3>
                </router-link>
              </li>
              <li>
                <router-link to="/login">
                  <div><i class="fa fa-user"></i></div>
                  <h3>會員登入</h3>
                </router-link>
              </li>
              <li>
                <router-link to="/question">
                  <div><i class="fa fa-question-circle"></i></div>
                  <h3>常見問題</h3>
                </router-link>
              </li>
            </ul>
          </nav>
          <!-- 手機按鈕 -->
          <ul
            class="nav-btn-xs-show pc-noshow"
            id="nav-btn-xs-show"
            @click="itemShowClick"
          >
            <i class="fa fa-align-justify"></i>
          </ul>
        </div>
        <section 
        :class="this.$route.name != 'buy' &&
          this.$route.name != 'pay01' &&
          this.$route.name != 'pay02'?'nav-xs-menus no-show pc-noshow':
          'other nav-xs-menus no-show pc-noshow'
          "
          class="nav-xs-menus no-show pc-noshow " 
          id="nav-xs-menus"
        >
          <div>
            <ul class="list-menu">
              <li class="img01">
                <router-link to="/question" class="selectRouter">
                  <div>
                    <i class="fas fa-birthday-cake"></i>
                  </div>
                  <h4>蛋糕</h4>
                </router-link>
              </li>
              <li class="img02">
                <router-link to="/question" class="selectRouter">
                  <div>
                    <i class="fas fa-pie"></i>
                  </div>
                  <h4>各式派</h4>
                </router-link>
              </li>
              <li class="img03">
                <router-link to="/question" class="selectRouter">
                  <div>
                    <i class="fas fa-cookie"></i>
                  </div>
                  <h4>經典手工餅乾</h4>
                </router-link>
              </li>
              <li class="img05">
                <router-link to="/question" class="selectRouter">
                  <div>
                    <i class="fas fa-user-alt"></i>
                    <div class="img-hover xs-noshow selectRouter">
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
              <li class="img04">
                <router-link to="/question" class="selectRouter">
                  <div>
                    <i class="fas fa-truck-moving"></i>
                  </div>
                  <h4>運送詳情</h4>
                </router-link>
              </li>
            </ul>
            <ul class="logo-menu">
              <li>
                <router-link to="/about" class="selectRouter">
                  <div><i class="fa fa-shopping-basket"></i></div>
                  <h3>甜點專區</h3>
                </router-link>
              </li>
              <li>
                <router-link to="/pay01" class="selectRouter">
                  <div><i class="fa fa-shopping-cart"></i></div>
                  <h3>購物車</h3>
                </router-link>
              </li>
              <li>
                <router-link to="/login" class="selectRouter">
                  <div><i class="fa fa-user"></i></div>
                  <h3>會員登入</h3>
                </router-link>
              </li>
              <li>
                <router-link to="/question" class="selectRouter">
                  <div><i class="fa fa-question-circle"></i></div>
                  <h3>常見問題</h3>
                </router-link>
              </li>
            </ul>
          </div>
        </section>
      </header>

      <!-- <router-link to="/about">About</router-link> -->

      <router-view />
      <footer
        v-if=" 
          this.$route.name != 'buy' &&
          this.$route.name != 'pay01' &&
          this.$route.name != 'pay02'
        "
      >
        <div class="container">
          <section class="footer-focus">
            <img
              class="footer-logo"
              src="@/assets/image/footer-face.jpg"
              alt=""
              srcset=""
            />
            <div class="footer-txt">
              <h1>FACEBOOK</h1>
              <h4>歡迎關注歡樂小屋的粉絲專頁</h4>
            </div>
          </section>
          <section class="footer-nav">
            <ul class="footer-content">
              <li>
                <router-link to="/pay01" class="selectRouter">
                  <div><i class="fa fa-shopping-cart"></i></div>
                  <h3>購物車</h3>
                </router-link>
              </li>
              <li>
                <router-link to="/login" class="selectRouter">
                  <div><i class="fa fa-user"></i></div>
                  <h3>會員登入</h3>
                </router-link>
              </li>
              <li>
                <router-link to="/question" class="selectRouter">
                  <div><i class="fa fa-question-circle"></i></div>
                  <h3>常見問題</h3>
                </router-link>
              </li>
            </ul>
            <div>
              <ul>
                <small
                  ></small
                >
                <small>網站使用條款</small>
              </ul>
            </div>
            <a href="#">
              <i
                class="fa fa-arrow-up footer-fixed-right"
                @click="scrollTop"
              ></i
            ></a>
          </section>
        </div>
      </footer>
      <!-- footer下方選單 手機 -->

      <section
        v-if="
          this.$route.name != 'buy' &&
          ((this.$route.name != 'pay01' && this.$route.name != 'pay02') ||
            this.GetbuyLenght == 0)
        "
        class="footer-xs-menu pc-noshow"
      >
        <ul class="footer-logo-menu">
          <li>
            <router-link to="/about">
              <div><i class="fa fa-shopping-basket"></i></div>
              <h3>甜點專區</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/pay01">
              <div><i class="fa fa-shopping-cart"></i></div>
              <h3>購物車</h3>
            </router-link>
          </li>

          <li>
            <router-link to="/login">
              <div><i class="fa fa-user"></i></div>
              <h3>會員登入</h3>
            </router-link>
          </li>
          <li>
             <router-link to="/order1">
                  <div><i class="fa fa-question-circle"></i></div>
                  <h3>訂單查詢</h3>
                </router-link>
          </li>
        </ul>
      </section>
      
      <!-- <section
      v-else-if="
        (this.GetbuyLenght != 0 && this.$route.name != 'pay01') ||
        this.$route.name == 'buy'
      "
      class="xs-footer-bottom footer-fixed footer-xs-menu pc-noshow"
    >
      <div class="btn-fixed">
        <div class="parimary_btn footer-bottom">
          <router-link to="/message">
              <button @click="payClick">完成選購</button>
            </router-link>
          <router-link to="/about" class="bottom_btn">
            <button>繼續選購</button>
            </router-link
          >
        </div>
      </div>
    </section> -->
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<style lang="scss">
@import "@/assets/sass/main.scss";
</style>
<script>
import $ from "jquery";
// import buyProduct from "@/services/buyProduct.js"; //連接首頁api

//  import member from "@/services/member.js";//連接首頁api
import "@/assets/js/dom";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      itemShow: false,
      showIN: false,
      list: {
        ProductName: "",
        ProductCount: "",
        ProductTime: "",
      },
    };
  },
  computed: {
    ...mapGetters(["GetListSearch", "GetbuyList", "GetbuyLenght"]),
  },
  watch: {
    "$route.name": {
      handler: function () {
        // console.log(val)
        $("#nav-xs-menus").addClass("no-show");
        $("body").removeClass("no-overflow");
         
      },
      deep: true,
      immediate: true,
    },
  },
  async mounted() {
    //  let dataaa = (await member.member()).data;
    //  console.log(dataaa)
    $(window).scrollTop(0);
    window.setTimeout(()=> { 
      this.showIN = true;
    }, 10000);
    //  監聽器
    document.getElementsByClassName("selectRouter").forEach(function (element) {
      element.addEventListener("click", function () {
        $("#nav-xs-menus").addClass("no-show");
        $("body").removeClass("no-overflow");
      });
    });
    if (sessionStorage.getItem("buy") != null) {
      // console.log( sessionStorage.getItem("buy"));
      // let ddd=sessionStorage.getItem("buy");
      // console.log(ddd);
      // console.log(typeof ddd)
      // class="selectRouter"
      this.setbuyList(JSON.parse(sessionStorage.getItem("buy")));
    }
  },
  methods: {
    ...mapActions(["getbuyList", "getbuyListBind", "setbuyList"]),
    scrollTop() {
      $(window).scrollTop(0);
    },
    itemShowClick() {
      console.log("Eee")
      $("#nav-xs-menus").toggleClass("no-show");
    },
    async payClick() {
      this.time();
      this.list.ProductName = this.GetbuyList.map(function (data) {
        return data.title + "*" + data.count;
      }).join();
      console.log(this.list);
      // await buyProduct.setbuyProduct(this.list).data;
      sessionStorage.removeItem("buy");
      this.$router.push({ path: "/message" });
      location.reload();
    },
    time() {
      let dt = new Date();
      this.list.ProductTime =
        dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
    },
  },
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.back {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  background: #f5f1ee;
}

.back div {
  width: calc(20% - 20px);
  height: 100vh;
  background: #fde2e2;
  color: rgb(121, 86, 22);
  font-size: 30px;
  font-weight: bold;
  transform: translateY(-100vh);
  display: flex;
  justify-content: center;
  align-items: center;
}

.list1 {
  height: 100vh;
  animation: data;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
}

.list2 {
  height: 100vh;
  animation: data;
  animation-duration: 1s;
  animation-delay: 2.2s;
  animation-fill-mode: forwards;
}

.list3 {
  height: 100vh;
  animation: data;
  animation-duration: 1s;
  animation-delay: 3.3s;
  animation-fill-mode: forwards;
}

.list4 {
  height: 100vh;
  animation: data;
  animation-duration: 1s;
  animation-delay: 4.3s;
  animation-fill-mode: forwards;
}

.list5 {
  height: 100vh;
  animation: data;
  animation-duration: 1s;
  animation-delay: 5.3s;
  animation-fill-mode: forwards;
}

@keyframes data {
  0% {
    transform: translateY(-100vh);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

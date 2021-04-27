<template>
  <div class="main">
    <div class="login">
      <ul class="login_menu_items">
        <li class="more-color" >會員登入</li>
        <li @click="router('/register')">註冊帳號</li>
      </ul>
      <article class="login menu_content">
        <section class="menu_txt">
          <form method="post" id="formCheck">
            <ul>
              <li>
                <h4>帳號</h4>
                <input
                  type="text"
                  placeholder="請輸入帳號/email"
                  name=""
                  id=""
                  v-model="login.IDMail"
                />
              </li>
              <li>
                <h4>密碼</h4>
                <input
                  type="password"
                  name=""
                  placeholder="請輸入密碼(6-12英數字)"
                  id=""
                  v-model="login.Password"
                />
              </li>
              <li>
                <input type="submit" @click="checkForm" value="登入會員" />
              </li>
            </ul>
          </form>

          <div>
            還不是會員嗎<a
              href="/register"
              class="focus-color"
              style="color: red"
              >立即註冊</a
            >
          </div>
        </section>
         <section class="menu_pict pc-show xs-noshow">
          <img
            src="@/assets/image/login/login.png"
            class="register_back"
            alt=""
            srcset=""
          />
         
          <i class="fas fa-utensils logo_ani_img"></i>
        </section>
      </article>
    </div>
  </div>
</template>

 
<script>
import "@/assets/js/dom";
import $ from "jquery";
import member from "@/services/member.js"; //連接首頁api
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      login: {
        Password: "",
        IDMail: "",
      },
    };
  }, computed: {
    ...mapGetters(["GetListSearch", "GetbuyList", "GetbuyLenght"]),
  },
  async mounted() {
    $(window).scrollTop(0);

    $("form").on("submit", function (event) {
      event.preventDefault();
    });
  },
  created() {
    $("form").on("submit", function (event) {
      event.preventDefault();
    });
  },
  methods: {
        ...mapActions(["loginStage"]),
    router(v) {
      this.$router.push({ path: v });
    },
    async checkForm() {
      // this.$router.push({ path: "/register" });
      let data = (await member.ismember(this.login)).data; 
      if(data.success==true){
      this.loginStage(data.resultdata[0]);
      alert("登入成功")
      this.$router.push({path:"about"})

      }else{
        alert("登入錯誤，請重新檢查");
      }
    },
  },
};
</script>

<template>
  <div class="main">
    <div class="register">
      <ul class="register_menu_items">
        <li @click="router('/login')">會員登入</li>
        <li class="more-color">註冊帳號</li>
      </ul>
      <article class="register menu_content">
        <section class="menu_txt">
          <form method="post" id="formCheck">
            <ul>
              <li>
                <label for="ID"><h4>帳號</h4></label>
                <input
                  type="text"
                  placeholder="請輸入帳號"
                  v-model="register.ID"
                  name="ID"
                  id="ID"
                  minlength="4"
                  maxlength="10"
                  required
                />
              </li>
              <li>
                <label for="Password"><h4>密碼</h4></label>
                <input
                  type="Password"
                  id="Password"
                  name="Password"
                  v-model="register.Password"
                  required
                  minlength="6"
                  maxlength="12"
                  placeholder="請輸入密碼(6-12英數字)"
                />
              </li>
              <li>
                <label for="password"> <h4>請重複密碼</h4></label>
                <input
                  type="password"
                  name="repassword"
                  v-model="register.repassword"
                  minlength="6"
                  maxlength="12"
                  placeholder="請輸入密碼(6-12英數字)"
                  id="repassword"
                  required
                />
              </li>
              <li>
                <label for="Name">姓名</label>
                <input
                  type="text"
                  minlength="2"
                  maxlength="10"
                  placeholder="姓名(不可有數字)"
                  v-model="register.Name"
                  id="Name"
                  pattern="[^0-9]{2,10}"
                  required
                />
              </li>
              <li>
                <ul class="info-sex">
                  <li @click="icon_sex1_click(1)" style="color: #fd7807">
                    <i class="fas fa-check-circle" style="color: #fd7807"></i>
                    <span>先生</span>
                  </li>
                  <li @click="icon_sex1_click(2)">
                    <i class="fas fa-check-circle"></i>
                    <span>小姐</span>
                  </li>
                </ul>
              </li>
              <li class="phone">
                <h4>行動電話</h4>
                <input
                  type="text"
                  v-model="register.Hphone"
                  minlength="10"
                  maxlength="12"
                  pattern="^09[0-9]{8}$"
                />
                <span>*格式:0900123123</span>
              </li>
              <li>
                <label for="Email"><h4>email</h4></label>
                <input
                  type="email"
                  pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="請輸入email"
                  title="格式錯誤"
                  v-model="register.Email"
                  name="Email"
                  id="Email"
                  required
                />
              </li>

              <li>
                <input type="submit" @click="checkForm" />
              </li>
            </ul>
          </form>

          <div>註冊成功?<a href="/login" class="focus-color">我要登入</a></div>
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
</script>  
<script>
import "@/assets/js/dom";
// import axios from "axios";
// var cors = require('cors');

import $ from "jquery";
// import other from "@/services/other.js"; //連接首頁api

import member from "@/services/member.js"; //連接首頁api

export default {
  data() {
    return {
      AddressAll: {
        area: "",
      },
      register: {
        // Address: "",
        Name: "",
        ID: "",
        Hphone: "",
        Sex: 0,
        Email: "",
        Password: "",
        repassword: "",
      },
    };
  },
  async mounted() {
    // console.log((await other.area()).data);
    $("form").on("submit", function (event) {
      event.preventDefault();
    });
  },

  methods: {
    router(v) {
      this.$router.push({ path: v });
    },
    async checkForm() {
      console.log(this.register.Password);
      console.log(this.register.repassword);
      if (this.register.Password != this.register.repassword) {
        console.log("D");
        document.getElementById("Password").setCustomValidity("帳密錯誤");
      } else {
        document.getElementById("Password").setCustomValidity("");
        let form = document.querySelector("form");
        if (form.checkValidity()) {
          console.log("Dddvv");
          let registerapi = this.register;
          delete registerapi.repassword;
          console.log(this.register);
          let createmember = (await member.setmember(registerapi)).data;
          if (createmember.success == true) {
            this.$router.push({ path: "/login" });
          } else {
            console.log(createmember.result);
          }
        }
      }
    },
    icon_sex1_click(v) {
      this.register.Sex = v - 1;
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
    },
  },
};
</script>

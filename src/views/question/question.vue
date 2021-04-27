<template>
  <main class="main question">
    <article class="container">
      <h1>常見問題</h1>
      <ul class="question-menu">
        <li class="question-menu-1">
          <h4>
            我要訂購商品，最晚多久以前要到門市下訂？
            <i class="fas fa-plus-square"></i>
          </h4>
          <ul class="dropdown" id="question-menu-dropdown">
            <li>蛋糕請於需求日<span class="focus-color">15</span>個工作天前訂購</li>
            <li>餅乾請於需求日 <span class="focus-color">7</span>個工作天前訂購</li>
            <li>巧克力請於需求日 <span class="focus-color">5</span>個工作天前訂購</li>
          </ul>
        </li>
        <li class="question-menu-2">
          <h4>請問宅配費用/運費，你們怎麼收費？ <i class="fas fa-plus-square"></i></h4>

          <ul class="dropdown" id="question-menu-dropdown">
            <li>
              目前委外司機物流配送，故各區收費方式不同，請於訂購商品時直接參考產品資訊，或洽詢門市人員。
            </li>
          </ul>
        </li>
        <li class="question-menu-3">
          <h4>你們的商品可以寄送海外嗎？ <i class="fas fa-plus-square"></i></h4>

          <ul class="dropdown" id="question-menu-dropdown">
            <li>很抱歉，目前商品無寄送台灣本島以外之服務。</li>
          </ul>
        </li>
        <li class="question-menu-4">
          <h4>
            商品可以試吃嗎？可以宅配給我嗎？該怎麼申請？
            <i class="fas fa-plus-square"></i>
          </h4>

          <ul class="dropdown" id="question-menu-dropdown">
            <li>申請方式歡迎您前往門市嘗鮮。</li>
          </ul>
        </li>
        <li class="question-menu-5">
          <h4>
            .你們的商品要訂多少盒才有折扣？折扣多少？
            <i class="fas fa-plus-square"></i>
          </h4>

          <ul class="dropdown" id="question-menu-dropdown">
            <li>每波促銷活動的價格不一，建議您直接前往門市詳談。</li>
          </ul>
        </li>
      </ul>
    </article>
  </main>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {};
  },
  mounted() {
       $(window).scrollTop(0);
    $(".question-menu li h4").on("click", function () {
      let className = $(this).parent()[0].className;

      $(".question-menu li." + className + " #question-menu-dropdown").fadeToggle(
        "dropdown question-menu-dropdown ",
        "linear"
      );
    });
  },
};
</script>

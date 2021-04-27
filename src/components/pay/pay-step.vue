<template>
  <section class="pay-step">
    <ul>
      <li>
        <div class="icon pay-step-selected">
          <i class="fas fa-file-alt"></i>
        </div>
        <div>
          <h3>STEP.<span>01</span></h3>
          <h3>確認訂購內容</h3>
        </div>
      </li>
      <li>
        <div class="icon">
          <i class="fal fa-file-edit"></i>
        </div>
        <div>
          <h3>STEP.<span>02</span></h3>
          <h3>填寫訂購資料</h3>
        </div>
      </li>
      <li>
        <div class="icon">
          <i class="fas fa-check-circle"></i>
        </div>
        <div>
          <h3>STEP.<span>03</span></h3>
          <h3>訂單完成</h3>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import $ from "jquery";

export default {
  props: ["step"],
  data() {
    return {};
  },
  watch: {},
  mounted() {
    // pay-step-selected
    let getAllicon = $(".icon");
    getAllicon.each(function () {
      $(this).removeClass("pay-step-selected");
    });
    getAllicon.eq(this.step).addClass("pay-step-selected");
  },
};
</script>

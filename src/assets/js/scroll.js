import $ from "jquery";
$(document).ready(function() {
    // var showSkill = false;


    $('.scrollTop').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos }, 1000);
    });

    $(window).scroll(function() {
        $('#profiles').css('background-position-y', -(500 / 2) + 'px')
            // $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )')
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        // console.log(`滾輪上方${scrollPos}, 整個頁面的高${windowHeight}`);
        // 滾動位置
        // var scrollPos = $(window).scrollTop();
        // 整份文件高度
        // var windowHeight = $(window).height();
        // console.log(`滾輪上方${scrollPos}, 整個頁面的高${windowHeight}`);

        $('.scrollTop').each(function() {
            var target = $(this).attr('href');

            var targetPos = $(target).offset().top;

            var targetHeight = $(target).outerHeight();
            // 300 1200 600 1200

            if (targetPos < scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active');
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
        $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )')

        // 滾動位置 
        var targetPos = $("#skills").offset().top;
        console.log(windowHeight / 2)
        if (targetPos <= (scrollPos + (windowHeight / 2))) {
            $('#skills .progress-bar').each(function() {
                let width = $.trim($(this).text()) + "%";
                $(this).css("cssText", "width:" + width);
            })
        }
        $('.animated').each(function() {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });


    });


});
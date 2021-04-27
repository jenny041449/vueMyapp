import $ from "jquery";
$(document).ready(function() {
    var showSkill = false;

    $('.scrollTop').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({ scrollTop: targetPos }, 1000);
    });

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        console.log(`滾輪上方${scrollPos}, 整個頁面的高${windowHeight}`);

        $('.scrollTop').each(function() {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            // 如果滾到.scrollTop的上方(實際) <=滾輪上到下的位置
            // 如果滾到.scrollTop的上方(實際)+目前的實際高度>滑動的位置

            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.scrollTop').removeClass('active')
                $(this).addClass('active');
            } else {
                $(this).removeClass('active')
            }
        });

        // progress bar
        var skillTop = $('#skills').position().top;
        // console.log('skillTop', skillTop);
        if (skillTop <= (scrollPos + windowHeight / 2) && !showSkill) {
            showSkill = true;
            $('#skills .progress-bar').each(function() {
                var thisValue = $(this).data('progress');
                console.log('thisValue', thisValue);
                $(this).css('width', thisValue + '%');
            });
        }

        // animated
        $('.animated').each(function() {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });

        // bg scroll 
        $('#profiles').css('background-position-y', -(scrollPos / 2) + 'px')
        $('#header-ele').css('transform', 'translateY( ' + (scrollPos / 2) + 'px )')
    });

});
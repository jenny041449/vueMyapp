import $ from "jquery";

function cancel_all_asideMenuSelected() {
    $('.aside-menu-selected').each(function() {
        $(this).removeClass("aside-menu-selected");
        $('.aside-menu ul').css("display", "none");
    })

}
window.onload = function() {

    $(window).on('resize', function() {

        if ($(window).width() < 800) {} else {}
    });
    $("h2[class*=title-product]").each(function() {
        // console.log($(this).parent())
        $(this).click(function() {
            // $(this).children()
            //nextAll=> 兄弟id
            if ($(window).width() > 800) {
                let className = $(this).nextAll()[0].id;
                $(`#${className}`).toggle();
                // console.log($(this).nextAll()[0].id)

            }
        });
    });
    // $(".product-menu li:nth-child(1)>div").each(function() {


    // });
    // 手機導覽列
    $('.nav-btn-xs-show').click(function() {
        console.log($("#nav-xs-menus"));
        $("body").toggleClass('no-overflow');
        $("#nav-xs-menus").toggleClass('xs-show');

    });
    // 手機下方列表引藏
    function cancel_all_asideClick() {
        $('.nav-btn-xs-show').each(function() {
            $(this).removeClass("xs-show");
        })
    }


    // 手機點及最上方顯示所有產品
    $('.aside-menu-selected').click(function() {
            if ($(window).width() < 800) { $('.aside-menu').toggle(); }
        })
        // 除了所有產品的項目
    $('.aside-menu li').click(function() {
        if ($(window).width() < 800) {
            // 手機板
            cancel_all_asideClick();
            // 所又產品
            let asideMenuChild = $('.aside-menu-selected li h2')[0].innerText;
            // 馬卡龍
            let selectedText = $(this).children("h2")[0].innerText;
            $(this).children("h2")[0].innerText = asideMenuChild;
            $('.aside-menu-selected li h2')[0].innerText = selectedText;

            $('.aside-menu').toggle();
        } else {
            if (!$(this).hasClass("aside-menu-selected")) {
                cancel_all_asideMenuSelected();
                $(this).children("ul").css("display", "block");
                $(this).addClass("aside-menu-selected");
            }

        }
    })
    $('#aside-menu-change').click(function() {
        if ($(window).width() > 800) {
            if (!$(this).hasClass("aside-menu-selected")) {
                cancel_all_asideMenuSelected();
                $(this).addClass("aside-menu-selected");
            }
        }

    })
}
$(function () {
    // ハンバーガーメニュー
  $(".js-hamburger,.js-drawer").click(function () {
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
  });
});

// スライダー/swiper
const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade",
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 3000,
    },
  });

//  アコーディオンニュー
  $(function () {
    $(".js-accordion__item:first-child .js-accordion__content").css(
      "display",
      "block"
    );
    $(".js-accordion__item:first-child .js-accordion__title").addClass("is-open");
    $(".js-accordion__title").on("click", function () {
      $(this).toggleClass("is-open");
      $(this).next().slideToggle(300);
    });
  });

  // ページ内リンク
$(function () {
    // ヘッダーの高さ分だけコンテンツを下げる
    const height = $(".js-header").height();
    $("main").css("margin-top", height);
  
    // ヘッダーの高さ取得
    const headerHeight = $(".js-header").height();
    $('a[href^="#"]').click(function () {
      const speed = 600;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "html" : href);
      // ヘッダーの高さ分下げる
      let position = target.offset().top - headerHeight;
      $("body,html").animate({ scrollTop: position }, speed, "swing");
      return false;
    });
  });
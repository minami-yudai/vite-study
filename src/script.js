import $ from "jquery";
import 'slick-carousel';


$(document).ready(() => {
  $('.your-slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
  });
});

const picset = ()=> {//スライドショーをセット
    $('#picturebox').slick({
        centerMode: true,
        centerPadding: 'calc((100% - 405px * 1.2) / 2)',
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 3000,
        infinite: true,
        arrows: true,
        dots: false,
        prevArrow: "<div class='slick slick-prev hover'><p>＜</p></div>",
        nextArrow: "<div class='slick slick-next hover'><p>＞</p></div>",
    });
};

$(function(){//ページ読み込み時
  picset();
  $(window).scroll(function () {//スクロール時ナビゲーター表示/非表示をセット
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition >= 300) {
      $(".n-container").fadeIn();
    } else {
      $(".n-container").fadeOut();
    }
  });
  $('#h-hamburger').click(function(){//ハンバーガーメニュークリック時
    $('.h-menubox').fadeIn();
    $('html').css('overflow-y','hidden');
    $('#h-closer').fadeIn();
    $('#main').css('filter','blur(5px)');
  })
  $('#h-closer').click(function(){//クローズクリック時
    $('.h-menubox').fadeOut();
    $('html').css('overflow-y','auto');
    $('#h-closer').fadeOut();
    $('#main').css('filter','blur(0px)');
  })
  // ブレイクポイントを設定
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  // 関数を定義
  function checkWindow(windowSize) {
      // ウィンドウサイズが768px以上か
      if (windowSize.matches) {
        $('.h-menubox').css('display','block');
      }else{
        $('.h-menubox').css('display','none');
      }
  }

  // ロード時に判定
  checkWindow(mediaQuery);

  // ブレイクポイントが切り替わったら判定
  mediaQuery.addEventListener('change', checkWindow);
});







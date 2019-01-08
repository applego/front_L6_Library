$(document).ready(function(){
  //popupクラスを持つ要素にMagnific Popupを適用
  $(".popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    mainClass: "mfp-fade",
    removalDelay:300
  });
});
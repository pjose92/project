"use strict";

jQuery(document).ready(function ($) {
  /************** Single Page Nav Plugin *********************/
  $(".menu").singlePageNav({ filter: ":not(.external)" });

  /************** FlexSlider Plugin *********************/
  $(".flexslider").flexslider({
    animation: "fade",
    controlNav: false,
    nextText: "",
    prevText: "",
  });

  $(".flex-caption").addClass("animated bounceInDown");

  $(".flex-direction-nav a").on("click", function () {
    $(".flex-caption").removeClass("animated bounceInDown");
    $(".flex-caption").fadeIn(0).addClass("animated bounceInDown");
  });

  /************** LightBox *********************/
  $(function () {
    $('[data-rel="lightbox"]').lightbox();
  });

  /************** Go Top *********************/
  $("#go-top").click(function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  /************** Responsive Navigation *********************/
  $(".toggle-menu").click(function () {
    $(".menu").stop(true, true).toggle();
    return false;
  });
  $(".responsive-menu .menu a").click(function () {
    $(".responsive-menu .menu").hide();
  });
});

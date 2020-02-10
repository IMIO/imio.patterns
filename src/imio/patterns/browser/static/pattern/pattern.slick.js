/* global require
* Example: Slick element
<div class="pat-imio-slick"
  data-pat-imio-slick='{"slidesToShow": 1, "arrows": true, "slidesToScroll": 1, "infinite": true, "dots": false, "speed": 100}'>
    <div>slide 1</div>
    <div>slide 2</div>
    <div>slide 3</div>
</div>
*/

define([
  'jquery',
  'underscore',
  'pat-base',
  'pat-registry',
  'imio-patterns-i18n',
  'mockup-utils',
  'slick',
], function ($, _, Base, registry, _t, utils, Slick) {
  'use strict';

  var SlickPattern = Base.extend({
    name: 'imio-slick',
    trigger: '.pat-imio-slick',
    parser: 'mockup',
    defaults: {
      fade: false,
      vertical: false,
      cssEase: 'linear',
      autoplay: false,
      autoplaySpeed: 2000, //end new attr
      pauseOnFocus: true,
      centerMode:false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 300,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    },
    init: function () {
      var self = this;
      self.$el.slick({
         fade: self.options.fade,
         vertical: self.options.vertical,
         cssEase: self.options.cssEase,
         autoplay: self.options.autoplay,
         autoplaySpeed: self.options.autoplaySpeed,
         pauseOnFocus: self.options.pauseOnFocus,

         infinite: self.options.infinite,
         centerMode: self.options.centerMode,
         slidesToShow: self.options.slidesToShow,
         slidesToScroll: self.options.slidesToScroll,
         speed: self.options.speed,
         dots: self.options.dots,
         arrows: self.options.arrows,
         responsive: [
           {
             breakpoint: self.options.breakpoint_full,
             settings: {
               slidesToShow: self.options.slidesToShow_full,
               slidesToScroll: self.options.slidesToScroll_full,
               infinite: true,
               dots: true
             }
           },
           {
             breakpoint: self.options.breakpoint_medium,
             settings: {
               slidesToShow: self.options.slidesToShow_medium,
               slidesToScroll: self.options.slidesToScroll_medium
             }
           },
           {
             breakpoint: self.options.breakpoint_small,
             settings: {
               slidesToShow: self.options.slidesToShow_small,
               slidesToScroll: self.options.slidesToScroll_small
             }
           }
         ]
      }
      );
    },
  });

  return SlickPattern;
});

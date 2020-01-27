/* global require
* Example: Slick element
<div class="pat-imio-slick"
  data-pat-imio-slick='{"slidesToShow": 1, "slidesToScroll": 1, "infinite": true, "dots": false, "speed": 100}'>
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
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 300,
      dots: true,
    },
    init: function () {
      var self = this;
      var template = self.$el.after(self.template({
        _t: _t,
      }));
      self.$el.slick({
         infinite: self.options.infinite,
         slidesToShow: self.options.slidesToShow,
         slidesToScroll: self.options.slidesToScroll,
         speed: self.options.speed,
         dots: self.options.dots,
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
      }
      );
    },
  });

  return SlickPattern;
});

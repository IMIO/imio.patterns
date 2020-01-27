/* global require
* Example: Slick element
<p class="pat-imio-slick">
</p>
*/

$.fn.toggleText = function (t1, t2) {
  if (this.text() == t1) this.text(t2);
  else this.text(t1);
  return this;
};

define([
  'jquery',
  'underscore',
  'pat-base',
  'pat-registry',
  'text!imio-patterns-bundle-url/templates/slick.xml',
  'imio-patterns-i18n',
  'mockup-utils',
], function ($, _, Base, registry, SlickTemplate, _t, utils) {
  'use strict';

  var SlickPattern = Base.extend({
    name: 'imio-slick',
    trigger: '.pat-imio-slick',
    parser: 'mockup',
    template: _.template(SlickTemplate),
    defaults: {
      textMore: _t('Read more'),
      textLess: _t('Read less'),
    },
    init: function () {
      var self = this;
      var template = self.$el.after(self.template({
        _t: _t,
      }));
    },
  });

  return SlickPattern;
});

const Controls = (function () {
  "use strict";
  const priceBtn = $(".js-price");

  return {
    checkUpdPrice: function () {
      priceBtn.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        const typePrice = _this.data("type");
        const currentPrice = $(`.js-price[data-type='${typePrice}']`);
        priceBtn.removeClass("active");
        currentPrice.addClass("active");
      });
    },
    showFullLessons: function () {
      $(".js-show-lessons").click(function (e) {
        e.preventDefault();
        $(".js-lessons").toggleClass("show");
        $(".js-show-lessons").hide();
      });
    },
    init: function () {
      Controls.checkUpdPrice();
      Controls.showFullLessons();
    },
  };
})();

export default Controls;

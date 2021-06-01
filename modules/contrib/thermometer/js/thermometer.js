// Originally from
// http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript
function formatCurrency(n, c, d, t) {
  "use strict";

  var s;
  var i;
  var j;

  c = isNaN(c = Math.abs(c)) ? 2 : c;

  var d = void 0;
  var undefined1 = d;
  d = typeof d === undefined1 ? "," : d;

  var t = void 0;
  var undefined2 = t;
  t = typeof t === undefined2 ? "," : t;

  s = n < 0 ? "-" : "";
  i = parseInt(n = Math.abs(+n || 0).toFixed(c), 10) + "";
  j = (j = i.length) > 3 ? j % 3 : 0;

  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\\d{3})(?=\\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

/**
 * Uses the closure to map JQuery variable to $ variable
 */
(function ($) {
  "use strict";
  Drupal.behaviors.thermometer = {
    // Originally from:
    // https://www.sitepoint.com/community/t/code-for-a-fundraising-thermometer/21832/4
    attach: function (context) {
      $(".thermometer").each(function (index, value) {
        // Set up our vars and cache some jQuery objects.
        var $thermo = value;
        var $progress = $(".progress", $thermo);
        var $goal = $(".goal", $thermo);

        // Work out our numbers.
        var goalAmount = parseFloat($goal.text());
        var progressAmount = parseFloat($progress.text());
        var percentageAmount =  Math.min(Math.round(progressAmount / goalAmount * 1000) / 10, 100); // make sure we have 1 decimal point
        var symbol = $(".track", $thermo).attr("data-symbol_prefix");

        // Let's format the numbers and put them back in the DOM
        $goal.find(".amount").text("$" + formatCurrency(goalAmount));
        $progress.find(".amount").text("$" + formatCurrency(progressAmount));

        // Let's set the progress indicator.
        $progress.find(".amount").hide();
        $progress.animate({
          "height": percentageAmount + "%"
        }, 1200, function () {
          $(this).find(".amount").fadeIn(500);
        });
      });
    }
  };
}(jQuery));

// Generated by CoffeeScript 1.9.0
HTMLWidgets.widget({
  name: "iplotMap",
  type: "output",
  initialize: function(el, width, height) {
    return d3.select(el).append("svg").attr("width", width).attr("height", height).attr("class", "qtlcharts");
  },
  renderValue: function(el, x) {
    var chartOpts, svg, _ref, _ref1, _ref2;
    svg = d3.select(el).select("svg");
    chartOpts = (_ref = x.chartOpts) != null ? _ref : [];
    chartOpts.width = (_ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? _ref1 : svg.attr("width");
    chartOpts.height = (_ref2 = chartOpts != null ? chartOpts.height : void 0) != null ? _ref2 : svg.attr("height");
    svg.attr("width", chartOpts.width);
    svg.attr("height", chartOpts.height);
    return iplotMap(el, x.data, chartOpts);
  },
  resize: function(el, width, height) {
    return d3.select(el).select("svg").attr("width", width).attr("height", height);
  }
});

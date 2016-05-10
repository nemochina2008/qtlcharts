// Generated by CoffeeScript 1.10.0
var iplotScanone_ci;

iplotScanone_ci = function(widgetdiv, lod_data, pxg_data, chartOpts) {
  var altrectcolor, chartdivid, chrGap, eff_axispos, eff_linecolor, eff_linewidth, eff_nyticks, eff_rotate_ylab, eff_segwidth, eff_titlepos, eff_xlab, eff_ylab, eff_ylim, eff_yticks, g_lod, height, lod_axispos, lod_linecolor, lod_linewidth, lod_nyticks, lod_pointcolor, lod_pointsize, lod_pointstroke, lod_rotate_ylab, lod_title, lod_titlepos, lod_xlab, lod_ylab, lod_ylim, lod_yticks, margin, markers, mycichart, mylodchart, plotCI, rectcolor, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref3, ref30, ref31, ref32, ref33, ref34, ref35, ref36, ref4, ref5, ref6, ref7, ref8, ref9, svg, widgetdivid, width, wleft, wright, x;
  markers = (function() {
    var results;
    results = [];
    for (x in pxg_data.chrByMarkers) {
      results.push(x);
    }
    return results;
  })();
  height = (ref = chartOpts != null ? chartOpts.height : void 0) != null ? ref : 530;
  width = (ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? ref1 : 1200;
  wleft = (ref2 = chartOpts != null ? chartOpts.wleft : void 0) != null ? ref2 : width * 0.7;
  margin = (ref3 = chartOpts != null ? chartOpts.margin : void 0) != null ? ref3 : {
    left: 60,
    top: 40,
    right: 40,
    bottom: 40,
    inner: 5
  };
  lod_axispos = (ref4 = (ref5 = chartOpts != null ? chartOpts.lod_axispos : void 0) != null ? ref5 : chartOpts != null ? chartOpts.axispos : void 0) != null ? ref4 : {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  };
  lod_titlepos = (ref6 = (ref7 = chartOpts != null ? chartOpts.lod_titlepos : void 0) != null ? ref7 : chartOpts != null ? chartOpts.titlepos : void 0) != null ? ref6 : 20;
  chrGap = (ref8 = chartOpts != null ? chartOpts.chrGap : void 0) != null ? ref8 : 8;
  rectcolor = (ref9 = chartOpts != null ? chartOpts.rectcolor : void 0) != null ? ref9 : "#E6E6E6";
  altrectcolor = (ref10 = chartOpts != null ? chartOpts.altrectcolor : void 0) != null ? ref10 : "#C8C8C8";
  lod_ylim = (ref11 = chartOpts != null ? chartOpts.lod_ylim : void 0) != null ? ref11 : null;
  lod_nyticks = (ref12 = chartOpts != null ? chartOpts.lod_nyticks : void 0) != null ? ref12 : 5;
  lod_yticks = (ref13 = chartOpts != null ? chartOpts.lod_yticks : void 0) != null ? ref13 : null;
  lod_linecolor = (ref14 = chartOpts != null ? chartOpts.lod_linecolor : void 0) != null ? ref14 : "darkslateblue";
  lod_linewidth = (ref15 = chartOpts != null ? chartOpts.lod_linewidth : void 0) != null ? ref15 : 2;
  lod_pointcolor = (ref16 = chartOpts != null ? chartOpts.lod_pointcolor : void 0) != null ? ref16 : "#E9CFEC";
  lod_pointsize = (ref17 = chartOpts != null ? chartOpts.lod_pointsize : void 0) != null ? ref17 : 0;
  lod_pointstroke = (ref18 = chartOpts != null ? chartOpts.lod_pointstroke : void 0) != null ? ref18 : "black";
  lod_title = (ref19 = chartOpts != null ? chartOpts.lod_title : void 0) != null ? ref19 : "";
  lod_xlab = (ref20 = chartOpts != null ? chartOpts.lod_xlab : void 0) != null ? ref20 : "Chromosome";
  lod_ylab = (ref21 = chartOpts != null ? chartOpts.lod_ylab : void 0) != null ? ref21 : "LOD score";
  lod_rotate_ylab = (ref22 = chartOpts != null ? chartOpts.lod_rotate_ylab : void 0) != null ? ref22 : null;
  eff_ylim = (ref23 = chartOpts != null ? chartOpts.eff_ylim : void 0) != null ? ref23 : null;
  eff_nyticks = (ref24 = chartOpts != null ? chartOpts.eff_nyticks : void 0) != null ? ref24 : 5;
  eff_yticks = (ref25 = chartOpts != null ? chartOpts.eff_yticks : void 0) != null ? ref25 : null;
  eff_linecolor = (ref26 = chartOpts != null ? chartOpts.eff_linecolor : void 0) != null ? ref26 : "slateblue";
  eff_linewidth = (ref27 = chartOpts != null ? chartOpts.eff_linewidth : void 0) != null ? ref27 : "3";
  eff_xlab = (ref28 = chartOpts != null ? chartOpts.eff_xlab : void 0) != null ? ref28 : "Genotype";
  eff_ylab = (ref29 = chartOpts != null ? chartOpts.eff_ylab : void 0) != null ? ref29 : "Phenotype";
  eff_rotate_ylab = (ref30 = chartOpts != null ? chartOpts.eff_rotate_ylab : void 0) != null ? ref30 : null;
  eff_segwidth = (ref31 = chartOpts != null ? chartOpts.eff_segwidth : void 0) != null ? ref31 : null;
  eff_axispos = (ref32 = (ref33 = chartOpts != null ? chartOpts.eff_axispos : void 0) != null ? ref33 : chartOpts != null ? chartOpts.axispos : void 0) != null ? ref32 : {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  };
  eff_titlepos = (ref34 = (ref35 = chartOpts != null ? chartOpts.eff_titlepos : void 0) != null ? ref35 : chartOpts != null ? chartOpts.titlepos : void 0) != null ? ref34 : 20;
  chartdivid = (ref36 = chartOpts != null ? chartOpts.chartdivid : void 0) != null ? ref36 : 'chart';
  widgetdivid = d3.select(widgetdiv).attr('id');
  wright = width - wleft;
  mylodchart = d3panels.lodchart({
    height: height,
    width: wleft,
    margin: margin,
    axispos: lod_axispos,
    titlepos: lod_titlepos,
    chrGap: chrGap,
    altrectcolor: altrectcolor,
    rectcolor: rectcolor,
    ylim: lod_ylim,
    nyticks: lod_nyticks,
    yticks: lod_yticks,
    linecolor: lod_linecolor,
    linewidth: lod_linewidth,
    pointcolor: lod_pointcolor,
    pointsize: lod_pointsize,
    pointstroke: lod_pointstroke,
    title: lod_title,
    xlab: lod_xlab,
    ylab: lod_ylab,
    rotate_ylab: lod_rotate_ylab,
    tipclass: widgetdivid
  });
  svg = d3.select(widgetdiv).select("svg");
  g_lod = svg.append("g").attr("id", "lodchart");
  mylodchart(g_lod, lod_data);
  mycichart = null;
  plotCI = function(markername, markerindex) {
    var ave, chr, chrtype, ci_g, g, gabs, genonames, high, i, j, k, low, means, p, phesub, range, ref37, se, variance;
    if (mycichart != null) {
      mycichart.remove();
    }
    g = pxg_data.geno[markerindex];
    gabs = (function() {
      var k, len, results;
      results = [];
      for (k = 0, len = g.length; k < len; k++) {
        x = g[k];
        results.push(Math.abs(x));
      }
      return results;
    })();
    chr = pxg_data.chrByMarkers[markername];
    chrtype = pxg_data.chrtype[chr];
    genonames = pxg_data.genonames[chrtype];
    means = [];
    se = [];
    for (j = k = 1, ref37 = genonames.length; 1 <= ref37 ? k <= ref37 : k >= ref37; j = 1 <= ref37 ? ++k : --k) {
      phesub = (function() {
        var l, len, ref38, results;
        ref38 = pxg_data.pheno;
        results = [];
        for (i = l = 0, len = ref38.length; l < len; i = ++l) {
          p = ref38[i];
          if (gabs[i] === j && (p != null)) {
            results.push(p);
          }
        }
        return results;
      })();
      if (phesub.length > 0) {
        ave = (phesub.reduce(function(a, b) {
          return a + b;
        })) / phesub.length;
        means.push(ave);
      } else {
        means.push(null);
      }
      if (phesub.length > 1) {
        variance = (phesub.reduce(function(a, b) {
          return a + Math.pow(b - ave, 2);
        })) / (phesub.length - 1);
        se.push(Math.sqrt(variance / phesub.length));
      } else {
        se.push(null);
      }
    }
    low = (function() {
      var results;
      results = [];
      for (i in means) {
        results.push(means[i] - 2 * se[i]);
      }
      return results;
    })();
    high = (function() {
      var results;
      results = [];
      for (i in means) {
        results.push(means[i] + 2 * se[i]);
      }
      return results;
    })();
    range = [d3.min(low), d3.max(high)];
    if (eff_ylim != null) {
      eff_ylim = [d3.min([range[0], eff_ylim[0]]), d3.max([range[1], eff_ylim[1]])];
    } else {
      eff_ylim = range;
    }
    mycichart = d3panels.cichart({
      height: height,
      width: wright,
      margin: margin,
      axispos: eff_axispos,
      titlepos: eff_titlepos,
      title: markername,
      xlab: eff_xlab,
      ylab: eff_ylab,
      rotate_ylab: eff_rotate_ylab,
      ylim: eff_ylim,
      nyticks: eff_nyticks,
      yticks: eff_yticks,
      segcolor: eff_linecolor,
      vertsegcolor: eff_linecolor,
      segstrokewidth: eff_linewidth,
      segwidth: eff_segwidth,
      rectcolor: rectcolor,
      tipclass: widgetdivid,
      xcatlabels: genonames
    });
    ci_g = svg.append("g").attr("id", "cichart").attr("transform", "translate(" + wleft + ",0)");
    return mycichart(ci_g, {
      'mean': means,
      'low': low,
      'high': high
    });
  };
  return mylodchart.markerSelect().on("click", function(d, i) {
    return plotCI(markers[i], i);
  });
};

// Generated by CoffeeScript 1.10.0
var iplotRF;

iplotRF = function(widgetdiv, rf_data, geno, chartOpts) {
  var axispos, bordercolor, cellHeight, cellPad, cellWidth, cells, celltip, chartdivid, chrGap, chrtype, col, colors, create_crosstab, create_scan, crosstab_height, crosstab_width, crosstab_xpos, crosstab_ypos, darkrect, fontsize, g_heatmap, hbot, heatmap_height, heatmap_width, height, hilitcolor, htop, j, k, l, lightrect, lodlim, m, margin, max_ngeno, mychrheatmap, mycrosstab, mylodchart, nullcolor, oneAtTop, pixelPerCell, pointcolor, pointsize, pointstroke, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref3, ref4, ref5, ref6, ref7, ref8, ref9, row, svg, totalh, totalw, totmar, w, wbot, widgetdivid, width;
  height = (ref = chartOpts != null ? chartOpts.height : void 0) != null ? ref : 1000;
  width = (ref1 = chartOpts != null ? chartOpts.width : void 0) != null ? ref1 : 1000;
  pixelPerCell = (ref2 = chartOpts != null ? chartOpts.pixelPerCell : void 0) != null ? ref2 : null;
  chrGap = (ref3 = chartOpts != null ? chartOpts.chrGap : void 0) != null ? ref3 : 2;
  cellHeight = (ref4 = chartOpts != null ? chartOpts.cellHeight : void 0) != null ? ref4 : 30;
  cellWidth = (ref5 = chartOpts != null ? chartOpts.cellWidth : void 0) != null ? ref5 : 80;
  cellPad = (ref6 = chartOpts != null ? chartOpts.cellPad : void 0) != null ? ref6 : 20;
  hbot = (ref7 = chartOpts != null ? chartOpts.hbot : void 0) != null ? ref7 : 300;
  fontsize = (ref8 = chartOpts != null ? chartOpts.fontsize : void 0) != null ? ref8 : cellHeight * 0.7;
  margin = (ref9 = chartOpts != null ? chartOpts.margin : void 0) != null ? ref9 : {
    left: 60,
    top: 30,
    right: 10,
    bottom: 40,
    inner: 5
  };
  axispos = (ref10 = chartOpts != null ? chartOpts.axispos : void 0) != null ? ref10 : {
    xtitle: 25,
    ytitle: 30,
    xlabel: 5,
    ylabel: 5
  };
  lightrect = (ref11 = chartOpts != null ? chartOpts.lightrect : void 0) != null ? ref11 : "#e6e6e6";
  darkrect = (ref12 = chartOpts != null ? chartOpts.darkrect : void 0) != null ? ref12 : "#c8c8c8";
  hilitcolor = (ref13 = chartOpts != null ? chartOpts.hilitcolor : void 0) != null ? ref13 : "#e9cfec";
  nullcolor = (ref14 = chartOpts != null ? chartOpts.nullcolor : void 0) != null ? ref14 : "#e6e6e6";
  bordercolor = (ref15 = chartOpts != null ? chartOpts.bordercolor : void 0) != null ? ref15 : "black";
  pointsize = (ref16 = chartOpts != null ? chartOpts.pointsize : void 0) != null ? ref16 : 2;
  pointcolor = (ref17 = chartOpts != null ? chartOpts.pointcolor : void 0) != null ? ref17 : "slateblue";
  pointstroke = (ref18 = chartOpts != null ? chartOpts.pointstroke : void 0) != null ? ref18 : "black";
  colors = (ref19 = chartOpts != null ? chartOpts.colors : void 0) != null ? ref19 : ["crimson", "white", "slateblue"];
  lodlim = (ref20 = chartOpts != null ? chartOpts.lodlim : void 0) != null ? ref20 : [0, 12];
  oneAtTop = (ref21 = chartOpts != null ? chartOpts.oneAtTop : void 0) != null ? ref21 : false;
  chartdivid = (ref22 = chartOpts != null ? chartOpts.chartdivid : void 0) != null ? ref22 : 'chart';
  widgetdivid = d3.select(widgetdiv).attr('id');
  rf_data.chrnames = forceAsArray(rf_data.chrnames);
  rf_data.nmar = forceAsArray(rf_data.nmar);
  totmar = sumArray(rf_data.nmar);
  if (pixelPerCell == null) {
    pixelPerCell = d3.max([2, Math.floor(600 / totmar)]);
  }
  w = chrGap * rf_data.chrnames.length + pixelPerCell * totmar;
  heatmap_width = w + margin.left + margin.right;
  heatmap_height = w + margin.top + margin.bottom;
  max_ngeno = d3.max((function() {
    var results;
    results = [];
    for (chrtype in geno.genocat) {
      results.push(geno.genocat[chrtype].length);
    }
    return results;
  })());
  crosstab_width = cellWidth * (max_ngeno + 2) + margin.left + margin.right;
  crosstab_height = cellHeight * (max_ngeno + 3) + margin.top + margin.bottom;
  crosstab_xpos = heatmap_width;
  crosstab_ypos = (heatmap_height - crosstab_height) / 2 - margin.top;
  if (crosstab_ypos < 0) {
    crosstab_ypos = 0;
  }
  wbot = (heatmap_width + crosstab_width) / 2;
  totalw = heatmap_width + crosstab_width;
  htop = d3.max([heatmap_height, crosstab_height]);
  totalh = htop + hbot;
  svg = d3.select(widgetdiv).select("svg").attr("viewBox", [0, 0, totalw, totalh].join(" ")).attr("preserveAspectRatio", "xMinYMin meet").style("height", "100%").style("width", "100%");
  if (d3.min(lodlim) < 0) {
    displayError("lodlim values must be non-negative; ignored", "error_" + chartdivid);
    lodlim = [2, 12];
  }
  if (lodlim[0] >= lodlim[1]) {
    displayError("lodlim[0] must be < lodlim[1]; ignored", "error_" + chartdivid);
    lodlim = [2, 12];
  }
  rf_data.z = rf_data.rf.map(function(d) {
    return d.map(function(dd) {
      return dd;
    });
  });
  for (row = j = 0, ref23 = rf_data.z.length; 0 <= ref23 ? j < ref23 : j > ref23; row = 0 <= ref23 ? ++j : --j) {
    for (col = k = 0, ref24 = rf_data.z.length; 0 <= ref24 ? k < ref24 : k > ref24; col = 0 <= ref24 ? ++k : --k) {
      if (row > col) {
        rf_data.z[row][col] = rf_data.z[col][row];
      }
    }
  }
  for (row = l = 0, ref25 = rf_data.z.length; 0 <= ref25 ? l < ref25 : l > ref25; row = 0 <= ref25 ? ++l : --l) {
    for (col = m = 0, ref26 = rf_data.z.length; 0 <= ref26 ? m < ref26 : m > ref26; col = 0 <= ref26 ? ++m : --m) {
      if (row === col || ((rf_data.z[row][col] != null) && rf_data.z[row][col] > lodlim[1])) {
        rf_data.z[row][col] = lodlim[1];
      }
      if (row > col && rf_data.rf[row][col] > 0.5) {
        rf_data.z[row][col] = -rf_data.z[row][col];
      }
      if (col > row && rf_data.rf[col][row] > 0.5) {
        rf_data.z[row][col] = -rf_data.z[row][col];
      }
    }
  }
  mychrheatmap = chrheatmap().pixelPerCell(pixelPerCell).chrGap(chrGap).axispos(axispos).rectcolor(lightrect).nullcolor(nullcolor).bordercolor(bordercolor).colors(colors).zthresh(lodlim[0]).oneAtTop(oneAtTop).hover(false).tipclass(widgetdivid);
  g_heatmap = svg.append("g").attr("id", "chrheatmap").datum(rf_data).call(mychrheatmap);
  mycrosstab = null;
  mylodchart = [null, null];
  create_crosstab = function(marker1, marker2) {
    var data, g_crosstab;
    data = {
      x: geno.geno[marker1],
      y: geno.geno[marker2],
      xcat: geno.genocat[geno.chrtype[marker1]],
      ycat: geno.genocat[geno.chrtype[marker2]],
      xlabel: marker1,
      ylabel: marker2
    };
    if (mycrosstab != null) {
      mycrosstab.remove();
    }
    mycrosstab = crosstab().cellHeight(cellHeight).cellWidth(cellWidth).cellPad(cellPad).margin(margin).fontsize(fontsize).rectcolor(lightrect).hilitcolor(hilitcolor).bordercolor(bordercolor);
    return g_crosstab = svg.append("g").attr("id", "crosstab").attr("transform", "translate(" + crosstab_xpos + ", " + crosstab_ypos + ")").datum(data).call(mycrosstab);
  };
  create_scan = function(markerindex, panelindex) {
    var data, g_scans, i, n, ref27;
    data = {
      chrnames: rf_data.chrnames,
      lodnames: ["lod"],
      chr: rf_data.chr,
      pos: rf_data.pos,
      lod: (function() {
        var results;
        results = [];
        for (i in rf_data.pos) {
          results.push(i);
        }
        return results;
      })(),
      markernames: rf_data.labels
    };
    for (row = n = 0, ref27 = rf_data.rf.length; 0 <= ref27 ? n < ref27 : n > ref27; row = 0 <= ref27 ? ++n : --n) {
      if (row > markerindex) {
        data.lod[row] = rf_data.rf[markerindex][row];
      } else if (row < markerindex) {
        data.lod[row] = rf_data.rf[row][markerindex];
      }
    }
    data.lod[markerindex] = null;
    if (mylodchart[panelindex] != null) {
      mylodchart[panelindex].remove();
    }
    mylodchart[panelindex] = lodchart().height(hbot - margin.top - margin.bottom).width(wbot - margin.left - margin.right).margin(margin).axispos(axispos).ylim([0.0, d3.max(data.lod)]).lightrect(lightrect).darkrect(darkrect).linewidth(0).linecolor("").pointsize(pointsize).pointcolor(pointcolor).pointstroke(pointstroke).lodvarname("lod").title(data.markernames[markerindex]).tipclass(widgetdivid);
    g_scans = svg.append("g").attr("id", "lod_rf_" + (panelindex + 1)).attr("transform", "translate(" + (wbot * panelindex) + ", " + htop + ")").datum(data).call(mylodchart[panelindex]);
    return mylodchart[panelindex].markerSelect().on("click", function(d) {
      var newmarker;
      newmarker = d.name;
      if (panelindex === 0) {
        create_crosstab(rf_data.labels[markerindex], newmarker);
      } else {
        create_crosstab(newmarker, rf_data.labels[markerindex]);
      }
      return create_scan(rf_data.labels.indexOf(newmarker), 1 - panelindex);
    });
  };
  celltip = d3.tip().attr('class', "d3-tip " + widgetdivid).html(function(d) {
    var lod, mari, marj, rf;
    mari = rf_data.labels[d.i];
    marj = rf_data.labels[d.j];
    if (+d.i > +d.j) {
      rf = rf_data.rf[d.i][d.j];
      lod = rf_data.rf[d.j][d.i];
    } else if (+d.j > +d.i) {
      rf = rf_data.rf[d.j][d.i];
      lod = rf_data.rf[d.i][d.j];
    } else {
      return mari;
    }
    rf = rf >= 0.1 ? d3.format(".2f")(rf) : d3.format(".3f")(rf);
    if (d.i === d.j) {
      return mari;
    }
    return "(" + mari + " " + marj + "), LOD = " + (d3.format(".1f")(lod)) + ", rf = " + rf;
  }).direction('e').offset([0, 10]);
  svg.call(celltip);
  cells = mychrheatmap.cellSelect();
  return cells.on("mouseover", function(d) {
    return celltip.show(d);
  }).on("mouseout", function() {
    return celltip.hide();
  }).on("click", function(d) {
    create_crosstab(rf_data.labels[d.j], rf_data.labels[d.i]);
    create_scan(d.i, 0);
    if (d.i !== d.j) {
      return create_scan(d.j, 1);
    } else {
      if (mylodchart[1] != null) {
        mylodchart[1].remove();
      }
      return mylodchart[1] = null;
    }
  });
};

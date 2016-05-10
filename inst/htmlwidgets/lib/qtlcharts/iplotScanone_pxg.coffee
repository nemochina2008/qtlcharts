# iplotScanone_pxg: lod curves + phe x gen plot
# Karl W Broman

iplotScanone_pxg = (widgetdiv, lod_data, pxg_data, chartOpts) ->

    markers = (x for x of pxg_data.chrByMarkers)

    # chartOpts start
    height = chartOpts?.height ? 450 # height of image in pixels
    width = chartOpts?.width ? 1200 # width of image in pixels
    wleft = chartOpts?.wleft ? width*0.7 # width of left panel in pixels
    margin = chartOpts?.margin ? {left:60, top:40, right:40, bottom: 40, inner:5} # margins in pixels (left, top, right, bottom, inner)
    lod_axispos = chartOpts?.lod_axispos ? chartOpts?.axispos ? {xtitle:25, ytitle:30, xlabel:5, ylabel:5} # position of axis labels in pixels (xtitle, ytitle, xlabel, ylabel) in LOD curve panel
    lod_titlepos = chartOpts?.lod_titlepos ? chartOpts?.titlepos ? 20 # position of title for LOD curve panel, in pixels
    chrGap = chartOpts?.chrGap ? 8 # gap between chromosomes
    rectcolor = chartOpts?.rectcolor ? "#E6E6E6" # color of lighter background rectangle
    altrectcolor = chartOpts?.altrectcolor ? "#C8C8C8" # color of darker background rectangle
    lod_ylim = chartOpts?.lod_ylim ? null # y-axis limits in LOD curve panel
    lod_nyticks = chartOpts?.lod_nyticks ? 5 # number of ticks in y-axis in LOD curve panel
    lod_yticks = chartOpts?.lod_yticks ? null # vector of tick positions for y-axis in LOD curve panel
    lod_linecolor = chartOpts?.lod_linecolor ? "darkslateblue" # line color for LOD curves
    lod_linewidth = chartOpts?.lod_linewidth ? 2 # line width for LOD curves
    lod_pointcolor = chartOpts?.lod_pointcolor ? "#E9CFEC" # color for points at markers in LOD curve panel
    lod_pointsize = chartOpts?.lod_pointsize ? 0 # size of points at markers (default = 0 corresponding to no visible points at markers)
    lod_pointstroke = chartOpts?.lod_pointstroke ? "black" # color of outer circle for points at markers in LOD curve panel
    lod_title = chartOpts?.lod_title ? "" # title of LOD curve panel
    lod_xlab = chartOpts?.lod_xlab ? "Chromosome" # x-axis label for LOD curve panel
    lod_ylab = chartOpts?.lod_ylab ? "LOD score" # y-axis label for LOD curve panel
    lod_rotate_ylab = chartOpts?.lod_rotate_ylab ? null # indicates whether to rotate the y-axis label 90 degrees, in LOD curve panel
    eff_pointcolor = chartOpts?.eff_pointcolor ? chartOpts?.pointcolor ? "slateblue" # point color in phe-by-gen panel
    eff_pointcolorhilit = chartOpts?.eff_pointcolorhilit ? chartOpts?.pointcolorhilit ? "Orchid" # point color, when highlighted, in phe-by-gen panel
    eff_pointstroke = chartOpts?.eff_pointstroke ? chartOpts?.pointstroke ? "black" # color of outer circle for points, in phe-by-gen panel
    eff_pointsize = chartOpts?.eff_pointsize ? chartOpts?.pointsize ? 3 # point size in phe-by-gen paenl
    eff_ylim = chartOpts?.eff_ylim ? null # y-axis limits in phe-by-gen panel
    eff_nyticks = chartOpts?.eff_nyticks ? 5 # number of ticks in y-axis in phe-by-gen panel
    eff_yticks = chartOpts?.eff_yticks ? null # vector of tick positions for y-axis in phe-by-gen panel
    eff_xlab = chartOpts?.eff_xlab ? "Genotype" # x-axis label in phe-by-gen panel
    eff_ylab = chartOpts?.eff_ylab ? "Phenotype" # y-axis label in phe-by-gen panel
    eff_rotate_ylab = chartOpts?.eff_rotate_ylab ? null # indicates whether to rotate the y-axis label 90 degrees, in phe-by-gen panel
    xjitter = chartOpts?.xjitter ? chartOpts?.eff_xjitter ? null # amount of horizontal jittering in phe-by-gen panel
    eff_axispos = chartOpts?.eff_axispos ? chartOpts?.axispos ? {xtitle:25, ytitle:30, xlabel:5, ylabel:5} # position of axis labels in pixels (xtitle, ytitle, xlabel, ylabel) in LOD curve panel
    eff_titlepos = chartOpts?.eff_titlepos ? chartOpts?.titlepos ? 20 # position of title for phe-by-gen panel, in pixels
    eff_yNA = chartOpts?.eff_yNA ? {handle:true, force:false, width:15, gap:10} # treatment of missing values in phe-by-gen panel (handle=T/F, force=T/F, width, gap)
    # chartOpts end
    chartdivid = chartOpts?.chartdivid ? 'chart'
    widgetdivid = d3.select(widgetdiv).attr('id')

    wright = width - wleft

    mylodchart = d3panels.lodchart({
        height:height
        width:wleft
        margin:margin
        axispos:lod_axispos
        titlepos:lod_titlepos
        chrGap:chrGap
        altrectcolor:altrectcolor
        rectcolor:rectcolor
        ylim:lod_ylim
        nyticks:lod_nyticks
        yticks:lod_yticks
        linecolor:lod_linecolor
        linewidth:lod_linewidth
        pointcolor:lod_pointcolor
        pointsize:lod_pointsize
        pointstroke:lod_pointstroke
        title:lod_title
        xlab:lod_xlab
        ylab:lod_ylab
        rotate_ylab:lod_rotate_ylab
        tipclass:widgetdivid})

    svg = d3.select(widgetdiv).select("svg")

    g_lod = svg.append("g")
               .attr("id", "lodchart")
    mylodchart(g_lod, lod_data)

    mypxgchart = null
    plotPXG = (markername, markerindex) ->
        mypxgchart.remove() if mypxgchart?

        g = pxg_data.geno[markerindex]
        gabs = (Math.abs(x) for x in g)
        inferred = (x < 0 for x in g)

        chr = pxg_data.chrByMarkers[markername]
        chrtype = pxg_data.chrtype[chr]
        genonames = pxg_data.genonames[chrtype]

        mypxgchart = d3panels.dotchart({
            height:height
            width:wright
            margin:margin
            xcategories:[1..genonames.length]
            xcatlabels:genonames
            dataByInd:false
            title:markername
            axispos:eff_axispos
            titlepos:eff_titlepos
            xlab:eff_xlab
            ylab:eff_ylab
            rotate_ylab:eff_rotate_ylab
            ylim:eff_ylim
            nyticks:eff_nyticks
            yticks:eff_yticks
            pointcolor:eff_pointcolor
            pointstroke:eff_pointstroke
            pointsize:eff_pointsize
            rectcolor:rectcolor
            xjitter:xjitter
            yNA:eff_yNA
            tipclass:widgetdivid})

        g_pxg = svg.append("g")
           .attr("id", "pxgchart")
           .attr("transform", "translate(#{wleft},0)")
        mypxgchart(g_pxg, {x:gabs, y:pxg_data.pheno, indID:pxg_data.indID})

        mypxgchart.points()
                  .attr("fill", (d,i) ->
                            return eff_pointcolorhilit if inferred[i]
                            eff_pointcolor)

    # animate points at markers on click
    mylodchart.markerSelect()
              .on "click", (d,i) ->
                    plotPXG(markers[i], i)

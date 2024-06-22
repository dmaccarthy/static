save("s10/chem1/img/classify", {

chart: (sel) => {
    $(sel).attr({width: 640, height: 240, "data-aspect": "8/3"});
    let svg = new SVG_Animation(sel, -0.5, 3.5, -0.25);
    let g = svg.group().css({fill: "none", stroke: "black"});
    let labels = ["Element", "Compound", "Homogeneous", "Heterogeneous", "Pure Substance", "Mixture", "Matter"];
    let h = 0.26;
    for (let i=0;i<labels.length;i++) {
        let [x, y, w] = [i, 0, 0.85];
        if (i > 5) [x, y, w] = [1.5, 1, 3.85];
        else if (i > 3) [x, y, w] = [2 * i - 7.5, 0.5, 1.85];
        if (i < 6) svg.line([x, y + 0.5 - h / 2], [x, y + h / 2], g);
        svg.rect([w, h], [x, y], g);
        svg.text(labels[i], [x, y - 0.015]).css({"font-size": "17px"});
            
    }
    svg.final();
},

});

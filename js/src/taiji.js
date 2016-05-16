/**
 * Created by yang on 5/16/16.
 */

d3.smartObject = d3.smartObject || {};

d3.smartObject.taiji = (function () {
    var taiji = function (config) {
        /**
         * config object:
         * attributes
         * container    :String                         the container DOM Element to hold the component
         * r            :Number                         radius
         * x            :Number                         x of the circle
         * y            :Number                         y of the circle
         * margin       :Object                         margin obj contains top left right bottom
         */

        var stage = d3.select(config.container).style("transform-origin", config.r + "px " + config.r + "px");

        var gradient = stage.append("defs").append("linearGradient")
            .attr({
                id: "g1",
                x1: config.x - config.r,
                x2: config.x + config.r,
                y1: 0,
                y2: 0,
                gradientUnits: "userSpaceOnUse",
            });

        gradient.selectAll("stop")
            .data([
                { offset : "0%", color : "white" },
                { offset : "50%", color : "white" },
                { offset : "50%", color : "black" },
                { offset : "100%", color : "black" },
            ])
            .enter().append("stop")
            .attr("offset", function(d){ return d.offset})
            .attr("stop-color", function(d){ return d.color})
        ;

        var outCircle = stage.append("circle").attr({
            r : config.r,
            cx: config.x ,
            cy: config.y ,
        }).style({
            "fill":"url(#g1)",
            "stroke": "black"
        });

        var innerRadius = config.r/2;

        var innerCircle11 = stage.append("circle").attr({
            r : innerRadius,
            cx : config.x,
            cy : config.y -  innerRadius
        }).style({
            "fill": "white",
            "stroke": "none"
        });

        var smallCircle1  = stage.append("circle").attr({
            r : config.r/8,
            cx : config.x,
            cy : config.y -  config.r/2
        });

        var innerCircle12 = stage.append("circle").attr({
            r : innerRadius,
            cx : config.x,
            cy : config.y  + innerRadius
        });

        var smallCircle2  = stage.append("circle").attr({
            r : config.r/8,
            cx : config.x,
            cy : config.y + config.r/2
        }).style({
            "fill": "white",
            "stroke": "black"
        });

        //var clickCnt = 0;
        function rotTween() {
            var i = d3.interpolate(0, 720);
            return function(t) {
                return "rotate(" + i(t) + ")";
            };
        }

        stage.on("click", function () {
            stage.transition().duration(1500).attrTween("transform", rotTween);
        })
    };
    
    return taiji;
})();
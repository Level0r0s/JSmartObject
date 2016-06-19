/**
 * Created by yang on 5/16/16.
 */

d3.smartObject = d3.smartObject || {};

d3.smartObject.blockArrow = function (config) {
        /**
         * config object:
         * attributes
         * container    :String                         the container DOM Element to hold the component
         * height       :Number                         height of the blockArrow
         * width        :Number                         width of the blockArrow
         * angle        :Number                         the angle of the triangle in deg
         */

    var offsetX = config.height/2 / Math.tan(config.angle/2 * 2 * Math.PI / 360);
    var __path = "M0 0 L" + config.width + " 0 L" + (offsetX + config.width) + " " + config.height/2 +" " +
            "L" + config.width + " " + config.height + " L0 " + config.height + " L" + offsetX + " " + config.height/2 + " Z";


    var blockArrow = function (container) {
            return d3.select(container).append("path").attr("d", __path);
        };

    return blockArrow;
};

d3.smartObject.arrow = function (config) {
        /**
         * config object:
         * attributes
         * container    :String                         the container DOM Element to hold the component
         * height       :Number                         height of the blockArrow
         * width        :Number                         width of the blockArrow
         * angle        :Number                         the angle of the triangle in deg
         */

    var offsetX = config.height/2 / Math.tan(config.angle/2 * 2 * Math.PI / 360);
    var __path = "M0 " + config.width + " L" + config.height/2 + " " + (config.width - offsetX) +" " +
            "L" + config.height/4 + " " + (config.width - offsetX) + " L"+  config.height/4 +" " + 0 + " L" + (config.height/-4 ) + " " + 0
            + " L" + config.height/-4 + " " + (config.width - offsetX) + " L" + config.height/-2 + " " + (config.width - offsetX)
            + " Z";


    var blockArrow = function (container) {
            return d3.select(container).append("path").attr("d", __path);
        };

    return blockArrow;
};


/*
hexagon
width : 2*x
height: sqrt(3) * x
 */

d3.smartObject.hexagon = function (config) {
    /**
     * config object:
     * attributes
     * container    :String                         the container DOM Element to hold the component
     * len          :Number                         len
     */
    var sqrt3 = Math.sqrt(3)/2 * config.len;
    var __path = "M" + config.len +" " +  0 + " L" + config.len/2 + " " +  sqrt3 +" " +
        "L" + config.len/-2 + " " +   sqrt3  + " L"+  config.len * -1 +" " + 0 + " L" + config.len/-2 + " " +  sqrt3 * -1
        + " L" + config.len/2 + " " +  sqrt3 * -1
        + " Z";


    var ele = function (container) {
        return d3.select(container).append("path").attr("d", __path);
    };

    return ele;
};



/*
 http://stackoverflow.com/questions/13069446/simple-fill-pattern-in-svg-diagonal-hatching

 <svg:defs>
 <svg:pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45 2 2)">
 <svg:path d="M -1,2 l 6,0" stroke="#000000" stroke-width="1"/>
 </svg:pattern>
 </svg:defs>
 */

d3.smartObject.fillPattern = function (config) {
     d3.select(config.container).append("defs").append("pattern").attr({
         "id": config.id,
         "patternUnits": "userSpaceOnUse",
         "width": "4",
         "height": "4",
         "patternTransform": "rotate(45 2 2)"
     }).append("path").attr({
         "d": "M -1,2 l 6,0",
         "stroke": "#000000",
         "stroke-width" :  1
     });
    
    return "url(#"+  config.id  +")";
};
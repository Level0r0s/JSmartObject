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
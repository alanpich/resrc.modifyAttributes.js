(function (resrc) {
    "use strict";


    /**
     * Cross-browser polyfill for Array detection
     *
     * @param obj {*}  The object to check
     * @returns {Boolean}
     */
    function isArray(obj) {
        return Array.isArray ? Array.isArray(obj) : Object.prototype.toString.call(obj) === "[object Array]";
    }

    /**
     * Browser fill for hasAttribute
     * @param node {HTMLElement}
     * @param attr {String}
     * @returns {boolean}
     */
    function hasAttribute(node,attr) {
        return node.hasAttribute ? node.hasAttribute(attr) : !!node.getAttribute(attr);
    }


    function getAttribute(ele, attr) {
        var result = (ele.getAttribute && ele.getAttribute(attr)) || null;
        if( !result ) {
            var attrs = ele.attributes;
            var length = attrs.length;
            for(var i = 0; i < length; i++){
                if(attr[i].nodeName === attr){
                    result = attr[i].nodeValue;
                }
            }
        }
        return result;
    }


    function setAttribute(el,attr,value){
        el.setAttribute(attr,value);
    }


    /**
     * The ReSRC.it modifyAttributes plugin
     *
     * @param options {Object|Array}
     */
    resrc.modifyAttributes = function (options) {

        // Allow passing a straight-up array of attributes as options
        if(isArray(options)){
            options = {
                attributes: options
            };
        }

        // Overwrite defaults with user options
        var defaults = {
            attributes: []
        };
        var settings = resrc.extend(defaults, options);



        // Find all elements in page with attribute
        var attributeQuery = "["+settings.attributes.join("],[") + "]";
        var elems = document.querySelectorAll(attributeQuery);

        // Cycle through each matching element
        for(var k=0;k<elems.length;k++){

            var el = elems[k];

            // Loop through all attributes
            for(var i=0;i<settings.attributes.length;i++){
                var attr = settings.attributes[i];
                if(hasAttribute(el,attr)){
                    // Grab the current URL
                    var url = getAttribute(el,attr);

                    // Prepare it for resrcing
                    var dummyImg = document.createElement("img");
                        setAttribute(dummyImg,"data-src",url);
                    var resrcObject = resrc.getResrcImageObject(dummyImg);

                    // Replace url with the new value
                    setAttribute(el,attr,resrcObject.resrcImgPath);
                }
            }

        }

        return resrc;
    };


    return resrc;

}(resrc));

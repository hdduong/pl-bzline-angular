/**
 * Created by HienD on 3/26/2017.
 */
(function() {
    "use strict"

    angular
        .module("commonService")
        .factory("productResourceService",
            ["$resource",productResourceFunc]);

    function productResourceFunc($resource) {
        return $resource("/api/products/:productId");
    }
}());
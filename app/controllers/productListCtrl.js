/**
 * Created by HienD on 3/26/2017.
 */
(function(){
    "use strict";

    angular
        .module("productManagement")
        .controller("ProductListCtrl",
            ["productResourceService",
            ProductListCtrlFunc]);

    function ProductListCtrlFunc(productResourceService) {
        var vm = this;

        productResourceService.query(function (data) {
            vm.products = data;
        });

        vm.showImage = false;

        vm.toggleImage = function() {
            vm.showImage = !vm.showImage;
        };
    }
}());
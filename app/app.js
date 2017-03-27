/**
 * Created by HienD on 3/26/2017.
 */
(function() {
    "use strict";

    var app = angular.module("productManagement",
                            ["commonService",
                             "ui.router",
                             "productResourceServiceMock"]);

/*    var app = angular.module("productManagement",
        ["commonService",
            "ui.router"]);*/

    app.config(["$stateProvider","$urlRouterProvider", function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/html/welcomeView.html"
            })

            .state("productList", {
                url:"/products",
                templateUrl: "app/html/productListView.html",
                controller: "ProductListCtrl as vm"
            })

            .state("productEdit", {
                url: "/products/edit/:productId",
                templateUrl: "app/html/productEditView.html",
                controller: "ProductEditCtrl as vm"
            })
        }]
    );
}());


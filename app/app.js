/**
 * Created by Deb on 8/20/2014.
 */
(function () {
    "use strict";
    var app = angular.module("productManagement",
        ["common.services",
            "ui.router",
            "productResourceMock"]);

    app.config(["$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                    url: "/",
                    templateUrl: "welcomeView.html"
                })
                // Products
                .state("productList", {
                    url: "/products",
                    templateUrl: "products/productListView.html",
                    controller: "ProductListCtrl as vm"
                })
                .state("productEdit", {
                    url: "/products/edit/:productId",
                    templateUrl: "products/productEditView.html",
                    controller: "ProductEditCtrl as vm"
                })

        }]
    );
}());
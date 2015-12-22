angular.module('ftApp', ['ionic'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('tabs', {
                url: "/tab",
                abstract: true,
                templateUrl: "tabs.html"
            })
            .state('tabs.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "home.html",
                        controller: 'HomeTabCtrl'
                    }
                }
            })
            .state('tabs.sort', {
                url: "/sort",
                views: {
                    'sort-tab': {
                        templateUrl: "sort.html"
                    }
                }
            })
            .state('tabs.cart', {
                url: "/cart",
                views: {
                    'cart-tab': {
                        templateUrl: "cart.html"
                    }
                }
            })
            .state('tabs.account', {
                url: "/account",
                views: {
                    'account-tab': {
                        templateUrl: "account.html"
                    }
                }
            })
            .state('test', {
                url: "test.html",
                views: {
                    'test': {
                        templateUrl: "test.html"
                    }
                }
            })
            .state('contact', {
                templateUrl: "contact.html"
            });


        $urlRouterProvider.otherwise("/tab/home");

    })

    .controller('ftCtrl', function ($scope) {
        console.log("ftCtrl");
        $scope.go_back = function() {
            console.log("click back");
            history.go(-1);
        };
    })
    .controller('HomeTabCtrl', function ($scope) {
        console.log('HomeTabCtrl');
    })
    .controller("refCtrl", function ($scope) {
        $scope.items = [1, 2];
        var base = 1;
        $scope.doRefresh = function () {
            for (var i = 0; i < 2; i++, base++)
                $scope.items.unshift(["item ", base].join(""));
            // Stop the ion-refresher from spinning
            $scope.$broadcast("scroll.refreshComplete");
        };
    });


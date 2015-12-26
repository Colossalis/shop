var app=angular.module('ftApp', ['ionic']);



    app.config(function ($stateProvider, $urlRouterProvider) {

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
            .state('order', {
                url: "/order",
                templateUrl: "order.html"
            })
            .state('fillorder', {
                templateUrl: "fillorder.html"
            })
            .state('msgcenter', {
                templateUrl: "msgcenter.html"
            })
            .state('accountsettings', {
                templateUrl: "accountsettings.html"
            })
            .state('moresettings', {
                templateUrl: "moresettings.html"
            })
            .state('msgsetting', {
                url: "/msgsetting",
                templateUrl: "msgsetting.html"
            })
            .state('tabs.test', {
                url: "/test",
                views: {
                    'test': {
                        templateUrl: "test.html"
                    }
                }
            })
            .state('merchandise', {
                url: "/merchandise",
                templateUrl: "merchandise.html"
            })
            .state('chooseAddress', {
                url: "/chooseAddress",
                templateUrl: "chooseAddress.html"
            })
            .state('chooseService', {
                url: "/chooseService",
                templateUrl: "chooseService.html"
            });


        $urlRouterProvider.otherwise("/tab/home");

    });

    app.controller('ftCtrl', function ($scope, $state, $ionicPopover, $ionicHistory, $ionicActionSheet) {
        $scope.myMarket = "Market";
        console.log("ftCtrl");
        $scope.go_back = function () {
            console.log("click back");
            $ionicHistory.goBack();
        };
        $scope.showMenu = function () {
            var hideSheet = $ionicActionSheet.show({
                titleText: "设置头像",
                buttons: [
                    {text: "拍照"},
                    {text: "我的相册"}
                ],
                buttonClicked: function (index) {
                    return true;
                },
                cancelText: "取消",
                cancel: function () {
                    // add cancel code..
                }
            });
        };
    });
    app.controller('HomeTabCtrl', function ($scope) {
        console.log('HomeTabCtrl');
    });
    app.controller("homeCtrl", function ($scope, $ionicSlideBoxDelegate, $interval, $timeout) {
        //   alert("a");
        $scope.items = [1, 2];
        var base = 1;
        $scope.lists = [];
        for (var j = 0; j < 8; j++) {
            $scope.lists.push(
                {icon: "icon" + (j + 1) + ".png", tag: j}
            );
        }

        $scope.activities = [];
        for (var j = 0; j < 4; j++) {
            $scope.activities.push(
                {tag: "hot", title: j}
            );
            console.log(j);
        }
        $scope.doRefresh = function () {
            for (var i = 0; i < 2; i++, base++)
                $scope.items.unshift(["item ", base].join(""));
            // Stop the ion-refresher from spinning
            $scope.$broadcast("scroll.refreshComplete");
        };
        $scope.load_more = function () {
            $timeout(function () {
                for (var i = 0; i < 4; i++, base++)
                    $scope.items.push(["item more ", base].join(""));
                $scope.$broadcast("scroll.infiniteScrollComplete");
            }, 300);
        };
        $interval(function () {
            $ionicSlideBoxDelegate.next();
        }, 3000);

        var box = document.getElementById('marqBox');
        console.log(box + "//////////////////");
        console.log(box.innerHTML + "--------");
        box.innerHTML += box.innerHTML;
        console.log("*****************" + box.innerHTML + "+++++++");
        box.scrollTop = 0;
        var iheight = 18;
        var timer = null;

        function start() {
            timer = setInterval(scroll, 50);
            box.scrollTop++;
        }

        start();
        function scroll() {
            if (box.scrollTop % iheight == 0) {
                clearInterval(timer);
                setTimeout(start, 1000);
            } else {
                box.scrollTop++;
                if (box.scrollTop >= (box.scrollHeight - iheight)) {
                    box.scrollTop = 0;
                }
            }
        }
    });
    //.controller("sortCtrl", function ($scope) {
    //    $scope.soLists = [1,2];
    //    for (var i = 0; i < 20; i++, base++)
    //        $scope.soLists.push(["sort name ", base].join(""));

    //    $scope.boxWidth = document.body.clientWidth - 90;
    //    $scope.boxHeight = window.screen.height - 90;
    //    console.log(document.body.clientWidth+"==document.body.clientWidth");
    //    console.log(document.body.clientHeight+"==document.body.clientHeight");
    //    console.log(document.body.offsetHeight+"==document.body.offsetHeight");
    //    console.log(document.body.scrollHeight+"==document.body.scrollHeight");
    //    console.log(window.screen.height+"==window.screen.height");
    //    console.log(window.screen.availHeight+"==window.screen.availHeight");
    //    angular.element('#ullist a').css("color","red");
    //    //var sreenWidth = $('#ullist');
    //    var screenWidth = document.body.clientWidth - 90;
    //    var screenHeight = window.screen.height - 90;
    //    //angular.element('#scrollBox').css({width:screenWidth,height:screenHeight})
    //    console.log(sreenWidth+"==id");
    //    sreenWidth.style.backgroundColor = "#f00";
    //})
app.controller("accCtrl", function ($scope) {
        $scope.doRefresh = function () {
            // Stop the ion-refresher from spinning
            $scope.$broadcast("scroll.refreshComplete");
        };
    });
app.controller("fillorderCtrl", function ($scope,$ionicHistory) {
        $scope.go_back = function() {
            $ionicHistory.goBack();
        };
    });
app.controller("cartCtrl", function ($scope) {
        $scope.cartitems = [
            {
                activity: "HTML5",
                selected: true,
                pic: "im5.jpg",
                name: "item aa aa aa aa aa aa aa aa aa aa",
                price: 99,
                count: 2
            },
            {activity: "aaaa", selected: false, pic: "im6.jpg", name: "item vvv", price: 9, count: 1},
            {activity: "555", selected: false, pic: "im7.jpg", name: "item bbb", price: 19, count: 3},
            {activity: "cccccML5", selected: false, pic: "im7.jpg", name: "item bbb", price: 19, count: 3},
            {activity: "HTccccccML5", selected: false, pic: "im7.jpg", name: "item bbb", price: 19, count: 3}
        ];
        $scope.deCount = function (event) {
            event.count = event.count--;
            console.log("ss" + event.count);
        };
        $scope.doRefresh = function () {
            // Stop the ion-refresher from spinning
            $scope.$broadcast("scroll.refreshComplete");
        };
    });
app.controller("merchCtrl", function ($scope,$ionicSlideBoxDelegate,$ionicSideMenuDelegate,$ionicPopup,$ionicHistory) {
        $scope.index = 1;
        $scope.count = $ionicSlideBoxDelegate.slidesCount()+1;
        $scope.go_back = function() {
            $ionicHistory.goBack();
        };
        $scope.showPager=function($index){
            $ionicSlideBoxDelegate.slide($index);
            $scope.index = $index +1;
        }
        $scope.toggleSide = function(){
            $ionicSideMenuDelegate.toggleRight();
        };
        $scope.showHints = function() {
            $ionicPopup.alert({
                title: "<div class='ft-pop-title'>service declare</div>",
                template: "<div class='ft-pop-blocks'><img src='./images/merchandise/icon.jpg'><i>after</i><p>This goods supports paying after you receive it.</p></div><div class='ft-pop-blocks'><img src='./images/merchandise/icon.jpg'><i>after</i><p>This goods supports paying after you receive it.</p></div>",
                buttons: [
                    {
                        text: "<b>OK</b>",
                        type: "button-assertive"
                    }
                ]
            });
        };

    });


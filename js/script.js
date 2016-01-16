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
            .state('orderComment.goodsComment', {
                url: "/goodsComment",
                views: {
                    'goodsComment-tab': {
                        templateUrl: "goodsComment.html"
                    }
                }
            })
            .state('orderComment.addComment', {
                url: "/addComment",
                views: {
                    'addComment-tab': {
                        templateUrl: "addComment.html"
                    }
                }
            })
            .state('orderComment.commented', {
                url: "/commented",
                views: {
                    'commented-tab': {
                        templateUrl: "commented.html"
                    }
                }
            })
            .state('orderComment.serviceComment', {
                url: "/serviceComment",
                views: {
                    'serviceComment-tab': {
                        templateUrl: "serviceComment.html"
                    }
                }
            })
            .state('order', {
                url: "/order",
                templateUrl: "order.html"
            })
            .state('orderPay', {
                url: "/orderPay",
                templateUrl: "orderPay.html"
            })
            .state('orderReceive', {
                url: "/orderReceive",
                templateUrl: "orderReceive.html"
            })
            .state('orderComment', {
                url: "/orderComment",
                templateUrl: "orderComment.html"
            })
            .state('orderDrawback', {
                url: "/orderDrawback",
                templateUrl: "orderDrawback.html"
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
            })
            .state('goodsList', {
                url: "/goodsList",
                templateUrl: "goodsList.html"
            })

            .state('invoice', {
                url: "/invoice",
                templateUrl: "invoice.html"
            })
            .state('myCoupon', {
                url: "/myCoupon",
                templateUrl: "myCoupon.html"
            })
            .state('coupon', {
                url: "/coupon",
                templateUrl: "coupon.html"
            });
        $urlRouterProvider.otherwise("/tab/home");
    });

    app.controller('ftCtrl', function ($scope, $state, $ionicPopover, $ionicHistory, $ionicActionSheet) {
        $scope.myMarket = "宝通";
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
        $scope.lists = [
            {icon: "icon8.png", tag: "全球购", url: ""},
            {icon: "icon1.png", tag: "充值中心"},
            {icon: "icon2.png", tag: "服装城"},
            {icon: "icon4.png", tag: "优惠券"},
            {icon: "icon5.png", tag: "白拿白赚"},
            {icon: "icon6.png", tag: "我的关注"},
            {icon: "icon7.png", tag: "物流查询"},
            {icon: "icon3.png", tag: "全部"}
        ];
        $scope.activities = [];
        for (var j = 0; j < 4; j++) {
            $scope.activities.push(
                {tag: "热", title: j}
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
    app.controller("sortCtrl", function ($scope) {
        $scope.soLists = [];
        var base = 1;
        for (var i = 0; i < 20; i++, base++)
            $scope.soLists.push(["大类 ", base].join(""));

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
    });
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
app.controller("cartCtrl", function ($scope,$ionicPopup) {
    console.log("s11s ++++");
    //console.log("s11s " + $scope.cartitem.count);
    $scope.cartitems = [
            {
                activity: "满99.00元即享优惠",
                selected: true,
                pic: "im5.jpg",
                name: "乐事乐事乐事乐事乐事乐事",
                price: 99,
                count: 2
            },
            {activity: "满199.00元即享优惠", selected: false, pic: "im6.jpg", name: "百草味百草味百草味百草味百草味百草味百草味百草味", price: 9, count: 1},
            {activity: "满299.00元即享优惠", selected: false, pic: "im7.jpg", name: "薯愿薯愿薯愿薯愿薯愿薯愿薯愿薯愿", price: 19, count: 3},
            {activity: "满499.00元即享优惠", selected: false, pic: "im7.jpg", name: "好丽友好丽友好丽友好丽友", price: 19, count: 3},
            {activity: "满599.00元即享优惠", selected: false, pic: "im7.jpg", name: "五谷磨房五谷磨房五谷磨房", price: 19, count: 3}
        ];
        $scope.deCount = function (event) {
            event.count = event.count--;
            console.log("ss" + event.count);
        };
    $scope.inCount = function (event) {
            console.log("s11s " + $scope.cartitem.count);
            $scope.cartitems.count++;
            console.log("s22s " + $scope.cartitems.count);
        };
        $scope.doRefresh = function () {
            // Stop the ion-refresher from spinning
            $scope.$broadcast("scroll.refreshComplete");
        };
    $scope.showConfirm = function() {
        $ionicPopup.confirm({
            title: "删除商品",
            template: "确认删除该商品？",
            buttons: [
                { text: "取消" },
                {
                    text: "<b>确定</b>",
                    type: "button-assertive",
                    onTap: function(e) {
                        return true;
                    }
                }
            ]
        })
            .then(function(res) {
                if(res) {
                    console.log("已删除");
                } else {
                    console.log("取消删除");
                }
            });
    };

});

app.controller("invoiceCtrl", function ($scope) {
        $scope.items = [
            {label:"电脑配件",selected:true},
            {label:"明细"},
            {label:"办公用品"},
            {label:"耗材"}
        ];
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
                title: "<div class='ft-pop-title'>服务说明</div>",
                template: "<div class='ft-pop-blocks'><img src='./images/merchandise/icon.jpg'><i>货到付款</i><p>支持送货上门后再收款，支持现金、POS机刷卡等方式</p></div><div class='ft-pop-blocks'><img src='./images/merchandise/icon.jpg'><i>自提</i><p>自提免运费，支持自提点，自助提货</p></div>",
                buttons: [
                    {
                        text: "<b>知道了</b>",
                        type: "button-assertive"
                    }
                ]
            });
        };

    });


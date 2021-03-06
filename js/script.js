var app = angular.module('ftApp', ['ionic']);

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
        .state('commentsList.allComment', {
            url: "/allComment",
            views: {
                'allComment-tab': {
                    templateUrl: "allComment.html"
                }
            }
        })
        .state('commentsList.highComment', {
            url: "/highComment",
            views: {
                'highComment-tab': {
                    templateUrl: "highComment.html"
                }
            }
        })
        .state('commentsList.mediumComment', {
            url: "/mediumComment",
            views: {
                'mediumComment-tab': {
                    templateUrl: "mediumComment.html"
                }
            }
        })
        .state('commentsList.lowComment', {
            url: "/lowComment",
            views: {
                'lowComment-tab': {
                    templateUrl: "lowComment.html"
                }
            }
        })
        .state('commentsList.picComment', {
            url: "/picComment",
            views: {
                'picComment-tab': {
                    templateUrl: "picComment.html"
                }
            }
        })
        .state('recharge.rechargeTel', {
            url: "/rechargeTel",
            views: {
                'rechargeTel-tab': {
                    templateUrl: "rechargeTel.html"
                }
            }
        })
        .state('recharge.rechargeData', {
            url: "/rechargeData",
            views: {
                'rechargeData-tab': {
                    templateUrl: "rechargeData.html"
                }
            }
        })
        .state('recharge.rechargeQq', {
            url: "/rechargeQq",
            views: {
                'rechargeQq-tab': {
                    templateUrl: "rechargeQq.html"
                }
            }
        })
        .state('recharge.rechargeGame', {
            url: "/rechargeGame",
            views: {
                'rechargeGame-tab': {
                    templateUrl: "rechargeGame.html"
                }
            }
        })
        .state('goodsWatching', {
            url: "goodsWatching",
            templateUrl: "goodsWatching.html"
        })
        .state('allPortal', {
            url: "allPortal",
            templateUrl: "allPortal.html"
        })
        .state('myPocket', {
            url: "myPocket",
            templateUrl: "myPocket.html"
        })
        .state('searchResult', {
            url: "searchResult",
            templateUrl: "searchResult.html"
        })
        .state('viewHist', {
            url: "/viewHist",
            templateUrl: "viewHist.html"
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
        .state('getCoupon', {
            url: "/getCoupon",
            templateUrl: "getCoupon.html"
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
        .state('logIn', {
            url: "/logIn",
            templateUrl: "logIn.html"
        })
        .state('declineNote', {
            url: "/declineNote",
            templateUrl: "declineNote.html"
        })
        .state('commentsList', {
            url: "/commentsList",
            templateUrl: "commentsList.html"
        })
        .state('clothes', {
            url: "/clothes",
            templateUrl: "clothes.html"
        })

        .state('recharge', {
            url: "/recharge",
            templateUrl: "recharge.html"
        })

        .state('invoice', {
            url: "/invoice",
            templateUrl: "invoice.html"
        })
        .state('myCoupon', {
            url: "/myCoupon",
            templateUrl: "myCoupon.html"
        })
        .state('quickSign', {
            url: "/quickSign",
            templateUrl: "quickSign.html"
        })
        .state('coupon', {
            url: "/coupon",
            templateUrl: "coupon.html"
        });
    $urlRouterProvider.otherwise("/tab/home");
});
//body的控制器
app.controller('ftCtrl', function ($scope) {
    $scope.myMarket = "宝通";     //在全局中添加商城的名称
});
//我的账户控制器，添加上拉菜单
app.controller('setCtrl', function ($scope, $state, $ionicPopover, $ionicHistory, $ionicActionSheet) {
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
//主页面‘首页’
app.controller("homeCtrl", function ($scope, $ionicSlideBoxDelegate, $interval, $timeout, $ionicModal) {
    $ionicModal.fromTemplateUrl('searchModal.html', function(modal) {
        $scope.settingsModal = modal;
    });
    $scope.items = ["111【百草味】坚果炒货 腰果190g*2袋 炭烧腰果190g*2袋 炭烧", "222【百草味】坚果炒货 腰果190g*2袋 炭烧腰果190g*2袋 炭烧"];
    var base = 1;
    $scope.lists = [
        {icon: "icon8.png", tag: "全球购"},
        {icon: "icon1.png", tag: "充值中心", url: "recharge"},
        {icon: "icon2.png", tag: "服装城",url:"clothes"},
        {icon: "icon4.png", tag: "优惠券", url: "getCoupon"},
        {icon: "icon5.png", tag: "白拿白赚"},
        {icon: "icon6.png", tag: "我的关注"},
        {icon: "icon7.png", tag: "物流查询"},
        {icon: "icon3.png", tag: "全部",url:"allPortal"}
    ];
    //滚动内容的添加
    $scope.activities = [];
    for (var j = 0; j < 4; j++) {
        $scope.activities.push(
            {tag: "热", title: j}
        );
    }
    $scope.doRefresh = function () {
        for (var i = 0; i < 2; i++, base++)
            $scope.items.unshift([base, "【百草味】坚果炒货 腰果190g*2袋 炭烧腰果190g*2袋 炭烧"].join(""));
        // Stop the ion-refresher from spinning
        $scope.$broadcast("scroll.refreshComplete");
    };
    $scope.load_more = function () {
        $timeout(function () {
            for (var i = 0; i < 4; i++, base++)
                $scope.items.push([base, "【百草味】坚果炒货 腰果190g*2袋 炭烧腰果190g*2袋 炭烧"].join(""));
            $scope.$broadcast("scroll.infiniteScrollComplete");
        }, 300);
    };
    $scope.openSearch = function(){
        $scope.settingsModal.show();
    };
    $interval(function () {
        $ionicSlideBoxDelegate.next();
    }, 3000);
    //活动列表的滚动
    var box = document.getElementById('marqBox');
    box.innerHTML += box.innerHTML;
    box.scrollTop = 0;
    var iheight = 18;   //设置滚动内容的高度
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
app.controller('searchCtrl', function($scope,$state) {
    $scope.close = function() {     //点击后退按钮关闭modal
        $scope.modal.hide();
    }
    $scope.search = function() {       //点击搜索按钮关闭modal跳转到搜索结果页面
        $scope.modal.hide();
        $state.go('searchResult');
    }
});
//主页面‘分类’页面，未实现检测设备高度与宽度进行列表宽高的设置
app.controller("sortCtrl", function ($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('searchModal.html', function(modal) {
        $scope.settingsModal = modal;
    });
    $scope.soLists = [];
    var base = 1;
    for (var i = 0; i < 20; i++, base++)
        $scope.soLists.push(["大类 ", base].join(""));
    $scope.openSearch = function(){
        $scope.settingsModal.show();
    };

});
//搜索结果页面，未实现按照相应规则进行排序
app.controller('resultCtrl', function ($scope,$ionicModal) {
    $ionicModal.fromTemplateUrl('searchModal.html', function(modal) {
        $scope.settingsModal = modal;
    });
    $scope.orderRule = "\'title\'";
    $scope.rules = ["综合","销量","价格","筛选"];
    var orderGroup = ['rate','amount','price','title'];
    $scope.show_no = function(rule){
        var idx = $scope.rules.indexOf(rule);
        $scope.orderRule = "\'" + orderGroup[idx] + "\'";
    };
    $scope.openSearch = function(){
        $scope.settingsModal.show();
    };
    $scope.items=[];
    for(var i=0;i<5000;i++)
        $scope.items.push(
            {title:[i+1,"Chinese坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧"].join(""),price:33.00,rate:97,image:1,amount:136654,url:"coupon"},
            {title:[i+1,"England坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧"].join(""),price:11.00,rate:97,image:2,amount:116654,url:"merchandise"},
            {title:[i+1,"America坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧"].join(""),price:33.99,rate:96,image:3,amount:106654,url:"merchandise"},
            {title:[i+1,"Japan坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧"].join(""),price:22.99,rate:95,image:4,amount:16654,url:"merchandise"},
            {title:[i+1,"French坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧"].join(""),price:33.99,rate:94,image:5,amount:13654,url:"merchandise"}
        );
});
//主页面‘我的’
app.controller("accCtrl", function ($scope) {
    $scope.doRefresh = function () {
        // Stop the ion-refresher from spinning
        $scope.$broadcast("scroll.refreshComplete");
    };
});
//关注的商品列表，进行删除操作
app.controller("gWCtrl", function ($scope,$ionicPopup) {
    $scope.items=[
        {title:"Chinese坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧",price:33.00,activities:"满66减5 满166减15 满266减25 满366减35 满466减45 满566减55 满666减65 满766减75 满866减85",image:1},
        {title:"England坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧",price:11.00,activities:"满66减5 满166减15 满266减25 满366减35 满466减45 满566减55 满666减65 满766减75 满866减85",image:2},
        {title:"America坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧",price:33.99,activities:"满66减5 满166减15 满266减25 满366减35 满466减45 满566减55 满666减65 满766减75 满866减85",image:3},
        {title:"Japan坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧",price:22.99,activities:"满66减5 满166减15 满266减25 满366减35 满466减45 满566减55 满666减65 满766减75 满866减85",image:4},
        {title:"French坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧",price:33.99,activities:"满66减5 满166减15 满266减25 满366减35 满466减45 满566减55 满666减65 满766减75 满866减85",image:5}
    ];
    $scope.delete_item=function(item){
        var idx = $scope.items.indexOf(item);
        $ionicPopup.confirm({
            title: "取消关注",
            template: "确认取消关注该商品？",
            buttons: [
                {text: "取消"},
                {
                    text: "<b>确定</b>",
                    type: "button-assertive",
                    onTap: function (e) {
                        return true;
                    }
                }
            ]
        })
            .then(function (res) {
                if (res) {
                    $scope.items.splice(idx, 1);
                } else {
                }
            });
    };
});
//浏览记录页面商品的删除功能
app.controller("vHCtrl", function ($scope,$ionicPopup) {
    $scope.items=[
        {title:"wtf坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧",price:55.00,image:1},
        {title:"wtf坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧",price:55.00,image:4},
        {title:"wtf坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧",price:55.99,image:3},
        {title:"wtf坚果炒货 腰果19 0 g *2袋 炭烧腰果1 9 0 g * 2袋 炭烧坚果炒货 腰果19 0g *2袋 炭烧腰果190g*2袋 炭烧",price:55.99,image:5}
    ];
    var count=$scope.items.length;
    $scope.clear_all=function(){    //清空浏览记录后浏览记录中不会有任何商品
        $ionicPopup.confirm({
            title: "清空记录",
            template: "确认清空浏览记录？",
            buttons: [
                {text: "取消"},
                {
                    text: "<b>确定</b>",
                    type: "button-assertive",
                    onTap: function (e) {
                        return true;
                    }
                }
            ]
        })
            .then(function (res) {
                if (res) {
                    $scope.items.splice(0,count);
                } else {
                }
            });
    };
    $scope.delete_item=function(item){    //从浏览记录中删除商品，商品被从列表中删除
        var idx = $scope.items.indexOf(item);
        $ionicPopup.confirm({
            title: "删除记录",
            template: "确认从浏览记录中删除该商品？",
            buttons: [
                {text: "取消"},
                {
                    text: "<b>确定</b>",
                    type: "button-assertive",
                    onTap: function (e) {
                        return true;
                    }
                }
            ]
        })
            .then(function (res) {
                if (res) {
                    $scope.items.splice(idx, 1);
                } else {
                }
            });
    };
});
app.controller("fillorderCtrl", function ($scope, $ionicHistory) {
});
app.controller("dNCtrl", function ($scope, $ionicHistory) {
});
app.controller("cartCtrl", function ($scope, $ionicPopup) {
    $scope.cartitems = [    //购物车内商品的添加
        {
            activity: "满99.00元即享优惠",
            selected: true,
            pic: "im5.jpg",
            name: "乐事乐事乐事乐事乐事乐事",
            price: 99,
            count: 1
        },
        {
            activity: "满199.00元即享优惠",
            selected: false,
            pic: "im6.jpg",
            name: "百草味百草味百草味百草味百草味百草味百草味百草味",
            price: 9,
            count: 2
        },
        {activity: "满299.00元即享优惠", selected: false, pic: "im7.jpg", name: "薯愿薯愿薯愿薯愿薯愿薯愿薯愿薯愿", price: 19, count: 3},
        {activity: "满499.00元即享优惠", selected: false, pic: "im5.jpg", name: "好丽友好丽友好丽友好丽友", price: 19, count: 4},
        {activity: "满599.00元即享优惠", selected: false, pic: "im6.jpg", name: "五谷磨房五谷磨房五谷磨房", price: 19, count: 5}
    ];
    $scope.inCount = function (cartitem) {    //增加商品
        var idx = $scope.cartitems.indexOf(cartitem);
        $scope.cartitems[idx].count =$scope.cartitems[idx].count - 1 + 2;    //-1+2，直接+1会被认为是字符串拼接操作
    };
    $scope.deCount = function (cartitem) {    //减少商品，最小值为1
        var idx = $scope.cartitems.indexOf(cartitem);
        $scope.cartitems[idx].count = ($scope.cartitems[idx].count - 1) <= 0? 1 : ($scope.cartitems[idx].count - 1);
    };
    $scope.doRefresh = function () {    //刷新页面
        // Stop the ion-refresher from spinning
        $scope.$broadcast("scroll.refreshComplete");
    };
    $scope.showConfirm = function (cartitem) {    //弹出窗口，确认是否删除商品，点击确认后商品删除
        var idx = $scope.cartitems.indexOf(cartitem);
        $ionicPopup.confirm({
            title: "删除商品",
            template: "确认删除该商品？",
            buttons: [
                {text: "取消"},
                {
                    text: "<b>确定</b>",
                    type: "button-assertive",
                    onTap: function (e) {
                        return true;
                    }
                }
            ]
        })
            .then(function (res) {
                if (res) {
                    $scope.cartitems.splice(idx, 1);
                } else {
                }
            });
    };

});
//确认订单页面确认发票信息
app.controller("invoiceCtrl", function ($scope) {
    $scope.items = [
        {label: "电脑配件", selected: true},
        {label: "明细"},
        {label: "办公用品"},
        {label: "耗材"}
    ];
});
//服装城页面添加数据
app.controller("clothesCtrl", function ($scope, $timeout, $ionicScrollDelegate) {
    $scope.seconds = [];
    for(var i = 0; i < 3; i ++){
        $scope.seconds.push(
            {name:"乐事薯片190g*2乐事薯片乐事薯片乐事薯片",image:"1",current:99,old:198},
            {name:"乐事薯片190g*2乐事薯片乐事薯片乐事薯片",image:"2",current:199,old:298},
            {name:"乐事薯片190g*2乐事薯片乐事薯片乐事薯片",image:"8",current:399,old:898},
            {name:"乐事薯片190g*2乐事薯片乐事薯片乐事薯片",image:"9",current:9,old:98}
        )
    }
    $scope.navs = [
        {class:"selected",title:"潮流女装"},
        {class:" ",title:"品质男装"},
        {class:" ",title:"时尚女鞋"},
        {class:" ",title:"流行男鞋"}
    ];
    $scope.tags = [
        {class:" ",title:"新品连衣裙"},
        {class:"selected",title:"针织衫"},
        {class:" ",title:"雪纺衫"},
        {class:" ",title:"T恤"},
        {class:" ",title:"春季卫衣"},
        {class:" ",title:"百搭衬衫"},
        {class:" ",title:"牛仔裤"}
    ];
    $scope.items = [
        {title:"ochirly春季新品修身短款高领针织衫打底黑白套头极简主义春季新品修身短款高领针织衫打底黑白套L",price:559.5,image:"cl6",url:""},
        {title:"ochirly春季新品修身短款高领针织衫打底黑白套头极简主义春季新品修身短款高领针织衫打底黑白套L",price:559.5,image:"cl7",url:""}
    ];

    $scope.load_more = function () {    //底部无限加载商品
        $timeout(function () {
            for(var i = 0;i < 6;i++){
                $scope.items.push(
                    {title:"ochirly春季新品修身短款高领针织衫打底黑白套头极简主义春季新品修身短款高领针织衫打底黑白套L",price:559.5,image:"cl6",url:""},
                    {title:"ochirly春季新品修身短款高领针织衫打底黑白套头极简主义春季新品修身短款高领针织衫打底黑白套L",price:559.5,image:"cl7",url:""}
                )
            };
            $scope.$broadcast("scroll.infiniteScrollComplete");
        }, 200);
    };
    //未实现滚动到相应位置显示顶部fixed分类导航栏
    var toTop=document.getElementById("sortTag").offsetTop;
    $scope.offTop = $ionicScrollDelegate.getScrollPosition();
    //未实现滚动到相应位置显示顶部fixed分类导航栏
});
//话费充值页面自动填写绑定的手机账号
app.controller('rechTelCtrl', function ($scope) {
    $scope.accNumber = 13278784545;
});
//首页上方点击全部进入百宝箱页面
app.controller('aPCtrl', function ($scope) {
    $scope.portals = [];
    for(var i = 0;i < 3;i++){
        $scope.portals.push(
            {image:"1",url:"",name:"全球购"},
            {image:"2",url:"",name:"超市"},
            {image:"3",url:"",name:"服装城"},
            {image:"4",url:"",name:"充值"},
            {image:"5",url:"",name:"看电影",small:"立减10元"}
        )
    }
});
//流量充值页面自动填写绑定的手机账号
app.controller('rDataCtrl', function ($scope) {
    $scope.accNumber = 13278784545;
});
//登录页面输入内容的检测，重置按钮的设置
app.controller('loginCtrl', function ($scope) {
    $scope.incomplete = false;
    $scope.username = "";
    $scope.password = "";
    $scope.resetBtn = true;
    $scope.resetBtnk = true;
    $scope.$watch('username', function() {$scope.test();});
    $scope.$watch('password', function() {$scope.test();});
    $scope.test = function() {
        if($scope.username.length){
            $scope.resetBtn = false;
        }else{
            $scope.resetBtn = true;
        }
        if($scope.password.length){
            $scope.resetBtnk = false;
        }else{
            $scope.resetBtnk = true;
        }
        if($scope.username.length && ($scope.password.length >= 6)){
            $scope.incomplete = false;
        }else{
            $scope.incomplete = true;
        }
    }
    $scope.reset = function () {
        $scope.username = "";
    }
    $scope.resetk = function () {
        $scope.password = "";
    }
});
//手机号注册页面填写手机号发送验证码
app.controller('signupCtrl', function ($scope,$ionicPopup) {
    $scope.incomplete = false;
    $scope.telnum = "";
    $scope.selected = true;
    $scope.resetBtn = true;
    $scope.$watch('telnum', function() {$scope.test();});
    $scope.$watch('selected', function() {$scope.test();});
    $scope.test = function() {
        if($scope.telnum.length){
            $scope.resetBtn = false;
        }else{
            $scope.resetBtn = true;
        }
        if(($scope.telnum.length == 11) && $scope.selected){
            $scope.incomplete = false;
        }else{
            $scope.incomplete = true;
        }
    }
    $scope.reset = function () {
        $scope.telnum = "";
    }
    $scope.showPop = function(){
        $ionicPopup.confirm({
            title: "我们将发送短信验证码至："+$scope.telnum,
            buttons: [
                {
                    text: "取消",
                    onTap: function (e) {
                        $scope.telnum = "";
                    }
                },
                {
                    text: "<b>确定</b>",
                    type: "button-assertive",
                    onTap: function (e) {
                        console.log("anything");
                        return true;
                    }
                }
            ]
        });
    }
});
//手机注册页面填写验证码
app.controller('signModalCtrl', function ($scope,$timeout) {
    var countNumber = 20;   //修改发送验证码计时时间
    $scope.incomplete = true;
    $scope.timeIncomplete = false;
    $scope.checknum = "";
    $scope.resetBtn = true;
    $scope.decount = countNumber;
    $scope.$watch('checknum', function() {$scope.test();});
    $scope.test = function() {  //检验输入的验证码
        if($scope.checknum.length){
            $scope.resetBtn = false;
        }else{
            $scope.resetBtn = true;
        }
        if(($scope.checknum.length == 6)){
            $scope.incomplete = false;
        }else{
            $scope.incomplete = true;
        }
    }
    $scope.reset = function () {  //重置input中内容
        $scope.checknum = "";
    }
    $scope.sendCheck = function () {  //发送验证码计时
        $scope.decount --;
        if($scope.decount > 0){
            $timeout(function () {
                $scope.sendCheck();
            }, 1000);
            $scope.timeIncomplete = true;
        }else{
            $scope.timeIncomplete = false;
            $scope.decount = countNumber;
        }
    }
    $scope.startCount = function () {
        $scope.sendCheck();
    }
});
//商品详情页面controller
app.controller("merchCtrl", function ($scope,$state, $ionicSlideBoxDelegate, $ionicSideMenuDelegate, $ionicPopup, $ionicHistory) {
    $scope.index = 1;
    $scope.count = $ionicSlideBoxDelegate.slidesCount();
    $scope.go_back = function () {
        $ionicHistory.goBack();
    };
    $scope.showPager = function ($index) {
        $ionicSlideBoxDelegate.slide($index);
        $scope.index = $index + 1;
    }
    $scope.toggleSide = function () {
        $ionicSideMenuDelegate.toggleRight();
    };
    $scope.onSwipeRight = function(){
        $state.go('coupon');
    };
    $scope.showHints = function () {
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


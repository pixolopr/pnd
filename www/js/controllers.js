var cart = [];

angular.module('starter.controllers', ['ionic'])



.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $ionicPlatform) {

    $ionicPlatform.ready(function () {
        /*if (navigator.splashscreen) {
            console.warn('Hiding splash screen');
            // We're done initializing, remove the splash screen
            navigator.splashscreen.hide();
        }*/
        //navigator.splashscreen.show();

    });
    //navigator.splashscreen.show();
    // Form data for the login modal
    /*$scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };*/
})


.controller('menuCtrl', function ($scope, $ionicSideMenuDelegate, $ionicNavBarDelegate) {
        $scope.togglemenu = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };

        console.log("abhay menu");

        $scope.goback = function () {
            $ionicNavBarDelegate.back();
        };
    })
    .controller('PlaylistsCtrl', function ($scope) {
        $scope.playlists = [
            {
                title: 'Reggae',
                id: 1
            },
            {
                title: 'Chill',
                id: 2
            },
            {
                title: 'Dubstep',
                id: 3
            },
            {
                title: 'Indie',
                id: 4
            },
            {
                title: 'Rap',
                id: 5
            },
            {
                title: 'Cowbell',
                id: 6
            }
  ];
    })

.controller('PlaylistCtrl', function ($scope, $stateParams, $ionicModal) {


        $(".productpagemargin").css("margin-bottom", $(".footerbuttons").height());

        //BUY MODAL
        $ionicModal.fromTemplateUrl('templates/buy.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.buymodal = modal;
        });
        $scope.closebuymodal = function () {
            $scope.buymodal.hide();
        };
        $scope.openbuymodal = function () {
            $scope.buymodal.show();
        };
        //ADD TO CART MODAL
        $ionicModal.fromTemplateUrl('templates/addtocart.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function (modal) {
            $scope.cartmodal = modal;
        });
        $scope.closecartmodal = function () {
            $scope.cartmodal.hide();
        };
        $scope.opencartmodal = function () {
            $scope.cartmodal.show();
        };

    })
    .controller('productsCtrl', function ($scope, $stateParams, MyServices, $location) {
        $scope.productdata = [];
        /*var productsuccess = function (data, status) {
            $scope.productdata = data;
        };
        MyServices.getproducts().success(productsuccess);*/


        $scope.productdata = [{
            "id": 1,
            "name": "Alcohol 1",
            "quantity": "350ml Can",
            "cost": "30"
        }, {
            "id": 2,
            "name": "Alcohol 2",
            "quantity": "250ml Can",
            "cost": "60"
        }, {
            "id": 3,
            "name": "Alcohol 3",
            "quantity": "150ml Can",
            "cost": "10"
        }, {
            "id": 4,
            "name": "Alcohol 4",
            "quantity": "70ml Can",
            "cost": "5"
        }];

        $scope.addtocart = function (index) {
            console.log(cart.indexOf($scope.productdata[index]));
            if (cart.indexOf($scope.productdata[index]) > -1) {
                cart[cart.indexOf($scope.productdata[index])].number++;
                console.log(cart);
                console.log("added");
            } else {
                cart.push($scope.productdata[index]);
                cart[cart.length - 1].number = 1;
            };
            console.log("added");
        };
    
    $scope.opencart = function()
    {
        $location.path("/app/cart");
    };


    })

    .controller('cartCtrl', function ($scope, $stateParams) {
        $scope.carto = [];
        $scope.carto = cart;
    })
    .controller('loginCtrl', function ($scope, $stateParams, MyServices, $location) {
        $scope.login = {};
        $scope.login.username = "";
        $scope.login.password = "";
        var loginsuccess = function (data, status) {
            if (data != "false") {
                $location.path("#/app/playlists");
            };
        };
        $scope.loginbutton = function () {
            MyServices.login($scope.login).success(loginsuccess);
        };
    })
    .controller('signupCtrl', function ($scope, $stateParams) {})
    .controller('helpCtrl', function ($scope, $stateParams, $ionicTabsDelegate) {
        $scope.tabselect = false;
        $scope.selectTabWithIndex = function (index) {

        }
    })
    .controller('useraccountCtrl', function ($scope, $stateParams) {})
    .controller('editprofileCtrl', function ($scope, $stateParams) {});
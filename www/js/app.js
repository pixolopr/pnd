// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'myservices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })
  /* .state('app.help', {
    url: "/help",
    views: {
      'menuContent': {
        templateUrl: "templates/help.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
  */  .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.playlist', {
    url: "/playlist",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  })
  .state('app.login', {
    url: "/login",
    views: {
      'menuContent': {
        templateUrl: "templates/login.html",
        controller: 'loginCtrl'
      }
    }
  })
  .state('app.products', {
    url: "/products",
    views: {
      'menuContent': {
        templateUrl: "templates/products.html",
        controller: 'productsCtrl'
      }
    }
  })
   /* .state('app.signup', {
    url: "/signup",
    views: {
      'menuContent': {
        templateUrl: "templates/signup.html",
        controller: 'signupCtrl'
      }
    }
  })*/
  /*.state('app.helptext', {
    url: "/helptext",
    views: {
      'menuContent': {
        templateUrl: "templates/helptext.html",
        controller: 'helpCtrl'
      }
    }
  })*/
  /* .state('app.detail', {
    url: "/detail",
    views: {
      'menuContent': {
        templateUrl: "templates/detail.html",
       
      }
    }
  })*/
  /* .state('app.feedback', {
    url: "/feedback",
    views: {
      'menuContent': {
        templateUrl: "templates/feedback.html",
        
      }
    }
  })
  .state('app.shortlist', {
    url: "/shortlist",
    views: {
      'menuContent': {
        templateUrl: "templates/shortlist.html",
      
      }
    }
  })*/
  /*.state('app.useraccount', {
    url: "/useraccount",
    views: {
      'menuContent': {
        templateUrl: "templates/useraccount.html",
        controller: 'useraccountCtrl'
      }
    }
  })*/
  /*.state('app.editprofile', {
    url: "/editprofile",
    views: {
      'menuContent': {
        templateUrl: "templates/editprofile.html",
        controller: 'editprofileCtrl'
      }
    }
  })*/
  /* .state('app.subcategory', {
    url: "/subcategory",
    views: {
      'menuContent': {
        templateUrl: "templates/subcategory.html",
        
      }
    }
  })
  .state('app.order', {
    url: "/order",
    views: {
      'menuContent': {
        templateUrl: "templates/order.html",
       
      }
    }
  })*/;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});

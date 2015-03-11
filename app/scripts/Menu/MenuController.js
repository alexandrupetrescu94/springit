/**
 * Created by andrei.antal on 11/03/15.
 */
angular.module('SpringApp2')
.controller('MenuController',function($rootScope, $scope,$state, OpenFB){
    console.log('in menu controller');

    if(!$rootScope.user)
    {
      OpenFB.get('/me', {fields: 'about,picture,name,cover,bio,email'}).success(function (user) {
        $scope.user = user;
        $rootScope.user = user;
      });
    }
    else
    {
      $scope.user = $rootScope.user;
    }

    $scope.getBackgroundStyle = function (imagepath) {
      return {
        'background-image': 'url(' + imagepath + ')',
        'background-size': 'cover'
      }
    };

    $scope.logOut = function(){
      //OpenFB.logout();
      //$state.go('login');
    };

  });

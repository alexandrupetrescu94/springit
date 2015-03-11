/**
 * Created by bogdan on 11.03.2015.
 */

angular.module('SpringApp2')
  .controller('LoginController', function($scope, $state, OpenFB, $rootScope, appSettings) {
      $scope.login = function() {
          OpenFB.login(appSettings.loginPermissions).then(
            function() {
              console.log("LOGIN SUCCESS");
              OpenFB.get('/me', {fields: appSettings.userFields})
                .success(function(user) {
                  console.log(user);
                  $rootScope.user = user;
                  $state.go('menu.springFeed');
                })
            },
            function() {
              console.log("login ERRRRRRRROOOORRRR");
            }
          );
      };
  });

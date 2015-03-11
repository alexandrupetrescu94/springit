/**
 * Created by andrei.antal on 04/03/15.
 */
angular.module('SpringApp2')
  .directive("reportBug", function($ionicPopup, $rootScope,$http){
    return {
        restrict: "A",
        link: function (scope, element) {
            element.on('click', function(){
                scope.myPopup = $ionicPopup.show({
                    templateUrl : '/scripts/modules/bugReport/popup.html',
                    title: 'Bug report',
                    subTitle: 'Please fill in details for the bug.',
                    scope: scope,
                    cssClass : ".bug-popup"
                });
            });

            scope.formData = {};

            scope.closePopup = function(){
                scope.myPopup.close()
            };

            scope.sendBug = function(){

              console.log($rootScope.user)

              var message = {
                name: $rootScope.user.name,
                email: $rootScope.user.email,
                photo: "https://graph.facebook.com/" + $rootScope.user.id + "/picture?width=120&height=120",
                title: scope.formData.title,
                type: scope.formData.type,
                description: scope.formData.description,
                updated: Date.now()
              };

              // aici de trimis datele de debug
              console.log(message);
              $http.post('http://springit.qualitance.com/api/messages', message);
              scope.myPopup.close();
            }

        }
    }
})

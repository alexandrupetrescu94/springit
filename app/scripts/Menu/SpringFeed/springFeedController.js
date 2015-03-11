/**
 * Created by andrei.antal on 11/03/15.
 */
angular.module('SpringApp2')
  .controller('SpringFeedController', function($scope, $rootScope, OpenFB){
    console.log("--- My feed controller ---");

    $scope.items = [];
    $scope.loadmore = false;

    $scope.loadPosts = function () {
      if (!$scope.nextcursor) {
        $scope.nextcursor = '/spring.it.sisc/feed';
      }
      OpenFB.get($scope.nextcursor, {
        limit: 10,
        fields: 'picture,id,from, story, link,message,status_type,type,icon,object_id,likes.limit(1).summary(true),shares'
      }).success(function (result) {
        $scope.loadmore = true;
        $scope.nextcursor = result.paging.next;

        angular.forEach(result.data, function (item) {
          if(item.type !== 'event')
          {
            $scope.items.push(item);
          }
        });
        console.log($scope.items);
        $scope.$broadcast('scroll.infiniteScrollComplete');
      }).catch(function (error) {
        console.log(error);
      });
    };

    $scope.loadPosts();
  });

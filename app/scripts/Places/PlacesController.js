/**
 * Created by bogdan on 11.03.2015.
 */

angular.module('SpringApp2')
  .controller('PlacesController', function($scope, OpenFB, appSettings, leafletData) {

    OpenFB.get('/me', {fields: 'tagged_places'})
      .success(function(data) {

        $scope.places = data.tagged_places.data;

        $scope.corners = appSettings.createCorners($scope.places);
        $scope.map = appSettings.createMap($scope.places);

        console.log($scope.map);

      })
  });


angular.module('app.nusextra.ctrls', [])

.controller('nUSExtraCardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.$on('$ionicView.enter', function() {
        if($scope.$parent.$parent.badges){
            $scope.$parent.$parent.badges.nusextra=0;
        }
    });
}])

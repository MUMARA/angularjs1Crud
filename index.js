var app = angular.module("myApp", []).controller('ctrl', function ($scope) {

    $scope.edit = function (user) {
        $scope.update = user;
    };
$scope.addList = ["a"];
    $scope.add = function (user) {
        $scope.addList.push(user);
    };
    $scope.del = function (user) {
        $scope.addList.pop(user);
    }
});


/*var app = angular.module("myApp",[]).controller('ctrl',function ($scope) {

 $scope.edit = function (user) {
 console.log(user)
 $scope.a = user;
 }
 });*/
const URL = 'https://covid19.mathdro.id/api';
let app = angular.module('MyCovidApp', []);

app.controller('MyCtrl', ($scope, $http) => {
  //this is controller
  $scope.title = 'Corona Virus';
  $http.get(URL).then(
    (response) => {
      //success to call api
      $scope.allData = response.data;
    },
    (error) => {
      //fail to call api
      console.log(error);
    }
  );

  //   get country dat

  $scope.get_country_data = () => {
    let country = $scope.c;
    if (country == '') {
      $scope.countryData = undefined;
      return;
    }

    $http.get(`${URL}/countries/${country}`).then(
      (response) => {
        $scope.countryData = response.data;
      },
      (error) => {
        $scope.countryData = undefined;
      }
    );
  };
});

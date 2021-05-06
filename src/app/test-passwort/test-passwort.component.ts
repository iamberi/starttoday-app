import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-passwort',
  templateUrl: './test-passwort.component.html',
  styleUrls: ['./test-passwort.component.scss']
})
export class TestPasswortComponent implements OnInit {
  function($scope) {
  
    $scope.passwordStrength = {
      "float": "left",
      "width": "100px",
      "height": "25px",
      "margin-left": "5px"
    };
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    $scope.passwordStrength = {
        "float": "left",
        "width": "100px",
        "height": "25px",
        "margin-left": "5px"
    };

    $scope.analyze = function(value) {
        if(strongRegex.test(value)) {
            $scope.passwordStrength["background-color"] = "green";
        } else if(mediumRegex.test(value)) {
            $scope.passwordStrength["background-color"] = "orange";
        } else {
            $scope.passwordStrength["background-color"] = "red";
        }
    };
  }

  constructor() { }

  ngOnInit(): void {
  }

}

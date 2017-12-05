// #1. create the initial module and name it EmployeeMgmt
// the array in the module call is empty until we have to pass in dependencies
var app = angular.module("EmployeeMgmt", []);

// 2. Initiate the controller and make sure that it is called in the HTML as well
// create a controller for displaying, creating, and deleting Employees
app.controller("EmployeeCtrl", function ($scope) {

$scope.employees = [
    {
        "firstName": "Erin",
        "lastName": "Orstrom",
        "employmentStart": 1512140013765,
        "employmentEnd": null
    },
    {
        "firstName": "Wayne",
        "lastName": "Hutchinson",
        "employmentStart": 1512139999102,
        "employmentEnd": null
    },
    {
        "firstName": "Sarah",
        "lastName": "Story",
        "employmentStart": 1512139999729,
        "employmentEnd": null
    },
    {
        "firstName": "Sulaiman",
        "lastName": "Allan",
        "employmentStart": 1512140294571,
        "employmentEnd": null
    },
    {
        "firstName": "Ben",
        "lastName": "Marks",
        "employmentStart": 1512200192934,
        "employmentEnd": null
    }
]

// create a delete button that "fires employees"
$scope.fireEmployee = function(employee) {
    // Do you see the PFM here of full object comparison?
    console.log("click is fired")
    var employeeIndex = $scope.employees.indexOf(employee);
      //On click, the "employementEnd" becomes the current date
    employee.employmentEnd = Date.now();

    if (employeeIndex >= 0) {
      $scope.employees.splice(employeeIndex, 1)
    }
  };

})

myApp.controller('HomeController', function($scope, $rootScope, $location, $cordovaCamera, $cordovaFileTransfer, CVMAKER_API) {
    $rootScope.submitVibrate = function() {
        if ('vibrate' in navigator) {
            // Shake that device!
            navigator.vibrate(100);

        }



    }

    $rootScope.checkPermission = function() {
    	
		cordova.plugins.diagnostic.getPermissionAuthorizationStatus(function(status) {
            switch (status) {
                case cordova.plugins.diagnostic.runtimePermissionStatus.GRANTED:
                    console.log("Permission granted to use the camera");
                    break;
                case cordova.plugins.diagnostic.runtimePermissionStatus.NOT_REQUESTED:
                    console.log("Permission to use the camera has not been requested yet");
                    break;
                case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED:
                    console.log("Permission denied to use the camera - ask again?");
                    break;
                case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED_ALWAYS:
                    console.log("Permission permanently denied to use the camera - guess we won't be using it then!");
                    break;
            }
        }, function(error) {
            console.error("The following error occurred: " + error);
        }, cordova.plugins.diagnostic.runtimePermission.WRITE_EXTERNAL_STORAGE);

        cordova.plugins.diagnostic.requestRuntimePermission(function(status) {
            switch (status) {
                case cordova.plugins.diagnostic.runtimePermissionStatus.GRANTED:
                    console.log("Permission granted to use the camera");
                    break;
                case cordova.plugins.diagnostic.runtimePermissionStatus.NOT_REQUESTED:
                    console.log("Permission to use the camera has not been requested yet");
                    break;
                case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED:
                    console.log("Permission denied to use the camera - ask again?");
                    break;
                case cordova.plugins.diagnostic.runtimePermissionStatus.DENIED_ALWAYS:
                    console.log("Permission permanently denied to use the camera - guess we won't be using it then!");
                    break;
            }
        }, function(error) {
            console.error("The following error occurred: " + error);
        }, cordova.plugins.diagnostic.runtimePermission.WRITE_EXTERNAL_STORAGE);




    };


    $scope.validation = function() {


        var isExists = 0;
        // GET VALUE OF NAME FIELD
        var firstName = $("#firstName").val();
        var boolName = false;
        if (firstName == null || firstName == undefined || firstName == "") {
            sweetAlert("Error!", "Enter Name", "error");
        } else {
            boolName = true;
        }

        // GET VALUE OF LAST NAME
        var lastName = $("#lastName").val();

        // GET VALUE OF ADDRESS FEILD
        var address = $("#address").val();
        var boolAddress = false;
        if (address == null || address == undefined || address == "") {
            sweetAlert("Error!", "Enter Address", "error");
        } else {
            boolAddress = true;
        }

        

        // GET VALUE OF CITY FIELD
        var city = $("#city").val();
        var boolCity = false;
        if (city == null || city == undefined || city == "") {
            sweetAlert("Error!", "Enter City", "error");
        } else {
            boolCity = true;
        }

        // GET VALUE OF MOBILE NUMBER FIELD
        var mobileNumber = $("#mobileNumber").val();
        var boolMobileNumber = false;
        if (mobileNumber == null || mobileNumber == undefined || mobileNumber == "") {
            sweetAlert("Error!", "Enter Mobile Number", "error");
        } else {
            boolMobileNumber = true;
        }

        // GET VALUE OF EMAIL FIELD
        var email = $("#email").val();
        var boolEmail = false;
        if (email == null || email == undefined || email == "") {
            sweetAlert("Error!", "Enter Email ", "error");
        } else {
            boolEmail = true;
        }

        // GET VALUE OF SUMMARY FIELD
        var summary = $("#summary").val();
        var boolSummary = false;
        if (summary == null || summary == undefined || summary == "") {
            sweetAlert("Error!", "Enter Your Profile Summary", "error");
        } else {
            boolSummary = true;
        }

        // CHECK IF ALL FIELDS ARE FILLED
        if (boolName == false || boolAddress == false || boolCity == false || boolMobileNumber == false || boolEmail == false || boolSummary == false ) {
            sweetAlert("Error!", "All fields are mandatory. ", "error");
        } else {
           
            // CHECK IF CANDIDATE ALREADY EXIXTS
            var json = {
                "email": email
            };
            $rootScope.email = JSON.stringify(json);
            // AJAX REQUEST TO SEND DATA TO SERVER
            jQuery.ajax({
                type: "POST",
                url: CVMAKER_API + "/populate/checkEmail/",
                data: $rootScope.email,
                contentType: "application/json",
                complete: function(data) {
                    // ACTION ON SUCCESS
                    if (data.readyState == 4 && data.status == 200) {
                        console.log(data.responseText);
                        if (data.responseText == "true") {
                            isExists = 1;
                            swal({
                                title: "Your have already tried us before!",
                                text: "Now you can edit your previously made Resume.",
                                timer: 2000,
                                showConfirmButton: false
                            });
                            $location.path('/confirm-details');
                            $scope.$apply();
                        } else {

                           
                            isExists = 0;
                            // CREATE JSON OF ALL FIELDS
                            var json = {
                                "firstName": firstName,
                                "lastName": lastName,
                                "mobileNumber": mobileNumber,
                                "email": email,
                                "address": address,
                                "city": city,
                                "summary": summary
                            };
                            $rootScope.candidateDetails = JSON.stringify(json);
                            // AJAX REQUEST TO SEND DATA TO SERVER
                            jQuery.ajax({
                                type: "POST",
                                url: CVMAKER_API + "/populate/candidateDetails/",
                                data: $rootScope.candidateDetails,
                                contentType: "application/json",
                                complete: function(data) {
                                    // ACTION ON SUCCESS
                                    if (data.readyState == 4 && data.status == 200) {
                                        // $scope.response = JSON.parse(data.responseText);
                                       
                                        $location.path('/school');
                                        $scope.$apply();

                                    } else {
                                        // ACTION ON FAILURE
                                        sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                                        // $location.path('/user/updateFlat');
                                        // $scope.$apply();
                                        if ('vibrate' in navigator) {
                                            // Shake that device!
                                            navigator.vibrate(100);
                                            navigator.vibrate(100);
                                        }
                                    }
                                }
                            });
                        }


                    } else {
                        // ACTION ON FAILURE
                        sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                        // $location.path('/user/updateFlat');
                        // $scope.$apply();
                    }
                }
            });

            if (isExists == 0) {

            }

        }
    }
});
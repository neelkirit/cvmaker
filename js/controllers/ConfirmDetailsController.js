myApp.controller('ConfirmDetailsController', function($scope, $rootScope, $location, $cordovaFileTransfer, $cordovaFileOpener2, CVMAKER_API) {
    $(document).ready(function() {
        $('#download-button').hide();
        $('.modal').modal();
        $scope.fetchCandidate();
    });
    $scope.editJob = function(id) {
        var json = {
            "candidate": {
                "id": $scope.candidateId
            },
            "id": id
        };
        $scope.awardsDetails = JSON.stringify(json);
        // AJAX REQUEST TO SEND DATA TO SERVER
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/populate/updateJobDetails/",
            data: $scope.awardsDetails,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    swal({
                        title: "Selected Job Removed!",
                        text: "You can add fresh Job Details.",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    
                    $location.path('/job');
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                }
            }
        });
    }
    $scope.removeJob = function(id) {
        var json = {
            "candidate": {
                "id": $scope.candidateId
            },
            "id": id
        };
        $scope.awardsDetails = JSON.stringify(json);
        // AJAX REQUEST TO SEND DATA TO SERVER
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/populate/updateJobDetails/",
            data: $scope.awardsDetails,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    swal({
                        title: "Job Details Removed!",
                        text: "You can still add fresh Job Details.",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    $scope.fetchCandidate();
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                }
            }
        });
    }
    $scope.addJob = function() {
        
        $location.path('/job');
        $scope.$apply();
    }
    $scope.editAwards = function(id) {
        var json = {
            "candidate": {
                "id": $scope.candidateId
            },
            "id": id
        };
        $scope.awardsDetails = JSON.stringify(json);
        // AJAX REQUEST TO SEND DATA TO SERVER
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/populate/updateAccoladesDetails/",
            data: $scope.awardsDetails,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    swal({
                        title: "Selected Awards Removed!",
                        text: "You can add fresh Award's Details.",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    $rootScope.editAward = 1;
                    $location.path('/accolades');
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                }
            }
        });
    }
    $scope.removeAwards = function(id) {
        var json = {
            "candidate": {
                "id": $scope.candidateId
            },
            "id": id
        };
        $scope.awardsDetails = JSON.stringify(json);
        // AJAX REQUEST TO SEND DATA TO SERVER
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/populate/updateAccoladesDetails/",
            data: $scope.awardsDetails,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    swal({
                        title: "Award Details Removed!",
                        text: "You can still add fresh Award Details.",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    $scope.fetchCandidate();
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                }
            }
        });
    }
    $scope.addAward = function() {
        $rootScope.editAward = 1;
        $location.path('/accolades');
        $scope.$apply();
    }
    $scope.editSkill = function(id) {
        var json = {
            "candidate": {
                "id": $scope.candidateId
            },
            "id": id
        };
        $scope.skill = JSON.stringify(json);
        // AJAX REQUEST TO SEND DATA TO SERVER
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/populate/updateSkills/",
            data: $scope.skill,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    swal({
                        title: "Selected Skill Removed!",
                        text: "You can add fresh Skill.",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    $rootScope.editExtra = 0;
                    $rootScope.editSkill = 1;
                    $location.path('/extras');
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                }
            }
        });
    }
    $scope.removeSkill = function(id) {
        var json = {
            "candidate": {
                "id": $scope.candidateId
            },
            "id": id
        };
        $scope.skill = JSON.stringify(json);
        // AJAX REQUEST TO SEND DATA TO SERVER
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/populate/updateSkills/",
            data: $scope.skill,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    swal({
                        title: "Skill Removed!",
                        text: "You can still add fresh Skills.",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    $scope.fetchCandidate();
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                }
            }
        });
    }
    $scope.addSkill = function(id) {
        $rootScope.editSkill = 1;
        $rootScope.editExtra = 0;
        $location.path('/extras');
        $scope.$apply();
    }
    $scope.editProject = function(id) {
        var json = {
            "candidate": {
                "id": $scope.candidateId
            },
            "id": id
        };
        $scope.universityDetails = JSON.stringify(json);
        // AJAX REQUEST TO SEND DATA TO SERVER
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/populate/updateExtrasDetails/",
            data: $scope.universityDetails,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    swal({
                        title: "Selected Details Removed!",
                        text: "You can add fresh Project Details.",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    $rootScope.editSkill = 0;
                    $rootScope.editExtra = 1;
                    $location.path('/extras');
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                }
            }
        });
    }
    $scope.removeProject = function(id) {
        var json = {
            "candidate": {
                "id": $scope.candidateId
            },
            "id": id
        };
        $scope.universityDetails = JSON.stringify(json);
        // AJAX REQUEST TO SEND DATA TO SERVER
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/populate/updateExtrasDetails/",
            data: $scope.universityDetails,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    swal({
                        title: "Project Details Removed!",
                        text: "You can still add fresh Project Details.",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    $scope.fetchCandidate();
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                }
            }
        });
    }
    $scope.addProject = function() {
        $rootScope.editSkill = 0;
        $rootScope.editExtra = 1;
        $location.path('/extras');
        $scope.$apply();
    }
    $scope.editUniv = function(id) {
        var json = {
            "candidate": {
                "id": $scope.candidateId
            },
            "id": id
        };
        $scope.universityDetails = JSON.stringify(json);
        // AJAX REQUEST TO SEND DATA TO SERVER
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/populate/updateUniversityDetails/",
            data: $scope.universityDetails,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    swal({
                        title: "Selected Details Removed!",
                        text: "You can add fresh University Details.",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    $rootScope.edit = 1;
                    $location.path('/university');
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                }
            }
        });
    }
    $scope.removeUniv = function(id) {
        var json = {
            "candidate": {
                "id": $scope.candidateId
            },
            "id": id
        };
        $scope.universityDetails = JSON.stringify(json);
        // AJAX REQUEST TO SEND DATA TO SERVER
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/populate/updateUniversityDetails/",
            data: $scope.universityDetails,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    swal({
                        title: "University Details Removed!",
                        text: "You can still add fresh University Details.",
                        timer: 1000,
                        showConfirmButton: false
                    });
                    $scope.fetchCandidate();
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                }
            }
        });
    }
    $scope.addUniv = function() {
        $rootScope.edit = 1;
        $location.path('/university');
        $scope.$apply();
    }
    $scope.openModal = function(edit) {
        if (edit == "personal") {
            $('#editpersonal').modal('open');
        } else if (edit == "school") {
            $('#editschool').modal('open');
        } else if (edit == "pu") {
            $('#editPu').modal('open');
        } else if (edit == "univ") {}
        $('.modal').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '4%', // Starting top style attribute
            endingTop: '10%', // Ending top style attribute
        });
    }
    $scope.update = function(val) {
        if (val == "personal") {
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
            if (boolName == false || boolAddress == false || boolCity == false || boolMobileNumber == false || boolEmail == false || boolSummary == false) {
                sweetAlert("Error!", "All fields are mandatory. ", "error");
            } else {
                var json = {
                    "id": $scope.candidateId,
                    "firstName": firstName,
                    "lastName": lastName,
                    "mobileNumber": mobileNumber,
                    "email": email,
                    "address": address,
                    "summary": summary
                };
                $scope.candidate = JSON.stringify(json);
                // AJAX REQUEST TO SEND DATA TO SERVER
                jQuery.ajax({
                    type: "POST",
                    url: CVMAKER_API + "/populate/updateCandidateDetails/",
                    data: $scope.candidate,
                    contentType: "application/json",
                    complete: function(data) {
                        // ACTION ON SUCCESS
                        if (data.readyState == 4 && data.status == 200) {
                            // $scope.response = JSON.parse(data.responseText);
                            //$location.path('/school');
                            $scope.fetchCandidate();
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
        } else if (val == "school") {
            // GET VALUE OF SCHOOL NAME FIELD
            var schoolName = $("#schoolName").val();
            var boolSchoolName = false;
            if (schoolName == null || schoolName == undefined || schoolName == "") {
                sweetAlert("Error!", "Enter School Name", "error");
            } else {
                boolSchoolName = true;
            }
            // GET VALUE OF BOARD FEILD
            var board = $("#board").val();
            var boolBoard = false;
            if (board == null || board == undefined || board == "") {
                sweetAlert("Error!", "Enter School Board", "error");
            } else {
                boolBoard = true;
            }
            // GET VALUE OF CGPA FIELD
            var cgpa = $("#cgpa").val();
            var boolCGPA = false;
            if (cgpa == null || cgpa == undefined || cgpa == "") {
                sweetAlert("Error!", "Enter Marks", "error");
            } else {
                boolCGPA = true;
            }
            // GET VALUE OF PASSING DATE FIELD
            var year = $("#year").val();;
            var boolYear = false;
            if (year == null || year == undefined || year == "") {
                sweetAlert("Error!", "Enter Month and Year of Passing", "error");
            } else {
                boolYear = true;
            }
            // CHECK IF ALL FIELDS ARE FILLED
            if (boolSchoolName == false || boolBoard == false || boolCGPA == false || boolYear == false) {
                sweetAlert("Error!", "All fields are mandatory. ", "error");
            } else {
                // CREATE JSON OF ALL FIELDS
                var json = {
                    "candidate": {
                        "id": $scope.candidateId
                    },
                    "schoolName": schoolName,
                    "board": board,
                    "cgpa": cgpa,
                    "year": year
                };
                $scope.editSchoolDetails = JSON.stringify(json);
                // AJAX REQUEST TO SEND DATA TO SERVER
                jQuery.ajax({
                    type: "POST",
                    url: CVMAKER_API + "/populate/updateSchoolDetails/",
                    data: $scope.editSchoolDetails,
                    contentType: "application/json",
                    complete: function(data) {
                        // ACTION ON SUCCESS
                        if (data.readyState == 4 && data.status == 200) {
                            $scope.fetchCandidate();
                            $scope.$apply();
                        } else {
                            // ACTION ON FAILURE
                            sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                        }
                    }
                });
            }
        } else if (val == "pu") {
            
            // GET VALUE OF SCHOOL NAME FIELD
            var collegeName = $("#collegeName").val();
            var boolCollegeName = false;
            if (collegeName == null || collegeName == undefined || collegeName == "") {
                sweetAlert("Error!", "Enter College / High School  Name", "error");
            } else {
                boolCollegeName = true;
            }
            // GET VALUE OF BOARD FEILD
            var board = $("#pboard").val();
            var boolBoard = false;
            if (board == null || board == undefined || board == "") {
                sweetAlert("Error!", "Enter School Board", "error");
            } else {
                boolBoard = true;
            }
            // GET VALUE OF CGPA FIELD
            var cgpa = $("#pcgpa").val();
            var boolCGPA = false;
            if (cgpa == null || cgpa == undefined || cgpa == "") {
                sweetAlert("Error!", "Enter Marks", "error");
            } else {
                boolCGPA = true;
            }
            // GET VALUE OF PASSING DATE FIELD
            var year = $("#pyear").val();;
            var boolYear = false;
            if (year == null || year == undefined || year == "") {
                sweetAlert("Error!", "Enter Month and Year of Passing", "error");
            } else {
                boolYear = true;
            }
            // CHECK IF ALL FIELDS ARE FILLED
            if (boolCollegeName == false || boolBoard == false || boolCGPA == false || boolYear == false) {
                sweetAlert("Error!", "All fields are mandatory. ", "error");
            } else {
                // CREATE JSON OF ALL FIELDS
                var json = {
                    "candidate": {
                        "id": $scope.candidateId
                    },
                    "collegeName": collegeName,
                    "board": board,
                    "cgpa": cgpa,
                    "year": year
                };
                $scope.editPreUniversityDetails = JSON.stringify(json);
                
                // AJAX REQUEST TO SEND DATA TO SERVER
                jQuery.ajax({
                    type: "POST",
                    url: CVMAKER_API + "/populate/updatePreUniversityDetails/",
                    data: $scope.editPreUniversityDetails,
                    contentType: "application/json",
                    complete: function(data) {
                        // ACTION ON SUCCESS
                        if (data.readyState == 4 && data.status == 200) {
                            $scope.fetchCandidate();
                            $scope.$apply();
                            
                        } else {
                            // ACTION ON FAILURE
                            sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                        }
                    }
                });
            }
        } //pu ends
    }
    $scope.fetchCandidate = function() {
        // FETCH CANDIDATE DETAILS
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/fetch/candidateDetails/",
            data: $rootScope.email,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    $scope.response = JSON.parse(data.responseText);
                    var candidate = {
                        "firstName": $scope.response.firstName,
                        "lastName": $scope.response.lastName,
                        "mobileNumber": $scope.response.mobileNumber,
                        "email": $scope.response.email,
                        "address": $scope.response.address,
                        "city": $scope.response.city,
                        "summary": $scope.response.summary
                    };
                    $rootScope.candidateDetails = JSON.stringify(candidate);
                    $rootScope.edit = 1;
                    $scope.candidateId = $scope.response.id;
                    $scope.candidateDetails = $scope.response;
                    var json = {
                        "id": $scope.candidateId
                    };
                    $rootScope.candidateId = JSON.stringify(json);
                    $scope.$apply();
                    //RETRIEVE SCHOOL DETAILS
                    $scope.fetchSchool();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                    // $location.path('/user/updateFlat');
                    // $scope.$apply();
                }
            }
        });
    }
    // FETCH SCHOOL DETAILS
    $scope.fetchSchool = function() {
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/fetch/schoolDetails/",
            data: $rootScope.candidateId,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    $scope.response = JSON.parse(data.responseText);
                    $scope.schoolDetails = $scope.response;
                    $scope.$apply();
                    //RETRIEVE PRE UNIVERSITY DETAILS
                    $scope.fetchPreUniversity();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                    // $location.path('/user/updateFlat');
                    // $scope.$apply();
                }
            }
        });
    }
    // FETCH PRE UNIV DETAILS
    $scope.fetchPreUniversity = function() {
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/fetch/preUniversityDetails/",
            data: $rootScope.candidateId,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    $scope.response = JSON.parse(data.responseText);
                    $scope.preUnivDetails = $scope.response;
                    $scope.$apply();
                    //RETRIEVE UNIVERSITY DETAILS
                    $scope.fetchUniversity();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                    // $location.path('/user/updateFlat');
                    // $scope.$apply();
                }
            }
        });
    }
    // FETCH UNIV DETAILS
    $scope.fetchUniversity = function() {
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/fetch/universityDetails/",
            data: $rootScope.candidateId,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    $scope.response = JSON.parse(data.responseText);
                    $scope.universityList = $scope.response;
                    $scope.$apply();
                    //RETRIEVE SKILLS DETAILS
                    $scope.fetchSkills();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                    // $location.path('/user/updateFlat');
                    // $scope.$apply();
                }
            }
        });
    }
    // FETCH SKILLS DETAILS
    $scope.fetchSkills = function() {
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/fetch/skills/",
            data: $rootScope.candidateId,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    $scope.response = JSON.parse(data.responseText);
                    $scope.skillsList = $scope.response;
                    $scope.$apply();
                    //RETRIEVE EXTRAS DETAILS
                    $scope.fetchExtras();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                    // $location.path('/user/updateFlat');
                    // $scope.$apply();
                }
            }
        });
    }
    // FETCH EXTRAS DETAILS
    $scope.fetchExtras = function() {
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/fetch/extrasDetails/",
            data: $rootScope.candidateId,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    $scope.response = JSON.parse(data.responseText);
                    $scope.extrasList = $scope.response;
                    $scope.$apply();
                    console.log($scope.response);
                    //RTREIVE ACCOLADES DETAILS
                    $scope.fetchAccolades();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                    // $location.path('/user/updateFlat');
                    // $scope.$apply();
                }
            }
        });
    }
    // FETCH ACCOLADES DETAILS
    $scope.fetchAccolades = function() {
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/fetch/accoladesDetails/",
            data: $rootScope.candidateId,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    $scope.response = JSON.parse(data.responseText);
                    $scope.accoladesList = $scope.response;
                    $scope.$apply();
                    console.log($scope.response);
                    //RETREIVE JOBS DETAILS
                    $scope.fetchJob();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                    // $location.path('/user/updateFlat');
                    // $scope.$apply();
                }
            }
        });
    }
    // FETCH JOB DETAILS
    $scope.fetchJob = function() {
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/fetch/job/",
            data: $rootScope.candidateId,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    $scope.response = JSON.parse(data.responseText);
                    $scope.jobList = $scope.response;
                    $scope.$apply();
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                    // $location.path('/user/updateFlat');
                    // $scope.$apply();
                }
            }
        });
    }
    $scope.validation = function() {
        jQuery.ajax({
            type: "POST",
            url: CVMAKER_API + "/generate/pdf/",
            data: $rootScope.candidateId,
            contentType: "application/json",
            complete: function(data) {
                // ACTION ON SUCCESS
                if (data.readyState == 4 && data.status == 200) {
                    // $scope.response = JSON.parse(data.responseText);
                    console.log(data.responseText);
                    $scope.author = data.responseText;
                    // Materialize.toast('Congrats! Here`s your Resume.', 00);
                    // $('#download-button').show();
                    var dataPost = {
                        "author": $scope.author
                    };
                    var JSONa = JSON.stringify(dataPost);
                    console.log("PHP " + JSONa);
                    $.ajax({
                        type: 'POST',
                        // url: "http://35.154.66.62:80/mpdf/test.php",
                        url: "http://35.154.66.62:80/mpdf/test.php",
                        data: JSONa,
                        success: function(response) {
                            console.log("sent " + JSON.stringify(JSONa));
                            console.log("sent " + JSONa);
                            $('#download-button').show();
                        }
                    });
                } else {
                    // ACTION ON FAILURE
                    sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
                    // $location.path('/user/updateFlat');
                    // $scope.$apply();
                }
            }
        });
    }
    $scope.fileDownload = function() {
        var url = encodeURI("http://35.154.66.62:80/" + $scope.author + "_Resume.pdf");
        var filename = url.split("/").pop();
        var targetPath = cordova.file.externalRootDirectory + "Download/" + filename;
        var fileTransfer = new FileTransfer();
        fileTransfer.download(url, targetPath, function(entry) {
            console.log("download complete: " + entry.toURL());
            console.log('1 Your download is completed' + entry.toURL());
        }, function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("download error code" + error.code);
            console.log('Your download is failed ' + targetPath + " + " + error.code + " + " + error.source + " + " + JSON.stringify(error));
        }, false, {
            headers: {
                "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
            }
        });
        $cordovaFileTransfer.download(url, targetPath, {}, true).then(function(result) {
            console.log('Success');
            $scope.hasil = 'Save file on ' + targetPath + ' success!';
            $scope.mywallpaper = targetPath;
            console.log('Your download is completed');
            $scope.openFile(targetPath);
        }, function(error) {
            console.log("download error source " + error.source);
            console.log("download error target " + error.target);
            console.log("download error code" + error.code);
            console.log('Your download is failed ' + targetPath + " " + error.code + " " + error.source);
        }, function(progress) {
            console.log('progress');
            // $scope.downloadProgress = (progress.loaded / progress.total) * 100;
            // var downcountString = $scope.downloadProgress.toFixed();
            // console.log('downcountString');
            // $scope.downloadCount = downcountString;
        });
    }
    $scope.openFile = function(targetPath) {
        console.log("File Opener");
        $cordovaFileOpener2.open(targetPath, 'application/pdf').then(function() {
            console.log("Opened");
            // file opened successfully
        }, function(err) {
            // An error occurred. Show a message to the user
        });
    }
});
// app.factory('myService', function() {
//  var savedData = {}
//  function set(data) {
//    savedData = data;
//  }
//  function get() {
//   return savedData;
//  }
//  return {
//   set: set,
//   get: get
//  }
// });
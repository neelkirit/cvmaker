myApp.controller('ExtrasController', function($scope, $rootScope, $location, CVMAKER_API,BROWSER_API)
{
	/**
	 * Event-Listner for Back-Button
	 */
	 $rootScope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
	 	previousUrl = BROWSER_API+"/cvmaker/#/university";
        if (previousUrl && previousUrl === newUrl) {
            //Browser is navigating back
            // Here you can take the control and call your own functions:
		    alert('You can change your details at confimration page.');
		    // Prevent the browser default action (Going back):
		    event.preventDefault();
        } else {
            previousUrl = oldUrl;
        }
    });


	$scope.add = function(){
       $scope.validation(1);
    }

    $(document).ready(function() {
    	
    	
	    $('select').material_select();
	});

    $scope.months = [
	    "January",
	    "February",
	    "March",
	    "April",
	    "May",
	    "June",
	    "July",
	    "August",
	    "September",
	    "October",
	    "November",
	    "December"
	];

	var date = new Date();
		var currentYear = date.getFullYear();
		var i,year = [];
		$scope.selectedValue = null;

	    $scope.getStartYear = function () {
		     year = [];
		     
		     for (i = 1995; i <= currentYear; i++) {
		       year.push(i);
		     }
		     
	     	return year;
	  	};

	  	$scope.startYearSelected = function(){
			$scope.startYear = $("#startYear option:selected").text();
			console.log($scope.startYear);
			
		}

	  	$scope.getEndYear = function () {
		     var year = [];
		     
		     for (i = 1995; i <= currentYear; i++) {
		       year.push(i);
		     }
		     
	     	return year;
	  	};

	$scope.validation = function(add){



		if($('#projectSwitch').prop('checked'))
		{
			$scope.isProject = 1;
		}
		else
		{
			$scope.isProject = 0;
		}


		// GET VALUE OF PROJECT FIELD
		var project = $("#project").val(); 
		var boolProject=false;
		if($scope.isProject == 1 && (project == null || project == undefined || project == ""))
		{
			sweetAlert("Error!", "Enter Project Title", "error");
		}
		else if($rootScope.editExtra == 1 && (project == null || project == undefined || project == ""))
		{
			sweetAlert("Error!", "Enter Project Title", "error");
		}
		else{
			boolProject = true;
		}

		// GET VALUE OF ROLE FEILD
		var role = $("#role").val();
		var boolRole = false;
		if($scope.isProject == 1 && (role == null || role == undefined || role == ""))
		{
			sweetAlert("Error!", "Enter Your Role", "error");
		}
		else if($rootScope.editExtra == 1 && (role == null || role == undefined || role == ""))
		{
			sweetAlert("Error!", "Enter Your Role", "error");
		}
		else{
			boolRole = true;
		}

		// GET VALUE OF START MONTH FEILD
		var startMonth = $("#startMonth").val();
		var boolStartMonth = false;
		if($scope.isProject == 1 && (startMonth == null || startMonth == undefined || startMonth == ""))
		{
			sweetAlert("Error!", "Enter Start Month of Project", "error");
		}
		else if($rootScope.editExtra == 1 && (startMonth == null || startMonth == undefined || startMonth == ""))
		{
			sweetAlert("Error!", "Enter Start Month of Project", "error");
		}
		else{
			boolStartMonth = true;
		}

		// GET VALUE OF START YEAR FEILD
		
		var boolStartYear = false;
		if($scope.isProject == 1 && ($scope.startYear == null || $scope.startYear == undefined || $scope.startYear == ""))
		{
			sweetAlert("Error!", "Enter Start Year of Project", "error");
		}
		else if($rootScope.editExtra == 1 && ($scope.startYear == null || $scope.startYear == undefined || $scope.startYear == ""))
		{
			sweetAlert("Error!", "Enter Start Year of Project", "error");
		}
		else{
			boolStartYear = true;
		}

		// GET VALUE OF END MONTH FEILD
		var endMonth = $("#endMonth").val();
		var boolEndMonth = false;
		if($scope.isProject == 1 && (endMonth == null || endMonth == undefined || endMonth == ""))
		{
			sweetAlert("Error!", "Enter End Month of Project", "error");
		}
		else if($rootScope.editExtra == 1 && (endMonth == null || endMonth == undefined || endMonth == ""))
		{
			sweetAlert("Error!", "Enter End Month of Project", "error");
		}
		else{
			boolEndMonth = true;
		}

		// GET VALUE OF END YEAR FEILD
		var endYear = $("#endYear option:selected").text();
		var boolEndYear = false;
		if($scope.isProject == 1 && (endYear == null || endYear == undefined || endYear == ""))
		{
			sweetAlert("Error!", "Enter End Year of Project", "error");
		}
		else if($rootScope.editExtra == 1 && (endYear == null || endYear == undefined || endYear == ""))
		{
			sweetAlert("Error!", "Enter End Year of Project", "error");
		}
		else{
			boolEndYear = true;
		}

		// GET VALUE OF SKILLS FIELD
		$scope.noOfSkills = $('.tknz-token').length;
		var boolSkills = false;
		if($scope.noOfSkills == 0 && $scope.isProject != 1 )
		{
			sweetAlert("Error!", "Enter Skills", "error");
		}
		else{
			boolSkills = true;
		}

		// CHECK IF ALL FIELDS ARE FILLED
		if( $scope.isProject == 1 && ( boolProject == false || boolRole==false || boolStartMonth == false || boolStartYear == false || boolEndMonth == false || boolEndYear == false))
		{
			sweetAlert("Error!", "All fields are mandatory. ", "error");
			
		}
		else if($rootScope.editExtra == 1 && ( boolProject == false || boolRole==false || boolStartMonth == false || boolStartYear == false || boolEndMonth == false || boolEndYear == false)){
			sweetAlert("Error!", "All fields are mandatory. ", "error");
			
		}
		else if($rootScope.editSkill == 1)
		{
			$scope.skillsApi();
			
		}
		else
		{
			
			if($scope.isProject == 0)
			{
				endYear = "";
				endMonth = "";
				$scope.startYear = "";
				startMonth = "";
			}
		// CREATE JSON OF ALL FIELDS 
			var json = {
				"candidate":JSON.parse($rootScope.candidateDetails),
				"project":project,
  				"role":role,
  				"startMonth":startMonth,
  				"startYear":$scope.startYear,
  				"endMonth":endMonth,
  				"endYear":endYear
   			};
			$rootScope.extrasDetails = JSON.stringify(json);
		// AJAX REQUEST TO SEND DATA TO SERVER
			jQuery.ajax({
			    type: "POST",
			    url: CVMAKER_API + "/populate/extras/",
			    data: $rootScope.extrasDetails,
			    contentType: "application/json",
			    complete: function(data)
			    {
		// ACTION ON SUCCESS
			        if(data.readyState == 4 && data.status == 200)
			        {
			            // $scope.response = JSON.parse(data.responseText);

			            
			            if(add == 1 || $rootScope.editExtra == 1){
			            	$("#project").val("");		$("#project").removeClass("valid");
			            	$("#role").val("");			$("#role").removeClass("valid");
			            	$("#startMonth").val("");	$("#startMonth").removeClass("valid");
			            	$("#startYear").val("");	$("#startYear").removeClass("valid");
			            	$("#endMonth").val("");		$("#endMonth").removeClass("valid");
			            	$("#endYear").val("");		$("#endYear").removeClass("valid");
			            	$('#skills').val("");
			            	$("label").removeClass("active");

			            	$location.path('/confirm-details');
							$scope.$apply();
			            	
			            }
			            else{
			            	
			            	if( boolSkills == false )
			            	{
			            		sweetAlert("Error!", "Skills fields is mandatory. ", "error");
			            	}
			            	else{
			            		$scope.skillsApi();
			            	}
			            	
			            }
			            
			        }
			        else
			        {
		// ACTION ON FAILURE
			        	sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
			        }
			    }
			});
		}

	}

	$scope.skillsApi = function(){

		// LOOP AROUND ALL SKILLS TOKEN
		$('.tknz-token-label').each(function(i, obj) {
			var skills = $(obj).html();
			console.log(skills);
		// SEND 1 SKILL TOKEN AT A TIME
		// CREATE JSON OF ALL FIELDS 
			var jsonSkills = {
				"candidate":JSON.parse($rootScope.candidateDetails),
				"skill":skills
   			};
   			console.log(jsonSkills)
			$rootScope.skillsDetails = JSON.stringify(jsonSkills);
		// AJAX REQUEST TO SEND DATA TO SERVER
			jQuery.ajax({
			    type: "POST",
			    url: CVMAKER_API + "/populate/skills/",
			    data: $rootScope.skillsDetails,
			    contentType: "application/json",
			    complete: function(data)
			    {
		// ACTION ON SUCCESS
			        if(data.readyState == 4 && data.status == 200)
			        {

			        	if($rootScope.editSkill == 1)
		            	{
		            		$location.path('/confirm-details');
							$scope.$apply();
		            	}
		            	else 
		            	{
			            $location.path('/accolades');
						            $scope.$apply();
						        }
						        
			         	
			        }
			        else
			        {
		// ACTION ON FAILURE
			        	sweetAlert("error", "Oops. Something went wrong. Please try again later.", "error");
			        }
			    }
			});
		});
		
	}
});
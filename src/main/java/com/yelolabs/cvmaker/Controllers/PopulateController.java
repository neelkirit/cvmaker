package com.yelolabs.cvmaker.Controllers;

import com.yelolabs.cvmaker.Entity.*;
import com.yelolabs.cvmaker.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by neelkirit on 29/10/16.
 */

@RestController
@RequestMapping(value = "/populate")
public class PopulateController {


    @Autowired
    CandidateService candidateService;

    @Autowired
    ExtrasService extrasService;

    @Autowired
    GradesService gradesService;

    @Autowired
    JobService jobService;

    @Autowired
    PreUniversityService preUniversityService;

    @Autowired
    SecondarySchoolService secondarySchoolService;

    @Autowired
    SkillsService skillsService;

    @Autowired
    UniversityService universityService;

    @Autowired
    AccoladesService accoladesService;

//    Check if Candidate Exists
    @RequestMapping(value = "/checkEmail", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody boolean checkEmail(@RequestBody Candidate candidate){
        return candidateService.checkEmail(candidate.getEmail());
    }

//    Insert candidate details
    @RequestMapping(value = "/candidateDetails", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody void saveCandidate(@RequestBody Candidate candidate){

        System.out.print(candidate.getEmail()+" "+candidate.getLastName());
            candidateService.save(candidate);

    }

//    Insert candidate school details
    @RequestMapping(value = "/schoolDetails", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody void saveSchool(@RequestBody SecondarySchool secondarySchool){

            secondarySchoolService.save(secondarySchool);

    }

//    Insert PreUniversity Details
    @RequestMapping(value = "/preUniversityDetails", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody void savePreUniversity(@RequestBody PreUniversity preUniversity){

        preUniversityService.save(preUniversity);

    }

//    Insert University Details
    @RequestMapping(value = "/universityDetails", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody void saveUniversity(@RequestBody University university){

        universityService.save(university);

    }

//    Insert Grades
    @RequestMapping(value = "/grades", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody void saveGrades(@RequestBody Grades grades){

        gradesService.save(grades);

    }

//    Insert Skills
    @RequestMapping(value = "/skills", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody void saveSkills(@RequestBody Skills skills){

        skillsService.save(skills);

    }

//    Insert Extras
    @RequestMapping(value = "/extras", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody void saveExtras(@RequestBody Extras extras){

        extrasService.save(extras);

    }

    //    Insert Accolades
    @RequestMapping(value = "/accolades", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody void saveAccolades(@RequestBody Accolades accolades){

        accoladesService.save(accolades);

    }

//    Insert Jobs
    @RequestMapping(value = "/job", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody void saveJob(@RequestBody Job job){

        jobService.save(job);

    }


}

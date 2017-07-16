package com.yelolabs.cvmaker.Controllers;

import com.yelolabs.cvmaker.Entity.*;
import com.yelolabs.cvmaker.Services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by neelkirit on 06/11/16.
 */

@RestController
@RequestMapping(value = "/fetch")
public class FetchCandidateDetailsController {

    @Autowired
    CandidateService candidateService;

    @Autowired
    SecondarySchoolService secondarySchoolService;

    @Autowired
    PreUniversityService preUniversityService;

    @Autowired
    UniversityService universityService;

    @Autowired
    ExtrasService extrasService;

    @Autowired
    SkillsService skillsService;

    @Autowired
    JobService jobService;

    @Autowired
    AccoladesService accoladesService;

    //    Fetch candidate details
    @RequestMapping(value = "/candidateDetails", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody
    Candidate fectchCandidate(@RequestBody Candidate candidateObject){

        Candidate candidate =  candidateService.findByEmail(candidateObject.getEmail());
        return candidate;

    }

    //    Fetch School details
    @RequestMapping(value = "/schoolDetails", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody
    SecondarySchool fetchSecondarySchool(@RequestBody Candidate candidate){

        SecondarySchool secondarySchool =  secondarySchoolService.findByCandidate(candidate.getId());
        return secondarySchool;

    }

    //    Fetch Pre University details
    @RequestMapping(value = "/preUniversityDetails", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody
    PreUniversity fetchPreUniversity(@RequestBody Candidate candidate){

        PreUniversity preUniversity =  preUniversityService.findByCandidate(candidate.getId());
        return preUniversity;

    }


    //    Fetch University details
    @RequestMapping(value = "/universityDetails", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody
    List<University> fetchUniversity(@RequestBody Candidate candidate){
        return universityService.findByCandidate(candidate.getId());
    }

    //    Fetch Skills details
    @RequestMapping(value = "/skills", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody
    List<Skills> fetchSkills(@RequestBody Candidate candidate){
        return skillsService.findByCandidate(candidate.getId());
    }

    //    Fetch Extras details
    @RequestMapping(value = "/extrasDetails", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody
    List<Extras> fetchExtras(@RequestBody Candidate candidate){
        return extrasService.findByCandidate(candidate.getId());
    }

    //    Fetch Accolades details
    @RequestMapping(value = "/accoladesDetails", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody
    List<Accolades> fetchAccolades(@RequestBody Candidate candidate){
        return accoladesService.findByCandidate(candidate.getId());
    }

    //    Fetch Job details
    @RequestMapping(value = "/job", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody
    List<Job> fetchJob(@RequestBody Candidate candidate){
        return jobService.findByCandidate(candidate.getId());
    }




}

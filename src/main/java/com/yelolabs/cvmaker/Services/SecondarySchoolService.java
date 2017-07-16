package com.yelolabs.cvmaker.Services;

import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Entity.SecondarySchool;
import com.yelolabs.cvmaker.Repositories.SecondarySchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by neelkirit on 29/10/16.
 */

@Service
public class SecondarySchoolService {

    @Autowired
    SecondarySchoolRepository secondarySchoolRepository;

    @Autowired
    CandidateService candidateService;

    public void save(SecondarySchool secondarySchool) {
            Candidate candidate = candidateService.findByEmail(secondarySchool.getCandidate().getEmail());
//            System.out.println("Passed ID "+secondarySchool.getCandidate().getEmail()+ " "+candidate.getEmail());
            secondarySchool.setCandidate(candidate);
            secondarySchoolRepository.save(secondarySchool);
    }

    public SecondarySchool findByCandidate(Integer id) {
        System.out.println("Candidate ID "+id);
        SecondarySchool secondarySchool = secondarySchoolRepository.findByCandidate(id);
        if( secondarySchool == null)
        {

            return secondarySchool;
        }
        else
            return secondarySchool;
    }
}

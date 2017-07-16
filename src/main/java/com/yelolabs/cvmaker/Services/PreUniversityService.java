package com.yelolabs.cvmaker.Services;

import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Entity.PreUniversity;
import com.yelolabs.cvmaker.Repositories.PreUniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by neelkirit on 29/10/16.
 */

@Service
public class PreUniversityService {

    @Autowired
    PreUniversityRepository preUniversityRepository;

    @Autowired
    CandidateService candidateService;

    public void save(PreUniversity preUniversity) {
        Candidate candidate = candidateService.findByEmail(preUniversity.getCandidate().getEmail());
        preUniversity.setCandidate(candidate);
        preUniversityRepository.save(preUniversity);
    }

    public PreUniversity findByCandidate(Integer id) {
        PreUniversity preUniversity = preUniversityRepository.findByCandidate(id);
//        if( preUniversity == null){
//            preUniversity.setCollegeName("0");
//            preUniversity.setBoard("0");
//            preUniversity.setCgpa("0");
//            preUniversity.setYear("0");
//            return preUniversity;
//        }
//        else
            return preUniversity;
    }
}

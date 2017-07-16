package com.yelolabs.cvmaker.Services;

import com.yelolabs.cvmaker.Entity.Accolades;
import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Repositories.AccoladesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by neelkirit on 25/11/16.
 */

@Service
public class AccoladesService {

    @Autowired
    AccoladesRepository accoladesRepository;

    @Autowired
    CandidateService candidateService;


    public void save(Accolades accolades) {
        Candidate candidate = candidateService.findByEmail(accolades.getCandidate().getEmail());
        accolades.setCandidate(candidate);
        accoladesRepository.save(accolades);
    }

    public List<Accolades> findByCandidate(Integer id){
        return accoladesRepository.findByCandidate(id);
    }
}

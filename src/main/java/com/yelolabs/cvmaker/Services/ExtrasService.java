package com.yelolabs.cvmaker.Services;

import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Entity.Extras;
import com.yelolabs.cvmaker.Repositories.ExtrasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by neelkirit on 29/10/16.
 */

@Service
public class ExtrasService {

    @Autowired
    ExtrasRepository extrasRepository;

    @Autowired
    CandidateService candidateService;

    public void save(Extras extras) {
        Candidate candidate = candidateService.findByEmail(extras.getCandidate().getEmail());
        extras.setCandidate(candidate);
        extrasRepository.save(extras);
    }

     public List<Extras> findByCandidate(Integer id) {
       return extrasRepository.findByCandidate(id);
    }
}

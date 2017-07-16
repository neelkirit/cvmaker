package com.yelolabs.cvmaker.Services;

import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by neelkirit on 29/10/16.
 */
@Service
public class CandidateService {

    @Autowired
    CandidateRepository candidateRepository;



    public void save(Candidate candidate) {

        candidateRepository.save(candidate);
    }

    public Candidate findById(Integer candidateId){
        return candidateRepository.findById(candidateId);
    }

    public Candidate findByEmail(String email){
        return candidateRepository.findByEmail(email);
    }

    public boolean checkEmail(String email) throws NullPointerException{
        Candidate candidate = candidateRepository.findByEmail(email);

        if(candidate == null ) {

            return false;
        }
        else {

            return true;
        }
    }
}

package com.yelolabs.cvmaker.Services;

import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Entity.University;
import com.yelolabs.cvmaker.Repositories.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.print.attribute.IntegerSyntax;
import java.util.List;

/**
 * Created by neelkirit on 29/10/16.
 */

@Service
public class UniversityService {

    @Autowired
    UniversityRepository universityRepository;

    @Autowired
    CandidateService candidateService;

    public void save(University university) {
        Candidate candidate = candidateService.findByEmail(university.getCandidate().getEmail());
        university.setCandidate(candidate);
        universityRepository.save(university);
    }

    public List<University> findByCandidate(Integer id) {
        return universityRepository.findByCandidate(id);
    }

}

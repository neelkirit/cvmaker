package com.yelolabs.cvmaker.Services;

import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Entity.Grades;
import com.yelolabs.cvmaker.Entity.PreUniversity;
import com.yelolabs.cvmaker.Repositories.GradesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by neelkirit on 29/10/16.
 */

@Service
public class GradesService {

    @Autowired
    GradesRepository gradesRepository;

    @Autowired
    CandidateService candidateService;

    public void save(Grades grades) {
        Candidate candidate = candidateService.findByEmail(grades.getCandidate().getEmail());
        grades.setCandidate(candidate);
        gradesRepository.save(grades);
    }
}

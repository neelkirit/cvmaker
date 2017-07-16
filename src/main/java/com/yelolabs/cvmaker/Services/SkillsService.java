package com.yelolabs.cvmaker.Services;

import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Entity.Extras;
import com.yelolabs.cvmaker.Entity.Skills;
import com.yelolabs.cvmaker.Repositories.CandidateRepository;
import com.yelolabs.cvmaker.Repositories.SkillsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by neelkirit on 29/10/16.
 */

@Service
public class SkillsService {

    @Autowired
    SkillsRepository skillsRepository;

    @Autowired
    CandidateService candidateService;

    public void save(Skills skills) {
        Candidate candidate = candidateService.findByEmail(skills.getCandidate().getEmail());
        skills.setCandidate(candidate);
        System.out.print(skills.getSkill());
        skillsRepository.save(skills);
    }

    public List<Skills> findByCandidate(Integer id) {
            return skillsRepository.findByCandidate(id);
    }
}

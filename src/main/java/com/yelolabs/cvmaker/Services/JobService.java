package com.yelolabs.cvmaker.Services;

import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Entity.Job;
import com.yelolabs.cvmaker.Repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by neelkirit on 29/10/16.
 */

@Service
public class JobService {

    @Autowired
    JobRepository jobRepository;

    @Autowired
    CandidateService candidateService;

    public void save(Job job) {
        Candidate candidate = candidateService.findByEmail(job.getCandidate().getEmail());
        job.setCandidate(candidate);
        jobRepository.save(job);
    }

    public List<Job> findByCandidate(Integer id) {
            return jobRepository.findByCandidate(id);
    }
}

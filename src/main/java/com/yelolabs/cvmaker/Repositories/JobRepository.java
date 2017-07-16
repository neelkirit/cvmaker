package com.yelolabs.cvmaker.Repositories;

import com.yelolabs.cvmaker.Entity.Job;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by neelkirit on 30/10/16.
 */
public interface JobRepository extends CrudRepository <Job,String > {

    @Transactional
    @Query(value = "SELECT j FROM Job j WHERE j.candidate.id = :candidate")
    public List<Job> findByCandidate(@Param("candidate") Integer id);
}

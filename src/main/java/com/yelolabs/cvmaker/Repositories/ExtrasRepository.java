package com.yelolabs.cvmaker.Repositories;

import com.yelolabs.cvmaker.Entity.Extras;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by neelkirit on 30/10/16.
 */
public interface ExtrasRepository extends CrudRepository <Extras, String> {

    @Transactional
    @Query(value = "SELECT e FROM Extras e WHERE e.candidate.id = :candidate")
    public List<Extras> findByCandidate(@Param("candidate") Integer candidate);
}

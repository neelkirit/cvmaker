package com.yelolabs.cvmaker.Controllers;

import com.yelolabs.cvmaker.Entity.Candidate;
import com.yelolabs.cvmaker.Services.GenerateCvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

/**
 * Created by neelkirit on 30/10/16.
 */

@RestController
@RequestMapping(value = "/generate")
public class GenerateCvController {

    @Autowired
    GenerateCvService generateCvService;

    //    Generate CV
    @RequestMapping(value = "/pdf", method = RequestMethod.POST, consumes = "application/json")
    private @ResponseBody String generatePdf(@RequestBody Candidate candidate) throws IOException{
        return generateCvService.populatePdf(candidate.getId());
    }

}

package com.yelolabs.cvmaker.Services;


import com.yelolabs.cvmaker.Controllers.DownloadController;
import com.yelolabs.cvmaker.Entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.io.*;
import java.util.*;

/**
 * Created by neelkirit on 30/10/16.
 */

@Service
public class GenerateCvService {

    @Autowired
    CandidateService candidateService;

    @Autowired
    SecondarySchoolService secondarySchoolService;

    @Autowired
    SkillsService skillsService;

    @Autowired
    UniversityService universityService;

    @Autowired
    PreUniversityService preUniversityService;

    @Autowired
    JobService jobService;

    @Autowired
    ExtrasService extrasService;

    @Autowired
    AccoladesService accoladesService;

    @Autowired
    DownloadController downloadController;



    public String populatePdf(int  id) throws IOException{

        Candidate candidate = candidateService.findById(id);
        String author = candidate.getFirstName()+"_"+candidate.getLastName();
        String summary = candidate.getSummary();
        SecondarySchool secondarySchool = secondarySchoolService.findByCandidate(id);
        PreUniversity preUniversity = preUniversityService.findByCandidate(id);
        List<University> universityList = universityService.findByCandidate(id);
        List<Skills> skillsList = skillsService.findByCandidate(id);
        List<Extras> extrasList = extrasService.findByCandidate(id);
        List<Accolades> accoladesList = accoladesService.findByCandidate(id);
        List<Job> jobList = jobService.findByCandidate(id);

        String universityDetails = "";
        for(University university: universityList){
            universityDetails = universityDetails+"\t\t\t<br>\n" +
                    "\t\t\t<span style='font-weight: 700 !important ;color:#7E97AD !important'>"+university.getCollegeName()+" ["+university.getUniversity()+"]</span> <br>\n" +
                    "\t\t\t\t<span style='width: 25%;display: inline-block; text-align: left;'>CGPA - "+university.getCgpa()+"</span> <span style='font-weight: 700 !important;color:#7E97AD !important'>|</span> <span style='display: inline-block; text-align: left;'>"+university.getYear()+"</span><br>\n" +
                    "\t\t\t\t\n" +
                    "\t\t\t<br>\n" ;
        }

        String skillDetails = "";
        for(Skills skills: skillsList){
            skillDetails = skillDetails + "\t\t\t<span style='width: 16%;display: inline-block; text-align: center;'>"+skills.getSkill()+"</span>\n" +
                    "\t\t\t\t<span style='font-weight: 700 !important ;color:#7E97AD !important'>|</span> \n" ;
        }

        String extrasDetail = "";

        for(Extras extras: extrasList){

            extrasDetail = extrasDetail +"\t\t\t<span style='font-weight: 700 !important ;color:#7E97AD !important'>"+extras.getProject()+"</span> <br>\n" +
                    "\t\t\t\t<span style=''>"+extras.getRole()+"</span> <br>\n" +
                    "\t\t\t\t<span style=''>"+extras.getStartMonth()+" "+extras.getStartYear()+" - "+extras.getEndYear()+" "+extras.getEndYear()+" </span>\n" +
                    "\t\t\t<br>\n" ;
        }

        boolean isAccolades =  false;
        String accoladesDetail = "";
        for(Accolades accolades: accoladesList){
            accoladesDetail = accoladesDetail + "\t\t\t<span style='font-weight: 700 !important ;color:#7E97AD !important'>"+accolades.getAccolade()+"</span> <br>\n" +
                    "\t\t\t\t<span style=''>"+accolades.getPosition()+"</span>\n" +
                    "\t\t\t<br>\n";
            if( !accolades.getAccolade().equals("")){
                isAccolades = true;
                System.out.print("tRUE HERE ="+accolades.getAccolade());
            }
        }
        String accoladesBlock = "";
        if(isAccolades)
        {
            accoladesBlock = "\t<hr>\n" +
                    "\n" +"\t<div id='accolades-section' style=\"margin-top: 10px;margin-bottom: 10px;height:auto\">\n" +
                    "\t\t<div id='accolades-title' style='width:20%;color:#7E97AD;font-weight: 700;text-transform: uppercase;text-align: right;float: left;'>Accolades</div>\n" +
                    "\t\t<div id='accolades-desc' style='width:70%;color:#000;font-weight: 400;text-transform: capitalize;text-align: left;float: left;padding-left: 10px'> \n" +accoladesDetail+
                    "\t\t</div>\n" +
                    "\t</div>\n"+"\t<div style='clear:both'></div>\n" +
                    "\n" +
                    "\t<hr>\n";
        }

        boolean isJob =  false;
        String jobDetail = "";
        for(Job job: jobList){
            jobDetail = jobDetail + "\t\t\t<span style='font-weight: 700 !important ;color:#7E97AD !important'>"+job.getCompany()+"</span> <br>\n" +
                    "\t\t\t\t<span style='width: 25%;display: inline-block; text-align: left;'>"+job.getDesignation()+"</span> <span style='font-weight: 700 !important;color:#7E97AD !important'>|</span> <span style='display: inline-block; text-align: left;'>"+job.getStartMonth()+" "+job.getStartYear()+" - "+job.getEndMonth()+" "+job.getEndYear()+" </span><br>\n" +
                    "\t\t\t\t\n" +
                    "\t\t\t<br>\n";
            if( !job.getCompany().equals("")){
                isJob = true;
            }
        }
        String jobBlock = "";
        if(isJob)
        {
            jobBlock = "\t<hr>\n" +
                    "\n" +"\t<div id='job-section' style=\"margin-top: 10px;margin-bottom: 10px;height:auto\">\n" +
                    "\t\t<div id='job-title' style='width:20%;color:#7E97AD;font-weight: 700;text-transform: uppercase;text-align: right;float: left;'>Experience</div>\n" +
                    "\t\t<div id='job-desc' style='width:70%;color:#000;font-weight: 400;text-transform: capitalize;text-align: left;float: left;padding-left: 10px'> \n" +jobDetail+
                    "\t\t</div>\n" +
                    "\t</div>\n"+"\n"+ "\t<div style='clear:both'></div>\n" +
                "\n" +
                "\t<hr>\n" ;
        }

        String filePath = "/usr/local/bin/resumes/"+author+"_Resume.pdf";


            String html =

           " <html>\n" +
                    "<body style='*{margin:0px;padding:0px:border:0px}'>\n" +
                    "\t<div id='top-left' style='float: left;width: 75%;height:10px'></div>\n" +
                    "\t<div id='top-right' style='float: left;width: 25%;height:auto;text-align:right;margin-bottom:10px'>\n" +
                    "\t\t\n" +
                    candidate.getEmail() +"<br>"+
                    candidate.getMobileNumber()+"\t\t<br>\n" +
                    candidate.getAddress()+"\t\t<br>\n" +
                    "\t\tBangalore\n" +
                    "\n" +
                    "\t</div>\n" +
                    "\t\n" +
                    "\t<div id='top-bar' style='clear:both;width: 98%;height:auto;text-align:left;background-color:#7E97AD;color:#fff;text-transform: uppercase;padding:10px;margin:auto!important;'><strong>"+candidate.getFirstName()+" "+candidate.getLastName()+"</strong></div>\n" +
                    "\t<div>\n" +
                    "\n" +
                    "\t<div id='summary-section' style=\"margin-top: 10px;margin-bottom: 10px;height:auto\">\n" +
                    "\t\t<div id='summary-title' style='width:20%;color:#7E97AD;font-weight: 700;text-transform: uppercase;text-align: right;float: left;'>Summary</div>\n" +
                    "\t\t<div id='summary-desc' style='width:70%;color:#000;font-weight: 400;text-transform: capitalize;text-align: left;float: left;padding-left: 10px'>"+summary+"</div>\n" +
                    "\t</div>\n" +
                    "\n" +
                    "\t<div style='clear:both'></div>\n" +
                    "\n" +
                    "\t<hr>\n" +
                    "\n" +
                    "\t<div id='skill-section' style=\"margin-top: 10px;margin-bottom: 10px;height:auto\">\n" +
                    "\t\t<div id='skill-title' style='width:20%;color:#7E97AD;font-weight: 700;text-transform: uppercase;text-align: right;float: left;'>Skills</div>\n" +
                    "\t\t<div id='skill-desc' style='width:70%;color:#000;font-weight: 400;text-transform: capitalize;text-align: left;float: left;padding-left: 10px'> \n" +skillDetails +
                    "\t\t</div>\n" +
                    "\t</div>\n" +
                    "\n" +
                    "\t<div style='clear:both'></div>\n" +
                    "\n" +

                    accoladesBlock +

                    "\n" +
                    "\t<div id='projects-section' style=\"margin-top: 10px;margin-bottom: 10px;height:auto\">\n" +
                    "\t\t<div id='projects-title' style='width:20%;color:#7E97AD;font-weight: 700;text-transform: uppercase;text-align: right;float: left;'>Projects</div>\n" +
                    "\t\t<div id='accolades-desc' style='width:70%;color:#000;font-weight: 400;text-transform: capitalize;text-align: left;float: left;padding-left: 10px'> \n" +extrasDetail+
                    "\t\t</div>\n" +
                    "\n" +
                    "\t</div>\n" +
                    "\n" +
                    "\t<div style='clear:both'></div>\n" +
                    "\n" +
                    "\t<hr>\n" +
                    "\n" +
                    "\t<div id='education-section' style=\"margin-top: 10px;margin-bottom: 10px;height:auto\">\n" +
                    "\t\t<div id='education-title' style='width:20%;color:#7E97AD;font-weight: 700;text-transform: uppercase;text-align: right;float: left;'>Education</div>\n" +
                    "\t\t<div id='education-desc' style='width:70%;color:#000;font-weight: 400;text-transform: capitalize;text-align: left;float: left;padding-left: 10px'> \n" +
                    "\t\t\t<span style='font-weight: 700 !important ;color:#7E97AD !important'>"+secondarySchool.getSchoolName()+" ["+secondarySchool.getBoard()+"]</span> <br>\n" +
                    "\t\t\t\t<span style='width: 25%;display: inline-block; text-align: left;'>CGPA - "+secondarySchool.getCgpa()+"</span> <span style='font-weight: 700 !important;color:#7E97AD !important'>|</span> <span style='display: inline-block; text-align: left;'>"+secondarySchool.getYear()+"</span><br>\n" +
                    "\t\t\t\t\n" +
                    "\t\t\t<br>\n" +
                    "\t\t\t<span style='font-weight: 700 !important ;color:#7E97AD !important'>"+preUniversity.getCollegeName()+" ["+preUniversity.getBoard()+"]</span> <br>\n" +
                    "\t\t\t\t<span style='width: 25%;display: inline-block; text-align: left;'>CGPA - "+preUniversity.getCgpa()+"</span> <span style='font-weight: 700 !important;color:#7E97AD !important'>|</span> <span style='display: inline-block; text-align: left;'>"+preUniversity.getYear()+"</span><br>\n" +
                    "\t\t\t\t\n" +
                   universityDetails+
                    "\t\t</div>\n" +
                    "\t</div>\n" +
                    "\n" +
                    "\t<div style='clear:both'></div>\n" +
                    "\n" +

                   jobBlock +

                    "\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "\n" +
                    "</body>\n" +
                    "</html>    ";


            try{
                PrintWriter writer = new PrintWriter("/var/www/html/cvm/"+author+"_Resume.html", "UTF-8");
                writer.println(html);

                writer.close();
            } catch (IOException e) {

            }


        downloadController.setFilePath(filePath);
        return author;
    }

}

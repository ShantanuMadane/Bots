/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/** This is a sample code for your bot**/

var companyPhno = "022 4200 6799";
var companyAddr = "101 Silver Metropolis, 1st Floor, Western Express Highway, Goregaon, Mumbai, Maharashtra 400063";
var email = "coaching@mycoachingclass.com";
var selectoptions = {
    "type": "catalogue",
    "msgid": "cat_5001",
    "items": [{
            "title": "Syllabus",
            "subtitle": "Syllabus Details",
            "imgurl": "http://cdn1.askiitians.com/Images/201558-16346883-2623-2015429-185540500-8251-syllabus.jpg",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        }, {
            "title": "Timetable",
            "subtitle": "Timetable Details",
            "imgurl": "http://image.shutterstock.com/z/stock-vector-timetable-red-background-105259574.jpg",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        },
        {
            "title": "Attendance",
            "subtitle": "Attendance Details",
            "imgurl": "http://www.smcoe.org/assets/img/parents-and-students/attendance_hands.jpg",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        },
        {
            "title": "Exam schedule",
            "subtitle": "Exam schedule Details",
            "imgurl": "http://familiesforfreedom.org/sites/default/files/images/mastercalendarphoto.jpg",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        }, {
            "title": "Marks",
            "subtitle": "Marks Details",
            "imgurl": "http://www.kinindia.net/wp-content/uploads/2015/10/internal-marks.jpg",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        }, {
            "title": "Query",
            "subtitle": "File a Query",
            "imgurl": "http://bhagulind.com/bhagul%20prod/CEC_connect-query.png",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        }]
};
var selectcourse = {
    "type": "catalogue",
    "msgid": "cat_201",
    "items": [{
            "title": "Science",
            "subtitle": "Course Details",
            "imgurl": "https://www.theidm.com/TheIDM/files/25/258e4451-1168-47ff-968b-fd1a5bdaa4ab.png",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        }, {
            "title": "Commerce",
            "subtitle": "Course Details",
            "imgurl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-V2CNWmDIyvsKPY1zEtsRJrAwqTNztSKXYWo5Mr9g4ErALXOm5w",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        }, {
            "title": "Arts",
            "subtitle": "Course Details",
            "imgurl": "http://16815-presscdn-0-13.pagely.netdna-cdn.com/wp-content/uploads/2015/10/iStock_computer-art.151110.jpg",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        }, {
            "title": "Engineering",
            "subtitle": "Course Details",
            "imgurl": "http://www.uni-regensburg.de/international/austausch-programmstudierende/medien/image_studieren_ar__1_.jpeg",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        }, {
            "title": "Chartered Accountancy",
            "subtitle": "Course Details",
            "imgurl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-V2CNWmDIyvsKPY1zEtsRJrAwqTNztSKXYWo5Mr9g4ErALXOm5w",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        },
        {
            "title": "Check Application Status",
            "subtitle": "Application Status",
            "imgurl": "http://www.mcimindia.org.in/images/checkapplicationstatus.png",
            "options": [{
                    "type": "text",
                    "title": "View Details",
                }]
        }
    ]
};

function MessageHandler(context, event) {
    var botname = event.botname;
    var contextobj = JSON.stringify(event.contextobj);

    var msg = event.message.toLowerCase();
    if (event.messageobj.refmsgid == "cat_201") {
      context.simpledb.roomleveldata["state"] = "select course";
        context.simpledb.saveData();
    }
    if (event.messageobj.refmsgid == "q1_apply") {
      context.simpledb.roomleveldata["state"] = "enquiry";
        context.simpledb.saveData();
    }
    if (event.messageobj.refmsgid == "cat_1001" || event.messageobj.refmsgid == "cat_1002" || event.messageobj.refmsgid == "cat_1005" || event.messageobj.refmsgid == "cat_1003" || event.messageobj.refmsgid == "cat_1004" || event.messageobj.refmsgid == "cat_1005") {
      context.simpledb.roomleveldata["state"] = "selected course details";
        context.simpledb.saveData();
        //context.sendResponse("STATe:"+context.simpledb.roomleveldata.state);
    }

    if (event.messageobj.refmsgid == "cat_5001") {
      context.simpledb.roomleveldata["state"] = "select options";
        context.simpledb.saveData();
    }
    if (msg == "hi" || msg == "cancel" || msg == "help" || msg == "clear") {
        var question = {
            "type": "survey",
            "question": "Are you a..",
            "msgid": "survey101",
            "options": [
                "Prospective Student",
                "Existing student"
            ]
        };

        MyMessageHandler(botname, contextobj, "Hi there! Welcome to My Coaching Classes", context, function (data) {
            if (data) {
              context.simpledb.roomleveldata["state"] = "start_msg";
                // context.simpledb.saveData();
                context.sendResponse(JSON.stringify(question));
            }
        });
        return;
    }
    if (context.simpledb.roomleveldata.state == "start_msg") {
        if (msg == "prospective student") {
            MyMessageHandler(botname, contextobj, "Hey, I can help you  to find the information you are looking for. Please select a course", context, function (data) {
                if (data) {

                  context.simpledb.roomleveldata["state"] = "select course";
                    context.sendResponse(JSON.stringify(selectcourse));
                    return;
                }
            });

        } else if (msg == "existing student") {
          context.simpledb.roomleveldata["state"] = "register";
            context.sendResponse("To help you further, I need to register you first. Please type ID <Your Student ID no.>");
        } else {
            var question = {
                "type": "survey",
                "question": "Are you a..",
                "msgid": "survey101",
                "options": [
                    "Prospective Student",
                    "Existing student"
                ]
            };

            MyMessageHandler(botname, contextobj, "Hi there! Welcome to My Coaching Classes", context, function (data) {
                if (data) {
                  context.simpledb.roomleveldata["state"] = "start_msg";
                    // context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(question));
                }
            });
        }
    } else if (context.simpledb.roomleveldata.state == "select course") {
        switch (msg) {
            case "view details 1":
                context.simpledb.roomleveldata.courseselected = "Science";
                MyMessageHandler(botname, contextobj, "What would you like to know about Science?", context, function (data) {
                    if (data) {
                        var courseinfo = {
                            "type": "catalogue",
                            "msgid": "cat_1001",
                            "items": [{
                                    "title": "Science Overview",
                                    "subtitle": "Overview of the course",
                                    "imgurl": "http://image.slidesharecdn.com/week-01-course-overview-160128120645/95/westby-dmt-week-01-course-overview-8-638.jpg?cb=1453982921",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Science Faculty",
                                    "subtitle": "Faculty/Staff",
                                    "imgurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRN2adQxCH6_QJl2fVm2T9lrbtu2aRHRs7yPJsExSPkWj09JDab",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Science Fee Structure",
                                    "subtitle": "Course Fess",
                                    "imgurl": "http://www.ecodrive1.co.uk/wp-content/uploads/2011/11/Tuition-Costs1.jpg",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Science Eligibility",
                                    "subtitle": "Course Eligibility Criteria",
                                    "imgurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnT4cgaaq38o4oZd7ID3GB0JqFzA-PShyax0BKlZymC_0mszfzmA",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Science How to apply",
                                    "subtitle": "Course Request",
                                    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR010rawdgqj1bqjjMOtO_jrrrRTHZhBEelYgGDNZ1_y3a447g1",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }]
                        };
                      context.simpledb.roomleveldata["state"] = "selected course details";
                        //context.simpledb.saveData();
                        context.sendResponse(JSON.stringify(courseinfo));
                        return;
                    }
                });

                break;
            case "view details 2":
                context.simpledb.roomleveldata.courseselected = "Commerce";
                MyMessageHandler(botname, contextobj, "What would you like to know about Commerce?", context, function (data) {
                    if (data) {
                        var courseinfo = {
                            "type": "catalogue",
                            "msgid": "cat_1002",
                            "items": [{
                                    "title": "Commerce Overview",
                                    "subtitle": "Course Overview",
                                    "imgurl": "http://image.slidesharecdn.com/week-01-course-overview-160128120645/95/westby-dmt-week-01-course-overview-8-638.jpg?cb=1453982921",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Commerce Faculty",
                                    "subtitle": "Faculty/Staff",
                                    "imgurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRN2adQxCH6_QJl2fVm2T9lrbtu2aRHRs7yPJsExSPkWj09JDab",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Commerce Fee Structure",
                                    "subtitle": "Course Fess",
                                    "imgurl": "http://www.ecodrive1.co.uk/wp-content/uploads/2011/11/Tuition-Costs1.jpg",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Commerce Eligibility",
                                    "subtitle": "Course Eligibility Criteria",
                                    "imgurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnT4cgaaq38o4oZd7ID3GB0JqFzA-PShyax0BKlZymC_0mszfzmA",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Commerce How to apply",
                                    "subtitle": "Course Request",
                                    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR010rawdgqj1bqjjMOtO_jrrrRTHZhBEelYgGDNZ1_y3a447g1",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }]
                        };
                      context.simpledb.roomleveldata["state"] = "selected course details";
                        // context.simpledb.saveData();
                        context.sendResponse(JSON.stringify(courseinfo));
                        return;
                    }
                });
                break;
            case "view details 3":
                context.simpledb.roomleveldata.courseselected = "Arts";
                MyMessageHandler(botname, contextobj, "What would you like to know about Arts?", context, function (data) {
                    if (data) {
                        var courseinfo = {
                            "type": "catalogue",
                            "msgid": "cat_1003",
                            "items": [{
                                    "title": "Arts Overview",
                                    "subtitle": "Course Overview",
                                    "imgurl": "http://image.slidesharecdn.com/week-01-course-overview-160128120645/95/westby-dmt-week-01-course-overview-8-638.jpg?cb=1453982921",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Arts Faculty",
                                    "subtitle": "Faculty/Staff",
                                    "imgurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRN2adQxCH6_QJl2fVm2T9lrbtu2aRHRs7yPJsExSPkWj09JDab",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Arts Fee Structure",
                                    "subtitle": "Course Fess",
                                    "imgurl": "http://www.ecodrive1.co.uk/wp-content/uploads/2011/11/Tuition-Costs1.jpg",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Arts Eligibility",
                                    "subtitle": "Course Eligibility Criteria",
                                    "imgurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnT4cgaaq38o4oZd7ID3GB0JqFzA-PShyax0BKlZymC_0mszfzmA",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Arts How to apply",
                                    "subtitle": "Course Request",
                                    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR010rawdgqj1bqjjMOtO_jrrrRTHZhBEelYgGDNZ1_y3a447g1",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }]
                        };
                      context.simpledb.roomleveldata["state"] = "selected course details";
                        //context.simpledb.saveData();
                        context.sendResponse(JSON.stringify(courseinfo));
                        return;
                    }
                });

                break;
            case "view details 4":
                context.simpledb.roomleveldata.courseselected = "Engineering";
                MyMessageHandler(botname, contextobj, "What would you like to know about Engineering?", context, function (data) {
                    if (data) {
                        var courseinfo = {
                            "type": "catalogue",
                            "msgid": "cat_1004",
                            "items": [{
                                    "title": "Engineering Overview",
                                    "subtitle": "Course Overview",
                                    "imgurl": "http://image.slidesharecdn.com/week-01-course-overview-160128120645/95/westby-dmt-week-01-course-overview-8-638.jpg?cb=1453982921",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Engineering Faculty",
                                    "subtitle": "Faculty/Staff",
                                    "imgurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRN2adQxCH6_QJl2fVm2T9lrbtu2aRHRs7yPJsExSPkWj09JDab",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Engineering Fee Structure",
                                    "subtitle": "Course Fess",
                                    "imgurl": "http://www.ecodrive1.co.uk/wp-content/uploads/2011/11/Tuition-Costs1.jpg",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Engineering Eligibility",
                                    "subtitle": "Course Eligibility Criteria",
                                    "imgurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnT4cgaaq38o4oZd7ID3GB0JqFzA-PShyax0BKlZymC_0mszfzmA",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "Engineering How to apply",
                                    "subtitle": "Course Request",
                                    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR010rawdgqj1bqjjMOtO_jrrrRTHZhBEelYgGDNZ1_y3a447g1",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }]
                        };
                      context.simpledb.roomleveldata["state"] = "selected course details";
                        //context.simpledb.saveData();
                        context.sendResponse(JSON.stringify(courseinfo));
                        return;
                    }
                });
                break;
            case "view details 5":
                context.simpledb.roomleveldata.courseselected = "Chartered Accountancy";
                MyMessageHandler(botname, contextobj, "What would you like to know about Chartered Accountancy course?", context, function (data) {
                    if (data) {
                        var courseinfo = {
                            "type": "catalogue",
                            "msgid": "cat_1005",
                            "items": [{
                                    "title": "C.A Overview",
                                    "subtitle": "Course Overview",
                                    "imgurl": "http://image.slidesharecdn.com/week-01-course-overview-160128120645/95/westby-dmt-week-01-course-overview-8-638.jpg?cb=1453982921",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "C.A Faculty",
                                    "subtitle": "Faculty/Staff",
                                    "imgurl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRN2adQxCH6_QJl2fVm2T9lrbtu2aRHRs7yPJsExSPkWj09JDab",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "C.A Fees",
                                    "subtitle": "C.A Fee Structure",
                                    "imgurl": "http://www.ecodrive1.co.uk/wp-content/uploads/2011/11/Tuition-Costs1.jpg",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "C.A Eligibility",
                                    "subtitle": "Course Eligibility Criteria",
                                    "imgurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnT4cgaaq38o4oZd7ID3GB0JqFzA-PShyax0BKlZymC_0mszfzmA",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }, {
                                    "title": "C.A How to apply",
                                    "subtitle": "Course Request",
                                    "imgurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR010rawdgqj1bqjjMOtO_jrrrRTHZhBEelYgGDNZ1_y3a447g1",
                                    "options": [{
                                            "type": "text",
                                            "title": "View Details",
                                        }]
                                }]
                        };
                      context.simpledb.roomleveldata["state"] = "selected course details";
                        // context.simpledb.saveData();
                        context.sendResponse(JSON.stringify(courseinfo));
                        return;
                    }
                });
                break;
            case "view details 6":
              context.simpledb.roomleveldata["state"] = "check status application";
                context.sendResponse("Type STATUS <Your Application Number> to know the status of your application");
                break;
            default :

              context.simpledb.roomleveldata["state"] = "select course";
                // context.simpledb.saveData();
                context.sendResponse(JSON.stringify(selectcourse));
                break;
        }
    } else if (context.simpledb.roomleveldata.state == "check status application") {
        if (msg.includes("status ")) {
            var status = msg.substring(msg.indexOf("status") + 7, msg.length).trimLeft();
            var flag = 0;
            var gotoselectedcourse = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_4444",
                "options": [
                    "Go to main",
                    "Enquiry",
                ]
            };
            var status = ["Pending", "Rejected", "Confirm"];
            var rand = status[Math.floor(Math.random() * status.length)];
          context.simpledb.roomleveldata["state"] = "gotoselectedcourse";
            gotoselectedcourse["content"]["text"] = "The status for your application no is :" + rand;
            context.sendResponse(JSON.stringify(gotoselectedcourse));

        } else {
            context.sendResponse("Oops. That was an invalid response. Please type STATUS <Your Application Number>");
        }
    } else if (context.simpledb.roomleveldata.state == "gotoselectedcourse") {
        if (msg == "go to main") {
            MyMessageHandler(botname, contextobj, "Hey, I can help you  to find the information you are looking for. Please select a course", context, function (data) {
                if (data) {

                  context.simpledb.roomleveldata["state"] = "select course";
                    context.sendResponse(JSON.stringify(selectcourse));
                    return;
                }
            });
        } else if (msg == "enquiry") {
            var question = {
                "type": "survey",
                "question": "What would you like to do?",
                "msgid": "q1_apply",
                "options": [
                    "Write to us",
                    "Visit/Call us",
                ]
            };
          context.simpledb.roomleveldata["state"] = "enquiry";
            context.sendResponse(JSON.stringify(question));
            return;
        } else {
            var gotoselectedcourse = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Sorry,that was an invalid input please select"
                },
                "msgid": "qr_4444",
                "options": [
                    "Go to main",
                    "Enquiry",
                ]
            };
            context.sendResponse(JSON.stringify(gotoselectedcourse));

        }
    } else if (context.simpledb.roomleveldata.state == "selected course details") {

        var coursedata = JSON.parse(context.simpledb.botleveldata.config.coursedata);
        //context.sendResponse("savbsvavs"+coursedata[0]);

        var knowmore_overview = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": "Options"
            },
            "msgid": "qr_501",
            "options": [
                "Know about faculty",
                "Enquiry",
            ]
        };
        var knowmore_faculty = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": "Options"
            },
            "msgid": "qr_505",
            "options": [
                "Know the fees",
                "Enquiry",
            ]
        };
        var knowmore_fee = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": "Options"
            },
            "msgid": "qr_502",
            "options": [
                "Know the eligibility",
                "Enquiry",
            ]
        };
        var knowmore_eligibility = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": "Options"
            },
            "msgid": "qr_503",
            "options": [
                "How to apply",
                "Enquiry",
            ]
        };
        var knowmore_howtoapply = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": "Options"
            },
            "msgid": "qr_504",
            "options": [
                "Apply now",
                "Enquiry",
                "Go to main"

            ]
        };
        //selected course
        var courseselected = context.simpledb.roomleveldata.courseselected;
        //context.sendResponse("selected:"+courseselected);
        var loop = "";
        switch (courseselected) {
            case "Science":
                loop = 0;
                break;
            case "Commerce":
                loop = 1;
                break;
            case "Arts":
                loop = 2;
                break;
            case "Engineering":
                loop = 3;
                break;
            case "Chartered Accountancy":
                loop = 4;
                break;
        }
        switch (msg) {
            case 'view details 1':
                //MyMessageHandler(botname, contextobj, coursedata[loop].overview, context, function (data) {
                // if (data) {
                //  context.sendResponse("sasasasas");
                context.simpledb.roomleveldata.knowmore = "overview";
              context.simpledb.roomleveldata["state"] = "knowmore_overview";
                //context.simpledb.saveData();
                var text = "Course Overview";
                text += "\n";
                text += "\n";
                text += coursedata[loop].overview;
                knowmore_overview["content"]["text"] = text;
                context.sendResponse(JSON.stringify(knowmore_overview));
                // }
                // });
                break;
            case 'view details 2':
                // context.sendResponse(loop);
                var faculty = "Faculty Details";
                faculty += "\n";
                faculty += "\n";
                for (var i = 0; i < coursedata[loop].professor.length; i++) {
                    faculty += "Name:";
                    faculty += coursedata[loop].professor[i].pname;
                    faculty += "\n";
                    faculty += "Subject:";
                    faculty += coursedata[loop].professor[i].subject;
                    faculty += "\n";
                }
                MyMessageHandler(botname, contextobj, faculty, context, function (data) {
                    if (data) {
                      context.simpledb.roomleveldata["state"] = "get bio";
                        //context.simpledb.saveData();
                        context.sendResponse("type BIO <professor name> for complete bio");
                    }
                });
                // context.sendResponse(faculty);
                break;
            case 'view details 3':

                var fees = "Fee Structure";
                fees += "\n";
                fees += "\n";
                fees += "Duration:";
                fees += coursedata[loop]["fee structure"].duration;
                fees += "\n";
                fees += "Per/semester:";
                fees += coursedata[loop]["fee structure"]["per/semester"];
                fees += "\n";
                fees += "Annual:";
                fees += coursedata[loop]["fee structure"]["annual"];
                fees += "\n";
                // MyMessageHandler(botname, contextobj, fees, context, function (data) {
                //   if (data) {
              context.simpledb.roomleveldata["state"] = "knowmore_feestructure";
                //context.simpledb.saveData();
                knowmore_fee["content"]["text"] = fees;
                context.sendResponse(JSON.stringify(knowmore_fee));
                //}
                //});
                break;
            case 'view details 4':
                var eligibility = "Eligibility Criteria";
                eligibility += "\n";
                eligibility += "\n";
                eligibility += coursedata[loop]["eligibility"];
                //context.sendResponse(eligibility);
                //MyMessageHandler(botname, contextobj, eligibility, context, function (data) {
                // if (data) {
              context.simpledb.roomleveldata["state"] = "knowmore_eligibility";
                // context.simpledb.saveData();
                knowmore_eligibility["content"]["text"] = eligibility;
                context.sendResponse(JSON.stringify(knowmore_eligibility));
                //}
                //});
                break;
            case 'view details 5':
                var apply = "Course Request";
                apply += "\n";
                apply += "\n";
                apply += coursedata[loop].apply;
                // MyMessageHandler(botname, contextobj, apply, context, function (data) {
                // if (data) {
              context.simpledb.roomleveldata["state"] = "apply now";
                //context.simpledb.saveData();
                // context.sendResponse("HELLO I AM HERE");
                knowmore_howtoapply["content"]["text"] = apply;
                context.sendResponse(JSON.stringify(knowmore_howtoapply));
                //}
                // });
                //context.sendResponse(JSON.stringify(knowmore_howtoapply));
                break;
        }
    }
    //Common Quick Reply For Overview
    else if (context.simpledb.roomleveldata.state == "knowmore_overview") {
        if (msg == "know about faculty") {
            var coursedata = JSON.parse(context.simpledb.botleveldata.config.coursedata);
            var courseselected = context.simpledb.roomleveldata.courseselected;
            // context.sendResponse("HELLO:"+courseselected);
            switch (courseselected) {
                case "Science":
//                    context.sendResponse("HELLO:"+courseselected);
                    var faculty = "Faculty Details";
                    faculty += "\n";
                    faculty += "\n";
                    for (var i = 0; i < coursedata[0].professor.length; i++) {
                        faculty += "Name:";
                        faculty += coursedata[0].professor[i].pname;
                        faculty += "\n";
                        faculty += "Subject:";
                        faculty += coursedata[0].professor[i].subject;
                        faculty += "\n";
                    }
                    MyMessageHandler(botname, contextobj, faculty, context, function (data) {
                        if (data) {
                          context.simpledb.roomleveldata["state"] = "get bio";
                            //context.simpledb.saveData();
                            context.sendResponse("type BIO <professor name> for complete bio");
                        }
                    });
                    break;
                case "Commerce":
                    var faculty = "Faculty Details";
                    faculty += "\n";
                    faculty += "\n";
                    for (var i = 0; i < coursedata[1].professor.length; i++) {
                        faculty += "Name:";
                        faculty += coursedata[1].professor[i].pname;
                        faculty += "\n";
                        faculty += "Subject:";
                        faculty += coursedata[1].professor[i].subject;
                        faculty += "\n";
                    }
                    MyMessageHandler(botname, contextobj, faculty, context, function (data) {
                        if (data) {
                          context.simpledb.roomleveldata["state"] = "get bio";
                            //context.simpledb.saveData();
                            context.sendResponse("type BIO <professor name> for complete bio");
                        }
                    });
                    break;
                case "Arts":
                    var faculty = "Faculty Details";
                    faculty += "\n";
                    faculty += "\n";
                    for (var i = 0; i < coursedata[2].professor.length; i++) {
                        faculty += "Name:";
                        faculty += coursedata[2].professor[i].pname;
                        faculty += "\n";
                        faculty += "Subject:";
                        faculty += coursedata[2].professor[i].subject;
                        faculty += "\n";
                    }
                    MyMessageHandler(botname, contextobj, faculty, context, function (data) {
                        if (data) {
                            // context.sendResponse("ajnsansas");
                          context.simpledb.roomleveldata["state"] = "get bio";
                            //context.simpledb.saveData();
                            context.sendResponse("type BIO <professor name> for complete bio");
                        }
                    });
                    break;
                case "Engineering":
                    var faculty = "Faculty Details";
                    faculty += "\n";
                    faculty += "\n";
                    for (var i = 0; i < coursedata[3].professor.length; i++) {
                        faculty += "Name:";
                        faculty += coursedata[3].professor[i].pname;
                        faculty += "\n";
                        faculty += "Subject:";
                        faculty += coursedata[3].professor[i].subject;
                        faculty += "\n";
                    }
                    MyMessageHandler(botname, contextobj, faculty, context, function (data) {
                        if (data) {
                          context.simpledb.roomleveldata["state"] = "get bio";
                            // context.simpledb.saveData();
                            context.sendResponse("type BIO <professor name> for complete bio");
                        }
                    });
                    break;
                case "Chartered Accountancy":
                    var faculty = "Faculty Details";
                    faculty += "\n";
                    faculty += "\n";
                    for (var i = 0; i < coursedata[4].professor.length; i++) {
                        faculty += "Name:";
                        faculty += coursedata[4].professor[i].pname;
                        faculty += "\n";
                        faculty += "Subject:";
                        faculty += coursedata[4].professor[i].subject;
                        faculty += "\n";
                    }
                    MyMessageHandler(botname, contextobj, faculty, context, function (data) {
                        if (data) {
                          context.simpledb.roomleveldata["state"] = "get bio";
                            //context.simpledb.saveData();
                            context.sendResponse("type BIO <professor name> for complete bio");
                        }
                    });
                    break;
            }
        } else if (msg == "enquiry") {
            var question = {
                "type": "survey",
                "question": "What would you like to do?",
                "msgid": "q1_apply",
                "options": [
                    "Write to us",
                    "Visit/Call us",
                ]
            };
          context.simpledb.roomleveldata["state"] = "enquiry";
            context.sendResponse(JSON.stringify(question));
            return;
        } else {
            var knowmore_overview = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_501",
                "options": [
                    "Know about faculty",
                    "Enquiry",
                ]
            };
            //MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select", context, function (data) {
            //  if (data) {
            context.simpledb.roomleveldata.knowmore = "overview";
          context.simpledb.roomleveldata["state"] == "knowmore_overview";
            //context.simpledb.saveData();
            knowmore_overview["content"]["text"] = "Sorry,that was an invalid input please select";
            context.sendResponse(JSON.stringify(knowmore_overview));
            //}
            //});

        }
    }
    //Common Quick Reply For Course Faculty
    else if (context.simpledb.roomleveldata.state == "knowmore_faculty") {
        if (msg == "know the fees") {
            var knowmore_fee = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_502",
                "options": [
                    "Know the eligibility",
                    "Enquiry",
                ]
            };
            var coursedata = JSON.parse(context.simpledb.botleveldata.config.coursedata);
            var courseselected = context.simpledb.roomleveldata.courseselected;
            switch (courseselected) {
                case "Science":
                    var fees = "Fee Structure";
                    fees += "\n";
                    fees += "\n";
                    fees += "Duration:";
                    fees += coursedata[0]["fee structure"].duration;
                    fees += "\n";
                    fees += "Per/semester:";
                    fees += coursedata[0]["fee structure"]["per/semester"];
                    fees += "\n";
                    fees += "Annual:";
                    fees += coursedata[0]["fee structure"]["annual"];
                    fees += "\n";
                    //MyMessageHandler(botname, contextobj, fees, context, function (data) {
                    //  if (data) {
                  context.simpledb.roomleveldata["state"] = "knowmore_feestructure";
                    //context.simpledb.saveData();
                    knowmore_fee["content"]["text"] = fees;
                    context.sendResponse(JSON.stringify(knowmore_fee));
                    //}
                    //});
                    break;
                case "Commerce":
                    var fees = "Fee Structure";
                    fees += "\n";
                    fees += "\n";
                    fees += "Duration:";
                    fees += coursedata[1]["fee structure"].duration;
                    fees += "\n";
                    fees += "Per/semester:";
                    fees += coursedata[1]["fee structure"]["per/semester"];
                    fees += "\n";
                    fees += "Annual:";
                    fees += coursedata[1]["fee structure"]["annual"];
                    fees += "\n";
                    // MyMessageHandler(botname, contextobj, fees, context, function (data) {
                    // if (data) {
                  context.simpledb.roomleveldata["state"] = "knowmore_feestructure";
                    //context.simpledb.saveData();
                    knowmore_fee["content"]["text"] = fees;
                    context.sendResponse(JSON.stringify(knowmore_fee));
                    //}
                    // });
                    break;
                case "Arts":
                    var fees = "Fee Structure";
                    fees += "\n";
                    fees += "\n";
                    fees += "Duration:";
                    fees += coursedata[2]["fee structure"].duration;
                    fees += "\n";
                    fees += "Per/semester:";
                    fees += coursedata[2]["fee structure"]["per/semester"];
                    fees += "\n";
                    fees += "Annual:";
                    fees += coursedata[2]["fee structure"]["annual"];
                    fees += "\n";
                    // MyMessageHandler(botname, contextobj, fees, context, function (data) {
                    //  if (data) {
                  context.simpledb.roomleveldata["state"] = "knowmore_feestructure";
                    // context.simpledb.saveData();
                    knowmore_fee["content"]["text"] = fees;
                    context.sendResponse(JSON.stringify(knowmore_fee));
                    //}
                    //});
                    break;
                case "Engineering":
                    var fees = "Fee Structure";
                    fees += "\n";
                    fees += "\n";
                    fees += "Duration:";
                    fees += coursedata[3]["fee structure"].duration;
                    fees += "\n";
                    fees += "Per/semester:";
                    fees += coursedata[3]["fee structure"]["per/semester"];
                    fees += "\n";
                    fees += "Annual:";
                    fees += coursedata[3]["fee structure"]["annual"];
                    fees += "\n";
                    // MyMessageHandler(botname, contextobj, fees, context, function (data) {
                    //  if (data) {
                  context.simpledb.roomleveldata["state"] = "knowmore_feestructure";
                    //context.simpledb.saveData();
                    knowmore_fee["content"]["text"] = fees;
                    context.sendResponse(JSON.stringify(knowmore_fee));
                    //}
                    //});
                    break;
                case "Chartered Accountant":
                    var fees = "Fee Structure";
                    fees += "\n";
                    fees += "\n";
                    fees += coursedata[4]["fee structure"].duration;
                    fees += "\n";
                    fees += "Per/semester:";
                    fees += coursedata[4]["fee structure"]["per/semester"];
                    fees += "\n";
                    fees += "Annual:";
                    fees += coursedata[4]["fee structure"]["annual"];
                    fees += "\n";
                    //MyMessageHandler(botname, contextobj, fees, context, function (data) {
                    // if (data) {
                  context.simpledb.roomleveldata["state"] = "knowmore_feestructure";
                    //context.simpledb.saveData();
                    knowmore_fee["content"]["text"] = fees;
                    context.sendResponse(JSON.stringify(knowmore_fee));
                    //}
                    //});
                    break;
            }
        } else if (msg == "enquiry") {
            var question = {
                "type": "survey",
                "question": "What would you like to do?",
                "msgid": "q1_apply",
                "options": [
                    "Write to us",
                    "Visit/Call us",
                ]
            };
          context.simpledb.roomleveldata["state"] = "enquiry";
            context.sendResponse(JSON.stringify(question));
            return;
        } else {
            var knowmore_faculty = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_505",
                "options": [
                    "Know the fees",
                    "Enquiry",
                ]
            };
            // MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select", context, function (data) {
            //if (data) {
          context.simpledb.roomleveldata["state"] == "knowmore_faculty";
            //context.simpledb.saveData();
            knowmore_faculty["content"]["text"] = "Sorry,that was an invalid input please select";
            context.sendResponse(JSON.stringify(knowmore_faculty));
            // }
            //});

        }

    }
    //Common Quick Reply For Fee Structure
    else if (context.simpledb.roomleveldata.state == "knowmore_feestructure") {
        if (msg == "know the eligibility") {
            var knowmore_eligibility = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_503",
                "options": [
                    "How to apply",
                    "Enquiry",
                ]
            };
            var coursedata = JSON.parse(context.simpledb.botleveldata.config.coursedata);
            var courseselected = context.simpledb.roomleveldata.courseselected;
            switch (courseselected) {
                case "Science":
                    var eligibility = "Eligibility Criteria";
                    eligibility += "\n";
                    eligibility += "\n";
                    eligibility += coursedata[0].eligibility;
                    // MyMessageHandler(botname, contextobj, eligibility, context, function (data) {
                    //  if (data) {
                  context.simpledb.roomleveldata["state"] = "knowmore_eligibility";
                    // context.simpledb.saveData();
                    knowmore_eligibility["content"]["text"] = eligibility;
                    context.sendResponse(JSON.stringify(knowmore_eligibility));
                    // }
                    //});
                    break;
                case "Commerce":
                    var eligibility = "Eligibility Criteria";
                    eligibility += "\n";
                    eligibility += "\n";
                    eligibility += coursedata[1].eligibility;
                    //MyMessageHandler(botname, contextobj, eligibility, context, function (data) {
                    //  if (data) {
                  context.simpledb.roomleveldata["state"] = "knowmore_eligibility";
                    //  context.simpledb.saveData();
                    knowmore_eligibility["content"]["text"] = eligibility;
                    context.sendResponse(JSON.stringify(knowmore_eligibility));
                    //}
                    //});
                    break;
                case "Arts":
                    var eligibility = "Eligibility Criteria";
                    eligibility += "\n";
                    eligibility += "\n";
                    eligibility += coursedata[2].eligibility;
                    // MyMessageHandler(botname, contextobj, eligibility, context, function (data) {
                    // if (data) {
                  context.simpledb.roomleveldata["state"] = "knowmore_eligibility";
                    //  context.simpledb.saveData();
                    knowmore_eligibility["content"]["text"] = eligibility;
                    context.sendResponse(JSON.stringify(knowmore_eligibility));
                    // }
                    // });
                    break;
                case "Engineering":
                    var eligibility = "Eligibility Criteria";
                    eligibility += "\n";
                    eligibility += "\n";
                    eligibility += coursedata[3].eligibility;
                    //  MyMessageHandler(botname, contextobj, eligibility, context, function (data) {
                    //  if (data) {
                  context.simpledb.roomleveldata["state"] = "knowmore_eligibility";
                    //   context.simpledb.saveData();
                    knowmore_eligibility["content"]["text"] = eligibility;
                    context.sendResponse(JSON.stringify(knowmore_eligibility));
                    // }
                    //});
                    break;
                case "Chartered Accountancy":
                    var eligibility = "Eligibility Criteria";
                    eligibility += "\n";
                    eligibility += "\n";
                    eligibility += coursedata[4].eligibility;
                    // MyMessageHandler(botname, contextobj, eligibility, context, function (data) {
                    // if (data) {
                  context.simpledb.roomleveldata["state"] = "knowmore_eligibility";
                    // context.simpledb.saveData();
                    knowmore_howtoapply["content"]["text"] = eligibility;
                    context.sendResponse(JSON.stringify(knowmore_howtoapply));
                    // }
                    //});
                    break;
            }
        } else if (msg == "enquiry") {
            var question = {
                "type": "survey",
                "question": "What would you like to do?",
                "msgid": "q1_apply",
                "options": [
                    "Write to us",
                    "Visit/Call us",
                ]
            };
          context.simpledb.roomleveldata["state"] = "enquiry";
            context.sendResponse(JSON.stringify(question));
            return;
        } else {
            var knowmore_fee = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_502",
                "options": [
                    "Know the eligibility",
                    "Enquiry",
                ]
            };
            //MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select", context, function (data) {
            //if (data) {
            context.simpledb.roomleveldata.knowmore = "overview";
          context.simpledb.roomleveldata["state"] == "knowmore_overview";
            // context.simpledb.saveData();
            knowmore_fee["content"]["text"] = "Sorry,that was an invalid input please select";
            context.sendResponse(JSON.stringify(knowmore_fee));
            //}
            //});
        }

    }
    //Common Quick Reply for Eligibility 
    else if (context.simpledb.roomleveldata.state == "knowmore_eligibility") {
        if (msg == "how to apply") {
            var coursedata = JSON.parse(context.simpledb.botleveldata.config.coursedata);
            var courseselected = context.simpledb.roomleveldata.courseselected;
            var knowmore_howtoapply = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_504",
                "options": [
                    "Apply now",
                    "Enquiry",
                    "Go to main"
                ]
            };
            switch (courseselected) {
                case "Science":
                    var apply = "Course Request";
                    apply += "\n";
                    apply += "\n";
                    apply += coursedata[0].apply;
                    //MyMessageHandler(botname, contextobj, apply, context, function (data) {
                    //   if (data) {
                  context.simpledb.roomleveldata["state"] = "apply now";
                    knowmore_howtoapply["content"]["text"] = apply;
                    context.sendResponse(JSON.stringify(knowmore_howtoapply));
                    // }
                    // });

                    break;
                case "Commerce":
                    var apply = "Course Request";
                    apply += "\n";
                    apply += "\n";
                    apply += coursedata[1].apply;
                    // MyMessageHandler(botname, contextobj, apply, context, function (data) {
                    //  if (data) {
                  context.simpledb.roomleveldata["state"] = "apply now";
                    knowmore_howtoapply["content"]["text"] = apply;
                    context.sendResponse(JSON.stringify(knowmore_howtoapply));
                    // }
                    // });
                    break;
                case "Arts":
                    var apply = "Course Request";
                    apply += "\n";
                    apply += "\n";
                    apply = coursedata[2].apply;
                    // MyMessageHandler(botname, contextobj, apply, context, function (data) {
                    //  if (data) {
                  context.simpledb.roomleveldata["state"] = "apply now";
                    knowmore_howtoapply["content"]["text"] = apply;
                    context.sendResponse(JSON.stringify(knowmore_howtoapply));
                    // }
                    //});
                    break;
                case "Engineering":
                    var apply = "Course Request";
                    apply += "\n";
                    apply += "\n";
                    apply = coursedata[3].apply;
                    //MyMessageHandler(botname, contextobj, apply, context, function (data) {
                    // if (data) {
                  context.simpledb.roomleveldata["state"] = "apply now";
                    knowmore_howtoapply["content"]["text"] = apply;
                    context.sendResponse(JSON.stringify(knowmore_howtoapply));
                    // }
                    // });

                    break;
                case "Chartered Accountancy":
                    var apply = "Course Request";
                    apply += "\n";
                    apply += "\n";
                    apply += coursedata[4].apply;
                    // MyMessageHandler(botname, contextobj, apply, context, function (data) {
                    //   if (data) {
                  context.simpledb.roomleveldata["state"] = "apply now";
                    knowmore_howtoapply["content"]["text"] = apply;
                    context.sendResponse(JSON.stringify(knowmore_howtoapply));
                    // }
                    //});
                    break;
            }
            //context.sendResponse(coursedata);
            //Start How to Apply Procedure

        } else if (msg == "enquiry") {
            var question = {
                "type": "survey",
                "question": "What would you like to do?",
                "msgid": "q1_apply",
                "options": [
                    "Write to us",
                    "Visit/Call us",
                ]
            };
          context.simpledb.roomleveldata["state"] = "enquiry";
            context.sendResponse(JSON.stringify(question));
            return;
        } else {
            var knowmore_eligibility = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_503",
                "options": [
                    "How to apply",
                    "Enquiry",
                ]
            };
            //MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select", context, function (data) {
            // if (data) {
          context.simpledb.roomleveldata["state"] = "knowmore_eligibility";
            // context.simpledb.saveData();
            knowmore_eligibility["content"]["text"] = "Sorry,that was an invalid input please select";
            context.sendResponse(JSON.stringify(knowmore_eligibility));
            // }
            // });
        }
    }
    //Common Quick Reply For HowtoApply
    else if (context.simpledb.roomleveldata.state == "apply now") {
        var question = {
            "type": "survey",
            "question": "What would you like to do?",
            "msgid": "q1_apply",
            "options": [
                "Write to us",
                "Visit/Call us",
            ]
        };
        if (msg == "apply now") {
            //&& event.messageobj.refmsgid=="qr_504"
            //&& event.messageobj.refmsgid=="qr_504" 

          context.simpledb.roomleveldata["state"] = "enquiry";
            context.sendResponse(JSON.stringify(question));
            return;
        } else if (msg == "go to main") {
            var start_msg = {
                "type": "survey",
                "question": "Are you a..",
                "msgid": "survey101",
                "options": [
                    "Prospective Student",
                    "Existing student"
                ]
            };

            MyMessageHandler(botname, contextobj, "Hi there! Welcome to My Coaching Classes", context, function (data) {
                if (data) {
                  context.simpledb.roomleveldata["state"] = "start_msg";
                    // context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(start_msg));
                }
            });
        } else if (msg == "enquiry") {
            var question = {
                "type": "survey",
                "question": "What would you like to do?",
                "msgid": "q1_apply",
                "options": [
                    "Write to us",
                    "Visit/Call us",
                ]
            };
          context.simpledb.roomleveldata["state"] = "enquiry";
            context.sendResponse(JSON.stringify(question));
        } else {
            MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select", context, function (data) {
                if (data) {

                    // context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(question));
                }
            });
        }
    } else if (context.simpledb.roomleveldata.state == "get bio") {
        // context.sendResponse("absabnsabsa");
        if (msg.includes("bio ")) {
            var coursedata = JSON.parse(context.simpledb.botleveldata.config.coursedata);
            var courseselected = context.simpledb.roomleveldata.courseselected;
            var pname = msg.substring(msg.indexOf("bio") + 4, msg.length).trimLeft();
            var flag = 0;
            var knowmore_faculty = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_505",
                "options": [
                    "Know the fees",
                    "Enquiry",
                ]
            };
            switch (courseselected) {
                case "Science":
                    for (var i = 0; i < coursedata[0].professor.length; i++) {
                        var dbpname = coursedata[0].professor[i].pname;
                        if (dbpname.toLowerCase().trimLeft() == pname) {
                            flag = 1;
                            // MyMessageHandler(botname, contextobj, coursedata[0].professor[i].bio, context, function (data) {
                            //   if (data) {
                          context.simpledb.roomleveldata["state"] = "knowmore_faculty";
                            // context.simpledb.saveData();
                            knowmore_faculty["content"]["text"] = coursedata[0].professor[i].bio;
                            context.sendResponse(JSON.stringify(knowmore_faculty));
                            // }
                            // });
                        }
                    }
                    if (flag == 0) {
                        context.sendResponse("Oops I dint get that name. Please type BIO <professor name> for complete bio");
                    }
                    break;
                case "Commerce":
                    var flag = 0;
                    for (var i = 0; i < coursedata[1].professor.length; i++) {
                        var dbpname = coursedata[1].professor[i].pname;
                        if (dbpname.toLowerCase().trimLeft() == pname) {
                            flag = 1;
                            // MyMessageHandler(botname, contextobj, coursedata[1].professor[i].bio, context, function (data) {
                            //  if (data) {
                          context.simpledb.roomleveldata["state"] = "knowmore_faculty";
                            //context.simpledb.saveData();
                            knowmore_faculty["content"]["text"] = coursedata[1].professor[i].bio;
                            context.sendResponse(JSON.stringify(knowmore_faculty));
                            //}
                            //});
                        }
                    }
                    if (flag == 0) {
                        context.sendResponse("Oops I dint get that name. Please type BIO <professor name> for complete bio");
                    }
                    break;
                case "Arts":
                    var flag = 0;
                    for (var i = 0; i < coursedata[2].professor.length; i++) {
                        var dbpname = coursedata[2].professor[i].pname;
                        if (dbpname.toLowerCase().trimLeft() == pname) {
                            flag = 1;
                            // MyMessageHandler(botname, contextobj, coursedata[2].professor[i].bio, context, function (data) {
                            //   if (data) {
                          context.simpledb.roomleveldata["state"] = "knowmore_faculty";
                            // context.simpledb.saveData();
                            knowmore_faculty["content"]["text"] = coursedata[2].professor[i].bio;
                            context.sendResponse(JSON.stringify(knowmore_faculty));
                            // }
                            //});
                        }
                    }
                    if (flag == 0) {
                        context.sendResponse("Oops I dint get that name. Please type BIO <professor name> for complete bio");
                    }
                    break;
                case "Engineering":
                    var flag = 0;
                    for (var i = 0; i < coursedata[3].professor.length; i++) {
                        var dbpname = coursedata[3].professor[i].pname;
                        if (dbpname.toLowerCase().trimLeft() == pname) {
                            flag = 1;
                            // MyMessageHandler(botname, contextobj, coursedata[3].professor[i].bio, context, function (data) {
                            //  if (data) {
                          context.simpledb.roomleveldata["state"] = "knowmore_faculty";
                            //context.simpledb.saveData();
                            knowmore_faculty["content"]["text"] = coursedata[3].professor[i].bio;
                            context.sendResponse(JSON.stringify(knowmore_faculty));
                            // }
                            //});
                        }
                    }
                    if (flag == 0) {
                        context.sendResponse("Oops I dint get that name. Please type BIO <professor name> for complete bio");
                    }
                    break;
                case "Chartered Accountancy":
                    var flag = 0;
                    for (var i = 0; i < coursedata[4].professor.length; i++) {
                        var dbpname = coursedata[4].professor[i].pname;
                        if (dbpname.toLowerCase().trimLeft() == pname) {
                            flag = 1;
                            // MyMessageHandler(botname, contextobj, coursedata[4].professor[i].bio, context, function (data) {
                            // if (data) {
                          context.simpledb.roomleveldata["state"] = "knowmore_faculty";
                            //context.simpledb.saveData();
                            knowmore_faculty["content"]["text"] = coursedata[4].professor[i].bio;
                            context.sendResponse(JSON.stringify(knowmore_faculty));
                            //}
                            // });
                        }
                    }
                    if (flag == 0) {
                        context.sendResponse("Oops I dint get that name. Please type BIO <professor name> for complete bio");
                    }
                    break;
            }

        } else {
            MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select", context, function (data) {
                if (data) {
                  context.simpledb.roomleveldata["state"] = "get bio";
                    //context.simpledb.saveData();
                    context.sendResponse("type BIO <professor name> for complete bio");
                }
            });

        }
    } else if (context.simpledb.roomleveldata.state == "enquiry") {
        if (msg == "write to us") {
          context.simpledb.roomleveldata["state"] = "email";
            //context.simpledb.saveData();
            context.sendResponse("Please share your email ID");
        } else if (msg == "visit/call us") {
            var knowmore_howtoapply = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_504",
                "options": [
                    "Go to main"
                ]
            };
            //MyMessageHandler(botname, contextobj, "Thank you. We have noted your query. We shall revert to you shortly.", context, function (data) {
            // if (data) {
            knowmore_howtoapply["content"]["text"] = "You can call us on :" + companyPhno + " or visit us at :" + companyAddr;
          context.simpledb.roomleveldata["state"] = "apply now";
            context.sendResponse(JSON.stringify(knowmore_howtoapply));
            //   context.sendResponse("You can call us on :" + companyPhno + " or visit us at :" + companyAddr);
        } else {
            var question = {
                "type": "survey",
                "question": "What would you like to do?",
                "msgid": "q1_apply",
                "options": [
                    "Write to us",
                    "Visit/Call us",
                ]
            };
            MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select", context, function (data) {
                if (data) {

                    // context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(question));
                }
            });
        }
    } else if (context.simpledb.roomleveldata.state == "email") {
        if (validateEmail(msg)) {
            context.simpledb.roomleveldata.email = msg;
            //context.simpledb.saveData();
          context.simpledb.roomleveldata["state"] = "phone number";
            // context.simpledb.saveData();
            context.sendResponse("Please share your phone number");
        } else {

            MyMessageHandler(botname, contextobj, "Oops. Please enter a valid email ID", context, function (data) {
                if (data) {

                    //context.simpledb.saveData();
                    context.sendResponse("Or type cancel to go back to the main menu");
                }
            });
            // context.sendResponse("Oops. Please enter a valid email ID");
        }

    } else if (context.simpledb.roomleveldata.state == "phone number") {
        //        context.sendResponse(msg);
        if (validatePhonenumber(msg)) {
            context.simpledb.roomleveldata.phone = msg;
            // context.simpledb.saveData();
          context.simpledb.roomleveldata["state"] = "ask query";
            // context.simpledb.saveData();
            context.sendResponse("To send us your enquiry, type ASK <Course Name> <Your query>");
        } else {
            MyMessageHandler(botname, contextobj, "Oops. Please enter a valid phone number(10 digit)", context, function (data) {
                if (data) {

                    context.sendResponse("Or type cancel to go back to the main menu");
                }
            });
            //context.sendResponse("Oops. Please enter a valid phone number");
        }

    } else if (context.simpledb.roomleveldata.state == "ask query") {
        var coursedata = JSON.parse(context.simpledb.botleveldata.config.coursedata);
        if (msg.includes("ask ")) {
            var str2 = msg.substring(msg.indexOf("ask") + 4, msg.length).trimLeft();
            var arr = str2.split(/\s+/);
            if (arr[0]) {
                var flag = 0;
                for (var i = 0; i < coursedata.length; i++) {
                    if (coursedata[i].name.toLowerCase() == arr[0]) {
                        flag = 1;
                        context.simpledb.roomleveldata.querycourse = arr[0];
                        context.simpledb.roomleveldata.query = arr[1];
                      context.simpledb.roomleveldata["state"] = "start_msg";
                        //context.simpledb.saveData();
                        var knowmore_howtoapply = {
                            "type": "quick_reply",
                            "content": {
                                "type": "text",
                                "text": "Options"
                            },
                            "msgid": "qr_504",
                            "options": [
                                "Go to main"
                            ]
                        };
                        //MyMessageHandler(botname, contextobj, "Thank you. We have noted your query. We shall revert to you shortly.", context, function (data) {
                        // if (data) {
                        knowmore_howtoapply["content"]["text"] = "Thank you. We have noted your query. We shall revert to you shortly.";
                      context.simpledb.roomleveldata["state"] = "apply now";
                        context.sendResponse(JSON.stringify(knowmore_howtoapply));
                        //}
                        //});
                        // context.sendResponse("Thank you. We have noted your query. We shall revert to you shortly.");
                    }
                }
                if (flag == 0) {
                    MyMessageHandler(botname, contextobj, "No such course found", context, function (data) {
                        if (data) {
                            context.sendResponse("To send us your enquiry, type ASK <Course Name> <Your query>");
                        }
                    });
                }

            }

        } else {
            MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select", context, function (data) {
                if (data) {
                    context.sendResponse("To send us your enquiry, type ASK <Course Name> <Your query>");
                }
            });
        }
        //context.sendResponse(msg);

    }

    /*************************************************Existing student***************************************/

    //Registered user 
    else if (context.simpledb.roomleveldata.state == 'register') {
        // context.sendResponse("INSIDE REGISTER");
        var try_again = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": "Options"
            },
            "msgid": "qr_401",
            "options": [
                "Try again",
                "Trouble logging in?"
            ]
        };
        var studentdata = JSON.parse(context.simpledb.botleveldata.config.studentdata);
        if (msg.includes("id")) {

            var flag = 0;
            var id = msg.substring(msg.indexOf("id") + 2, msg.length).trimLeft();
            for (var i = 0; i < studentdata.length; i++) {
                if (studentdata[i]["student_id"] == id) {
                    flag = 1;
                    context.simpledb.roomleveldata.student_id = id;
                  context.simpledb.roomleveldata["state"] = "registered_phno";
                    context.sendResponse("To validate your ID, please type PHONE <Phone no. linked to your Student ID>");
                }
            }
            if (flag == 0) {
                //To make it work for any specified ID
//                MyMessageHandler(botname, contextobj, "Oops I dint get that Student ID no.", context, function (data) {
//                    if (data) {
//                        // context.console.log("NEW STATE try_again");
//                      context.simpledb.roomleveldata["state"] = "try_again";
//                        //context.simpledb.saveData();
//                        context.sendResponse(JSON.stringify(try_again));
//                    }
//                });
                //context.sendResponse(studentdata);
                random = getRandomArbitrary(0, 4);
                context.simpledb.roomleveldata.student_id = studentdata[random].student_id;
                context.simpledb.roomleveldata.student_phone = studentdata[random].student_phone;
              context.simpledb.roomleveldata["state"] = "registered_phno";
                context.sendResponse("To validate your ID, please type PHONE <Phone no. linked to your Student ID>");

            }
            //context.sendResponse(studentdata);      
        } else {
            MyMessageHandler(botname, contextobj, "No such id found", context, function (data) {
                if (data) {
                    context.sendResponse("Please type ID <Your Student ID no.>");
                }
            });

        }
    } else if (context.simpledb.roomleveldata.state == 'registered_phno') {
        //context.sendResponse("AVSBAVS");
        var flag = 0;
        var try_again = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": "Options"
            },
            "msgid": "qr_401",
            "options": [
                "Try again",
                "Trouble logging in?",
            ]
        };
        if (msg.includes("phone ")) {
            var phno = msg.substring(msg.indexOf("phone") + 5, msg.length).trimLeft();
            if (validatePhonenumber(phno)) {
                var studentdata = JSON.parse(context.simpledb.botleveldata.config.studentdata);
                for (var i = 0; i < studentdata.length; i++) {
                    // context.sendResponse(typeof studentdata[i].student_phone);
                    if (studentdata[i].student_id == context.simpledb.roomleveldata.student_id) {
                        //  context.sendResponse("Done");
                        if (studentdata[i].student_phone == phno) {
                            flag = 1;
                            //context.console.log("NEW STATE sendotp");
                          context.simpledb.roomleveldata["state"] = "sendotp";
                            //context.simpledb.saveData();
                            context.simpledb.roomleveldata.student_phone = phno;
                            context.simpledb.saveData();
                            MyMessageHandler(botname, contextobj, "You will receive an OTP on the given phone number. Please enter it here to validate your Student ID", context, function (data) {
                                if (data) {
                                    // context.simplehttp.makeGet('http://enterprise.smsgupshup.com/apps/TwoFactorAuth/incoming.php?phone=' + phno + '&key=b4077ef37d95ee9984a89b4aef2b297e&format=json');
                                }
                            });
                        }
                    }

                }
                if (flag == 0) {
//            MyMessageHandler(botname, contextobj, "Oops I dint get that Phone no", context, function (data) {
//                if (data) {
//                  context.simpledb.roomleveldata["state"] = "try_again";
//                    context.sendResponse(JSON.stringify(try_again));
//                }
//            });

//To make it work for all the phone numbers

                  context.simpledb.roomleveldata["state"] = "sendotp";                     // context.simpledb.roomleveldata.student_phone = phno;
                    //context.simpledb.saveData();
//            MyMessageHandler(botname, contextobj, "You will receive an OTP on the given phone number. Please enter it here to validate your Student ID", context, function (data) {
//                if (data) {
//                    // context.simplehttp.makeGet('http://enterprise.smsgupshup.com/apps/TwoFactorAuth/incoming.php?phone=' + phno + '&key=b4077ef37d95ee9984a89b4aef2b297e&format=json');
//                }
//            });
                    context.sendResponse("You will receive an OTP on the given phone number. Please enter it here to validate your Student ID");


                }
            } else {
                MyMessageHandler(botname, contextobj, "That was an invalid number,Phone number must be 10 digit number", context, function (data) {
                    if (data) {
                        flag = 1;
                        context.sendResponse("Please type PHONE <Phone no. linked to your Student ID>");
                        return;
                    }
                });

            }
        } else {
            flag = 1;
            context.sendResponse("Please type PHONE <Phone no. linked to your Student ID>");
            return;
        }


    } else if (context.simpledb.roomleveldata.state == "incorrect otp") {

        if (msg == "try again") {
            MyMessageHandler(botname, contextobj, "Please enter correct OTP", context, function (data) {
                if (data) {
                  context.simpledb.roomleveldata["state"] = "sendotp";
                    //context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(try_again));
                }
            });
        } else if (msg == "trouble logging in") {
            context.sendResponse("No worries. We can help you. Write to us on " + email + " or call " + companyPhno + " for assistance");
        } else {
            var start_msg = {
                "type": "survey",
                "question": "Are you a..",
                "msgid": "survey101",
                "options": [
                    "Prospective Student",
                    "Existing student"
                ]
            };

            MyMessageHandler(botname, contextobj, "Hi there! Welcome to My Coaching Classes", context, function (data) {
                if (data) {
                  context.simpledb.roomleveldata["state"] = "start_msg";
                    //context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(start_msg));
                }
            });
        }
    } else if (context.simpledb.roomleveldata.state == "try_again") {
        if (msg == "try again") {
          context.simpledb.roomleveldata["state"] = "register";
            // context.simpledb.saveData();
            context.sendResponse("Please type ID <Your Student ID no.>");
            return;
        } else if (msg == "trouble logging in") {
            context.sendResponse("No worries. We can help you. Write to us on " + email + " or call " + companyPhno + " for assistance");
        } else {
            var question = {
                "type": "survey",
                "question": "Are you a..",
                "msgid": "survey101",
                "options": [
                    "Prospective Student",
                    "Existing student"
                ]
            };

            MyMessageHandler(botname, contextobj, "Hi there! Welcome to My Coaching Classes", context, function (data) {
                if (data) {
                  context.simpledb.roomleveldata["state"] = "start_msg";
                    //context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(question));
                }
            });
        }
    } else if (context.simpledb.roomleveldata.state == "sendotp") {
        //context.sendResponse("SEND OTP CALLED");
        var selectoptions = {
            "type": "catalogue",
            "msgid": "cat_5001",
            "items": [{
                    "title": "Syllabus",
                    "subtitle": "Syllabus Details",
                    "imgurl": "http://cdn1.askiitians.com/Images/201558-16346883-2623-2015429-185540500-8251-syllabus.jpg",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                }, {
                    "title": "Timetable",
                    "subtitle": "Timetable Details",
                    "imgurl": "http://image.shutterstock.com/z/stock-vector-timetable-red-background-105259574.jpg",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                },
                {
                    "title": "Attendance",
                    "subtitle": "Attendance Details",
                    "imgurl": "http://www.smcoe.org/assets/img/parents-and-students/attendance_hands.jpg",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                },
                {
                    "title": "Exam schedule",
                    "subtitle": "Exam schedule Details",
                    "imgurl": "http://familiesforfreedom.org/sites/default/files/images/mastercalendarphoto.jpg",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                }, {
                    "title": "Marks",
                    "subtitle": "Marks Details",
                    "imgurl": "http://www.kinindia.net/wp-content/uploads/2015/10/internal-marks.jpg",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                }, {
                    "title": "Query",
                    "subtitle": "File a Query",
                    "imgurl": "http://bhagulind.com/bhagul%20prod/CEC_connect-query.png",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                }]
        };
        if (msg) {
            MyMessageHandler(botname, contextobj, "Great! You've been registered sucessfully.\n What would you like to know?", context, function (data) {
                if (data) {
                    //  MyMessageHandler(botname, contextobj, "", context, function (data) {
                    // if (data) {
                  context.simpledb.roomleveldata["state"] = "select options";
                    //context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(selectoptions));

                    // }
                    //});
                }
            });
            //context.sendResponse(JSON.stringify(selectoptions));

        } else {
            //context.console.log("NEW STATE getotp");
          context.simpledb.roomleveldata["state"] = "getotp";
            context.simpledb.saveData();
            context.simplehttp.makeGet('http://enterprise.smsgupshup.com/apps/TwoFactorAuth/incoming.php?phone=' + context.simpledb.roomleveldata.student_phone + '&key=b4077ef37d95ee9984a89b4aef2b297e&format=json&code=' + msg);
        }
    } else if (context.simpledb.roomleveldata.state == "select options") {

        var studentdata = JSON.parse(context.simpledb.botleveldata.config.studentdata);
        var loop = "";
        for (var i = 0; i < studentdata.length; i++) {
            if (studentdata[i].student_phone == context.simpledb.roomleveldata.student_phone) {
                loop = i;
            }
        }
        switch (msg) {
            case "view details 1":

                //show syllabus;
                var gomain = {
                    "type": "quick_reply",
                    "content": {
                        "type": "text",
                        "text": "Options"
                    },
                    "msgid": "gomain_001",
                    "options": [
                        "Go to main",
                        "Query",
                    ]
                }
                MyMessageHandler(botname, contextobj, "Here is the link of the syllabus for your course", context, function (data) {
                    if (data) {
                        // MyMessageHandler(botname, contextobj, studentdata[loop].syllabus, context, function (data) {
                        //   if (data) {
                        gomain["content"]["text"] = studentdata[loop].syllabus;
                      context.simpledb.roomleveldata["state"] = "syllabus";
                        //context.simpledb.saveData();
                        context.sendResponse(JSON.stringify(gomain));
                        // }
                        // });
                    }
                });


                break;
            case "view details 2":
                //show time table;

                MyMessageHandler(botname, contextobj, "The timetable for your batch is", context, function (data) {
                    if (data) {
                        var image = {"type": "image", "originalUrl": studentdata[loop].timetable, "previewUrl": studentdata[loop].timetable};
                        //context.sendResponse(JSON.stringify(image));
                        MyMessageHandler(botname, contextobj, JSON.stringify(image), context, function (data) {
                            if (data) {
                                var gomain = {
                                    "type": "quick_reply",
                                    "content": {
                                        "type": "text",
                                        "text": "  "
                                    },
                                    "msgid": "gomain_001",
                                    "options": [
                                        "Go to main",
                                        "Query",
                                    ]
                                };
                              context.simpledb.roomleveldata["state"] = "syllabus";
                                context.sendResponse(JSON.stringify(gomain));
                            }
                        });
                    }
                });
                break;
            case "view details 3":

                //show attendance;
                //var str = "Attendance summary of  " + studentdata[loop].student_name + "for " + studentdata[loop].attendance["month_year"] + ":";
                var str = "Attendance summary of  " + event.senderobj["display"] + " for " + studentdata[loop].attendance["month_year"] + ":";
                MyMessageHandler(botname, contextobj, str, context, function (data) {
                    if (data) {
                        var newstr = "";
                        newstr += "Days present: ";
                        newstr += studentdata[loop].attendance["days_present"];
                        newstr += "\n";
                        newstr += "Days absent: ";
                        newstr += studentdata[loop].attendance["days_absent"];
                        newstr += "\n";
                        newstr += "Holidays: ";
                        newstr += studentdata[loop].attendance["holidays"];
                        // context.sendResponse(newstr);
                        var gomain = {
                            "type": "quick_reply",
                            "content": {
                                "type": "text",
                                "text": "Options"
                            },
                            "msgid": "gomain_001",
                            "options": [
                                "Go to main",
                                "Query",
                            ]
                        };
                        gomain["content"]["text"] = newstr;
                      context.simpledb.roomleveldata["state"] = "syllabus";
                        context.sendResponse(JSON.stringify(gomain));


                    }
                });
                break;
            case "view details 4":
                //show exam schedule;
                var semester = {
                    "type": "quick_reply",
                    "content": {
                        "type": "text",
                        "text": "Select a semester to know the exam schedule"
                    },
                    "msgid": "semester_501",
                    "options": [
                        "Sem 1",
                        "Sem 2",
                        "Sem 3",
                        "Sem 4"
                    ]
                };
              context.simpledb.roomleveldata["state"] = "exam schedule";
               //  context.simpledb.saveData();
                context.sendResponse(JSON.stringify(semester));


                break;
            case "view details 5":
                //show marks;
                var results = {
                    "type": "quick_reply",
                    "content": {
                        "type": "text",
                        "text": "Select a semester to know the marks"
                    },
                    "msgid": "results_801",
                    "options": [
                        "Sem 1",
                        "Sem 2",
                        "Sem 3",
                        "Sem 4"
                    ]
                };
              context.simpledb.roomleveldata["state"] = "semester results";
               // context.simpledb.saveData();
                context.sendResponse(JSON.stringify(results));

                break;
            case "view details 6":
//                saveState(context,"get query",function(data){
//                    if(data)
//                     context.sendResponse("Sure. Send us your query and we'll get back to you. Type QUERY <Your question>");
//           
//                });
                context.simpledb.roomleveldata['state'] = "get query";
                // context.sendResponse("SELETED 6");
                context.sendResponse("Sure. Send us your query and we'll get back to you. Type QUERY <Your question>");
               
                //show query;
                break;
             
            default:
                var selectoptions = {
                    "type": "catalogue",
                    "msgid": "cat_5001",
                    "items": [{
                            "title": "Syllabus",
                            "subtitle": "Syllabus Details",
                            "imgurl": "http://cdn1.askiitians.com/Images/201558-16346883-2623-2015429-185540500-8251-syllabus.jpg",
                            "options": [{
                                    "type": "text",
                                    "title": "View Details",
                                }]
                        }, {
                            "title": "Timetable",
                            "subtitle": "Timetable Details",
                            "imgurl": "http://image.shutterstock.com/z/stock-vector-timetable-red-background-105259574.jpg",
                            "options": [{
                                    "type": "text",
                                    "title": "View Details",
                                }]
                        },
                        {
                            "title": "Attendance",
                            "subtitle": "Attendance Details",
                            "imgurl": "http://www.smcoe.org/assets/img/parents-and-students/attendance_hands.jpg",
                            "options": [{
                                    "type": "text",
                                    "title": "View Details",
                                }]
                        }, {
                            "title": "Exam schedule",
                            "subtitle": "Exam schedule Details",
                            "imgurl": "http://familiesforfreedom.org/sites/default/files/images/mastercalendarphoto.jpg",
                            "options": [{
                                    "type": "text",
                                    "title": "View Details",
                                }]
                        }, {
                            "title": "Marks",
                            "subtitle": "Marks Details",
                            "imgurl": "http://www.kinindia.net/wp-content/uploads/2015/10/internal-marks.jpg",
                            "options": [{
                                    "type": "text",
                                    "title": "View Details",
                                }]
                        }, {
                            "title": "Query",
                            "subtitle": "File a Query",
                            "imgurl": "http://bhagulind.com/bhagul%20prod/CEC_connect-query.png",
                            "options": [{
                                    "type": "text",
                                    "title": "View Details",
                                }]
                        }]
                };
                
              context.simpledb.roomleveldata["state"] = "select options";
                MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select", context, function (data) {
                    if (data) {
                        // context.simpledb.saveData();
                        context.sendResponse(JSON.stringify(selectoptions));
                    }
                });

                break;

        }

    }
    //go main
    else if (event.messageobj.refmsgid = "gomain_001" && msg == "go to main") {
        var selectoptions = {
            "type": "catalogue",
            "msgid": "cat_5001",
            "items": [{
                    "title": "Syllabus",
                    "subtitle": "Syllabus Details",
                    "imgurl": "http://cdn1.askiitians.com/Images/201558-16346883-2623-2015429-185540500-8251-syllabus.jpg",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                }, {
                    "title": "Timetable",
                    "subtitle": "Timetable Details",
                    "imgurl": "http://image.shutterstock.com/z/stock-vector-timetable-red-background-105259574.jpg",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                },
                {
                    "title": "Attendance",
                    "subtitle": "Attendance Details",
                    "imgurl": "http://www.smcoe.org/assets/img/parents-and-students/attendance_hands.jpg",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                }, {
                    "title": "Exam schedule",
                    "subtitle": "Exam schedule Details",
                    "imgurl": "http://familiesforfreedom.org/sites/default/files/images/mastercalendarphoto.jpg",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                }, {
                    "title": "Marks",
                    "subtitle": "Marks Details",
                    "imgurl": "http://www.kinindia.net/wp-content/uploads/2015/10/internal-marks.jpg",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                }, {
                    "title": "Query",
                    "subtitle": "File a Query",
                    "imgurl": "http://bhagulind.com/bhagul%20prod/CEC_connect-query.png",
                    "options": [{
                            "type": "text",
                            "title": "View Details",
                        }]
                }]
        };
      context.simpledb.roomleveldata["state"] = "select options";
        MyMessageHandler(botname, contextobj, "What would you like to know?", context, function (data) {
            if (data) {
                //context.simpledb.saveData();
                context.sendResponse(JSON.stringify(selectoptions));
            }
        });

    } else if (context.simpledb.roomleveldata.state == "syllabus") {
        if (msg == "query") {
            // context.sendResponse("asnajsnasmna");
          context.simpledb.roomleveldata["state"] = "get query";
            // context.simpledb.saveData();
            context.console.log("INSIDE SYLLABUS");
            context.sendResponse("Sure. Send us your query and we'll get back to you. Type QUERY <Your question>");
        } else if (msg == "go to main") {
            MyMessageHandler(botname, contextobj, "What would you like to know?", context, function (data) {
                if (data) {
                  context.simpledb.roomleveldata["state"] = "select options";
                    // context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(selectoptions));
                }
            });
        } else {
          context.simpledb.roomleveldata["state"] = "select options";
            MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select", context, function (data) {
                if (data) {

                    // context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(selectoptions));
                }
            });
        }
    } else if (context.simpledb.roomleveldata.state == "get query" || msg.includes("query")) {
        if (msg.includes("query ")) {
            // context.sendResponse("absabsas");
            var str2 = msg.substring(msg.indexOf("query") + 5, msg.length).trimLeft();
            context.simpledb.roomleveldata.existing_query = str2;
            // context.simpledb.roomleveldata.state == "syllabus";
            //context.simpledb.saveData();
            var gomain = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "  "
                },
                "msgid": "gomain_001",
                "options": [
                    "Go to main",
                ]
            };
          context.simpledb.roomleveldata["state"] == "syllabus";
            MyMessageHandler(botname, contextobj, "Thank you. Our team will get back to you shortly.", context, function (data) {
                if (data) {

                    // context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(gomain));
                }
            });
            // context.sendResponse("Thank you. Our team will get back to you shortly.");
        } else {
          context.simpledb.roomleveldata["state"] = "get query";
            // context.simpledb.saveData();
            context.sendResponse("Oops I dint get that response. Please type QUERY <Your question>");
        }

    } else if (context.simpledb.roomleveldata.state == "exam schedule") {
        var studentdata = JSON.parse(context.simpledb.botleveldata.config.studentdata);
        var loop = "";
        for (var i = 0; i < studentdata.length; i++) {
            if (studentdata[i].student_phone == context.simpledb.roomleveldata.student_phone) {
                loop = i;
            }
        }
        var gomain = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": "  "
            },
            "msgid": "gomain_001",
            "options": [
                "Go to main",
                "Query",
            ]
        };
        switch (msg) {
            case "sem 1":
                MyMessageHandler(botname, contextobj, "Your semester 1 schedule is", context, function (data) {
                    if (data) {
                      context.simpledb.roomleveldata["state"] = "select options";
                        var image = {"type": "image", "originalUrl": studentdata[loop].exam_schedule[0].sem_1, "previewUrl": studentdata[loop].timetable};
                        // context.sendResponse(JSON.stringify(image));
                        MyMessageHandler(botname, contextobj, JSON.stringify(image), context, function (data) {
                            if (data) {
                              context.simpledb.roomleveldata["state"] = "syllabus";
                                context.sendResponse(JSON.stringify(gomain));
                            }
                        });

                    }
                });
                break;
            case "sem 2":
                MyMessageHandler(botname, contextobj, "Your semester 2 schedule is", context, function (data) {
                    if (data) {
                      context.simpledb.roomleveldata["state"] = "select options";
                        var image = {"type": "image", "originalUrl": studentdata[loop].exam_schedule[1].sem_2, "previewUrl": studentdata[loop].timetable};
                        //context.sendResponse(JSON.stringify(image));
                        MyMessageHandler(botname, contextobj, JSON.stringify(image), context, function (data) {
                            if (data) {
                              context.simpledb.roomleveldata["state"] = "syllabus";
                                context.sendResponse(JSON.stringify(gomain));
                            }
                        });
                    }
                });
                break;
            case "sem 3":
                MyMessageHandler(botname, contextobj, "Your semester 3 schedule is", context, function (data) {
                    if (data) {
                      context.simpledb.roomleveldata["state"] = "select options";
                        var image = {"type": "image", "originalUrl": studentdata[loop].exam_schedule[2].sem_3, "previewUrl": studentdata[loop].timetable};
                        //context.sendResponse(JSON.stringify(image));
                        MyMessageHandler(botname, contextobj, JSON.stringify(image), context, function (data) {
                            if (data) {
                              context.simpledb.roomleveldata["state"] = "syllabus";
                                context.sendResponse(JSON.stringify(gomain));
                            }
                        });
                    }
                });
                break;
            case "sem 4":
                MyMessageHandler(botname, contextobj, "Your semester 4 schedule is", context, function (data) {
                    if (data) {
                      context.simpledb.roomleveldata["state"] = "select options";
                        var image = {"type": "image", "originalUrl": studentdata[loop].exam_schedule[3].sem_4, "previewUrl": studentdata[loop].timetable};
                        //context.sendResponse(JSON.stringify(image));
                        MyMessageHandler(botname, contextobj, JSON.stringify(image), context, function (data) {
                            if (data) {
                              context.simpledb.roomleveldata["state"] = "syllabus";
                                context.sendResponse(JSON.stringify(gomain));
                            }
                        });
                    }
                });

                break;
            default:
                MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select ", context, function (data) {
                    if (data) {
                      context.simpledb.roomleveldata["state"] = "select options";

                        context.sendResponse(JSON.stringify(selectoptions));
                    }
                });
                break;
        }
    } else if (context.simpledb.roomleveldata.state == "semester results") {
        var studentdata = JSON.parse(context.simpledb.botleveldata.config.studentdata);
        var loop = "";
        for (var i = 0; i < studentdata.length; i++) {
            if (studentdata[i].student_phone == context.simpledb.roomleveldata.student_phone) {
                loop = i;
            }
        }
        var gomain = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": "  "
            },
            "msgid": "gomain_001",
            "options": [
                "Go to main",
                "Query",
            ]
        };
        switch (msg) {
            case "sem 1":
                var str = "Your semester 1 results are";
                str += "\n";
                str += "\n";
                var keys = Object.keys(studentdata[loop].exam_schedule[0]["marks"]);
                // context.sendResponse(keys.length);
                for (var i = 0; i < keys.length; i++) {
                    str += keys[i];
                    str += ":";
                    str += studentdata[loop].exam_schedule[0].marks[keys[i]];
                    str += "\n";
                }
                MyMessageHandler(botname, contextobj, str, context, function (data) {
                    if (data) {

                        //context.simpledb.roomleveldata.state = "select options";
                        //context.sendResponse(str);
//                       gomain["context"]["text"]=str;
                      context.simpledb.roomleveldata["state"] = "syllabus";
                        context.sendResponse(JSON.stringify(gomain));
                    }
                });
                break;
            case "sem 2":
                var str = "Your semester 2 results are";
                str += "\n";
                str += "\n";
                var keys = Object.keys(studentdata[loop].exam_schedule[1]["marks"]);
                for (var i = 0; i < keys.length; i++) {
                    str += keys[i];
                    str += ":";
                    str += studentdata[loop].exam_schedule[1].marks[keys[i]];
                    str += "\n";
                }
                MyMessageHandler(botname, contextobj, str, context, function (data) {
                    if (data) {
//                        gomain["context"]["text"] = str;
                      context.simpledb.roomleveldata["state"] = "syllabus";
                        context.sendResponse(JSON.stringify(gomain));
                    }
                });
                break;
            case "sem 3":
                var str = "Your semester 3 results are";
                str += "\n";
                str += "\n";
                var keys = Object.keys(studentdata[loop].exam_schedule[2]["marks"]);
                for (var i = 0; i < keys.length; i++) {
                    str += keys[i];
                    str += ":";
                    str += studentdata[loop].exam_schedule[2].marks[keys[i]];
                    str += "\n";
                }
                MyMessageHandler(botname, contextobj, str, context, function (data) {
                    if (data) {

                        //  gomain["context"]["text"] = str;
                      context.simpledb.roomleveldata["state"] = "syllabus";
                        context.sendResponse(JSON.stringify(gomain));

                    }
                });
                break;
            case "sem 4":
                var str = "Your semester 4 results are";
                str += "\n";
                str += "\n";
                var keys = Object.keys(studentdata[loop].exam_schedule[3]["marks"]);
                for (var i = 0; i < keys.length; i++) {
                    str += keys[i];
                    str += ":";
                    str += studentdata[loop].exam_schedule[3].marks[keys[i]];
                    str += "\n";
                }
                MyMessageHandler(botname, contextobj, str, context, function (data) {
                    if (data) {

                        //   gomain["context"]["text"] = str;
                      context.simpledb.roomleveldata["state"] = "syllabus";
                        context.sendResponse(JSON.stringify(gomain));
                    }
                });

                break;
            default:
                MyMessageHandler(botname, contextobj, "Sorry,that was an invalid input please select ", context, function (data) {
                    if (data) {
                        //context.simpledb.saveData();
                        context.sendResponse(JSON.stringify(selectoptions));
                    }
                });
                break;
        }
    } else {

        context.sendResponse('No keyword found,type cancel to begin');
    }
}
function saveState(context,state,callback){
  context.simpledb.roomleveldata["state"]=state;
    context.simpledb.saveData();
    return callback("done");
}
function validatePhonenumber(inputtxt)
{
    try {
        if (inputtxt.match(/\d/g).length == 10)
            return true;
        else {
            return false;
        }
    } catch (err) {
        return false;
    }
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
/** Functions declared below are required **/
function EventHandler(context, event) {
    var botname = event.botname;
    //context.simpledb.clearAll();
    var contextobj = JSON.stringify(event.contextobj);
    var question = {
        "type": "survey",
        "question": "Are you a..",
        "msgid": "survey101",
        "options": [
            "Prospective Student",
            "Existing student"
        ]
    };

    MyMessageHandler(botname, contextobj, "Hi there! Welcome to My Coaching Classes", context, function (data) {
        if (data) {
          context.simpledb.roomleveldata["state"] = "start_msg";
            // context.simpledb.saveData();
            context.sendResponse(JSON.stringify(question));
        }
    });

}

function MyMessageHandler(botname, contextobj, botmessage, context, callback) {
    var url = "http://api.gupshup.io/sm/api/bot/" + botname + "/msg";
    var header = {
        "Content-Type": "application/x-www-form-urlencoded"
    };
    var body = "apikey=4825b60b09ff46e5c6c104e0701cbd50&botname=" + botname + "&context=" + contextobj + "&message=" + encodeURI(botmessage);
    // context.simplehttp.makePost(url,body,header);
    context.simplehttp.makePost(url, body, header, function (context, event) {
        //context.console.log(event.message);
        return callback(event.message);
    });


}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function HttpResponseHandler(context, event) {
    var botname = event.botname;
    var contextobj = JSON.stringify(event.contextobj);
    if (context.simpledb.roomleveldata.state == "getotp") {
        var resp = JSON.parse(event.getresp);
        // context.console.log("INSIDE GETOTP");
        var try_again = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": "Options"
            },
            "msgid": "qr_401",
            "options": [
                "Try again",
                "Trouble logging in?",
            ]
        };
        if (resp.response == "Invalid code") {
            var try_again = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Options"
                },
                "msgid": "qr_401",
                "options": [
                    "Try again",
                    "Trouble logging in?",
                ]
            };
            MyMessageHandler(botname, contextobj, "Please enter correct OTP", context, function (data) {
                if (data) {
                  context.simpledb.roomleveldata["state"] = "incorrect otp";
                    // context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(try_again));
                }
            });
        } else {

            MyMessageHandler(botname, contextobj, "Great! You've been registered sucessfully.\n What would you like to know?", context, function (data) {
                if (data) {
                    // MyMessageHandler(botname, contextobj, "What would you like to know?", context, function (data) {
                    //  if (data) {
                  context.simpledb.roomleveldata["state"] = "select options";
                    //context.simpledb.saveData();
                    context.sendResponse(JSON.stringify(selectoptions));

                    //}
                    // });
                }
            });
        }

    }
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last get by:" + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last put by:" + event.dbval);
}

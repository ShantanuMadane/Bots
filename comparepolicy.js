function MessageHandler(context, event) {
    var msg = event.message.toLowerCase();
    var botname = event.botname;
    var contextobj = JSON.stringify(event.contextobj);
    if (msg == "hi" || msg == "cancel" || msg == "help" || msg == "hello" || msg == "start") {
        var start_msg = {
            "type": "survey",
            "question": "Hi, there! What type of insurance are you looking for?",
            "msgid": "start_101",
            "options": [
                "Car",
                "Bike",
            ]
        };
        context.simpledb.roomleveldata.state = "start msg";
        context.sendResponse(JSON.stringify(start_msg));
    } else if (context.simpledb.roomleveldata.state == "start msg") {
        if (msg == "car") {
            //MyMessageHandler(botname, contextobj, "Great Let's help you find the best Car insurance plan", context, function (data) {
            // if (data) {
            context.simpledb.roomleveldata.state = "get_name_car";
            // context.simpledb.saveData();
            context.sendResponse("Great Let's help you find the best Car insurance plan <br>Please enter your full name");
            // }
            //});
        } else if (msg == "bike") {

            context.simpledb.roomleveldata.state="select_bike";
            // context.simpledb.saveData();
            context.sendResponse("Great Let's help you find the best Bike insurance plan <br>Please enter your full name");

        } else {
            var start_msg = {
                "type": "survey",
                "question": "Sorry that was an invalid input,Please select",
                "msgid": "start_101",
                "options": [
                    "Car",
                    "Bike",
                ]
            };
            context.simpledb.roomleveldata.state = "start msg";
            context.sendResponse(JSON.stringify(start_msg));
        }
    } else if (context.simpledb.roomleveldata.state == "get_name_car") {
        var remember_registration = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": ""
            },
            "msgid": "reg_201",
            "options": [
                "Yes",
                "No"
            ]
        };
        if (msg) {
            context.simpledb.roomleveldata.state = "remember_registration";
            context.simpledb.roomleveldata.fullname = msg;
            remember_registration["content"]["text"] = "Hello  " + msg + "  Hope you are doing well.<br>I understand you are looking to buy Car insurance.<br> I'll quickly ask you some simple questions.<br> This will take us less than 2 min.<br>Do you remember your registration number?"
            context.sendResponse(JSON.stringify(remember_registration));
        }

    } else if (context.simpledb.roomleveldata.state == "select_bike") {
        var which_bike = {
            "type": "quick_reply",
            "content": {
                "type": "text",
                "text": ""
            },
            "msgid": "which_bike_101",
            "options": [
                "Royal Enfield",
                "Yamaha",
                "Hero",
            ]
        };

        context.simpledb.roomleveldata.state = "which_bike";
        which_bike["content"]["text"] = "Hello  " + msg + "  Hope you are doing well.<br>I understand you are looking to buy Bike insurance.<br> Which Bike brand do you drive?";
        context.sendResponse(JSON.stringify(which_bike));

    } else if (context.simpledb.roomleveldata.state == "which_bike") {
        if (msg == "royal enfield" || msg == "yamaha" || msg == "hero") {
            var which_region = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Your bike is registered from which city?"
                },
                "msgid": "which_region_101",
                "options": [
                    "Mumbai South (MH-01)",
                    "Mumbai Western Suburbs (MH-02)",
                    "Mumbai Eastern Suburbs (MH-03)",
                ]
            };
            context.simpledb.roomleveldata.state = "which_region";
            context.sendResponse(JSON.stringify(which_region));

        } else {
            var which_bike = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": ""
                },
                "msgid": "which_bike_101",
                "options": [
                    "Royal Enfield",
                    "Yamaha",
                    "Hero",
                ]
            };
            remember_registration["content"]["text"] = "I did not get that,<br>Can you tell which Bike brand do you drive?";
            context.sendResponse(JSON.stringify(which_bike));
        }
    } else if (context.simpledb.roomleveldata.state == "which_region") {
        if (msg == "mumbai south (mh-01)" || msg == "mumbai western suburbs (mh-02)" || msg == "mumbai eastern suburbs (mh-03)") {
         
         context.simpledb.roomleveldata.state="bike_registered_when";
         context.sendResponse("Your bike is registered in which year?");
         
        } else {
            var which_region = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "I could not understand that,Can you tell your bike is registered from which city?"
                },
                "msgid": "which_region_101",
                "options": [
                    "Mumbai South (MH-01)",
                    "Mumbai Western Suburbs (MH-02)",
                    "Mumbai Eastern Suburbs (MH-03)",
                ]
            };
            context.sendResponse(JSON.stringify(which_region));
        }
    }
    else if(context.simpledb.roomleveldata.state=="bike_registered_when"){
        if(msg.length==4 && isNaN(msg)==false){
            
             var bike_policy_expired = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Is your Previous Policy Expired??"
                },
                "msgid": "bike_policy_expired_101",
                "options": [
                    "Not yet expired",
                    "In last 90 days",
                    "Before 90 days",
                ]
            };
            context.simpledb.roomleveldata.state="bike_policy_expired";
            context.sendResponse(JSON.stringify(bike_policy_expired));
        }
        else{
            context.sendResponse("The year entered was invalid,Please enter appropriate year ex. 2015");
        }
    }
    else if(context.simpledb.roomleveldata.state=="bike_policy_expired"){
        if(msg=="not yet expired"){
             var bike_quotes = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "We have evaluated your car, do you want your quotes?"
                },
                "msgid": "bike_quotes_101",
                "options": [
                    "Never",
                    "Less than 1 year ago",
                ]
            };
            context.simpledb.roomleveldata.state="bike_quotes";
            context.sendResponse(JSON.stringify(bike_quotes));
            
        }
        else if(msg=="in last 90 days" || msg=="before 90 days"){
            var bike_claim_last = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "When you have taken your claim last?"
                },
                "msgid": "bike_claim_last_101",
                "options": [
                    "Never",
                    "Less than 1 year ago",
                ]
            };
            context.simpledb.roomleveldata.state="bike_claim_last";
            context.sendResponse(JSON.stringify(bike_claim_last));
        }
        else{
            var bike_policy_expired = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Sorry I did not get that,Is your Previous Policy Expired?"
                },
                "msgid": "bike_policy_expired_101",
                "options": [
                    "Not yet expired",
                    "In last 90 days",
                    "Before 90 days",
                ]
            };
            context.sendResponse(JSON.stringify(bike_policy_expired));
        }
    }
    else if( context.simpledb.roomleveldata.state=="bike_quotes"){
        if(msg=="show me quote"){
            context.simpledb.roomleveldata.state="end";
            context.sendResponse("OK. View the policy options by clicking on the link here-<br>http://bikepolicyoptions.com/");
        }
        else if(msg=="start again"){
             var start_msg = {
            "type": "survey",
            "question": "Hi, there! What type of insurance are you looking for?",
            "msgid": "start_101",
            "options": [
                "Car",
                "Bike",
            ]
        };
        context.simpledb.roomleveldata.state = "start msg";
        context.sendResponse(JSON.stringify(start_msg));
        }
        else{
            var bike_quotes = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "I did not understand that<br>We have evaluated your car, do you want your quotes?"
                },
                "msgid": "bike_quotes_101",
                "options": [
                    "Never",
                    "Less than 1 year ago",
                ]
            };
            context.sendResponse(JSON.stringify(bike_quotes));
        }
    }
    else if(context.simpledb.roomleveldata.state=="bike_claim_last"){
        if(msg=="never" || msg=="less than 1 year ago"){
            context.simpledb.roomleveldata.state="end";
            context.sendResponse("OK. View the policy options by clicking on the link here-<br>http://bikepolicyoptions.com/");
        }
        else{
            var bike_claim_last = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "I did bot get that,Can you tell when you have taken your claim last?"
                },
                "msgid": "bike_claim_last_101",
                "options": [
                    "Never",
                    "Less than 1 year ago",
                ]
            };
            context.sendResponse(JSON.stringify(bike_claim_last));
        }
    }
    
    else if (context.simpledb.roomleveldata.state == "remember_registration") {
        if (msg == "yes") {
            context.simpledb.roomleveldata.state = "end_remember_registration";
            context.sendResponse("OK. View the policy options by clicking on the link here-<br>http://carpolicyoptions.com/");
        } else if (msg == "no") {
            // context.sendResponse("IN NO");
            var remember_registration_no = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "When have you taken your last claim?"
                },
                "msgid": "reg_no_101",
                "options": [
                    "Never",
                    "Less than a year ago"
                ]
            };
            context.simpledb.roomleveldata.state = "last_claim_no";
            context.sendResponse(JSON.stringify(remember_registration_no));

        } else {
            var remember_registration = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Sorry that was an invalid input,Please tell Do you remember your registration number?"
                },
                "msgid": "reg_201",
                "options": [
                    "Yes",
                    "No"
                ]
            };
            context.sendResponse(JSON.stringify(remember_registration));

        }
    } else if (context.simpledb.roomleveldata.state == "last_claim_no") {
        if (msg == "never") {
            var which_car = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Which car do you drive?"
                },
                "msgid": "which_car_101",
                "options": [
                    "Maruti",
                    "Honda",
                    "Hyundai",
                    "Toyota "
                ]
            };
            context.simpledb.roomleveldata.state = "which_car";
            context.sendResponse(JSON.stringify(which_car));
        } else if (msg == "less than a year ago") {
            //Code for less tha year Ago
            context.simpledb.roomleveldata.state = "get_reg_no";
            context.sendResponse("Please enter your regiteration number");
        } else {
            var remember_registration_no = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Sorry that was an invalid output,Can you tell when have you taken your last claim?"
                },
                "msgid": "reg_no_101",
                "options": [
                    "Never",
                    "Less than a year ago"
                ]
            };
            context.sendResponse(JSON.stringify(remember_registration));
        }
    } else if (context.simpledb.roomleveldata.state == "get_reg_no") {
        if (msg) {
            var verify_car = {
                "type": "survey",
                "question": "Is your car Maruti Suzuki Swift ZXi, PETROL, 5, 1197?",
                "msgid": "verify_car_101",
                "options": [
                    "Yes",
                    "No",
                ]
            };
            context.simpledb.roomleveldata.state = "verify_car";
            context.sendResponse(JSON.stringify(verify_car));
        }

    } else if (context.simpledb.roomleveldata.state == "verify_car") {
        if (msg == "yes") {
            var register_car_year = {
                "type": "survey",
                "question": "Was your car registered in 2008?",
                "msgid": "register_cardate_101",
                "options": [
                    "Yes",
                    "No",
                ]
            };
            context.simpledb.roomleveldata.state = "register_car_year";
            context.sendResponse(JSON.stringify(register_car_year));

        } else if (msg == "no") {
            var which_car = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Which car do you drive?"
                },
                "msgid": "which_car_101",
                "options": [
                    "Maruti",
                    "Honda",
                    "Hyundai",
                    "Toyota "
                ]
            };
            context.simpledb.roomleveldata.state = "which_car";
            context.sendResponse(JSON.stringify(which_car));

        } else {
            var verify_car = {
                "type": "survey",
                "question": "Sorry that was invalid input,is your Car Maruti Suzuki Swift ZXi, PETROL, 5, 1197?",
                "msgid": "verify_car_101",
                "options": [
                    "Yes",
                    "No",
                ]
            };
            context.simpledb.roomleveldata.state = "verify_car";
            context.sendResponse(JSON.stringify(verify_car));
        }
    } else if (context.simpledb.roomleveldata.state == "register_car_year") {
        if (msg == "yes") {
            var registered_maharashtra = {
                "type": "survey",
                "question": "Was your car registered in Maharashtra?",
                "msgid": "registered_maharashtra_101",
                "options": [
                    "Yes",
                    "No",
                ]
            };
            context.simpledb.roomleveldata.state = "registered_maharashtra";
            context.sendResponse(JSON.stringify(registered_maharashtra));
        } else if (msg == "no") {
            var car_registered_when = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "When was your car registered?"
                },
                "msgid": "registered_car__when_100",
                "options": [
                    "2015",
                    "2014",
                    "2013",
                    "2012",
                    "2011",
                    "2010",
                    "Before 2010"
                ]
            };
            context.simpledb.roomleveldata.state = "car_registered_when";
            context.sendResponse(JSON.stringify(car_registered_when));
        } else {
            var register_car_year = {
                "type": "survey",
                "question": "That was an invalid output,Can you tell  was your car registered in 2008?",
                "msgid": "register_cardate_101",
                "options": [
                    "Yes",
                    "No",
                ]
            };
            context.sendResponse(JSON.stringify(register_car_year));
        }

    } else if (context.simpledb.roomleveldata.state == "registered_maharashtra") {
        if (msg == "yes") {
            var lpg_cng = {
                "type": "survey",
                "question": "Is your car lpg or cng?",
                "msgid": "lpg_cng_501",
                "options": [
                    "Dont have CNG/LPG kit",
                    "Have company fitted",
                    "Have externally fitted"
                ]
            };
            context.simpledb.roomleveldata.state = "lpg_cng";
            context.sendResponse(JSON.stringify(lpg_cng));
        } else if (msg == "no") {
            var car_registered_where = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Where was your car registered?"
                },
                "msgid": "registered_car__where_101",
                "options": [
                    "Delhi",
                    "Uttar Pradesh",
                    "Haryana",
                    "Maharashtra"
                ]
            };
            context.simpledb.roomleveldata.state = "car_registration_where";
            context.sendResponse(JSON.stringify(car_registered_where));
        } else {
            var registered_maharashtra = {
                "type": "survey",
                "question": "I did not get that,Was your car registered in Maharashtra?",
                "msgid": "registered_maharashtra_101",
                "options": [
                    "Yes",
                    "No",
                ]
            };
            context.sendResponse(JSON.stringify(registered_maharashtra));
        }
    } else if (context.simpledb.roomleveldata.state == "which_car") {
        if (msg == "maruti" || msg == "hyundai" || msg == "toyota" || msg == "honda") {
            var car_registered_where = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Where was your car registered?"
                },
                "msgid": "registered_car__where_101",
                "options": [
                    "Delhi",
                    "Uttar Pradesh",
                    "Haryana",
                    "Maharashtra"
                ]
            };
            context.simpledb.roomleveldata.state = "car_registration_where";
            context.sendResponse(JSON.stringify(car_registered_where));
        } else {
            var which_car = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Sorry that was an invalid input,Can you tell which car do you drive?"
                },
                "msgid": "which_car_101",
                "options": [
                    "Maruti",
                    "Honda",
                    "Hyundai",
                    "Toyota "
                ]
            };
            context.simpledb.roomleveldata.state = "which_car";
            context.sendResponse(JSON.stringify(which_car));
        }
    } else if (context.simpledb.roomleveldata.state == "car_registration_where") {
        if (msg == "delhi" || msg == "uttar pradesh" || msg == "haryana" || msg == "maharashtra") {
            var car_registered_when = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "When was your car registered?"
                },
                "msgid": "registered_car__when_100",
                "options": [
                    "2015",
                    "2014",
                    "2013",
                    "2012",
                    "2011",
                    "2010",
                    "Before 2010"
                ]
            };
            context.simpledb.roomleveldata.state = "car_registered_when";
            context.sendResponse(JSON.stringify(car_registered_when));
        } else {
            var car_registered_where = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Sorry that was an invalid input,Can you tell where was your car registered?"
                },
                "msgid": "registered_car__where_101",
                "options": [
                    "Delhi",
                    "Uttar Pradesh",
                    "Haryana",
                    "Maharashtra"
                ]
            };
            context.sendResponse(JSON.stringify(car_registered_where));
        }
    } else if (context.simpledb.roomleveldata.state == "car_registered_when") {
        if (msg == "2015" || msg == "2014" || msg == "2013" || msg == "2012" || msg == "2011" || msg == "2010" || msg == "before 2010") {
            var claim_taken_when = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Last claim taken?"
                },
                "msgid": "registered_car__when_100",
                "options": [
                    "Never",
                    "Less than 1 year ago",
                    "Nov 2014-Oct 2015",
                    "Nov 2013-Oct 2014",
                    "Nov 2012-Oct 2013",
                ]
            };
            context.simpledb.roomleveldata.state = "claim_taken_when";
            context.sendResponse(JSON.stringify(claim_taken_when));
        } else {
            var car_registered_when = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Sorry that was an invalid input,Can you tell where was your car registered?"
                },
                "msgid": "registered_car__when_100",
                "options": [
                    "2015",
                    "2014",
                    "2013",
                    "2012",
                    "2011",
                    "2010",
                    "Before 2010"
                ]
            };
            context.sendResponse(JSON.stringify(car_registered_when));

        }

    } else if (context.simpledb.roomleveldata.state == "claim_taken_when") {
        if (msg == "never" || msg == "less than 1 year ago" || msg == "nov 2014-oct 2015" || msg == "nov 2013-oct 2014" || msg == "nov 2012-oct 2013") {
            var lpg_cng = {
                "type": "survey",
                "question": "Is your car lpg or cng?",
                "msgid": "lpg_cng_501",
                "options": [
                    "Dont have CNG/LPG kit",
                    "Have company fitted",
                    "Have externally fitted"
                ]
            };
            context.simpledb.roomleveldata.state = "lpg_cng";
            context.sendResponse(JSON.stringify(lpg_cng));
        } else {
            var claim_taken_when = {
                "type": "quick_reply",
                "content": {
                    "type": "text",
                    "text": "Sorry that was an invalid input,When was your last claim taken?"
                },
                "msgid": "registered_car__when_100",
                "options": [
                    "Never",
                    "Less than 1 year ago",
                    "Nov 2014-Oct 2015",
                    "Nov 2013-Oct 2014",
                    "Nov 2012-Oct 2013",
                ]
            };
            context.sendResponse(JSON.stringify(claim_taken_when));
        }

    } else if (context.simpledb.roomleveldata.state == "lpg_cng") {
        if (msg == "dont have cng/lpg kit" || msg == "have company fitted" || msg == "have externally fitted") {
            var want_quote = {
                "type": "survey",
                "question": "We have evaluated your car,do you want your quotes?",
                "msgid": "lpg_cng_501",
                "options": [
                    "Yes",
                    "Start over",
                ]
            };
            context.simpledb.roomleveldata.state = "want_quote";
            context.sendResponse(JSON.stringify(want_quote));
        } else {
            var lpg_cng = {
                "type": "survey",
                "question": "That was an invalid output,is your car lpg or cng?",
                "msgid": "lpg_cng_501",
                "options": [
                    "Dont have CNG/LPG kit",
                    "Have company fitted",
                    "Have externally fitted"
                ]
            };
            context.sendResponse(JSON.stringify(lpg_cng));
        }
    } else if (context.simpledb.roomleveldata.state == "want_quote") {
        if (msg == "yes") {
            context.simpledb.roomleveldata.state = "end";
            context.sendResponse("OK.View the policy options by <br>clicking on the link here-<br>http://carpolicyoptions.com/")
        } else {
            var start_msg = {
                "type": "survey",
                "question": "Hi, there! What type of insurance are you looking for?",
                "msgid": "start_101",
                "options": [
                    "Car",
                    "Bike",
                ]
            };
            context.simpledb.roomleveldata.state = "start msg";
            context.sendResponse(JSON.stringify(start_msg));
        }
    }
}
/** Functions declared below are required **/
function EventHandler(context, event) {
    var start_msg = {
        "type": "survey",
        "question": "Hi, there! What type of insurance are you looking for?",
        "msgid": "start_101",
        "options": [
            "Car",
            "Bike",
        ]
    };
    context.simpledb.roomleveldata.state = "start msg";
    context.sendResponse(JSON.stringify(start_msg));
}

function HttpResponseHandler(context, event) {
// if(event.geturl === "http://ip-api.com/json")
    context.sendResponse(event.getresp);
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last get by:" + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last put by:" + event.dbval);
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

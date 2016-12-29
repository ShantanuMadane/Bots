

//LINK http://www.nsbindia.org/wp-admin/themes.php?page=optionsframework

var gupshup = {
	welcomeMsg: "Hi there! I am the NSB Bot and I can help you with your queries about National School of Business.<br>I'll need a few details quickly.<br>Please tell me your name?<br>",
	baseUrl: "http://faqplat-dev.gupshup.io/methods/returnAns",
	thanksMsg: "Hope the query was answered to your satisfaction.!!!",
	errorMsg: "I'm sorry. I'm having trouble understanding the question. I can help you better if you kindly be more specific. For any further assistance, please contact us at 9379244007 / 9379244004 or go to http://www.nsbindia.org",
	finalWelcomeMsg: "Thank you!<br>You can ask me anything around NSB rankings, placements, fees and so on."
};

var constants = {
	phone: "Great! What's your contact number?",
	email: "and lastly, what's your email ID?"

};

var NLP_API_KEY = "7065a93c3627401da7b926430733b094";


function MessageHandler(context, event) {

	var channelid = event.senderobj.channelid;
	var message = event.message.toLowerCase();
	var msgId = event.messageobj.refmsgid;
	var state = context.simpledb.roomleveldata[ "state" ];

	var name = context.simpledb.roomleveldata[ "name" ];
	var phone = context.simpledb.roomleveldata[ "phone" ];
	var email = context.simpledb.roomleveldata[ "email" ];

	if (message == "clear") {

		clearAll(context, event);

	} else if (state == "name") {

		context.simpledb.roomleveldata[ "state" ] = "phone";
		context.simpledb.roomleveldata[ "name" ] = message;
		context.sendResponse(constants.phone);

	} else if (state == "phone") {

		context.simpledb.roomleveldata[ "state" ] = "email";
		context.simpledb.roomleveldata[ "phone" ] = message;
		context.sendResponse(constants.email);

	} else if (state == "email") {

		context.simpledb.roomleveldata[ "state" ] = "";
		context.simpledb.roomleveldata[ "email" ] = message;

        // store anonymous user to set anonymous list
        storesUser(context, event, function (error, data) {

        	context.simpledb.roomleveldata[ "userid" ] = channelid;
        	var finalWelcomeMsg = gupshup.finalWelcomeMsg;

        	if (event.senderobj.channeltype == "fb") {
        		if (finalWelcomeMsg.includes("<br>")) {
        			var regex = /<br\s*[\/]?>/gi;

        			finalWelcomeMsg = finalWelcomeMsg.replace(regex, "\n");

                    //context.console.log( "if-if" );
                }
                //	context.console.log( "if" );
            }

            context.sendResponse(finalWelcomeMsg, "application/json");

        });

    } else if (name && phone && email) {

    	context.simpledb.roomleveldata[ "state" ] = "";

        // call NLP
        storeNlpQuestions(context, event);

    }

}

/** Functions declared below are required * */
function EventHandler(context, event) {

	var channelid = event.senderobj.channelid;
	var userId = context.simpledb.roomleveldata[ "userid" ];
	var date = context.simpledb.roomleveldata[ "date" ];

	if (userId && date) {

		if (date == getCurrentDate()) {
			var finalWelcomeMsg = gupshup.finalWelcomeMsg;

			if (event.senderobj.channeltype == "fb") {
				if (finalWelcomeMsg.includes("<br>")) {
					var regex = /<br\s*[\/]?>/gi;

					finalWelcomeMsg = finalWelcomeMsg.replace(regex, "\n");

                    //context.console.log( "if-if" );
                }
                //	context.console.log( "if" );
            }
            context.sendResponse(finalWelcomeMsg);


        } else {

        	context.simpledb.roomleveldata[ "state" ] = "name";
        	context.simpledb.roomleveldata[ "date" ] = getCurrentDate();

        	var welcomemsg = gupshup.welcomeMsg;

        	if (event.senderobj.channeltype == "fb") {
        		if (welcomemsg.includes("<br>")) {
        			var regex = /<br\s*[\/]?>/gi;

        			welcomemsg = welcomemsg.replace(regex, "\n");

                    //context.console.log( "if-if" );
                }
                //	context.console.log( "if" );
            }
            context.sendResponse(welcomemsg);
        }

    } else {

    	context.simpledb.roomleveldata[ "state" ] = "name";
    	context.simpledb.roomleveldata[ "date" ] = getCurrentDate();
    	var welcomemsg = gupshup.welcomeMsg;

    	if (event.senderobj.channeltype == "fb") {
    		if (welcomemsg.includes("<br>")) {
    			var regex = /<br\s*[\/]?>/gi;

    			welcomemsg = welcomemsg.replace(regex, "\n");

                //context.console.log( "if-if" );
            }
            //	context.console.log( "if" );
        }
        context.sendResponse(welcomemsg);
    }

}

function HttpResponseHandler(context, event) {

}

function DbGetHandler(context, event) {
	context.sendResponse("testdbput keyword was last get by:" + event.dbval);
}

function DbPutHandler(context, event) {
	context.sendResponse("testdbput keyword was last put by:" + event.dbval);
}
function storesUser(context, event, callback) {

	var db_key = "room:users_" + getCurrentDate();
	var message = event.message.toLowerCase();
	var channelid = event.senderobj.channelid;

	context.simpledb.doGet(db_key, function (context_, event_) {
		var data = [];
		var setCreds = {};

		var name = context.simpledb.roomleveldata[ "name" ];
		var phone = context.simpledb.roomleveldata[ "phone" ];

		if (event_.dbval) {

			data = event_.dbval;
			data = JSON.parse(data);
			setCreds.userid = channelid;
			setCreds.name = name;
			setCreds.email = message;
			setCreds.phone = phone;
			data.push(setCreds);

			context.simpledb.doPut(db_key, data, function (c, e) {

				return callback(null, "Success");

			});

		} else {

			data = data || [];
			setCreds.userid = channelid;
			setCreds.name = name;
			setCreds.email = message;
			setCreds.phone = phone;
			data.push(setCreds);

			context.simpledb.doPut(db_key, data, function (c, e) {

				return callback(null, "Success");

			});

		}

	});

}

//Download user question data
botRouter.on('get', '/userdata', function (c, e) {
    // context.sendResponse(e,"application/json");
    var context = c;
    var event = e;
    var resp = e;
    var obj = resp.headers;
    var message = "";
    var error = {
    	"status": "error",
    	"message": message
    };

    if (obj.authorization) {
    	if (obj.authorization == AUTHKEY) {

    		if (!resp.params.hasOwnProperty("date")) {

    			error.message = "date parameter is missing";
    			context.sendResponse(error, "application/json");
    			return;
    		}

    		if (!resp.params.date) {

    			error.message = "date value is missing";
    			context.sendResponse(error, "application/json");
    			return;
    		}

    		var date = resp.params.date;

    		var db_key = "room:questions_" + date;

    		context.simpledb.doGet(db_key, function (context_, event_) {
    			var data = [];

    			if (event_.dbval) {

    				data = event_.dbval;
    				data = JSON.parse(data);
    				var success = {
    					"status": "success",
    					"questions": data
    				};

    				context.sendResponse(success, "application/json");

    			} else {

    				var success = {
    					"status": "success",
    					"questions": data
    				};

    				context.sendResponse(success, "application/json");

    			}

    		});

    	} else {

    		error.message = "Bot key inavlid";
    		context.sendResponse(error, "application/json");
    	}
    } else {

    	error.message = "Authorization parameter is missing";
    	context.sendResponse(error, "application/json");
    }
});




function storeNlpQuestions(context, event) {

	var message = event.message.toLowerCase();
	var flag = true;
	var channelid = event.senderobj.channelid;

	var db_key = "room:questions_" + getCurrentDate();
    // var db_key = "room:questions_28112016";

    context.simpledb.doGet(db_key, function (context_, event_) {
    	var data = [];
    	var setCreds = {};
    	var questions = [];

    	if (event_.dbval) {

    		data = event_.dbval;

    		try {

    			data = JSON.parse(data);

    			for (var i = 0; i < data.length; i++) {

    				if (data[ i ].userid == channelid) {

    					questions = data[ i ].questions || [];
    					questions.push(message);
    					data[ i ].questions = questions;
    					context.simpledb.doPut(db_key, data, function (c, e) {

                            // call NLP here
                            nlp(context, event);

                        });

    					flag = false;
    					break;

    				}
    			}

    		} catch (e) {

    			data = [];

    		}
    	}
    	if (flag) {

    		data = data || [];
    		questions.push(message);
    		setCreds.userid = channelid;
    		setCreds.questions = questions;
    		data.push(setCreds);
    		context.simpledb.doPut(db_key, data, function (c, e) {
                // call NLP here
                nlp(context, event);
            });

    	}

    });

}

function nlp(context, event) {

	var message = event.message.toLowerCase();
	var apiAiOptions = {};
	apiAiOptions.message = message;
	apiAiOptions.nlpToken = NLP_API_KEY;
	apiAiOptions.sessionId = new Date().getTime() + 'api';
	apiAiOptions.callback = function (reply) {
		context.console.log("callback called");
		var nlpResp = reply[ 'result' ][ 'fulfillment' ][ 'speech' ];
		if(nlpResp.length > 0){

			  //context.sendResponse("INSIDE IF:"+nlpResp.length);
				handleAsPerChannel(context, event, nlpResp);
		}
		else{
            //context.sendResponse("INSIDE ELSE");
            var errMsg=gupshup.errorMsg;
           
            	if (errMsg.includes("http")) {
            	    
            	     if (event.senderobj.channeltype == "fb") {
        		var http = errMsg.substring(errMsg.indexOf('http'), errMsg.length);
        		var ahref = "<a href='" + http + "' target='_blank'>" + http + "</a>";
        		errMsg = errMsg.replace(http, ahref);
        		context.console.log("else-if");
            	     }
        	}
			context.sendResponse(errMsg);
			
		}
       
	
 
	};
	context.nlp.sendMessageToApiAi(apiAiOptions);
}

function handleAsPerChannel(context, event, res) {
	context.console.log("handleAsPerChannel called");
    // return context.sendResponse(gupshup.errorMsg);
    var errMsg = gupshup.errorMsg;
    if (res == "I am sorry, I do not understand your question.") {

    	if (event.senderobj.channeltype == "fb") {
    		if (res.includes("<br>")) {
    			var regex = /<br\s*[\/]?>/gi;

    			errMsg = errMsg.replace(regex, "\n");

                //context.console.log( "if-if" );
            }
            //	context.console.log( "if" );
        } else {
        	var errMsg = gupshup.errorMsg;
        	if (errMsg.includes("http")) {
        		var http = errMsg.substring(errMsg.indexOf('http'), errMsg.length);
        		var ahref = "<a href='" + http + "' target='_blank'>" + http + "</a>";
        		errMsg = errMsg.replace(http, ahref);
        		context.console.log("else-if");
        	}
            //context.console.log( "else-else" );
        }
        return context.sendResponse(errMsg);
    } else if (res.includes("http")) {

    	if (event.senderobj.channeltype == "fb") {
    		if (res.includes("<br>")) {
    			var regex = /<br\s*[\/]?>/gi;
    			res = res.replace(regex, "\n");
    		}
            // context.sendResponse(res);
        } else {
        	var http = res.substring(res.indexOf('http'), res.length);
        	var ahref = "<a href='" + http + "' target='_blank'>" + http + "</a>";
        	res = res.replace(http, ahref);
        }

        context.sendResponse(res);
    } else {

    	if (event.senderobj.channeltype == "fb") {
           
    		if (res.includes("<br>")) {
    			var regex = /<br\s*[\/]?>/gi;
    			res = res.replace(regex, "\n");
    			context.sendResponse(res);
    		} else {
    			context.sendResponse(res);
    		}
    	} else {
    		context.sendResponse(res);
    	}

    }

}
function getCurrentDate() {

	var currentDate = new Date()
	var day = currentDate.getDate()
	var month = currentDate.getMonth() + 1
	var year = currentDate.getFullYear()

	return [
	day < 10 ? '0' + day : day, month < 10 ? '0' + month : month, year
	].join('');
    //return '17122016';
}

function clearAll(context, event) {

	context.simpledb.clearAll(function (err) {
		if (err) {
			context.sendResponse(err);
		} else {
			context.sendResponse("Data Cleared!");
		}
	});

}

//-------------------------------------------------API------------------------------------

HttpEndpointHandler = botRouter.HttpEndpointHandler;
//Download user data
botRouter.on('get', '/getusers', function (c, e) {
    // context.sendResponse(e,"application/json");
    var context = c;
    var event = e;
    var resp = e;
    var obj = resp.headers;
    var message = "";
    var error = {
    	"status": "error",
    	"message": message
    };

    if (obj.authorization) {
    	if (obj.authorization == AUTHKEY) {

    		if (!resp.params.hasOwnProperty("date")) {

    			error.message = "Date parameter is missing";
    			context.sendResponse(error, "application/json");
    			return;
    		}

    		if (!resp.params.date) {

    			error.message = "date value is missing";
    			context.sendResponse(error, "application/json");
    			return;
    		}

    		var usertype = resp.params.usertype;
    		var date = resp.params.date;

    		var db_key = "room:users_" + date;

    		context.simpledb.doGet(db_key, function (context_, event_) {
    			var data = [];

    			if (event_.dbval) {

    				data = event_.dbval;
    				data = JSON.parse(data)
    				if (data.length != 0) {

    					var success = {
    						"status": "success",
    						"data": data
    					};

    					context.sendResponse(success);

    				}

    			} else {

    				var success = {
    					"status": "success",
    					"data": data
    				};

    				context.sendResponse(success, "application/json");

    			}

    		});

    	} else {

    		error.message = "Bot key inavlid";
    		context.sendResponse(error, "application/json");
    	}
    } else {

    	error.message = "Authorization parameter is missing";
    	context.sendResponse(error, "application/json");
    }
});

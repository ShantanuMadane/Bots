/** This is a sample code for your bot**/
function MessageHandler(context, event) {
    context.console.log("test")
    var msg=event.message.toLowerCase();
    var botname = event.botname;
    var contextobj = JSON.stringify(event.contextobj);

    if(msg == "hi" || msg=="hello" || msg=="start" || msg=="clear") {
       context.simpledb.roomleveldata.state="phone number";  
       context.sendResponse("Hi, I am your TestMinister Bot. The most simple yet powerful way to take tests and learn. You can take tests by choosing from a large test library and I will give you scorecards for tracking and benchmarking\n\nPlease provide your phone number to begin");
   }
   else if(context.simpledb.roomleveldata.state=="phone number"){
    context.simpledb.roomleveldata["phno"]=msg;
    context.simpledb.roomleveldata.state="get test list";
    var header = {"Content-Type": "application/x-www-form-urlencoded"};
    context.simpledb.saveData();
    context.simplehttp.makeGet('http://www.testminister.com/gupshup/api.php?action=getTestList&phone='+msg, header,function(c,e){
        var res=JSON.parse(e.getresp);
           // context.sendResponse(res);
           var data="Please select one of the id's\n";
           for(var i=0;i<res.length;i++){
            data=data+res[i]["id"];
            data=data+")";
            data=data+res[i]["test"];
            data=data+"\n";
        }
        context.sendResponse(data);
    });
}
else if(context.simpledb.roomleveldata.state=="get test list"){
 context.simpledb.roomleveldata.state="get question";
 var header = {"Content-Type": "application/x-www-form-urlencoded"};
 context.simplehttp.makeGet('http://www.testminister.com/gupshup/api.php?action=getQuestion&phone='+ context.simpledb.roomleveldata["phno"]+'&testid='+msg+'&response=',header,function(c,e){
    var res=JSON.parse(e.getresp);
    var totaldata=""; 
    var prevData="";
    if(res["Qid"]=="1"){
        prevData="";
    }
    else{
       // prevData+="Is Correct ?:";
        prevData+=res["IsCorrect"];
        prevData+="\n";
        prevData+="Previous Correct Answer:";
        prevData+=res["Prev Answer"];
        prevData+="\n";
        prevData+="Explanation:";
        prevData+=res["Explanation"];
        prevData+="\n";
    }


    MyMessageHandler(botname,contextobj,prevData,context,function(data){
        if(data){
         totaldata +="Attempted:";
         totaldata+=res["Attempted"];
         totaldata+="\n";

         totaldata+="Your Quiz Score:";
         totaldata+=res["Correct Answer(s)"];
         totaldata+="\n";
         totaldata+="Highest Quiz Score:";

         totaldata+=res["Highest Quiz Score"];
                   //totaldata+="\n";
                  //context.sendResponse(totaldata);    

                  MyMessageHandler(botname, contextobj, totaldata, context, function (data) {
                    if (data) {
                       var questionans="";
                       questionans+=res["Question"];
                       questionans+="\n";
                    
                       questionans+="(A)";
                       questionans+=res["A"];
                       questionans+="\n";
                       questionans+="(B)";
                       questionans+=res["B"];
                       questionans+="\n";
                       questionans+="(C)";
                       questionans+=res["C"];
                       questionans+="\n";
                       questionans+="(D)";
                       questionans+=res["D"];
                       questionans+="\n";
                       MyMessageHandler(botname,contextobj,questionans,context,function(data){
                         if(data){
                            var ansjson={
                                "type": "quick_reply",
                                "content": {
                                    "type": "text",
                                    "text": "  "
                                },
                                "msgid": "qr_212",
                                "options": [
                                "A","B","C","D"

                                ]
                            }
                            context.sendResponse(JSON.stringify(ansjson));
                        }
                    }) ;        


                   }
               });
              }
          });
});
}
else if(context.simpledb.roomleveldata.state=="get question"){
 if(msg=="a" || msg=="b" || msg=="c" || msg=="d"){  
    var header = {"Content-Type": "application/x-www-form-urlencoded"};
    context.simplehttp.makeGet('http://www.testminister.com/gupshup/api.php?action=getQuestion&phone='+ context.simpledb.roomleveldata["phno"]+'&testid='+context.simpledb.roomleveldata["testid"]+'&response='+msg,header,function(c,e){
       var res=JSON.parse(e.getresp);
       var totaldata=""; 
       var prevData="";
       if(res["Qid"]=="1"){
        prevData="";
    }
    else{
       // prevData+="Is Correct ?:";
        prevData+=res["IsCorrect"];
        prevData+="\n";
        prevData+="Previous Correct Answer:";
        prevData+=res["Prev Answer"];
        prevData+="\n";
        prevData+="Explanation:";
        prevData+=res["Explanation"];
        prevData+="\n";
    }


    MyMessageHandler(botname,contextobj,prevData,context,function(data){
        if(data){
         totaldata +="Attempted:";
         totaldata+=res["Attempted"];
         totaldata+="\n";

         totaldata+="Your Quiz Score:";
         totaldata+=res["Correct Answer(s)"];
         totaldata+="\n";
         totaldata+="Highest Quiz Score:";

         totaldata+=res["Highest Quiz Score"];
                   //totaldata+="\n";
                  //context.sendResponse(totaldata);    

                  MyMessageHandler(botname, contextobj, totaldata, context, function (data) {
                    if (data) {
                       var questionans="";
                       questionans+=res["Question"];
                       questionans+="\n";
    
                       questionans+="(A)";
                       questionans+=res["A"];
                       questionans+="\n";
                       questionans+="(B)";
                       questionans+=res["B"];
                       questionans+="\n";
                       questionans+="(C)";
                       questionans+=res["C"];
                       questionans+="\n";
                       questionans+="(D)";
                       questionans+=res["D"];
                       questionans+="\n";
                       MyMessageHandler(botname,contextobj,questionans,context,function(data){
                         if(data){
                            var ansjson={
                                "type": "quick_reply",
                                "content": {
                                    "type": "text",
                                    "text": "  "
                                },
                                "msgid": "qr_212",
                                "options": [
                                "A","B","C","D"

                                ]
                            }
                            context.sendResponse(JSON.stringify(ansjson));
                        }
                    }) ;        


                   }
               });
              }
          });
});
}
else{
   MyMessageHandler(botname,contextobj,"Oopsies! I am not trained for text. I only understand buttons :( ",context,function(data){
                         if(data){
                            var ansjson={
                                "type": "quick_reply",
                                "content": {
                                    "type": "text",
                                    "text": "Select one of option given below:"
                                },
                                "msgid": "qr_212",
                                "options": [
                                "A","B","C","D"

                                ]
                            }
                            context.sendResponse(JSON.stringify(ansjson));
                        }
                    }) ;        
 }
}
}
/** Functions declared below are required **/
function EventHandler(context, event) {
  context.simpledb.roomleveldata.state="phone number";  
  context.sendResponse("Hi, I am your TestMinister Bot. The most simple yet powerful way to take tests and learn. You can take tests by choosing from a large test library and I will give you scorecards for tracking and benchmarking\n\nPlease provide your phone number to begin");
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
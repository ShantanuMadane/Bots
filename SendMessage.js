/** This is a sample code for your bot**/
	    function MessageHandler(context, event) {
	        if(event.message=="Hello" || event.message=="Hi") {
	            var  botname=event.botname;
	            var contextobj=JSON.stringify(event.contextobj);
	            var s1=MyMessageHandler(botname,contextobj,"Hey",context,function(data){
	                if(data){
	                   var s2= MyMessageHandler(botname,contextobj,event.senderobj['display'].toString(),context,function(data2){
	                       if(data2){
	                         var s3=MyMessageHandler(botname,contextobj,"How can I help you?",context,function(data3){
	                         //Do Nothing     
	                         }); 
	                       } 
	                    });
	                }
	            });
                // MyMessageHandler(botname,contextobj,event.senderobj['display'].toString());
                // MyMessageHandler(botname,contextobj,"How can I help you?");
             
           }
	    } 
	    function MyMessageHandler(botname,contextobj,botmessage,context,callback){
	            var  url="http://api.gupshup.io/sm/api/bot/"+botname+"/msg";
	            var  header = {"Content-Type": "application/x-www-form-urlencoded"};
	            var  body = "apikey=4825b60b09ff46e5c6c104e0701cbd50&botname="+botname+"&context="+contextobj+"&message="+botmessage;
                // context.simplehttp.makePost(url,body,header);
                context.simplehttp.makePost(url,body,header,function(context,event){
                    context.console.log(event.message);
                    return callback(event.message);
                });
        
	    } 
	    /** Functions declared below are required **/
	    function EventHandler(context, event) {
	       
	    }
	
	    function HttpResponseHandler(context, event) {
	        // if(event.geturl === "http://ip-api.com/json")
	        context.console.log(event.getresp);
	       // context.sendResponse(event.getresp);
	    }
	
	    function DbGetHandler(context, event) {
	        context.sendResponse("testdbput keyword was last get by:" + event.dbval);
	    }
	
	    function DbPutHandler(context, event) {
	        context.sendResponse("testdbput keyword was last put by:" + event.dbval);
	    }
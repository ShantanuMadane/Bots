/** This is a sample code for your bot**/
	  var gupshup={
	        welcomeMsg:"Hi, I am "+String.fromCodePoint(0x26A1)+"Indian Rail Bot"+String.fromCodePoint(0x26A1)+". I will provide you all railway services.",
	        apiKey:"iuijc7579",
	        baseUrl:"http://api.railwayapi.com/",
// 	        service:[
// 			"Live Train Status (LTS)",
// 			"PNR Status (PS)",
// 			"Train Route (TR)",
// 			"Seat Availability (SA)",
// 			"Trains Between Stations (TBS)",
// 			"Train Name/Number (TN)",
// 			"Train Fare Enquiry (TFE)",
// 			"Train Arrivals at Station (TAS)",
// 			"Cancelled Trains (CT)",
// 			"Rescheduled Trains (RT)",
// 			"Station Name to Code (SNC)",
// 			"Station Code to Name (SCN)"
			
// 			],
            service:[
            "Live Train Status (LTS)",
 			"PNR Status (PS)",
			"Train Route (TR)",
 			"Seat Availability (SA)",
 			"Train Name/Number (TN)",
                ],
	        warning:[
			"You have typed worng keyword, type 'help'",
			"You have typed worng service name, type 'service'",
			"You have entered the wrong 'Train number' Please enter again",
			"You have entered the wrong 'Date' Please enter again",
			"You have entered the wrong 'Pnr number' Please enter again",
			"You have entered wong 'station code' Please enter again",
			"You have entered wong 'destination code' Please enter again",
			"You have entered wong 'class name' Please enter again",
			"You have entered wong 'Quota code' Please enter again",
			"You have entered wong 'Age' Please enter again",
			"You have entered wong 'Station name' Please enter again",
			"You have entered wong 'Station code' Please enter again"
			],
	        help:[
			"To see service list type 'service'",
			"To use any service type 'service name code'"
			],
	        stateQues:[
			"Please enter the train number",
			"Please enter date in 'YYYY-MM-DD' format",
			"Please enter 'PNR Number'",
			"Please enter source station code",
			"Please enter destination station code",
			"Please enter class code",
			"Please enter quota code code",
			"Please enter your age",
			"Please enter station name to code",
			"Please enter station code to name"
			]

	       
	   };
	   var corousel={
 						"type": "catalogue",
  						"msgid": "cat_212",
  						"items": [{
								    "title": "Live Train Status",
								    "subtitle": "Shows Live Status of Train",
								    "imgurl": "http://3.bp.blogspot.com/-SSNmTTMtxEo/Vd30FujzM5I/AAAAAAAAAFg/7sImRtz9Ca8/s1600/unnamed.png",
								    "options": [
								        
								            {
								        "type": "text",
								        "title": "LTS"
								      }

							    ]
							  }, 
							     {
							    "title": "PNR Status",
							    "subtitle": "Shows PNR Status of Train",
							    "imgurl": "http://4.bp.blogspot.com/-k4A9Yzvw4Q0/U8p7od-GCuI/AAAAAAAAFqo/ycG9S8lVaUY/s1600/Indian-Railways-PNR-status-Enquiry.jpg",
							    "options": [
							      	{
							      "type": "text",
							      "title": "PS"
							    }]
							  },
							  {
							    "title": "Train Route",
							    "subtitle": "Shows Route of Train",
							    "imgurl": "https://lh3.googleusercontent.com/vobkYj9gJbqGOzHOt63ygNoLOZpYww98S5wMXGBuynGUotoZ6E79riL3rX0kZEEvo74=w300",
							    "options": [
							      	{
							      "type": "text",
							      "title": "TR"
							    }]
							  },
							  // {
							  //   "title": "Seat Availability",
							  //   "subtitle": "Shows Availability of Seats in Train",
							  //   "imgurl": "http://associatedtravels.com/img/train-banner.jpg",
							  //   "options": [
							  //     	{
							  //     "type": "text",
							  //     "title": "SA"
							  //   }]
							  // },
							  {
							    "title": "Train Number",
							    "subtitle": "Shows Train Number",
							    "imgurl": "https://blog.kaspersky.com/files/2015/12/train-hack-featured-1.jpg",
							    "options": [
							      	{
							      "type": "text",
							      "title": "TN"
							    },
							    ]
							  },
							 // {
							 //   "title": "Train Between Stations",
							 //   "subtitle": "Shows Trains Between Stations",
							 //   "imgurl": "http://www.servicestation.org/wp-content/uploads/2012/08/service-station.jpg",
							 //   "options": [
							 //     	{
							 //     "type": "text",
							 //     "title": "TBS"
							 //   },
							 //   ]
							 // }
							  ]
							};
	   
	   
	    function MessageHandler(context, event) {
	       
	        /*Take a msg from user and convert into lower case*/
	        var msg = event.message.toLowerCase();
	        var state =context.simpledb.roomleveldata["state_"+event.sender];

	        /*Help start*/
	        if(msg.substr(0,4)=="help")
	        {
	        if(msg.length==4){
				
				
	        // var row="Help List:\n";  
	        // for (i = 0; i <gupshup.help.length; i++) 
	        // { 
	                     
         //    row =row+(i+1)+"- "+gupshup.help[i]+"\n";
                        
         //    }
			context.simpledb.roomleveldata["state_"+event.sender]="";			
	          context.sendResponse(JSON.stringify(corousel));   
	        }    
	        else
	        {
	        context.sendResponse(gupshup.warng[0]);     
	        }
	        
	        }
 			/*Help end*/


 			/*service start*/
	        else if(msg.substr(0,7)=="service")
	        {
	        if(msg.length==7){

 			var rowService="Services List:\n";

	       // for (i = 0; i <gupshup.service.length; i++) 
	       // { 
	                     
        //     rowService =rowService+(i+1)+"- "+gupshup.service[i]+"\n";
                        
        //     }
          
	        context.simpledb.roomleveldata["state_"+event.sender]="";    
	        context.sendResponse(JSON.stringify(corousel));    
	        }    
	        else
	        {
	        //context.sendResponse(gupshup.warning[0]);
	         context.sendResponse(JSON.stringify(corousel)); 
	        }
	        
	        }
			/*service end*/

			/*=================================Live train status start===================================================*/
			
	        else if(msg.substr(0,5)=="lts 1")
	        {
	        if(msg.length==5){

	        context.simpledb.roomleveldata["state_"+event.sender]="ltsState1";
	        context.sendResponse(gupshup.stateQues[0]);
           // var jsonObj=JSON.parse(gupshup.stateQues[0]);


	        }    
	        else
	        {
	       // context.sendResponse(gupshup.warning[1]);
	       context.sendResponse(JSON.stringify(corousel)); 
	        }
	        
	        }
			/*=================================Live train status end====================================*/
			
			/*=================================Pnr status start====================================*/
	        else if(msg.substr(0,4)=="ps 2")
	        {
	        if(msg.length==4){

	        context.simpledb.roomleveldata["state_"+event.sender]="psState1";
	        context.sendResponse(gupshup.stateQues[2]);    
	        }    
	        else
	        {
	        //context.sendResponse(gupshup.warning[1]);   
	        context.sendResponse(JSON.stringify(corousel)); 
	        }
	        
	        }
			 /*=================================Pnr status end====================================*/

	        /*=================================Train route start====================================*/
	        else if(msg.substr(0,4)=="tr 3")
	        {
	        if(msg.length==4){

	        context.simpledb.roomleveldata["state_"+event.sender]="trState1";
	        context.sendResponse(gupshup.stateQues[0]);    
	        }    
	        else
	        {
	        //context.sendResponse(gupshup.warning[1]);
	        context.sendResponse(JSON.stringify(corousel)); 
	        }
	        
	        }
			/*=================================Train route end====================================*/

	        /*=================================Seat availabity start====================================*/
	        else if(msg.substr(0,4)=="sa 4")
	        {
	        if(msg.length==4){

	        context.simpledb.roomleveldata["state_"+event.sender]="saState1";
	        context.sendResponse(gupshup.stateQues[0]);    
	        }    
	        else
	        {
	        //context.sendResponse(gupshup.warning[1]);   
	        context.sendResponse(JSON.stringify(corousel)); 
	        }
	        
	        }
			/*=================================Seat availabity end====================================*/
			
	        /*=================================Train between station start====================================*/
	        else if(msg.substr(0,5)=="tbs 5")
	        {
	        if(msg.length==5){

	        context.simpledb.roomleveldata["state_"+event.sender]="tbsState1";
	        context.sendResponse(gupshup.stateQues[3]);    
	        }    
	        else
	        {
	        //context.sendResponse(gupshup.warning[1]);     
                context.sendResponse(JSON.stringify(corousel)); 
	        }
	        
	        }
			/*=================================Train between station end====================================*/
			
			/*=================================Train name or number  start====================================*/
	        else if(msg.substr(0,4)=="tn 4")
	        {
	        if(msg.length==4){

	        context.simpledb.roomleveldata["state_"+event.sender]="tnState1";
	        context.sendResponse("Please Enter Train Name");    
	        }    
	        else
	        {
	       // context.sendResponse(gupshup.warning[1]);     
	       context.sendResponse(JSON.stringify(corousel)); 
	        }
	        
	        }
			/*=================================Train name or number  end====================================*/
			
			/*=================================Train fare start====================================*/
	        else if(msg.substr(0,3)=="tfe")
	        {
	        if(msg.length==3){

	        context.simpledb.roomleveldata["state_"+event.sender]="tfeState1";
	        context.sendResponse(gupshup.stateQues[0]);    
	        }    
	        else
	        {
	        context.sendResponse(gupshup.warning[1]);     
	        }
	        
	        }
			/*=================================Train fare end====================================*/
			
			/*=================================Train arival start====================================*/
	        else if(msg.substr(0,3)=="tas")
	        {
	        if(msg.length==3){

	        context.simpledb.roomleveldata["state_"+event.sender]="tasState1";
	        context.sendResponse(gupshup.stateQues[3]);    
	        }    
	        else
	        {
	        context.sendResponse(gupshup.warning[1]);     
	        }
	        
	        }
			/*=================================Train arival end====================================*/
			
			/*=================================Train cancel start====================================*/
	        else if(msg.substr(0,2)=="ct")
	        {
	        if(msg.length==2){

	        context.simpledb.roomleveldata["state_"+event.sender]="ctState1";
	        context.sendResponse(gupshup.stateQues[1]);    
	        }    
	        else
	        {
	        context.sendResponse(gupshup.warning[1]);     
	        }
	        
	        }
			/*=================================Train cancel end====================================*/
			/*=================================Train rescheudleTrain start====================================*/
	        else if(msg.substr(0,2)=="rt")
	        {
	        if(msg.length==2){

	        context.simpledb.roomleveldata["state_"+event.sender]="rtState1";
	        context.sendResponse(gupshup.stateQues[1]);    
	        }    
	        else
	        {
	        context.sendResponse(gupshup.warning[1]);     
	        }
	        
	        }
			/*=================================Train rescheudleTrain end====================================*/
			
			/*=================================Station name to code start====================================*/
	        else if(msg.substr(0,3)=="snc")
	        {
	        if(msg.length==3){

	        context.simpledb.roomleveldata["state_"+event.sender]="sncState1";
	        context.sendResponse(gupshup.stateQues[8]);    
	        }    
	        else
	        {
	        context.sendResponse(gupshup.warning[1]);     
	        }
	        
	        }
			/*=================================Station name to code end====================================*/
			
			/*=================================Station code to name start====================================*/
	        else if(msg.substr(0,3)=="scn")
	        {
	        if(msg.length==3){

	        context.simpledb.roomleveldata["state_"+event.sender]="scnState1";
	        context.sendResponse(gupshup.stateQues[9]);    
	        }    
	        else
	        {
	        context.sendResponse(gupshup.warning[1]);     
	        }
	        
	        }
			/*=================================Station code to name end====================================*/
			
			/*-----------------------------------------------------------------------------------*/
	        else if(state=="ltsState1"){


	        if(isNumber(parseInt(msg.trim()))  && parseInt(msg.trim())>0){

	        context.simpledb.roomleveldata["train_number_"+event.sender]=msg;
	        var trainNumber =msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="ltsState2";
	         liveTrainStatus(trainNumber);
	        //context.sendResponse(gupshup.stateQues[1]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[2]);	
	        }
	        }

			/*-----------------------------------------------------------------------------------*/
	        /*else if(state=="ltsState2"){

 			if(isValidDate(msg.trim())){
			context.simpledb.roomleveldata["date_"+event.sender]=msg;
			

	        //call liveTrainStatus function
	        var trainNumber=context.simpledb.roomleveldata["train_number_"+event.sender];
	    	var date=context.simpledb.roomleveldata["date_"+event.sender];
	    	//remove space and - from date

	    	var newDate=date.replace(/-/g, "").replace(/\s/g, "");
	    	
	        liveTrainStatus(trainNumber);
	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[3]);	
	        }
	        
	        }*/
		
			/*-----------------------------------------------------------------------------------*/
			else if(state=="psState1"){
	        if(isNumber(parseInt(msg.trim()))  && parseInt(msg.trim())>0){

	        context.simpledb.roomleveldata["pnr_number_"+event.sender]=msg;
	        
	        /*call liveTrainStatus function*/
	        var pnrNumber=context.simpledb.roomleveldata["pnr_number_"+event.sender];
	    
	        pnrStatus(pnrNumber);
	  
	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[4]);	
	        }
	        }

			/*-----------------------------------------------------------------------------------*/
	        else if(state=="trState1"){
	        if(isNumber(parseInt(msg.trim()))  && parseInt(msg.trim())>0){

	        context.simpledb.roomleveldata["train_number_"+event.sender]=msg;
	      

	       /*call train route function*/
	        var tarinNumber=context.simpledb.roomleveldata["train_number_"+event.sender];
	    
	        trainRoute(tarinNumber);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[2]);	
	        }
	        }
	        
	        /*-----------------------------------------------------------------------------------*/
	        else if(state=="saState1"){

	        if(isNumber(parseInt(msg.trim()))  && parseInt(msg.trim())>0){

	        context.simpledb.roomleveldata["train_number_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="saState2";
	        context.sendResponse(gupshup.stateQues[3]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[2]);	
	        }
	        }

	        /*-----------------------------------------------------------------------------------*/
	        else if(state=="saState2"){

	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["source_stn_code_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="saState3";
	        context.sendResponse(gupshup.stateQues[4]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[5]);	
	        }
	        }
	         /*-----------------------------------------------------------------------------------*/
	        else if(state=="saState3"){
	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["des_stn_code_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="saState4";
	        context.sendResponse(gupshup.stateQues[1]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[6]);	
	        }
	        }
	         /*-----------------------------------------------------------------------------------*/
	        else if(state=="saState4"){
	        if(isValidDate(msg.trim())){

	        context.simpledb.roomleveldata["date_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="saState5";
	        context.sendResponse(gupshup.stateQues[5]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[3]);	
	        }
	        }
	        /*-----------------------------------------------------------------------------------*/
	        else if(state=="saState5"){
	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["class_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="saState6";
	        context.sendResponse(gupshup.stateQues[6]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[7]);	
	        }
	        }
	        /*-----------------------------------------------------------------------------------*/
	        else if(state=="saState6"){
	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["qouta_"+event.sender]=msg;
	       

	        /*call train route function*/
	        var trainNumber_=context.simpledb.roomleveldata["train_number_"+event.sender];
	        var sourceStn=context.simpledb.roomleveldata["source_stn_code_"+event.sender];
	        var destinationStn=context.simpledb.roomleveldata["des_stn_code_"+event.sender];
	        var date_=context.simpledb.roomleveldata["date_"+event.sender];
	        var class_=context.simpledb.roomleveldata["class_"+event.sender];
	        var quota=context.simpledb.roomleveldata["qouta_"+event.sender];
			
	        seatAvailabity(trainNumber_,sourceStn,destinationStn,reverseDate(date_),class_,quota);
	        
	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[8]);	
	        }
	        }
			
			/*-----------------------------------------------------------------------------------*/
	        else if(state=="tbsState1"){

	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["source_stn_code_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="tbsState2";
	        context.sendResponse(gupshup.stateQues[4]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[5]);	
	        }
	        }
			 /*-----------------------------------------------------------------------------------*/
	        else if(state=="tbsState2"){
	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["des_stn_code_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="tbsState3";
	        context.sendResponse(gupshup.stateQues[1]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[6]);	
	        }
	        }
	      
			/*-----------------------------------------------------------------------------------*/
	        else if(state=="tbsState3"){
	        if(isValidDate(msg.trim())){

	        context.simpledb.roomleveldata["date_"+event.sender]=msg;
	       
			
	       /*call train route function*/
	        var sourceStn=context.simpledb.roomleveldata["source_stn_code_"+event.sender];
	        var destinationStn=context.simpledb.roomleveldata["des_stn_code_"+event.sender];
	        var date_=context.simpledb.roomleveldata["date_"+event.sender];
			var tempDate=date_.split("-");
			
			//call trainBwnStation method
			trainBwnStation(sourceStn,destinationStn,tempDate[2]+"-"+tempDate[1]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[3]);	
	        }
	        }
			
			/*-----------------------------------------------------------------------------------*/
	        else if(state=="tnState1"){
				
			//if(isNumber(parseInt(msg.trim()))  && parseInt(msg.trim())>0){

	        context.simpledb.roomleveldata["train_number_"+event.sender]=msg;
	        
			/*call train route function*/
	        var trainNumber=context.simpledb.roomleveldata["train_number_"+event.sender];
			
			//call train number and name method
			trainNumberName(trainNumber);

	       // }
	        
			}
			/*-----------------------------------------------------------------------------------*/
	        else if(state=="tfeState1"){

	        if(isNumber(parseInt(msg.trim()))  && parseInt(msg.trim())>0){

	        context.simpledb.roomleveldata["train_number_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="tfeState2";
	        context.sendResponse(gupshup.stateQues[3]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[2]);	
	        }
	        }

	        /*-----------------------------------------------------------------------------------*/
	        else if(state=="tfeState2"){

	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["source_stn_code_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="tfeState3";
	        context.sendResponse(gupshup.stateQues[4]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[5]);	
	        }
	        }
	         /*-----------------------------------------------------------------------------------*/
	        else if(state=="tfeState3"){
	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["des_stn_code_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="tfeState4";
	        context.sendResponse(gupshup.stateQues[1]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[6]);	
	        }
	        }
	         /*-----------------------------------------------------------------------------------*/
	        else if(state=="tfeState4"){
	        if(isValidDate(msg.trim())){

	        context.simpledb.roomleveldata["date_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="tfeState5";
	        context.sendResponse(gupshup.stateQues[7]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[3]);	
	        }
	        }
	        /*-----------------------------------------------------------------------------------*/
	        else if(state=="tfeState5"){
	        if(isNumber(parseInt(msg.trim())) && parseInt(msg.trim())>0){

	        context.simpledb.roomleveldata["age_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="tfeState6";
	        context.sendResponse(gupshup.stateQues[6]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[9]);	
	        }
	        }
	        /*-----------------------------------------------------------------------------------*/
	        else if(state=="tfeState6"){
	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["qouta_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="";

	        /*call train route function*/
	        var trainNumber_=context.simpledb.roomleveldata["train_number_"+event.sender];
	        var sourceStn=context.simpledb.roomleveldata["source_stn_code_"+event.sender];
	        var destinationStn=context.simpledb.roomleveldata["des_stn_code_"+event.sender];
	        var date_=context.simpledb.roomleveldata["date_"+event.sender];
	        var age=context.simpledb.roomleveldata["age_"+event.sender];
	        var quota=context.simpledb.roomleveldata["qouta_"+event.sender];
			
			var tempDate=date_.split("-");
			
	        trainFare(trainNumber_,sourceStn,destinationStn,tempDate[2]+"-"+tempDate[1]+"-"+tempDate[0],age,quota);
	        
	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[8]);	
	        }
	        }
			
			/*-----------------------------------------------------------------------------------*/
	        else if(state=="tasState1"){
	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["source_stn_code_"+event.sender]=msg;
	        

	        /*call train route function*/
	        var sourceStn=context.simpledb.roomleveldata["source_stn_code_"+event.sender];
	        trainAvailableStn(sourceStn);
	        
	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[5]);	
	        }
	        }
			
			/*-----------------------------------------------------------------------------------*/
	        else if(state=="ctState1"){
	        if(isValidDate(msg.trim())){

	        context.simpledb.roomleveldata["date_"+event.sender]=msg;
	        context.simpledb.roomleveldata["state_"+event.sender]="";
			
	       /*call train route function*/
	        var date_=context.simpledb.roomleveldata["date_"+event.sender];
			var tempDate=date_.split("-");
			
			//call trainBwnStation method
			cancelledTrain(tempDate[2]+"-"+tempDate[1]+"-"+tempDate[0]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[3]);	
	        }
	        }
			
		
			/*-----------------------------------------------------------------------------------*/
	        else if(state=="rtState1"){
	        if(isValidDate(msg.trim())){

	        context.simpledb.roomleveldata["date_"+event.sender]=msg;
	      
			
	       /*call train route function*/
	        var date_=context.simpledb.roomleveldata["date_"+event.sender];
			var tempDate=date_.split("-");
			
			//call trainBwnStation method
			rescheudleTrain(tempDate[2]+"-"+tempDate[1]+"-"+tempDate[0]);

	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[3]);	
	        }
	        }
			
			/*-----------------------------------------------------------------------------------*/
	        else if(state=="sncState1"){
	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["station_name_"+event.sender]=msg;
	       

	        /*call train route function*/
	        var stnName=context.simpledb.roomleveldata["station_name_"+event.sender];
	        stnNameToCode(stnName);
	        
	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[10]);	
	        }
	        }
			
			/*-----------------------------------------------------------------------------------*/
			 else if(state=="scnState1"){
	        if(!isNumber(parseInt(msg.trim()))){

	        context.simpledb.roomleveldata["station_code_"+event.sender]=msg;
	       

	        /*call train route function*/
	        var stnName=context.simpledb.roomleveldata["station_code_"+event.sender];
	        stnCodeToName(stnName);
	        
	        }
	        else
	        {
	        context.sendResponse(gupshup.warning[11]);	
	        }
	        }
			
			/*-----------------------------------------------------------------------------------*/
			else
	        {
	        context.sendResponse(JSON.stringify(corousel));
			}
		}
			
	    /** Functions declared below are required **/
	    function EventHandler(context, event) {
	   
	       // context.sendResponse(gupshup.welcomeMsg);

	       MyMessageHandler(event.botname,JSON.stringify(event.contextobj),gupshup.welcomeMsg,context,function(data){
            if(data){
            	//context.sendResponse(JSON.stringify(err));
            	 context.sendResponse(JSON.stringify(corousel));
            }
	       });
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
	
	    function HttpResponseHandler(context, event) {
	        // if(event.geturl === "http://ip-api.com/json")
	       

	        if(context.simpledb.roomleveldata["state_"+event.sender]=="ltsState2"){
	           //context.sendResponse(event.getresp);	
	           context.simpledb.roomleveldata["state_"+event.sender]="";
	           var finalObj=JSON.parse(event.getresp);
               //context.sendResponse(event.getresp);
               if(finalObj['response_code']==200){ 
               context.sendResponse("Train Position:"+finalObj["position"]+"\n"+"Train Number:"+finalObj["train_number"]+"\n");
               }
            else{
           	 context.sendResponse("No Results Found"+"\n");
             }

	        }
	       
	         else if(context.simpledb.roomleveldata["state_"+event.sender]=="psState1"){
	         	context.simpledb.roomleveldata["state_"+event.sender]="";
	        	var finalObj=JSON.parse(event.getresp);
	        	var passengers=JSON.stringify(finalObj["passengers"]);
	        	var finalpassengers="";
	        	for(var i=0;i<finalObj["passengers"].length;i++){
	        		finalpassengers+="\n"+"Current Status:"+finalObj["passengers"][i]["current_status"]
	        		+"\nCoach Position:"+finalObj["passengers"][i]["current_status"]
	        		+"\nBooking Status:"+finalObj["passengers"][i]["booking_status"]
	        		+"\n------------------------------\n";
             	}
	        	//context.sendResponse(event.getresp);
	        	if(finalObj['response_code']==200){ 
	        	context.sendResponse("Train Name:"+finalObj["train_name"]+"\n"+"Class:"+finalObj["class"]+"\n"+"Total Passengers:"+finalObj["total_passengers"]+"\n"+"DOJ:"+finalObj["doj"]+"\n"+"Passengers:"+finalpassengers);
                }
                else{
                	context.sendResponse("No Results Found");
                }
	        }
	         else if(context.simpledb.roomleveldata["state_"+event.sender]=="trState1"){
	         	context.simpledb.roomleveldata["state_"+event.sender]="";
	        	var finalObj=JSON.parse(event.getresp);
	        	var routes=""
	        	for(var i=0;i<finalObj.route.length;i++){
	        		routes+=finalObj["route"][i]["fullname"];
	        		routes+="--";
	        	}
	        	if(finalObj['response_code']==200){ 
	        	context.sendResponse(routes);
	        	}
	        	else{
	        		context.sendResponse("No Results Found");
	        	}
	        }
	         else if(context.simpledb.roomleveldata["state_"+event.sender]=="saState6"){

	         	context.simpledb.roomleveldata["state_"+event.sender]="";
	         //	context.sendResponse();
	        	var finalObj=JSON.parse(event.getresp);
	           // context.sendResponse(JSON.stringify(finalObj));
	        	context.console.log(finalObj);
	        	var availability=JSON.stringify(finalObj["availability"]);
	            if(finalObj['response_code']==200){  
	        	context.sendResponse("Train Name:"+finalObj["train_name"]+"\n"+"Train Number:"+finalObj["train_number"]+"\n"+"Availability:"+availability); 
	            }
	            else{
	            	context.sendResponse("No Results Found");
	            }
	        }
	         else if(context.simpledb.roomleveldata["state_"+event.sender]=="tbsState3"){
	         	context.simpledb.roomleveldata["state_"+event.sender]="";
	        	var finalObj=JSON.parse(event.getresp);
	             tbsCallback(finalObj,function(data){
	             	if(data)
                   context.sendResponse(data);
	             });

	        	function tbsCallback(finalObj,callback){
	        		var finalstr=""
	        	for(var i=0;i<finalObj["train"].length;i++){
	        		
	        		finalstr+="--------------------------------";
	        		finalstr+="Train No:";
	        		finalstr+=i;
	        		finalstr+="\n";
	        		finalstr+="Name:";
	        		finalstr+=finalObj["train"][i]["name"];
	        		finalstr+="\n";
	        		finalstr+="Train Number:";
	        		finalstr+=finalObj["train"][i]["number"];
	        		finalstr+="\n";
	        		finalstr+="Source Departure Time:";
	        		finalstr+=finalObj["train"][i]["src_departure_time"];
	        		finalstr+="\n";
	        		finalstr+="Destination Arrival Time:";
	        		finalstr+=finalObj["train"][i]["dest_arrival_time"];
	        		finalstr+="\n";
	        		finalstr+="Travel Time:";
	        		finalstr+=finalObj["train"][i]["travel_time"];
	        		finalstr+="\n";
	        		finalstr+="--------------------------------";
	        	}
	        	return callback(finalstr);
	        }
	        	

	        }
	         else if(context.simpledb.roomleveldata["state_"+event.sender]=="tnState1"){
	         	context.simpledb.roomleveldata["state_"+event.sender]="";
	        	var finalObj=JSON.parse(event.getresp);
	        	  if(finalObj['response_code']==200){  
	        	context.sendResponse("Train Name:"+finalObj["train"]["name"]+"\n"+"Train Number:"+finalObj["train"]["number"]);
	               }
	               else{
	               		context.sendResponse("No Results Found");
	               }

	        }
	         else if(context.simpledb.roomleveldata["state_"+event.sender]=="tfeState6"){
	         	context.simpledb.roomleveldata["state_"+event.sender]="";
	        	var finalObj=JSON.parse(event.getresp);
	        	context.sendResponse("Train Name:"+finalObj["train"]["name"]+"\n"+"Train Number:"+finalObj["train"]["number"]+"\n"+
	        		"Fare:"+finalObj["fare"]);;

	        }
	         else if(context.simpledb.roomleveldata["state_"+event.sender]=="tasState1"){
	         	context.simpledb.roomleveldata["state_"+event.sender]="";
	        	var finalObj=JSON.parse(event.getresp);
	        	var finalstr="";
	        	for(var i=0;i<finalObj["train"].length;i++){
	        		finalstr+="--------------------------------";
	        		finalstr+="Train No:";
	        		finalstr+=i;
	        		finalstr+="\n";
	        		finalstr+="Name:";
	        		finalstr+=finalObj[i]["name"];
	        		finalstr+="\n";
	        		finalstr+="Train Number:";
	        		finalstr+=finalObj[i]["number"];
	        		finalstr+="\n";
	        		finalstr+="Arrival Time:";
	        		finalstr+=finalObj[i]["scharr"];
	        		finalstr+="\n";
	        		finalstr+="--------------------------------";
	        	}
	        	context.sendResponse(finalstr);


	        }
	         else if(context.simpledb.roomleveldata["state_"+event.sender]=="ctState1"){
	         	context.simpledb.roomleveldata["state_"+event.sender]="";
	        	var finalObj=JSON.parse(event.getresp);
	        	var finalstr="";
	        	for(var i=0;i<finalObj["trains"].length;i++){
	        		finalstr+="--------------------------------";
	        		finalstr+="Train No:";
	        		finalstr+=i;
	        		finalstr+="\n";
	        		finalstr+="Name:";
	        		finalstr+=finalObj[i]["train"]["name"];
	        		finalstr+="\n";
	        		finalstr+="Train Number:";
	        		finalstr+=finalObj[i]["train"]["number"];
	        		finalstr+="\n";
	        		finalstr+="--------------------------------";
	        		}	
	        	context.sendResponse(finalstr);

	        }
	        else if(context.simpledb.roomleveldata["state_"+event.sender]=="rtState1"){
               context.simpledb.roomleveldata["state_"+event.sender]="";
	        	var finalObj=JSON.parse(event.getresp);
	        	var finalstr="";
	        	for(var i=0;i<finalObj["trains"].length;i++){
	        		finalstr+="--------------------------------";
	        		finalstr+="Train No:";
	        		finalstr+=i;
	        		finalstr+="\n";
	        		finalstr+="Name:";
	        		finalstr+=finalObj[i]["name"];
	        		finalstr+="\n";
	        		finalstr+="Train Number:";
	        		finalstr+=finalObj[i]["number"];
	        		finalstr+="\n";
	        		finalstr+="Rescheduled Date:";
	        		finalstr+=finalObj[i]["rescheduled_date"];
	        		finalstr+="\n"; 
	        		finalstr+="Rescheduled Time:";
	        		finalstr+=finalObj[i]["rescheduled_time"];
	        		finalstr+="\n"; 
	        		finalstr+="Time Difference:";
	        		finalstr+=finalObj[i]["time_difference"];
	        		finalstr+="\n"; 
	        	}
	        	context.sendResponse(finalstr);

	        }
	        else if(context.simpledb.roomleveldata["state_"+event.sender]=="sncState1"){
                  context.simpledb.roomleveldata["state_"+event.sender]="";
	        	var finalObj=JSON.parse(event.getresp);
	        	var finalstr="";
	        	for(var i=0;i<finalObj["stations"].length;i++){
	        		finalstr+="--------------------------------";
	        		finalstr+="Station Name:";
	        		finalstr+=finalObj[i]["fullname"];
	        		finalstr+="\n";
	        		finalstr+="Code:";
	        		finalstr+=finalObj[i]["code"];
	        		finalstr+="\n";

	        	}
	        	context.sendResponse(finalstr);
	        }
	        
	    }
	
	    function DbGetHandler(context, event) {
	        context.sendResponse("testdbput keyword was last get by:" + event.dbval);
	    }
	
	    function DbPutHandler(context, event) {
	        context.sendResponse("testdbput keyword was last put by:" + event.dbval);
	    }
	    
	    function DbPutHandler(context, event) {
	        context.sendResponse("testdbput keyword was last put by:" + event.dbval);
	    }
 //--------------------------------------All function start-----------------------------------------------------
	    //Get Live running status of Train.
	    function liveTrainStatus(trainNumber) {

			/*create url for request*/
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1; //January is 0!
			mm=mm.toString();
			if(mm.length==1)
			{
				mm="0"+mm;
			}
			var yyyy = today.getFullYear();
			var datestr=yyyy+"-"+mm+"-"+dd;
			var newDate=datestr.replace(/-/g, "").replace(/\s/g, "");
			//context.sendResponse("tabs"+datestr);
	    	var url=gupshup.baseUrl+"live/train/"+trainNumber+"/doj/"+newDate+"/apikey/"+gupshup.apiKey;
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json); 
	    	
	       
	    }

	    //Get PNR status details.
	    function pnrStatus(pnrNumber) {

	    	/*create url for request*/
	    	var url=gupshup.baseUrl+"pnr_status/pnr/"+pnrNumber+"/apikey/"+gupshup.apiKey;
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	       
	    }

	    //Get details about the Stations in a Train’s route.
	     function trainRoute(trainNumber) {
	       /*create url for request*/
	    	var url=gupshup.baseUrl+"route/train/"+trainNumber+"/apikey/"+gupshup.apiKey;
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	    }

	    //Get Train Seat Availability.
	     function seatAvailabity(trainNumber,source,destination,date,className,qouta) {
			 
			 /*create url for request*/
	    	var url=gupshup.baseUrl+"check_seat/train/"+trainNumber+"/source/"+source+"/dest/"+destination+"/date/"+date+"/class/"+className+"/quota/"+qouta+"/apikey/"+gupshup.apiKey;
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	       
	    }

	    //train between stations
	     function trainBwnStation(source,destination,date) {
			 
			  
			 /*create url for request*/
	    	var url=gupshup.baseUrl+"between/source/"+source+"/dest/"+destination+"/date/"+date+"/apikey/"+gupshup.apiKey;
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	       
	    }

	    //Get Train name using number and vice versa.
	    function trainNumberName(trainNumber) {
			
			 /*create url for request*/
	    	var url=gupshup.baseUrl+"name_number/train/"+trainNumber+"/apikey/"+gupshup.apiKey;
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	       
	    }

	    //Get Fares of Train.
	    function trainFare(trainNumber,source,destination,date,age,qouta) {
			
			 /*create url for request*/
	    	var url=gupshup.baseUrl+"fare/train/"+trainNumber+"/source/"+source+"/dest/"+destination+"/age/"+age+"/quota/"+qouta+"/doj/"+date+"/apikey/"+gupshup.apiKey;
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	       
	    }

	    //Get list of Trains arriving on a station within given hours with their scheduled time and live status included.
	    function trainAvailableStn(stnCode) {
			
			 /*create url for request*/
	    	var url=gupshup.baseUrl+"arrivals/station/"+stnCode+"/hours/2/apikey/"+gupshup.apiKey;
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	       
	    }

	    //Get list of all Cancelled Trains on a particular day.
	     function cancelledTrain(date) {
	        /*create url for request*/
	    	var url=gupshup.baseUrl+"cancelled/date/"+date+"/apikey/"+gupshup.apiKey;
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	    }

	    //Get list of Rescheduled Trains on the given date.
	    function rescheudleTrain(date) {
			
			 /*create url for request*/
	    	var url=gupshup.baseUrl+"rescheduled/date/"+date+"/apikey/"+gupshup.apiKey;
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	       
	    }

	    //Get station details of given station and nearby stations using station name with automatic name completion.
	    function stnNameToCode(stnName) {
			
		
			 /*create url for request*/
	    	var url=gupshup.baseUrl+"name_to_code/station/"+stnName+"/apikey/"+gupshup.apiKey; 
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	       
	    }

	    //Get Station details of the passed Station and other nearby Stations using Station code
	    function stnCodeToName(stnCode) {
			
			 /*create url for request*/
	    	var url=gupshup.baseUrl+"code_to_name/code/"+stnCode+"/apikey/"+gupshup.apiKey; 
	    	/*create json for request*/
	    	var json=JSON.stringify({
			"base_url": ""+url,
			"method": "get",
			"get_params": [],
			"post_params": [],
			"headers": []
			});
	    	
            context.simplehttp.makeGet("http://interns.teamchat.com:8080/RequestHandler/RequestClient?json="+json);
	       
	    }

	    //Suggest full Station names using partial Station name.
	    function stnNameAutoComplete(functionName,stnName,apiKey) {
	       
	    }

	    //Suggest completed Train names or numbers given a partial Train name or number.
	    function trainNameAutoComplete(functionName,trainNumber,apiKey) {
	       
	    }

	    /*Check response is number or not*/
	    function isNumber(n) { 
        
        return /^-?[\d.]+(?:e-?\d+)?$/.test(n); 
        
    }
	    
/**
 * isValidDate(str)
 * @param string str value yyyy-mm-dd
 * @return boolean true or false
 * IF date is valid return true
 */
function isValidDate(str){
	// STRING FORMAT yyyy-mm-dd
	if(str==="" || str===null){return false;}								
	
	// m[1] is year 'YYYY' * m[2] is month 'MM' * m[3] is day 'DD'					
	var m = str.match(/(\d{4})-(\d{2})-(\d{2})/);
	
	// STR IS NOT FIT m IS NOT OBJECT
	if( m === null || typeof m !== 'object'){return false;}				
	
	// CHECK m TYPE
	if (typeof m !== 'object' && m !== null && m.size!==3){return false;}
				
	var ret = true; //RETURN VALUE						
	var thisYear = new Date().getFullYear(); //YEAR NOW
	var minYear = 1999; //MIN YEAR
	
	// YEAR CHECK
	if( (m[1].length < 4) || m[1] < minYear || m[1] > thisYear){ret = false;}
	// MONTH CHECK			
	if( (m[2].length < 2) || m[2] < 1 || m[2] > 12){ret = false;}
	// DAY CHECK
	if( (m[3].length < 2) || m[3] < 1 || m[3] > 31){ret = false;}
	
	return ret;			
}
// reverse string
function reverseDate(str) {
    var date = str.split("-");
	var temp="";
    temp=date[2]+"-"+date[1]+"-"+date[0];
    return temp;
}
function hasWhiteSpace(str) {
  return /\s/g.test(str);
}




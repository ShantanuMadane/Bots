function EventHandler(context, event) 
{
    var txt = JSON.stringify({"type":"survey","question":"Hello. Welcome to PAYBACK, one of India's largest rewarding loyalty program. What would you like to do?","options":["Earn Points","Redeem Points"],"msgid":"3er45"}) ;
     context.sendResponse(txt);
     return;
}
function MessageHandler(context, event) {
var txt=JSON.stringify({"type":"survey","question":"Hello. Welcome to PAYBACK, one of India's largest rewarding loyalty program. What would you like to do?","options":["Earn Points","Redeem Points"],"msgid":"3er45"});
var msg = event.message.toLowerCase();

if(msg == "welcome" || msg == "hi" || msg == "hello" || msg == "botmappedevent" || msg == "hi" || msg == "hello" || msg == "botmappedevent"){ txt = JSON.stringify({"type":"survey","question":"Hello. Welcome to PAYBACK, one of India�\u0080\u0099s largest rewarding loyalty program. What would you like to do?","options":["Earn Points","Redeem Points"],"msgid":"3er45"}) ;
context.sendResponse(txt);
return;
}
else if(event.messageobj.refmsgid=="3er45" && event.message=="Earn Points")
{
context.simpledb.botleveldata.status="Earn Points";	
txt = JSON.stringify({"type":"catalogue","msgid":"cat_212","items":[{"title":"Flipkart","subtitle":"Earn upto 8 points per Rs. 100 spent","imgurl":"http://moneybachaoo.in/admin/images/logo/New-Flipkart-Logo.jpg","options":[{"type":"text","title":"Shop"}]},{"title":"Make My Trip","subtitle":"Earn upto 600 points for every transaction","imgurl":"http://www.afaqs.com/all/news/images/news_story_grfx/2016/03/47488/MakeMyTrip.com-New-Logo.jpg","options":[{"type":"text","title":"Shop"}]},{"title":"Jabong","subtitle":"Earn upto 12 points per Rs. 100 spent","imgurl":"http://uploads.ecbilla.com/press/new-coo-of-jabong","options":[{"type":"text","title":"Shop"}]}]}) ;
context.sendResponse(txt);
return;
}
else if(event.messageobj.refmsgid=="cat_212" && context.simpledb.botleveldata.status=="Earn Points"){
	context.simpledb.botleveldata.company="";
	 context.simpledb.botleveldata.status = "PhoneNumber";
     switch(event.message){
     	case "Shop 1":
     	     context.simpledb.botleveldata.company="Flipkart";
     	     break;
        case "Shop 2":
             context.simpledb.botleveldata.company="Make My Trip";
     	     break;
     	case "Shop 3":
     	     context.simpledb.botleveldata.company="Jabong";   
     	     break;
     } 
    context.sendResponse("Please enter your PAYBACK linked mobile number"); 
    return;
  
  }
 else if(context.simpledb.botleveldata.status=="PhoneNumber"){
 	context.simpledb.botleveldata.status="";
 	var website=context.simpledb.botleveldata.company;
 	website=website.toLowerCase().replace(" ","");
 	var PhoneNumber=event.message;
 	if(isNaN(PhoneNumber)){
 		context.sendResponse("Phone Number Invalid");
 		return;
 	}
 	else{
 		context.sendResponse("Congratulations. You are one step away from earning PAYBACK points at "+"http://www."+website+".com/");
 	    return;  
 	}
 }  
else if(event.message=="Redeem Points"){
	context.simpledb.botleveldata.status="Redeem Points";	
	var catalogue={
  "type": "catalogue",
  "msgid": "cat_512",
  "items": [{
    "title": "Home and Kitchen",
    "subtitle": "",
    "imgurl": "http://ceesquare.com/wp-content/uploads/2016/04/kitchen-decor-elegant-home-design-ideas-amazing-decor-with-fascinating.jpg",
    "options": [
       {
        "type": "text",
        "title": "Select"
      }

    ]
  }, 
     {
    "title": "Computers & Accessories",
    "subtitle": "",
    "imgurl": "https://internetdevices.files.wordpress.com/2012/05/desktop-computer-accessories.jpg",
    "options": [
      
        {
      "type": "text",
      "title": "Select"
    }]
  },
  {
    "title": "Health and Beauty",
    "subtitle": "",
    "imgurl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6EYxfjVZPlHKs_mNOUw-mu6RmTXSIWuzr84YAHoR7iz7Uv-2V",
    "options": [
        {
      "type": "text",
      "title": "Select"
    }]
  }
  ]
};
 context.sendResponse(JSON.stringify(catalogue));
 }
else if(event.messageobj.refmsgid=="cat_512" && context.simpledb.botleveldata.status=="Redeem Points"){
	context.simpledb.botleveldata.company="";
	// context.simpledb.botleveldata.status = "PhoneNumber";
     switch(event.message){
     	case "Select 1":
     	     //context.simpledb.botleveldata.company="Home and Kitchen";
   var catalogue={
  "type": "catalogue",
  "msgid": "cat_612",
  "items": [{
    "title": "Wooden Slotted Turner With Silicon Gripper",
    "subtitle": "1280 Points",
    "imgurl": "https://rewards.payback.in/app/catalogImages/RWAG400_400.jpg",
    "options": [
       {
        "type": "url",
        "title": "Redeem Now",
        "url": "https://rewards.payback.in/products/view/RWAG400/home-and-kitchen%7Ckitchenware"
      }

    ]
  }, 
     {
    "title": "Signoraware Easy Flow Set Of 2 (450Ml And 1Ltr)",
    "subtitle": "1784 Points",
    "imgurl": "https://rewards.payback.in/app/catalogImages/RWN699_400.jpg",
    "options": [
       {
      "type": "url",
        "title": "Redeem Now",
        "url": "https://rewards.payback.in/products/view/RWN699/home-and-kitchen%7Ckitchenware"
    }]
  },
  {
    "title": "Tupperware Steam It",
    "subtitle": "4000 Points",
    "imgurl": "https://rewards.payback.in/app/catalogImages/RWN3088_400.jpg",
    "options": [
        {
      "type": "url",
        "title": "Redeem Now",
        "url": "https://rewards.payback.in/products/view/RWN3088/home-and-kitchen%7Ckitchenware"
    }]
  }
  ]
};
context.sendResponse(JSON.stringify(catalogue));
     	     break;
        case "Select 2":
             //context.simpledb.botleveldata.company="Computers & Accessories";
                var catalogue={
  "type": "catalogue",
  "msgid": "cat_712",
  "items": [{
    "title": "Sandisk Micro SDHC 8GB card",
    "subtitle": "1640 Points",
    "imgurl": "https://rewards.payback.in/app/catalogImages/R13310_400.jpg",
    "options": [
       {
        "type": "url",
        "title": "Redeem Now",
        "url": "https://rewards.payback.in/products/view/R13310/electronics%7Ccomputer-and-accessories"
      }

    ]
  }, 
     {
    "title": "Portronics Charge One 5200 mAH Power Bank",
    "subtitle": "6236 Points",
    "imgurl": "https://rewards.payback.in/app/catalogImages/RWN2722_400.jpg",
    "options": [
       {
      "type": "url",
        "title": "Redeem Now",
        "url": "https://rewards.payback.in/products/view/RWN2722/electronics%7Ccomputer-and-accessories"
    }]
  },
  {
    "title": "Google Chromecast 2",
    "subtitle": "13324 Points",
    "imgurl": "https://rewards.payback.in/app/catalogImages/RWN3331_400.jpg",
    "options": [
        {
      "type": "url",
        "title": "Redeem Now",
        "url": "https://rewards.payback.in/products/view/RWN3331/electronics%7Ccomputer-and-accessories"
    }]
  }
  ]
};
context.sendResponse(JSON.stringify(catalogue));
     	     break;
     	case "Select 3":
     	     //context.simpledb.botleveldata.company="Health and Beauty";   
   var catalogue={
  "type": "catalogue",
  "msgid": "cat_812",
  "items": [{
    "title": "Anna Andre, Paris Make up kit 10052",
    "subtitle": "1332 Points",
    "imgurl": "https://rewards.payback.in/app/catalogImages/RWN1421_400.jpg",
    "options": [
       {
        "type": "url",
        "title": "Redeem Now",
        "url": "https://rewards.payback.in/products/view/RWN1421/beauty-health-and-gourmet%7Chealth-and-beauty"
      }

    ]
  }, 
     {
    "title": "Travel Cosmetic Pouch",
    "subtitle": "2068 Points",
    "imgurl": "https://rewards.payback.in/app/catalogImages/RWN3138_400.jpg",
    "options": [
       {
      "type": "url",
        "title": "Redeem Now",
        "url": "https://rewards.payback.in/products/view/RWN3138/beauty-health-and-gourmet%7Chealth-and-beauty"
    }]
  },
  {
    "title": "Fitbit Zip Wireless Activity Tracker",
    "subtitle": "17456 Points",
    "imgurl": "https://rewards.payback.in/app/catalogImages/RWN3623_400.jpg",
    "options": [
        {
      "type": "url",
        "title": "Redeem Now",
        "url": "https://rewards.payback.in/products/view/RWN3623/beauty-health-and-gourmet%7Chealth-and-beauty"
    }]
  }
  ]
};
context.sendResponse(JSON.stringify(catalogue));

     	     break;
     }   
  
  }

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

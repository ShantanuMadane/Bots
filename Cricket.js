/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/** This is a sample code for your bot**/
function MessageHandler(context, event) {
    //context.sendResponse(event.message);
    if (event.message == "View Details 1") {
        context.simpledb.botleveldata.status = "matchapi";
        //context.sendResponse(context.simpledb.botleveldata.status);
        context.simpledb.saveData();
        context.simplehttp.makeGet('http://cricapi.com/api/cricket');
    }

}
/** Functions declared below are required **/
function EventHandler(context, event) {
    var botname = event.botname;
    var contextobj = JSON.stringify(event.contextobj);
    var s1 = MyMessageHandler(botname, contextobj, "Hello :)!! I am cricketbot, Please select one of the option below.", context, function (data) {
        if (data) {
            var catalogue = {
                "type": "catalogue",
                "msgid": "cat_212",
                "items": [{
                        "title": "On Going Cricket Matches",
                        "subtitle": "Shows list of Matches",
                        "imgurl": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTgExem_ob-u4Bv4RNTkkCMOZN5qz6pU5u6czoaQhjQslDs8Coo_g",
                        "options": [
                            {
                                "type": "text",
                                "title": "View Details",
                            }
                        ]
                    },
                    {
                        "title": "Cricket News",
                        "subtitle": "Provides latest Cricket News",
                        "imgurl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSejojInAfZzlOPwB-m2VGmLyTNrB_T70MynSZSPtoP0Qmkmzsh",
                        "options": [
                            {
                                "type": "text",
                                "title": "View Details"

                            }

                        ]
                    }]
            };
            context.sendResponse(JSON.stringify(catalogue));
        }
    });
}
function MyMessageHandler(botname, contextobj, botmessage, context, callback) {
    var url = "http://api.gupshup.io/sm/api/bot/" + botname + "/msg";
    var header = {"Content-Type": "application/x-www-form-urlencoded"};
    var body = "apikey=4825b60b09ff46e5c6c104e0701cbd50&botname=" + botname + "&context=" + contextobj + "&message=" + botmessage;
    // context.simplehttp.makePost(url,body,header);
    context.simplehttp.makePost(url, body, header, function (context, event) {
        //context.console.log(event.message);
        return callback(event.message);
    });


}

function HttpResponseHandler(context, event) {
    // if(event.geturl === "http://ip-api.com/json")
    //context.sendResponse(event.getresp);
    var data = event.getresp;
    if (context.simpledb.botleveldata.status == "matchapi")
    {
        //context.sendResponse(event.getresp);
        var cat = {
            "type": "catalogue",
            "msgid": "msgid12"
        };
        var obj = JSON.parse(event.getresp);
        var data = obj.data;
        // context.sendResponse(JSON.stringify(data));
        var items = [];
        for (var i = 0; i < data.length && i < 10; i++) {
            var temptitle = data[i].title;
            context.console.log("temptitle:" + temptitle);
            var scores = temptitle.match(/[0-9]+\/[0-9]{1,2}/g);
            temptitle = temptitle.replace(scores[0], "");
            //context.console.log("temptitle1:" + temptitle);
            temptitle = temptitle.replace(scores[1], "");
            //context.console.log("temptitle2:" + temptitle);
            var item = {
                "title": temptitle,
                "subtitle": "",
                "imgurl": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Cricket_pictogram.svg",
                "options": [
                    {
                        "type": "text",
                        "title": "View Details",
                    }
                ]
            }
            items.push(item);
        }
        cat.items = items;
        context.console.log(JSON.stringify(cat));
        context.sendResponse(JSON.stringify(cat));
    }
}
function DbGetHandler(context, event) {
    //context.sendResponse("testdbput keyword was last get by:" + event.dbval);
}

function DbPutHandler(context, event) {
    //context.sendResponse("testdbput keyword was last put by:" + event.dbval);
}
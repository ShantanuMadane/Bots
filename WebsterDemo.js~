 var welcome = "Hi! Let's have some fun with words.\nTake up a challenge and unjumble as many words as you can.\nP.S – I have some very tough ones! Are you ready?\nHere are a few keywords you could use (don't jumble them):\n\nChallenge : To start the challenge.\n\nPass : To skip the current word.";
 var wining_msg = "Nicely done, here's another one: ,,Perfect, here's another one: ,,Good, Here's another one: ";
 var error_msg = "Uh Oh! Not right. Try again or type pass to skip.";
 var msg = "";
 var words = "cycle,synonymous,cover,probable,auspicious,threatening,fearless,heavenly,amazing,honorable,uptight,growth,answer,station,medical,fairies,jealous,boring,weight,curtain,north,crazy,carve,lovely,scary,nostalgic,anxious,trucks,condition,nonstop,carpenter,nutritious,blind,kneel,voice,thinkable,scatter,brother,collar,selection,rhythm,cooperative,chicken,discover,swift,treatment,remain,zebra,inexpensive,amusing,canvas,squeeze,cheerful,aftermath,turn,wound,present,raise,abstracted,reply,divide,skillful,include,cream,dirty,zipper,wholesale,magnificent,yard,animated,functional,rebel,thick,charge,spare,ghost,dream,plastic,bleach,pause,sneaky,stomach,rhyme,grade,disappear,tricky,legal,cellar,sturdy,charming,experience,water,haunt,control,rifle,efficient,release,shirt,flash,believe,marked,cherries,upset,homeless,touch,credit,purpose,difficult,planes,polish,expensive,lying,harass,horn,hammer,guarantee,robin,reaction,fortunate,attach,damaged,digestion,point,society,stranger,strap,horrible,dependent,gentle,airplane,spark,best,grass,trouble,queen,unlock,panicky,curious,excite,coordinated,devilish,fixed,acoustic,found,necessary,songs,imperfect,structure,match,boast,cross,spotted,remind,energetic,flood,remarkable,thrill,yielding,cheater,trade,messy,hideous,vanish,stick,invent,passenger,mother,fence,smooth,count,obtainable,thirsty,girls,stretch,whisper,fragile,brainy,addition,produce,circle,supply,zippy,copper,multiply,important,elastic,kitty,motionless,match,adjoining,annoyed,helpless,stupid,general,seashore,embarrass,flashy,preach,rings,gaze,rigid,visitor,polite,metal,basket,receptive,actor,succeed,decide,relation,governor,purring,noisy,channel,fruit,wipe,interesting,unequal,thundering,comparison,soap,battle,thoughtful,detailed,friends,plant,reach,flowers,ignorant,creature,order,bridge,actually,twist,story,fireman,elegant,futuristic,uneven,cabbage,recognise,unkempt,letters,wealth,volleyball,discovery,female,small,oranges,change,flesh,staking,adjustment,historical,special,harsh,space,light,quick,brash,film,allow,question,curly,office,normal,scarecrow,authority,tedious,precious,rescue,rabbit,helpful,peace,mindless,knowledge,lively,cough,level,aboard,stiff,mate,stitch,stage,mature,brake,guitar,science,command,bumpy,broken,vague,placid,curved,picture";

 function MessageHandler(context, event) {

     msg = event.message.toLowerCase();
     msg = msg.trim();

     context.console.log("Message : " + msg);

     var userword = context.simpledb.roomleveldata["userword_" + event.sender];
     var success_no = context.simpledb.roomleveldata["success_no_" + event.sender];
     var fail_no = context.simpledb.roomleveldata["fail_no_" + event.sender];



     if (msg == "challenge") {
         var sendWordToUser = sendJumbleWord(context, event);
         context.sendResponse("Try this: " + sendWordToUser);
     } else if (msg == "pass") {
         if (userword.length > 0) {
             context.simpledb.roomleveldata["fail_no_" + event.sender] = 0;
             var pass = sendJumbleWord(context, event);
             context.sendResponse("Try this: " + pass);
         } else {
             context.sendResponse("Hey! First start the challenge.");
         }

     } else if (msg == "/start") {
         context.simpledb.roomleveldata["success_no_" + event.sender] = 0;
         context.simpledb.roomleveldata["fail_no_" + event.sender] = 0;
         context.simpledb.roomleveldata["userword_" + event.sender] = "";
         context.sendResponse(welcome);
     } else if (msg == "startchattingevent") {
         var hasRead = context.simpledb.roomleveldata["kik_" + event.sender];
         if (!hasRead) {
             context.simpledb.roomleveldata["success_no_" + event.sender] = 0;
             context.simpledb.roomleveldata["fail_no_" + event.sender] = 0;
             context.simpledb.roomleveldata["userword_" + event.sender] = "";
             context.simpledb.roomleveldata["kik_" + event.sender] = true;
             context.sendResponse(welcome);
         }
     } else if (msg == "help" || msg == "hi" || msg == "hello" || msg == "start chatting" || msg == "botaddedtocontacts") {
         context.simpledb.roomleveldata["success_no_" + event.sender] = 0;
         context.simpledb.roomleveldata["fail_no_" + event.sender] = 0;
         context.simpledb.roomleveldata["userword_" + event.sender] = "";
         context.sendResponse(welcome);
     } else if (userword.length > 0) {
         if (msg.length == userword.length) {
             var link = "http://www.anagramica.com/all/" + msg;
             context.simplehttp.makeGet(link);
         } else {
             if (fail_no >= 0) {
                 fail_no = fail_no + 1;
             } else {
                 fail_no = 0;
             }
             context.simpledb.roomleveldata["fail_no_" + event.sender] = fail_no;
             if (fail_no == 3) {
                 context.sendResponse("Awww…no problem, you are close. Rub your  eyes, crack your knuckles and give it another go…");
             } else if (fail_no == 6) {
                 context.sendResponse("No no! don’t hurry, give it some thought…yes you are getting it…");
             } else if (fail_no == 9) {
                 fail_no = 0;
                 context.sendResponse("Come on dude! Try a little harder…");
             } else {
                 context.sendResponse(error_msg);
             }
             context.simpledb.roomleveldata["fail_no_" + event.sender] = fail_no;
         }
     }
     else
     {
     context.sendResponse("Sorry could'nt get you,Please type help");
     }


 }

 function sendJumbleWord(context, event) {
     var data = words.split(",");
     var x = Math.floor((Math.random() * data.length));
     var correctWord = data[x];
     context.console.log("correct word : " + correctWord);
     var scrambleword = scramble(correctWord);
     context.console.log("scramble word : " + scrambleword);
     context.simpledb.roomleveldata["userword_" + event.sender] = correctWord;
     return scrambleword;
 }

 function scramble(originalword) {
     var splitword = originalword.split("");
     for (var i = 0; i < splitword.length; i++) {
         var r = Math.floor((Math.random() * splitword.length));
         var temp = splitword[i];
         splitword[i] = splitword[r];
         splitword[r] = temp;
     }
     var scrambleword = splitword.join("");

     if (originalword == scrambleword) {
         scrambleword = scramble(originalword);
     }
     return scrambleword;
 }

 function EventHandler(context, event) {
     var hasRead = context.simpledb.roomleveldata["kik_" + event.sender];
     if (!hasRead) {
         context.simpledb.roomleveldata["success_no_" + event.sender] = 0;
         context.simpledb.roomleveldata["fail_no_" + event.sender] = 0;
         context.simpledb.roomleveldata["userword_" + event.sender] = "";
         context.simpledb.roomleveldata["kik_" + event.sender] = true;
         context.sendResponse(welcome);
     }
 }

 function HttpResponseHandler(context, event) {
     var userword = context.simpledb.roomleveldata["userword_" + event.sender];
     var resp = JSON.parse(event.getresp);
     var allwords = resp.all;

     var win_msg = wining_msg.split(",,");

     var r = Math.floor((Math.random() * win_msg.length));

     var send_msg = win_msg[r];

     var found = 0;

     for (var i = 0; i < allwords.length; i++) {
         if (allwords[i] == msg) {
             found = 1;
             break;
         } else {
             found = 0;
         }
     }

     if (found == 1) {
         var success = context.simpledb.roomleveldata["success_no_" + event.sender];
         if (success >= 0) {
             success = success + 1;
         } else {
             success = 0;
         }
         context.simpledb.roomleveldata["success_no_" + event.sender] = success;
         scrambleword = sendJumbleWord(context, event);
         if (success == 3) {
             context.sendResponse("Dude! You are a pro! I am feeling a little nervous…go on try the next one: " + scrambleword);
         } else if (success == 6) {
             context.sendResponse("I am getting beaten up!!! You sure know your words. Lets hop to the next one: " + scrambleword);
         } else if (success == 9) {
             success = 0;
             context.sendResponse("Shoot! You are like the dictionary! Loving it. Keep playing: " + scrambleword);
         } else {
             context.sendResponse(send_msg + scrambleword);
         }
         context.simpledb.roomleveldata["success_no_" + event.sender] = success;
     } else {
         var fail_no = context.simpledb.roomleveldata["fail_no_" + event.sender];
         if (fail_no >= 0) {
             fail_no = fail_no + 1;
         } else {
             fail_no = 0;
         }
         context.simpledb.roomleveldata["fail_no_" + event.sender] = fail_no;
         if (fail_no == 3) {
             context.sendResponse("Awww…no problem, you are close. Rub your  eyes, crack your knuckles and give it another go…");
         } else if (fail_no == 6) {
             context.sendResponse("No no! don’t hurry, give it some thought…yes you are getting it…");
         } else if (fail_no == 9) {
             fail_no = 0;
             context.sendResponse("Come on dude! Try a little harder…");
         } else {
             context.sendResponse(error_msg);
         }
         context.simpledb.roomleveldata["fail_no_" + event.sender] = fail_no;
     }
 }

 function DbGetHandler(context, event) {}

 function DbPutHandler(context, event) {}

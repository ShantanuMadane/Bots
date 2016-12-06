var attempt = 3;
$(document).keypress(function(e) {
    if (e.which == 13) {
        $("input#login").trigger("click");
      }
});
function validate() {
    var username = $("#botuserid").val();
    var password = $("#botpass").val();
  //  alert(username+password);
    if(username.length > 0 && password.length > 0){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://stag-solutions.teamchat.com/BotAnalyticsV2/api/v1/login",
        "method": "POST",
        "headers": {
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {
            "bot_name": username,
            "password": password
        }
    }
    
    ajaxindicatorstart("Please wait...");
   $.ajax(settings).done(function(response) {
        if (!(response.state == "error")) {
            var token = response.token;
            var bot_id = response.id;
            var bot_name=response.name;
            var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}};
            var encodedToken = Base64.encode(token);
            $("#errmsg").html("Login successfully").attr("style", "color:#00cc00");
            //secondCall();
            ajaxindicatorstop();
            window.location = "./public/html/botAnalytics.html?token="+encodedToken+"&id="+bot_id+"&bot_name="+bot_name;
            // Redirecting to other page.
            return false;
        } else {
            attempt--; // Decrementing by one.
            $("#errmsg").html("Invalid Username or Password </br> No. of attempts left: " + attempt).attr("style", "color:#cc0000");
            $("#errmsg").removeClass("hide");
            setTimeout(function() {
                $("#errmsg").html("");
            }, 5000);
           ajaxindicatorstop();
            // Disabling fields after 3 attempts.
            if (attempt == 0) {
                $("#botuserid").attr("disabled", "disabled");
                $("#botpass").attr("disabled", "disabled");
                $("#login").attr("disabled", "disabled");
                return false;
            }
        }

    })
    .fail( function(xhr, textStatus, errorThrown) {
        ajaxindicatorstop();
        $("#myModal").modal();
        
    });

}
else{
    $("#errmsg").html("Username or Password cannot be Empty").attr("style","color:#cc0000");
    $('#errmsg').removeClass('hide');
     setTimeout(function() {
            $("#errmsg").addClass("hide");
        }, 5000);
}
   
}

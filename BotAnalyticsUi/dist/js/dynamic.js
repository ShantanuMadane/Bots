var botfunctionLength;
var bot_id = $('#bot_id').val();
var encodedtoken = $('#token').val();
var botname = $('#botname').val();
var maxtextlength = 40;
$(function () {
    //Date 
    $('#bot_name').html(botname);
    var someDate = new Date();
    var year = someDate.getFullYear();
    var month = someDate.getMonth() + 1;
    var date = someDate.getDate();
    var startdate = "" + year;
    startdate += "-";
    startdate += month;
    startdate += "-";
    startdate += date;
    //console.log(startdate);
    if (date == 30 || date == 31) {
        switch (month) {
            case 1:
                date = 1
                month = month + 1;
                break;
            case 2:
                break;
            case 3:
                date = 1;
                month = month + 1;
                break;
            case 4:
                month = month + 1;
                break;
            case 5:
                date = 1;
                month = month + 1;
                break;
            case 6:
                month = month + 1;
                break;
            case 7:
                date = 1
                month = month + 1;
                break;
            case 8:
                date = 1;
                month = month + 1;
                break;
            case 9:
                month = month + 1;
                break;
            case 10:
                date = 1;
                month = month + 1;
                break;
            case 11:
                month = month + 1;
                break;
            case 12:
                date = 1;
                month = month + 1;
                year = year + 1;
                break;

        }
    }
    var enddate = "" + year;
    enddate += "-";
    enddate += month;
    enddate += "-";
    enddate += date + 1;
    $('input[name="daterange"]').daterangepicker({
        locale: {
            format: 'YYYY-MM-DD'
        },
        startDate: startdate,
        endDate: enddate
    });
    //alert("alert");
    dynamicFunction.botFunction("", "");
    // dynamicFunction.pieChart();
    var obj = {};
    $('#submitbtn').on('click', function () {
        var daterange = $('#daterange').val();
        //console.log("SUBMIT");
        //console.log(daterange);
        var datearr = daterange.split("-");
        //console.log(datearr);
        var startdate = datearr[0] + "-" + datearr[1] + "-" + datearr[2];
        var enddate = datearr[3] + "-" + datearr[4] + "-" + datearr[5];
        //console.log(startdate)
        //console.log(enddate);
        dynamicFunction.botFunction(startdate, enddate);

    });


});


var dynamicFunction = {
    botFunction: function (startdate, enddate) {
        if (startdate.length > 0 && enddate.length > 0) {
          //  console.log("IN BOT FUNCTION IF");
            //console.log(startdate)
            //console.log(enddate)
        } else {
            var date = moment.utc(new Date()).local();
            var someDate = new Date(date);
            var year = someDate.getFullYear();
            var month = someDate.getMonth() + 1;
            var date = someDate.getDate();

            var startdate = "" + year;
            startdate += "-";
            startdate += month;
            startdate += "-";
            startdate += date;
            //console.log(startdate);
            if (date == 30 || date == 31) {
                switch (month) {
                    case 1:
                        date = 1
                        month = month + 1;
                        break;
                    case 2:
                        break;
                    case 3:
                        date = 1;
                        month = month + 1;
                        break;
                    case 4:
                        month = month + 1;
                        break;
                    case 5:
                        date = 1;
                        month = month + 1;
                        break;
                    case 6:
                        month = month + 1;
                        break;
                    case 7:
                        date = 1
                        month = month + 1;
                        break;
                    case 8:
                        date = 1;
                        month = month + 1;
                        break;
                    case 9:
                        month = month + 1;
                        break;
                    case 10:
                        date = 1;
                        month = month + 1;
                        break;
                    case 11:
                        month = month + 1;
                        break;
                    case 12:
                        date = 1;
                        month = month + 1;
                        year = year + 1;
                        break;

                }
            }
            var enddate = "" + year;
            enddate += "-";
            enddate += month;
            enddate += "-";
            enddate += date + 1;
        }
        //console.log(startdate);
        //console.log(enddate)
        var epochstart = new Date(startdate).valueOf();
        //console.log(Math.round(epochstart/1000));
        //console.log(enddate);
        var epochend = new Date(enddate).valueOf() - 1;
        //console.log(Math.round(epochend/1000));
        //someDate = someDate.getTime();
        //console.log(someDate);

        var Base64 = {_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) {
                var t = "";
                var n, r, i, s, o, u, a;
                var f = 0;
                e = Base64._utf8_encode(e);
                while (f < e.length) {
                    n = e.charCodeAt(f++);
                    r = e.charCodeAt(f++);
                    i = e.charCodeAt(f++);
                    s = n >> 2;
                    o = (n & 3) << 4 | r >> 4;
                    u = (r & 15) << 2 | i >> 6;
                    a = i & 63;
                    if (isNaN(r)) {
                        u = a = 64
                    } else if (isNaN(i)) {
                        a = 64
                    }
                    t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
                }
                return t
            }, decode: function (e) {
                var t = "";
                var n, r, i;
                var s, o, u, a;
                var f = 0;
                e = e.replace(/[^A-Za-z0-9+/=]/g, "");
                while (f < e.length) {
                    s = this._keyStr.indexOf(e.charAt(f++));
                    o = this._keyStr.indexOf(e.charAt(f++));
                    u = this._keyStr.indexOf(e.charAt(f++));
                    a = this._keyStr.indexOf(e.charAt(f++));
                    n = s << 2 | o >> 4;
                    r = (o & 15) << 4 | u >> 2;
                    i = (u & 3) << 6 | a;
                    t = t + String.fromCharCode(n);
                    if (u != 64) {
                        t = t + String.fromCharCode(r);
                    }
                    if (a != 64) {
                        t = t + String.fromCharCode(i);
                    }
                }
                t = Base64._utf8_decode(t);
                return t
            }, _utf8_encode: function (e) {
                e = e.replace(/rn/g, "n");
                var t = "";
                for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r)
                    } else if (r > 127 && r < 2048) {
                        t += String.fromCharCode(r >> 6 | 192);
                        t += String.fromCharCode(r & 63 | 128);
                    } else {
                        t += String.fromCharCode(r >> 12 | 224);
                        t += String.fromCharCode(r >> 6 & 63 | 128);
                        t += String.fromCharCode(r & 63 | 128);
                    }
                }
                return t
            }, _utf8_decode: function (e) {
                var t = "";
                var n = 0;
                var r = c1 = c2 = 0;
                while (n < e.length) {
                    r = e.charCodeAt(n);
                    if (r < 128) {
                        t += String.fromCharCode(r);
                        n++;
                    } else if (r > 191 && r < 224) {
                        c2 = e.charCodeAt(n + 1);
                        t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                        n += 2;
                    } else {
                        c2 = e.charCodeAt(n + 1);
                        c3 = e.charCodeAt(n + 2);
                        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                        n += 3;
                    }
                }
                return t;
            }};

        var token = Base64.decode(encodedtoken);
        //console.log("Token = "+token+"\nbotid= "+bot_id);
        var settings = {
            "async": true,
            "crossDomain": true,
            //***************Server**************
            "url": "http://stag-solutions.teamchat.com/BotAnalyticsV2/api/v1/botcustomdata",
            // "dataType": 'jsonp',
            //***************Dev*****************
            //"url":"http://5b20b5fc.ngrok.io/BotAnalyticsV2/api/v1/botdata",
            "method": "POST",
            "headers": {
                "authorization": token,
                "content-type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            "data": {
                "bot_id": bot_id,
                "from_date": Math.round(epochstart / 1000),
                "to_date": Math.round(epochend / 1000)
            }
        };
        $.ajax(settings).done(function (response) {
            var obj = response;
            botfunctionLength = obj.result[0].botfunction.length;
            var $html = '';
            //console.log(obj.result[0].survey.length);
            dynamicFunction.drawBoxes(obj, function (data) {
                if (data) {
                  //  console.log("MIAMI");
                  //  console.log(data);
                    dynamicFunction.drawBoxesBotFunction(obj);
                    dynamicFunction.pieChart(obj, function (data) {
                        dynamicFunction.dataChartTable(obj);
                        dynamicFunction.stage(obj);
                    });
                }
            });


        });

    },
    drawBoxes: function (obj, callback) {
        var $html = '';
        var background = ["bg-yellow", "bg-green", "bg-red"];
        for (var i = 0; i < obj.result[0].survey.length; i++) {
            $html += '<div class="col-lg-3 col-xs-6 boxf">';
            $html += '<!-- small box -->';
            $html += ' <div class="small-box ' + background[i] + '">';
            $html += '<div class="inner">';
            $html += ' <h3>' + obj.result[0].survey[i].value + '</h3>';
            $html += '<p>' + obj.result[0].survey[i].name + '</p>';
            $html += '</div>';
            $html += '<div class="icon" style="font-size:60px;margin-top:20px">';
            $html += '<i class="glyphicon glyphicon-user"></i>';
            $html += '</div>';
            $html += '</div>';
            $html += '</div>';
        }
        $('.surveys').html($html);
        return callback(true);

    },
    drawBoxesBotFunction: function (obj) {
        var background = ["bg-blue", "bg-black", "bg-purple", "bg-aqua"];
        //console.log(obj.result[0].botfunction);
        var botfunction = obj.result[0].botfunction;
        var $html = '';
       
        for (var i = 0; i < botfunction.length; i++) {
            var rand = background[i % 4];
            //var rand = background[Math.floor(Math.random() * background.length)];
            $html += '<div class="col-lg-3 col-xs-6 boxf">';
            $html += '<!-- small box -->';
            $html += ' <div class="small-box ' + rand + '">';
            $html += '<div class="inner">';
            $html += ' <h3>' + botfunction[i].value + '</h3>';
            $html += '<p>' + botfunction[i].name + '</p>';
            $html += '</div>';
            $html += '<div class="icon" style="font-size:60px;margin-top:20px">';
            $html += '<i class="glyphicon glyphicon-user"></i>';
            $html += '</div>';
            $html += '</div>';
            $html += '</div>';
        }
        $('.surveys').append($html);
        if ((3 + (botfunctionLength)) > 5 && (botfunctionLength % 2) == 0)
        {
            $('.boxf').removeClass('col-lg-3').addClass('col-lg-4');
        } else if ((3 + (botfunctionLength)) > 5)
        {
            $('.boxf').removeClass('col-lg-3').addClass('col-lg-3');
        } else
        {
            $('.boxf').css("width", "20%");
        }

    },
    pieChart: function (obj, callback) {
        var $html = '';
        var col = 4;
        switch (botfunctionLength) {
            case 1:
            case 2:
            case 5:
                //$('.tabsize').removeClass('col-lg-4').addClass('col-lg-6');
                col = 6;
                break;
        }
        ;
        for (var i = 0; i < obj.result[0].botfunction.length; i++) {
            var botActivity = obj.result[0].botfunction[i].name;
            $html += '<section class="col-lg-' + col + ' connectedSortable">';
            $html += ' <!-- Custom tabs (Charts with tabs)-->';
            $html += '<div class="nav-tabs-custom">';
            $html += '  <!-- Tabs within a box -->';
            $html += '<ul class="nav nav-tabs pull-right">';
            $html += '<li class="active"><a href="#piechart' + i + '" data-toggle="tab">Graph</a></li>';
            $html += '<li><a href="#sales-chart' + i + '" data-toggle="tab">Data</a></li>';
            $html += ' <li class="pull-left header fontmedia"><i class="fa fa-inbox"></i>' + botActivity + ' </li>';
            $html += ' </ul>';
            $html += '<div class="tab-content">';
            /*     $html+='<!-- Morris chart - Sales -->';
             $html+=' <!-- <div class="chart tab-pane active" id="revenue-chart" style="position: relative; height: 300px;"></div>';
             $html+='<div class="chart tab-pane" id="naklisales-chart'+i+'" style="position: relative; height: 300px;"></div> -->';*/
            $html += '<div class="chart tab-pane active" id="piechart' + i + '" style="width:relative;   height: inherit;min-height: 220px;"></div>';
            $html += '<div class="chart tab-pane" id="sales-chart' + i + '" style="position: relative; height:inherit;min-height: 220px;"></div>';
            $html += ' </div>';
            $html += ' </div>';
            $html += ' <!-- /.nav-tabs-custom -->';
            $html += ' </div>';
            $html += '</section>'

        }
        $("#pieChartData").html($html);
        for (var i = 0; i < obj.result[0].botfunction.length; i++) {
            var name = obj.result[0].botfunction[i].data.columns[0].value;
            var value = obj.result[0].botfunction[i].data.columns[1].value;

            var piarray = [];
            var t = ['Task', 'Hours per Day'];
            piarray.push(t);

            for (var j = 0; j < name.length && value.length; j++) {
                var push1 = [];
                push1.push(name[j]);
                push1.push(parseInt(value[j]));
                piarray.push(push1);

            }
            var data = google.visualization.arrayToDataTable(piarray);
            var options = {
                title: 'Bot Activities',
                is3D: true,
                sliceVisibilityThreshold: 0,
                slices: {0: {color: '#00A65A'}, 1: {color: '#F39C12'}, 2: {color: '#DD4b39'}},
            };
            var chart = new google.visualization.PieChart(document.getElementById('piechart' + i));
            chart.draw(data, options);
        }
        return callback(true);
    },
    dataChartTable: function (obj) {
        var botfunction = obj.result[0].botfunction;
        for (var i = 0; i < botfunction.length; i++) {
            var $html = '';
            $html += '<table class="table table-striped table-bordered">';
            $html += '<tr>';
            $html += '<thead class="headcolor">';
            for (var j = 0; j < botfunction[i].data.columns.length; j++) {
                $html += '<th class="td-align-center">' + botfunction[i].data.columns[j].name + '</th>';
            }
            $html += ' </thead>';
            $html += '</tr>';
            var total = 0;
            for (var k = 0; k < botfunction[i].data.columns[0].value.length; k++) {
                $html += '<tr>';
                var a = 0;
                var b = botfunction[i].data.columns.length;

                total = total + parseInt(botfunction[i].data.columns[1].value[k]);
                //console.log(numeral(total).format('0,0'));
                while (a < b) {

                    $html += '<th class="bold">' + botfunction[i].data.columns[a].value[k] + '</th>';
                    // $html+='<th class="bold td-align-right">'+botfunction[i].data.columns[1].value[k]+'</th>';
                    a++;
                }
                $html += '</tr>';
            }
            if (a == b) {
                $html += '<tr>';
                $html += '<th class="bold">Total</th><th class="bold">' + total + '</th>';
                $html += '</tr>';
            }
            $html += '</table>';
            //console.log($html)
            $('#sales-chart' + i).html($html);
            //
        }


    },
    stage: function (obj) {
        //console.log("STASHVABSVBAVSVASVABSVABSVABNSABNS");
        //console.log(obj);
        var botfunction = obj.result[0].botfunction;
        //console.log(botfunction.length);
        var $html = '';

        
         if(botfunction.length <=0){
            // console.log("sajshjahsjahsja")
             $('.tabsize').addClass('hide');
         }
         else{
             $('.tabsize').removeClass('hide');
         }
        
        
        
        var alldata = [];
        for (var i = 0; i < botfunction.length; i++) {
            var tablename = botfunction[i].name;
            $html += '<div class="col-md-4 col-sm-4 col-xs-12 tabsize">';
            $html += '<div class="x_panel" style="border:1px solid #E6E9ED;background-color:white;padding:10px;margin-bottom:20px;height:370px">';
            $html += '<div class="x_title">';
            $html += '<h4>' + tablename + '<sub> <small> Stage Analysis</small></sub></h4>';
            $html += '<div class="clearfix"></div>'
            $html += '</div>';
            $html += '<div class="x_content">';
            $html += '<table class="display datatable' + i + '" >';
            $html += '<tr>';
            $html += '<thead>';
            for (var j = 0; j < botfunction[i].stage.columns.length; j++) {
                $html += '<th>' + botfunction[i].stage.columns[j].name + '</th>';
            }
            $html += ' </thead>';
            $html += '</tr>';
            var total = 0;
            var data = [];
            for (var k = 0; k < botfunction[i].stage.columns[0].value.length; k++) {
                //$html += '<tr>';
                var a = 0;
                var b = botfunction[i].stage.columns.length;

                total = total + parseInt(botfunction[i].stage.columns[1].value[k]);
                //console.log(numeral(total).format('0,0'));
                var tempdata = [];
                while (a < b) {

                    //$html += '<th class="bold">' + botfunction[i].stage.columns[a].value[k] + '</th>';
                    tempdata.push(botfunction[i].stage.columns[a].value[k]);
                    // $html+='<th class="bold td-align-right">'+botfunction[i].data.columns[1].value[k]+'</th>';
                    a++;
                }
                data.push(tempdata);

                //$html += '</tr>';
            }
            /*if (a == b) {
             $html += '<tr>';
             $html += '<th class="bold">Total</th><th class="bold">' + total + '</th>';
             $html += '</tr>';
             }*/



            $html += '</table>';
            $html += '</div>';
            $html += '</div>';
            $html += '</div>';
            alldata.push(data);
            $('#stage').html($html);



            //console.log("data", data);

            // console.log($html);
            switch (botfunctionLength) {
                case 1:
                case 2:
                case 5:
                    $('.tabsize').removeClass('col-md-4').addClass('col-md-6');
                    break;
            }
            ;



        }

        for (var i = 0; i < botfunction.length; i++) {
            $('.datatable' + i).DataTable({
                "data": alldata[i],
                "lengthMenu": [[4, 10, -1], [4, 10, "All"]],
                "pageLength": 5,
                "iDisplayLength": 5,
                "bLengthChange": false,
                "order": [[1, 'desc']],
                "pagingType": "numbers",
                "rowCallback": function (row, data, index) {
                    var text = $('td:eq(0)', row).text();
                    if (text.length > maxtextlength) {
                        $('td:eq(0)', row).attr('title', $('td:eq(0)', row).text());
                        text = text.substr(0, maxtextlength) + "...";
                        $('td:eq(0)', row).html(text);
                    }
                }
            });
        }

    }

};

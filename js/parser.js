$(document).ready(function() {
var progressElem = $('#progressCounter');
var URL = "https://api.github.com/users/mralexgray/repos";
$("#loading").hide();
 $("#table").hide();
var button_my_button = "#myButton";
$(button_my_button).click(function(){
var obj=$.ajax({
    type: 'GET',
    dataType: 'json',
    url: URL,
    cache: false,
    beforeSend: function () {
        $("#table").hide();
        $('#loading').show();
    },
    complete: function () {
        $("#loading").hide();
        $("#table").show();
    },
    success: function (json) {
        var fdate;
        fdate = $('#calendar1').val();
        var date1 = fdate.split("/").reverse().join("-");
        var tdate;
        tdate = $('#calendar2').val();
        var date2 = tdate.split("/").reverse().join("-");
        $("#table tr").remove();
        for (var i = json.length - 1; i >= 0; i--) {
             if(json[i].created_at > date1 && json[i].created_at < date2)
             {
             $("#table").append("<tr><th>" + json[i].name + "</th><th>" + json[i].full_name + "</th><th>" + json[i].size +
             "</th><th>" + json[i].created_at.substr(0, 10) + "</th><th>" + json[i].language + "</th><th>" + json[i].has_issues + "</th><th>" 
             + json[i].has_downloads + "</th><th>" + json[i].watchers + "</th></tr>");
             }   
        };
    }
});
});
var button_my_button = "#myButton2";
$(button_my_button).click(function(){
    var obj=$.ajax({
    type: 'GET',
    dataType: 'json',
    url: URL,
    cache: false,
    beforeSend: function () {
        $("#table").hide();
        $('#loading').show();
    },
    complete: function () {
        $("#loading").hide();
        $("#table").show();
    },
    success: function (json) {
        var tdate;
        tdate = $('#calendar1').val();
        var date1 = tdate.split("/").reverse().join("-");
        var fdate;
        fdate = $('#calendar2').val();
        var date2 = fdate.split("/").reverse().join("-");
        $("#table tr").remove();
        for (var i = json.length - 1; i >= 0; i--)
         { 
        $("#table").append("<tr><th>" + json[i].name + "</th><th>" + json[i].full_name + "</th><th>" + json[i].size +
         "</th><th>" + json[i].created_at.substr(0, 10) + "</th><th>" + json[i].language + "</th><th>" + json[i].has_issues + "</th><th>" 
         + json[i].has_downloads + "</th><th>" + json[i].watchers + "</th></tr>");
        };
    }
});
});
});


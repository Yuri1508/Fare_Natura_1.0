jQuery(function ($) {
    var launch = new Date(2021, 06, 26, 07, 30, 00);
    var days = $('#days');
    var hours = $('#hours');
    var mins = $('#mins');
    var secs = $('#secs');

    function setDate() {
        var now = new Date();
        var s = (launch.getTime() - now.getTime())/1000 - now.getTimezoneOffset()*60;
        var d = Math.floor(s/86400);
        days.html('<span class="l1-txt1 wsize1 days">'+d+'</span>'+'<span class="m1-txt1 p-b-2"> Day</span>'+(d>1?'<span class="m1-txt1 p-b-2">s</span>':''));
        s -= d * 24 * 60 * 60;
        
        var h = Math.floor(s/3600);
        hours.html('<span class="l1-txt1 wsize1 hours">'+h+'</span>'+'<span class="m1-txt1 p-b-2"> Hour</span>'+(h>1?'<span class="m1-txt1 p-b-2">s</span>':''));
        s -= h * 60 * 60;
        
        var m = Math.floor(s/60);
        mins.html('<span class="l1-txt1 wsize1 minutes">'+m+'</span>'+'<span class="m1-txt1 p-b-2"> Minute</span>'+(m>1?'<span class="m1-txt1 p-b-2">s</span>':''));
        s -= m * 60;
        
        s = Math.floor(s);
        secs.html('<span class="l1-txt1 wsize1 seconds">'+s+'</span>'+'<span class="m1-txt1 p-b-2"> Seconde</span>'+(s>1?'<span class="m1-txt1 p-b-2">s</span>':''));

        setTimeout(setDate, 1000);
    }

    setDate();
})  
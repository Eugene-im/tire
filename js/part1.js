    var g = function(id) { return document.getElementById(id) };

    function setCookie(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : ";expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value + ";path=/";
    }

    function getCookie(c_name) {
        var i, x, y, ARRcookies = document.cookie.split(";");
        for (i = 0; i < ARRcookies.length; i++) {
            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
            x = x.replace(/^\s+|\s+$/g, "");
            if (x == c_name) { return unescape(y); }
        }
    }
    var http1 = false;
    var http1 = new XMLHttpRequest();
    if (window.matchMedia("(min-width: 768px)").matches) {
        viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute('content', 'width=1150');
    }

    function toptab1() {
        g('calctop2').style.display = "none";
        g('calctop').style.display = "block";
        g('tab3').style.cssText = "background-color:#c0c0c0;border-bottom:1px solid #888;z-index:0;height:27px;top:0px";
        g('tab1').style.cssText = "background-color:#e5e5e5;border-bottom:1px solid #e5e5e5;z-index:1;height:30px;top:-3px";
        g('CompVisualizer').style.display = "none";
        g('CalcVisualizer').style.display = "block";
        g('tab1').innerHTML = "<h2>Tire Calculator</h2>";
        // g('Equivalent').innerHTML = '<a class="goplus" onclick="toptab2()">Convert to Different Wheel Size?</a><input type="hidden" name="nrim" value="">';
        g('Equivalent').innerHTML = '<input type="hidden" name="nrim" value="">';
        g('calcspecs').style.display = 'block';
        g('CalcEquivs').style.display = 'none';
        setCookie("Calculator", "Calc", 90);
        if (window.innerWidth > 767 || document.documentElement.clientWidth > 767) { g('resultstab').style.display = "block"; }
        if (window.innerWidth < 768 || document.documentElement.clientWidth < 768) {
            g('MenuWrapper2').style.display = "block";
            if (g('sugdisplay').innerHTML != '') { g('sugdisplay').style.display = 'block'; }
        }
        g('selectMenu').style.cssText = "border-left:1px solid #fff";
        g('choosetire').style.cssText = "border-right:1px solid #aaa;background-color:#d7d7d7";
        g('choosesize').style.cssText = "border-left:1px solid #fff;background-color:transparent";
    }

    function toptab3() {
        g('calctop2').style.display = "block";
        g('calctop').style.display = "none";
        g('tab3').style.cssText = "background-color:#e5e5e5;border-bottom:1px solid #e5e5e5;z-index:1;height:30px;top:-3px";
        g('tab1').style.cssText = "background-color:#c0c0c0;border-bottom:1px solid #888;z-index:0;height:27px;top:0px";
        g('CalcVisualizer').style.display = "none";
        g('CompVisualizer').style.display = "block";
        // g('resultstab').style.display = "none";
        g('MenuWrapper2').style.display = "none";
        setCookie("Calculator", "Comp", 90);
        if (window.innerWidth < 768 || document.documentElement.clientWidth < 768) { g('sugdisplay').style.display = "none" }
    }

    function toptab2() {
        g('Equivalent').innerHTML = '<a>New Wheel Size</a><input type="number" name="nrim" value="">';
        g('calcspecs').style.display = 'none';
        g('CalcEquivs').style.display = 'block';
        g('tab1').innerHTML = '<h2>Back to Calculator</h2>';
        adClickers();
    }
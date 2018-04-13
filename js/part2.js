function GetYear() {
    g('year').innerHTML = '<br>please wait...';
    var kv = "make=" + g('makeselect').value;
    var url = "/cgi-bin/newmake.cgi?";
    url = url + kv;
    http1.onreadystatechange = function() { if (http1.readyState == 4) { g('year').innerHTML = http1.responseText; } }
    http1.open("GET", url, true);
    http1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http1.send(kv);
}

function GetModel() {
    g('model').innerHTML = '<br>please wait...';
    var kv = "year=" + g('yearselect').value + "&make=" + g('makeselect').value;
    var url = "/cgi-bin/newmodel.cgi?";
    url = url + kv;
    http1.onreadystatechange = function() { if (http1.readyState == 4) { g('model').innerHTML = http1.responseText; } }
    http1.open("GET", url, true);
    http1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http1.send();
}

function GetSubModel() {
    g('submodel').innerHTML = '<br>please wait...';
    var kv = "year=" + g('yearselect').value + "&make=" + g('makeselect').value + "&model=" + g('modelselect').value;
    var url = "/cgi-bin/newsubmodel.cgi?";
    url = url + kv;
    http1.onreadystatechange = function() { if (http1.readyState == 4) { g('submodel').innerHTML = http1.responseText; } }
    http1.open("GET", url, true);
    http1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http1.send();
}

function GetPattern() {
    var ye = g('yearselect').value
    var ma = g('makeselect').value
    var mo = g('modelselect').value
    var sm = g('submodelselect').value
    var kv = "year=" + ye + "&make=" + ma + "&model=" + mo + "&submodel=" + sm;
    var url = "/cgi-bin/newpattern.cgi?";
    url = url + kv;
    http1.onreadystatechange = function() { if (http1.readyState == 4) { document.location.href = http1.responseText; } }
    http1.open("GET", url, true);
    http1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http1.send();
    ga('send', 'event', 'vehicle', ye + ' ' + ma + ' ' + mo + ' ' + sm);
}

function ShowHelp() {
    g('sidehelp').style.display = "block";
    g('showHelp').setAttribute('onclick', 'DontShowHelp()');
}

function DontShowHelp() {
    g('sidehelp').style.display = "none";
    g('showHelp').setAttribute('onclick', 'ShowHelp()');
}

function ShowCats() {
    g('sidecats').style.display = "block";
    g('showCats').setAttribute('onclick', 'DontShowCats()');
}

function DontShowCats() {
    g('sidecats').style.display = "none";
    g('showCats').setAttribute('onclick', 'ShowCats()');
}

function ShowSizes() {
    g('sidesizes').style.display = "block";
    g('showSizes').setAttribute('onclick', 'DontShowSizes()');
}

function DontShowSizes() {
    g('sidesizes').style.display = "none";
    g('showSizes').setAttribute('onclick', 'ShowSizes()');
}

function ShowMore() {
    g('sidemore').style.display = "block";
    g('showMore').setAttribute('onclick', 'DontShowMore()');
}

function DontShowMore() {
    g('sidemore').style.display = "none";
    g('showMore').setAttribute('onclick', 'ShowMore()');
}

function ShowBrands() {
    g('manulogos').style.display = "block";
    g('showBrands').setAttribute('onclick', 'DontShowBrands()');
}

function DontShowBrands() {
    g('manulogos').style.display = "none";
    g('showBrands').setAttribute('onclick', 'ShowBrands()');
}


function show() {
    var i;
    var trs = g("SizeTable").getElementsByTagName("tr");
    for (i = 0; i < trs.length; i++) { trs[i].style.display = "table-row" }
}

function menuOpen() {
    carmenuClose();
    window.scrollTo(0, 0);
    g('WrapWrapper').style.cssText = "-webkit-transform:translate3d(300px,0,0);transform:translate3d(300px,0,0)";
    g('MenuWrapper').style.cssText = "-webkit-transform:translate3d(0px,0,0);transform:translate3d(0px,0,0)";
    g('dropdown').setAttribute('onclick', 'menuClose()');
    g('signin').style.cssText = "-webkit-transform:translate3d(0px,0,0);transform:translate3d(0px,0,0)";
    g('HeaderBack').style.position = "absolute"
    ga('send', 'event', 'MobileMenu', 'Open');
}

function menuClose() {
    if (window.innerWidth < 768) {
        g('WrapWrapper').style.cssText = "-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)";
        g('MenuWrapper').style.cssText = "-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)";
        g('HeaderBack').style.position = "fixed";
    }
    g('dropdown').setAttribute('onclick', 'menuOpen()');
    g('signin').style.cssText = "-webkit-transform:translate3d(-300px,0,0);transform:translate3d(-300px,0,0)";
    g('signin').style.cssText = "";
}

function carmenuOpen() {
    menuClose();
    window.scrollTo(0, 0);
    g('Vehicle').style.display = "block";
    if (window.innerWidth < 768) {
        g('Vehicle').style.boxShadow = "0px 0px 75px 75px #fff";
        g('Xout').innerHTML = '<img src="/images/xout.png">'
    }
    g('CarSearch').setAttribute('onclick', 'carmenuClose()');
    if (window.innerWidth < 768) { ga('send', 'event', 'ShowByVehicle', 'Mobile') } else { ga('send', 'event', 'ShowByVehicle', 'Desktop') }
}

function carmenuClose() {
    g('Xout').innerHTML = '';
    g('Vehicle').style.cssText = "display:none";
    g('CarSearch').setAttribute('onclick', 'carmenuOpen()');
}

var SlideTop;
var topPos;
var count;

function slideMenu(el, sp) {
    topPos = g(el).offsetTop;
    if (sp == undefined) { sp = 150 }
    if (topPos > 10000) {
        if (el == 'goTop') { window.scrollTo(0, 0) } else { window.scrollTo(0, topPos -= 50) }
    } else {
        count = window.scrollY;
        if (el == 'goTop') { SlideTop = setInterval(function() { moveUp(topPos, sp) }, 16); } else if (el == 'help') { SlideTop = setInterval(function() { moveDown(480, sp) }, 16); } else if (el == 'tourarrow') { SlideTop = setInterval(function() { moveDown(760, sp) }, 16); } else if (el == 'Equivalent') { SlideTop = setInterval(function() { moveDown(530, sp) }, 16); } else if (el == 'Viewer') { SlideTop = setInterval(function() { moveDown(510, sp) }, 16); } else if (el == 'tire1') {
            if (g('comp1').offsetTop > 100) { SlideTop = setInterval(function() { moveDown(990, sp) }, 16); } else { SlideTop = setInterval(function() { moveDown(800, sp) }, 16); }
        } else {
            SlideTop = setInterval(function() { moveDown(topPos, sp) }, 16);
        }
    }
}

function moveDown(topPos, sp, dir) {
    count += sp;
    window.scrollTo(0, count)
    if (count <= (topPos -= 50)) {} else {
        window.scrollTo(0, topPos);
        clearInterval(SlideTop)
    }
}

function moveUp(topPos, sp) {
    count -= sp;
    window.scrollTo(0, count)
    if (count >= (0)) {} else {
        window.scrollTo(0, 0);
        clearInterval(SlideTop)
    }
}

function ShowV(v) {
    var i;
    var vrs = g("choice").getElementsByTagName("a");
    for (i = 0; i < vrs.length; i++) { vrs[i].style.backgroundColor = "#25292e" }
    g('b' + v + '').style.backgroundColor = "#404750";
    var url = "/includes/" + v + ".htm";
    http1.onreadystatechange = function() { if (http1.readyState == 4) { g('searchchoice').innerHTML = http1.responseText; } }
    http1.open("GET", url, true);
    http1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http1.send();
}

function showRear() {
    if ((g('size1select').options[g('size1select').selectedIndex].value == 'Select') || (g('size2select').options[g('size2select').selectedIndex].value == 'Select') || (g('wheelselect').options[g('wheelselect').selectedIndex].value == 'Select')) { g('firstsize').innerHTML = 'Select Front<br>Size First' } else {
        g('getLink').href = "#";
        g('rearsize').style.display = "inline-block";
        g('showrear').innerHTML = "Remove Rear Size?";
        g('showrear').setAttribute('onclick', 'hideRear()');
        if ((g('size3select').options[g('size3select').selectedIndex].value != 'Select') && (g('size4select').options[g('size4select').selectedIndex].value != 'Select') && (g('wheelselect2').options[g('wheelselect2').selectedIndex].value != 'Select')) { getStagLink() }
    }
}

function hideRear() {
    if ((g('size1select').options[g('size1select').selectedIndex].value != 'Select') && (g('size2select').options[g('size2select').selectedIndex].value != 'Select') && (g('wheelselect').options[g('wheelselect').selectedIndex].value != 'Select')) { getLink() }
    g('rearsize').style.display = "none";
    g('showrear').innerHTML = "Different Rear Size?";
    g('showrear').setAttribute('onclick', 'showRear()');
}

function getSize1(size1) {
    g('gsize2').innerHTML = '<div class="wait">please wait...</div>';
    g('getLink').href = "#";
    g('firstsize').innerHTML = "";
    var kv = "size1=" + size1;
    var url = "/cgi-bin/getsize1.cgi?";
    url = url + kv;
    http1.onreadystatechange = function() {
        if (http1.readyState == 4) { g('gsize2').innerHTML = http1.responseText; }
    }
    http1.open("GET", url, true);
    http1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http1.send();
}

function getSize2(size1, size2) {
    g('wheelsize').innerHTML = '<div class="wait">please wait...</div>';
    g('getLink').href = "#";
    g('firstsize').innerHTML = "";
    var kv = "size1=" + size1 + "&size2=" + size2;
    var url = "/cgi-bin/getsize2.cgi?";
    url = url + kv;
    http1.onreadystatechange = function() {
        if (http1.readyState == 4) { g('wheelsize').innerHTML = http1.responseText; }
    }
    http1.open("GET", url, true);
    http1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http1.send();
}

function getSize3(size1) {
    g('gsize4').innerHTML = '<div class="wait">please wait...</div>';
    g('getLink').href = "#";
    var kv = "size1=" + size1;
    var url = "/cgi-bin/getsize3.cgi?";
    url = url + kv;
    http1.onreadystatechange = function() {
        if (http1.readyState == 4) { g('gsize4').innerHTML = http1.responseText; }
    }
    http1.open("GET", url, true);
    http1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http1.send();
}

function getSize4(size1, size2) {
    g('wheelsize2').innerHTML = '<div class="wait">please wait...</div>';
    g('getLink').href = "#";
    var kv = "size1=" + size1 + "&size2=" + size2;
    var url = "/cgi-bin/getsize4.cgi?";
    url = url + kv;
    http1.onreadystatechange = function() {
        if (http1.readyState == 4) { g('wheelsize2').innerHTML = http1.responseText; }
    }
    http1.open("GET", url, true);
    http1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http1.send();
}

function getLink() {
    g('firstsize').innerHTML = "";
    g('rearsize').style.display = "none";
    g('showrear').innerHTML = "Different Rear Size?";
    g('showrear').setAttribute('onclick', 'showRear()');
    var size1 = g('size1select').options[g('size1select').selectedIndex].value;
    var size2 = g('size2select').options[g('size2select').selectedIndex].value;
    var wheelsize = g('wheelselect').options[g('wheelselect').selectedIndex].value;
    if (size1 > 100) { var link = size1 + '-' + size2 + 'R' + wheelsize + '.htm'; }
    if (size1 < 100) { var link = size1 + 'X' + size2 + 'R' + wheelsize + '.htm'; }
    if ((size1 != "Select") && (size2 != "Select") && (wheelsize != "Select")) {
        g('getLink').href = "/tiresizes/" + link;
        g('getLink').setAttribute("onclick", "ga('send','event','VehicleSizeSearch','" + link + "')");
    }
}

function getStagLink() {
    var size1 = g('size1select').options[g('size1select').selectedIndex].value;
    var size2 = g('size2select').options[g('size2select').selectedIndex].value;
    var wheelsize = g('wheelselect').options[g('wheelselect').selectedIndex].value;
    var size3 = g('size3select').options[g('size3select').selectedIndex].value;
    var size4 = g('size4select').options[g('size4select').selectedIndex].value;
    var wheelsize2 = g('wheelselect2').options[g('wheelselect2').selectedIndex].value;
    var link = size1 + '-' + size2 + 'R' + wheelsize;
    var link2 = size3 + '-' + size4 + 'R' + wheelsize2;
    var link = 'size1=' + link + '&size2=' + link2;
    if ((size1 != "Select") && (size2 != "Select") && (wheelsize != "Select") && (size3 != "Select") && (size4 != "Select") && (wheelsize2 != "Select")) {
        g('getLink').href = "/tiresizes/staggered/?" + link;
        g('getLink').setAttribute("onclick", "ga('send','event','VehicleStagSizeSearch','" + link + "')");
    } else {
        g('getLink').href = "#";
        g('getLink').setAttribute("onclick", "");
    }
}

function dropDown(num) {
    dropUp(1);
    dropUp(2);
    dropUp(3);
    if (num == 3) {
        var url = "/includes/tools.htm";
        http1.onreadystatechange = function() {
            if (http1.readyState == 4) { g('ddcontent3').innerHTML = http1.responseText; }
        }
        http1.open("GET", url, true);
        http1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        http1.send();
    }
    g('ddcontent' + num + '').style.display = "block";
    g('signin').style.top = "475px";
    g('dspin' + num + '').style.transform = "rotateX(180deg)";
    setTimeout(function() {
        g('dd' + num + '').setAttribute('onclick', 'dropUp(' + num + ')');
    }, 100);
    //g('WrapWrapper').style.opacity=".5";
    g('WrapWrapper').setAttribute('onclick', 'dropUp(' + num + ')');
}

function dropUp(num) {
    g('ddcontent' + num + '').style.display = "none";
    g('signin').style.top = "275px";
    g('dspin' + num + '').style.transform = "rotateX(0deg)";
    setTimeout(function() {
        g('dd' + num + '').setAttribute('onclick', 'dropDown(' + num + ')');
    }, 100);
    //g('WrapWrapper').style.opacity="1";
    g('WrapWrapper').setAttribute('onclick', '');
}
var thePageTitle = document.title;
// var manus = g("sideleft").getElementsByTagName('a');
// var links = g("sideright").getElementsByTagName('a');
// var menulinks = g("Header").getElementsByTagName('a');
// for (i = 0; i < manus.length; i++) { manus[i].addEventListener('click', trackSidebar); }
// for (i = 0; i < links.length; i++) { links[i].addEventListener('click', trackSidebar); }
// for (i = 0; i < menulinks.length; i++) { menulinks[i].addEventListener('click', trackMenu); }

function trackSidebar() {
    var linkclick = String(this);
    linkclick = linkclick.replace("https://tiresize.com", "");
    ga('send', 'event', 'Sidebar', linkclick, thePageTitle);
}

function trackMenu() {
    var menuclick = String(this);
    menuclick = menuclick.replace("https://tiresize.com", "");
    ga('send', 'event', 'Menu', menuclick, thePageTitle);
}

function adClickers() {
    var inputbox, inputs, i;
    inputbox = g('calctop');
    inputs = inputbox.getElementsByTagName('input');
    for (i = 0; i < inputs.length; i++) { inputs[i].setAttribute('onkeydown', 'if(event.keyCode == 13) {calculateF(tirecalc,tirecalc.sw.value,tirecalc.as.value,tirecalc.rim.value,tirecalc.nrim.value,"","TireSizeCalc")}'); }
}
adClickers();

var inputbox2 = g('calctop2');
var inputs = inputbox2.getElementsByTagName('input');
for (i = 0; i < inputs.length; i++) { inputs[i].setAttribute('onkeydown', 'if(event.keyCode == 13) {calculateG(tirecompare,tirecompare.sw.value,tirecompare.as.value,tirecompare.rim.value,tirecompare.swb.value,tirecompare.asb.value,tirecompare.rimb.value,"","TireSizeCalc")}'); }

var h = getCookie("height");
var w = getCookie("width");
var r = getCookie("wheel");
var preh = getCookie("preheight");
var prew = getCookie("prewidth");
var prer = getCookie("prewheel");
var comph = getCookie("compheight");
var compw = getCookie("compwidth");
var compr = getCookie("compwheel");
var noalert2 = "";
if (h == undefined || w == undefined || r == undefined) {
    if (preh == undefined) {
        setCookie("noalert", "clicked", 90);
        noalert2 = "clicked"
    }
} else { calculateF(tirecalc, h, w, r, "", "yes", "TireSizeCalc") }
if (preh == undefined || prew == undefined || prer == undefined || comph == undefined || compw == undefined || compr == undefined) {
    setCookie("Calculator", "Calc", 90);
    if (h == undefined) {
        setCookie("noalert", "clicked", 90);
        noalert2 = "clicked"
    }
} else {
    calculateG(tirecompare, preh, prew, prer, comph, compw, compr, "yes", "TireSizeCalc");
    var calc = getCookie("Calculator");
    if (calc == "Comp") { toptab3() } else {}
}

var Slide;
var leftValue;
var leftPos;
var i = 0;

function slideTires(dir) {
    g('slide' + dir).setAttribute("onclick", "");
    leftValue = g('sugdisplaywrap').scrollLeft;
    var dots = g('Dots').getElementsByTagName('a');
    for (var i2 = 0; i2 < dots.length; i2++) { dots[i2].style.backgroundColor = "#fff" }
    var maxValue = dots.length - 1;
    if (dir == 'Left') { var dotValue = Math.ceil((leftValue - 900) / 900); if (dotValue < 0) { dotValue = 0 } } else { var dotValue = Math.ceil((leftValue + 900) / 900) }
    if (dotValue > maxValue) { g(maxValue).style.backgroundColor = "#2083d4" } else { g(dotValue).style.backgroundColor = "#2083d4"; }
    Slide = setInterval(function() { Move(leftValue, dir) }, 20);
}

function quickSlide(pos) {
    var spos = pos * 900;
    g('sugdisplaywrap').scrollLeft = spos;
    var dots = g('Dots').getElementsByTagName('a');
    for (var i2 = 0; i2 < dots.length; i2++) { dots[i2].style.backgroundColor = "#fff" }
    g(pos).style.backgroundColor = "#2083d4";
}

function Move(leftValue, dir) {
    if (dir == 'Right') { leftPos = leftValue + i } else { leftPos = leftValue - i }
    i += 45;
    g('sugdisplaywrap').scrollLeft = leftPos;
    if (i <= 900) {} else {
        i = 0;
        clearInterval(Slide);
        g('slide' + dir).setAttribute("onclick", "slideTires('" + dir + "')")
    }
}

window.addEventListener('resize', function() {
    if (window.matchMedia("(max-width:767px)").matches) {
        g('calctab').style.marginTop = "0px";
        g('CalcWrap').style.marginTop = "-5px";
    } else if (g('sugdisplay').innerHTML == '') {
        g('calctab').style.marginTop = "28px";
        g('CalcWrap').style.marginTop = "25px";
        if (getCookie("Calculator") == "Comp") { g('resultstab').style.display = "none" } else { g('resultstab').style.display = "block" }
    } else {
        g('sugdisplay').style.display = "block";
        g('calctab').style.marginTop = "175px";
        g('CalcWrap').style.marginTop = "172px";
        g('CalcViewer').style.display = "block";
        g('MenuWrapper').style.cssText = "float:right";
        if (getCookie("Calculator") == "Comp") { g('resultstab').style.display = "none" } else { g('resultstab').style.display = "block" }
    }
}, true);
var player = {
    parinaamt: new Decimal(0),
    lipitysamt: new Decimal(1),
    edtier: new Decimal(1),
    lipitysmaksu: new Decimal(10),
    infinityCost: new Decimal(10000),
    infinitypoints: new Decimal(0),
    maxall: false,
    edmulti: 0,
    autoclicker: 0,
    comsed: "Auto",
    edskinselected: "Auto",
    sounds: true,
    music: true
}
var autoc = new Decimal(0);
var theme = "Auto";
if (localStorage.getItem("theme") != null) {
    theme = localStorage.getItem("theme");
    console.log(theme);
}
console.log("w");
var parinaut1 = false;
var tubwer = new Decimal(0);
var canby = new Decimal(0);
player.autoclicker = Number(player.autoclicker);
function RESET() {
    player.parinaamt = new Decimal(0);
    player.lipitysamt = new Decimal(1);
    player.edtier = new Decimal(1);
    player.lipitysmaksu = new Decimal(10);
    player.infinityCost = new Decimal(10000);
    player.infinitypoints = new Decimal(0);
    player.edmulti = 0;
    player.autoclicker = 0;
    player.sounds = true;
    player.music = true;
    savegame();
}
var acpc = 1000;
var autoclire = false;
var parinaauto = document.getElementById("parinuponoff");
var autobuyertab = document.getElementById("Autobuyertabb");
var mxa2 = document.getElementById("MaxAll1");
var infupg = document.getElementById("infinityUP1");
var IP1 = document.getElementById("IP");
var audio = new Audio('sip.wav');
var ppee = document.getElementById("ppe");
var inftext = document.getElementById("maksuifn");
var lippitekst = document.getElementById("maksu");
var ed = document.getElementById("ED");
var parinatxt = document.getElementById("parina");
lippitekst.textContent = "Päivitä lipitys taitoja <br> Maksaa: " + player.lipitysmaksu;
function clickEventimg() {
    tubwer = new Decimal(1);
    if (player.sounds == true)
    {
        audio.play();
    }
    
    

    if (player.edmulti == 1 && player.infinitypoints.gte(1)) {
        tubwer = tubwer.times(player.lipitysamt).times(player.edtier).times(player.infinitypoints)
        player.parinaamt = player.parinaamt.plus(tubwer)
        ppee.textContent = "+" + player.lipitysamt.times(player.edtier).times(player.infinitypoints);
    }
    else {
        tubwer = tubwer.times(player.lipitysamt).times(player.edtier)
        player.parinaamt = player.parinaamt.plus(tubwer);
        ppee.textContent = "+" + tubwer;
    }
    parinatxt.textContent = "Pärinä: " + player.parinaamt.round();
    
    ppee.style.opacity = 1;

}
function clickanim() {
    ppee.style.transform = 'rotate(90deg)';
}
function maxalltogl() {
    var mxa2 = document.getElementById("MaxAll1");
    player.maxall = !player.maxall;
    if (player.maxall) {
        mxa2.innerHTML = "Max All: On";
    }
    else {
        mxa2.innerHTML = "Max All: Off";
    }
}
function buyMaxlip(){
    while (player.parinaamt.gte(player.lipitysmaksu)) {
        if (player.parinaamt.gte(player.lipitysmaksu)) {
            if (player.lipitysmaksu.gte(10000)) {
                player.parinaamt = player.parinaamt.minus(player.lipitysmaksu);
                player.lipitysmaksu = player.lipitysmaksu.times(5);
                player.lipitysamt = player.lipitysamt.add(10);
                if (player.lipitysmaksu.equals(110)){
                    player.lipitysmaksu = player.lipitysmaksu.minus(10);
                }
                lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + player.lipitysmaksu;
                parinatxt.textContent = "Pärinä: " + player.parinaamt;
            }
            else{
                player.parinaamt = player.parinaamt.minus(player.lipitysmaksu);
                player.lipitysmaksu = player.lipitysmaksu.add(100);
                player.lipitysamt = player.lipitysamt.add(1);
                if (player.lipitysmaksu.equals(110)){
                    player.lipitysmaksu = player.lipitysmaksu.minus(10);
                }
                lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + player.lipitysmaksu;
                parinatxt.textContent = "Pärinä: " + player.parinaamt;
            }
            
        }
    }
    
 }
function infinityUpgradesscreen() {

}
function infinityED() {
    if (player.parinaamt.gte(player.infinityCost)) {
        player.lipitysamt = player.lipitysamt.minus(player.lipitysamt).plus(1);
        console.log("s");

        parinatxt.textContent = "Pärinä: " + player.parinaamt;
        
        IP1.textContent = "LoputtomiaPärinöitä: " + player.infinitypoints;
        player.lipitysmaksu = player.lipitysmaksu.minus(player.lipitysmaksu).plus(10);
        if (player.edtier.equals(1)) {
            player.edtier = player.edtier.plus(1);
        }
        if (player.edtier.gte(3)) {
            
            tubwer = player.parinaamt.divide(10000 * player.parinaamt.dividedBy(player.parinaamt.dividedBy(100)));
            tubwer = tubwer.round();
            tubwer = tubwer.add(1);
            console.log(tubwer);
            player.infinitypoints = player.infinitypoints.add(tubwer);
            IP1.textContent = "LoputtomiaPärinöitä: " + player.infinitypoints;
            player.parinaamt = player.parinaamt.minus(player.parinaamt);
        }
        else {
            player.infinitypoints = player.infinitypoints.plus(1);
            player.parinaamt = player.parinaamt.minus(player.parinaamt);
        }
        player.infinityCost = 10000;
        
        
    }
}
function sav() {
    setTimeout(savegame,8000);
}
function toggleparin() {
    parinaut1 = !parinaut1;
}
function soundstogl()
{
    player.sounds = !player.sounds;
    var musci = document.getElementById("sounds");
    if (player.sounds) {
        musci.innerHTML = "Sounds: On";
    }
    else {
        musci.innerHTML = "Sounds: Off";
    }
    
}
function toggleautcli() {
    autoclire = !autoclire;
}
let output = document.getElementById('exportOutput');
let parent = output.parentElement;
parent.style.display = "none";

function bootout()
{
    window.open("https://helsinki.inschool.fi/");
}
function updateinterface() {
    if (player.autoclicker == 1 ) {
        autobuyertab.style.visibility = "";
    }
    else {
        autobuyertab.style.visibility = "hidden";
    }
    parinatxt.textContent = "Pärinä: " + player.parinaamt;

    IP1.textContent = "LoputtomiaPärinöitä: " + player.infinitypoints;
    lippitekst.textContent = "Päivitä lipitystaitoja" + " Maksaa: " + player.lipitysmaksu;
    inftext.textContent = "aloita uusi loputtomuus" + " Maksaa: " + player.infinityCost
    if (player.edmulti == 1) {
        
    }
    if (player.edskinselected == "Auto") {
        if (player.edtier.equals(2)) {
            document.getElementById("ED").src="tropicaled1.png";
        }
        if (player.edtier.equals(1)){
            document.getElementById("ED").src="edgreenfruit.png";
        }
        if (player.edtier.equals(3)){
            document.getElementById("ED").src="sourstrawberry.png";
        }
    } else if (player.edskinselected == "sourstrawberry") {
        document.getElementById("ED").src="sourstrawberry.png";
    } else if (player.edskinselected == "greenfruit") {
        document.getElementById("ED").src="edgreenfruit.png";
    } else if (player.edskinselected == "Tropical") {
        document.getElementById("ED").src="tropicaled1.png";
    }
    if (theme == "auto")
    {
        document.body.style.backgroundColor = "aquamarine";
    } else if (theme == "dark") {
        document.body.style.backgroundColor = "black";
    }

    

    if (player.autoclicker == 1)
    {
        $("#InfinityUP3").addClass("active");
    }
    if (player.edtier >= 3)
    {
        $("#InfinityUP2").addClass("active");
    }
    if (player.edmulti >= 1)
    {
        $("#InfinityUP1").addClass("active");
    }
    setTimeout(updateinterface,50);


}
$(document).ready(function() {
    $("select.edskinsele").change(function() {
        let selectedItem = $(this).children("option:selected").val();
        player.edskinselected = selectedItem;
    });
});
$(document).ready(function() {
    $("select.themesele").change(function() {
        let selectedItem = $(this).children("option:selected").val();
        theme = selectedItem;
    });
});

function autoclickerparina() {
    if (parinaut1) {
        if (document.getElementById("parinaupgbuton").value == "0") {
            if (player.parinaamt.gte(player.lipitysmaksu)) {
                lipitysosto();
            }
        } else {
            autoc = document.getElementById("parinaupgbuton").value
            autoc = new Decimal(toString(autoc));
            if (autoc.gt(player.lipitysamt) && player.parinaamt.gte(player.lipitysmaksu)) {
                lipitysosto("player.autoclicker");
            }
        }
    }   
    setTimeout(autoclickerparina,acpc);
}
function autoclicker2() {
    if (autoclire) {
        console.log("sus");
        clickEventimg();
    }
    setTimeout(autoclicker2,100);
}
function autoclicker1() {
    autoclickerparina();
    autoclicker2();
}
function loadin() {
    loadvars();
    setTimeout(savegame,10000);
    openTab(event,"EDTab");
    updateinterface();
    opacitydown();
    autoclicker1();
    maxalltogl();
}

function loadvars() {
    try {
        player = JSON.parse(atob(localStorage.getItem("save")));
      } catch(e) { console.log("Fuck IE", e); }
    savetodecimal();
}
function savetodecimal() {
    player.parinaamt = new Decimal(player.parinaamt);
    player.lipitysamt = new Decimal(player.lipitysamt);
    player.edtier = new Decimal(player.edtier);
    player.lipitysmaksu = new Decimal(player.lipitysmaksu);
    player.infinityCost = new Decimal(player.infinityCost);
    player.infinitypoints = new Decimal(player.infinitypoints);
}

function purhaceinfupgrade(evt, InfUpgrade, price) {
    var i, infupgrades;
    if (player.infinitypoints >= price) {
        if (price == 5) {
            if (player.edmulti == 0)
            {
                player.infinitypoints = player.infinitypoints.minus(price);
            }
            player.edmulti = 1;
        }
        if (InfUpgrade == "InfinityUP3") {
            if (player.autoclicker == 0)
            {
                player.infinitypoints = player.infinitypoints.minus(price);
            }
            player.autoclicker = 1;
        }
        if (InfUpgrade == "InfinityUP2") {
            if (player.edtier <= 2)
            {
                player.infinitypoints = player.infinitypoints.minus(price);
            }
            player.edtier = new Decimal(3);
        }
        document.getElementById(InfUpgrade).style.display = "block";
        evt.currentTarget.className += " active";
        
    }
    
}
function openTab(evt, TabName) { 
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
function savegame() {
    localStorage.setItem("save",btoa(JSON.stringify(player)));
    setTimeout(savegame,10000);
}

function export1() {
    savegame();
    output = document.getElementById('exportOutput');
    parent = output.parentElement;
    parent.style.display = "";
    output.value = btoa(JSON.stringify(player));
    console.log(output.value);

    output.onblur = function() {
        parent.style.display = "none";
    }

    output.focus();
    output.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
    output.blur();

}
function import1() {
    input = document.getElementById('importInput');
    parent = input.parentElement;
    parent.style.display = "";
    console.log(input.value);

    input.onblur = function() {
        parent.style.display = "none";
    }

    input.focus();
    input.select();
    try {
        var successful = document.execCommand('paste');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: importing was ' + msg);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
    input.blur();
    player = input.value;
}


function lipitysosto(au) {
    if (player.maxall && au != "player.autoclicker") {
        buyMaxlip();
    }
    else {
        if (player.parinaamt.gte(player.lipitysmaksu)) {
            if (player.lipitysmaksu.gte(10000)) {
                player.parinaamt = player.parinaamt.minus(player.lipitysmaksu);
                player.lipitysmaksu = player.lipitysmaksu.times(5);
                player.lipitysamt = player.lipitysamt.add(10);
                if (player.lipitysmaksu.equals(110)){
                    player.lipitysmaksu = player.lipitysmaksu.minus(10);
                }
                lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + player.lipitysmaksu;
                parinatxt.textContent = "Pärinä: " + player.parinaamt;
            }
            else{
                player.parinaamt = player.parinaamt.minus(player.lipitysmaksu);
                player.lipitysmaksu = player.lipitysmaksu.add(100);
                player.lipitysamt = player.lipitysamt.add(1);
                if (player.lipitysmaksu.equals(110)){
                    player.lipitysmaksu = player.lipitysmaksu.minus(10);
                }
                lippitekst.textContent = "Päivitä lipitys taitoja" + "Maksaa: " + player.lipitysmaksu;
                parinatxt.textContent = "Pärinä: " + player.parinaamt;
            }
            
        }
    }
    
}
function opacitydown() {
    ppee.style.opacity -= 0.02;
    
    setTimeout(opacitydown,20);
}
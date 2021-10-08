
var Tivi = {
    kenh0: 'Kênh 0',
    kenh1: 'Kênh 1',
    kenh2: 'Kênh 2',
    kenh3: 'Kênh 3',
    kenh4: 'Kênh 4',
    kenh5: 'Kênh 5',
    kenh6: 'Kênh 6',
    kenh7: 'Kênh 7',
    kenh8: 'Kênh 8',
    kenh9: 'Kênh 9',
}

function Open() {
    document.querySelector('.Tivi_Show').innerHTML = ("Tivi đã được bật " + " và bạn đang ở  " + this.Tivi.kenh0);
    document.querySelector('.Tivi_Show').style.background = "Purple";
    document.getElementById("Open").disabled = true;
    document.getElementById("Shutdown").disabled = false;
    document.getElementById("Channel_1").disabled = false;
    document.getElementById("Channel_2").disabled = false;
    document.getElementById("Channel_3").disabled = false;
    document.getElementById("Channel_4").disabled = false;
    document.getElementById("Channel_5").disabled = false;
    document.getElementById("Channel_6").disabled = false;
    document.getElementById("Channel_7").disabled = false;
    document.getElementById("Channel_8").disabled = false;
    document.getElementById("Channel_9").disabled = false;
    document.getElementById("Channel_0").disabled = false;
    document.getElementById("Volume_Up").disabled = false;
    document.getElementById("Volume_Down").disabled = false;
}
function Shutdown() {
    document.querySelector('.Tivi_Show').innerHTML = ("Tivi đã được tắt ");
    document.querySelector('.Tivi_Show').style.background = "gray";
    document.getElementById("Open").disabled = false;
    document.getElementById("Shutdown").disabled = true;
    document.getElementById("Channel_1").disabled = true;
    document.getElementById("Channel_2").disabled = true;
    document.getElementById("Channel_3").disabled = true;
    document.getElementById("Channel_4").disabled = true;
    document.getElementById("Channel_5").disabled = true;
    document.getElementById("Channel_6").disabled = true;
    document.getElementById("Channel_7").disabled = true;
    document.getElementById("Channel_8").disabled = true;
    document.getElementById("Channel_9").disabled = true;
    document.getElementById("Channel_0").disabled = true;
    document.getElementById("Volume_Up").disabled = true;
    document.getElementById("Volume_Down").disabled = true;

}
function Channel_1() {
    document.querySelector('.Tivi_Show').innerHTML = ("bạn đang ở " + this.Tivi.kenh1);
    document.querySelector('.Tivi_Show').style.background = "Lime";
}
function Channel_2() {
    document.querySelector('.Tivi_Show').innerHTML = ("bạn đang ở " + this.Tivi.kenh2);
    document.querySelector('.Tivi_Show').style.background = "Silver";
}
function Channel_3() {
    document.querySelector('.Tivi_Show').innerHTML = ("bạn đang ở " + this.Tivi.kenh3);
    document.querySelector('.Tivi_Show').style.background = "green";
}
function Channel_4() {
    document.querySelector('.Tivi_Show').innerHTML = ("bạn đang ở " + this.Tivi.kenh4);
    document.querySelector('.Tivi_Show').style.background = "pink";
}
function Channel_5() {
    document.querySelector('.Tivi_Show').innerHTML = ("bạn đang ở " + this.Tivi.kenh5);
    document.querySelector('.Tivi_Show').style.background = "violet";
}
function Channel_6() {
    document.querySelector('.Tivi_Show').innerHTML = ("bạn đang ở " + this.Tivi.kenh6);
    document.querySelector('.Tivi_Show').style.background = "Olive";
}
function Channel_7() {
    document.querySelector('.Tivi_Show').innerHTML = ("bạn đang ở " + this.Tivi.kenh7);
    document.querySelector('.Tivi_Show').style.background = "Teal";
}
function Channel_8() {
    document.querySelector('.Tivi_Show').innerHTML = ("bạn đang ở " + this.Tivi.kenh8);
    document.querySelector('.Tivi_Show').style.background = "blue";
}
function Channel_9() {
    document.querySelector('.Tivi_Show').innerHTML = ("bạn đang ở " + this.Tivi.kenh9);
    document.querySelector('.Tivi_Show').style.background = "Aqua";
}

function Channel_0() {
    document.querySelector('.Tivi_Show').innerHTML = ("bạn đang ở " + this.Tivi.kenh0);
    document.querySelector('.Tivi_Show').style.background = "Purple";
}
var Remote = function (code, volume, romochannel1) {
    this.code = code;
    this.volume = volume;
    this.remochanl = romochannel1;
    this.getControlVolumeTang = function () {
        return this.volume = this.volume + 2;

    };
    this.getControlVolumeGiam = function () {
        return this.volume = this.volume - 2;

    };
}
var remote = new Remote(10, 10);

function Volume_Up() {
    var volume = remote.getControlVolumeTang();
    document.querySelector('.Tivi_Show').innerHTML = " Volum hiện tại tivi của bạn là :" + volume;
}
function Volume_Down() {
    var volume = remote.getControlVolumeGiam();
    document.querySelector('.Tivi_Show').innerHTML = " Volum hiện tại tivi của bạn là :" + volume;
}

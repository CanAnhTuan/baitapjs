var getMouse_1 = {
    //Thuoc Tinh.
    Id: 1,
    MouseName: "Jerry ",
    MouseWeight: 10,
    MouseSpeed: 25,
    MouseLife: true,
    MouseImg: '',
};
function Mouse_Show_1() {
    document.querySelector('#Show_Name').innerHTML = (" Tên của chuột là : " + this.getMouse_1.MouseName + '<br>');
    document.querySelector('#Show_Weight').innerHTML = (" Trọng lượng của chuột la : " + this.getMouse_1.MouseWeight + "Kg" + '<br>');
    document.querySelector('#Show_Speed').innerHTML = (" Tốc độ la : " + this.getMouse_1.MouseSpeed + "s" + '<br>');
    document.querySelector('#Show_Life').innerHTML = (" Trạng thái của chuột la : " + this.getMouse_1.MouseLife + '<br>');
};
var getMouse_2 = {
    //Thuoc Tinh.
    Id: 2,
    MouseName: "Pichu ",
    MouseWeight: 20,
    MouseSpeed: 10,
    MouseLife: true,
};
function Mouse_Show_2() {
    document.querySelector('#Show_Name').innerHTML = (" Tên của chuột là : " + this.getMouse_2.MouseName + '<br>');
    document.querySelector('#Show_Weight').innerHTML = (" Trọng lượng của chuột la : " + this.getMouse_2.MouseWeight + "Kg" + '<br>');
    document.querySelector('#Show_Speed').innerHTML = (" Tốc độ la : " + this.getMouse_2.MouseSpeed + "s" + '<br>');
    document.querySelector('#Show_Life').innerHTML = (" Trạng thái của chuột la : " + this.getMouse_2.MouseLife + '<br>');
};
var getMouse_3 = {
    //Thuoc Tinh.
    Id: 3,
    MouseName: "Pikachu ",
    MouseWeight: 15,
    MouseSpeed: 15,
    MouseLife: true,
};
function Mouse_Show_3() {
    document.querySelector('#Show_Name').innerHTML = (" Tên của chuột là : " + this.getMouse_3.MouseName + '<br>');
    document.querySelector('#Show_Weight').innerHTML = (" Trọng lượng của chuột la : " + this.getMouse_3.MouseWeight + "Kg" + '<br>');
    document.querySelector('#Show_Speed').innerHTML = (" Tốc độ la : " + this.getMouse_3.MouseSpeed + "s" + '<br>');
    document.querySelector('#Show_Life').innerHTML = (" Trạng thái của chuột la : " + this.getMouse_3.MouseLife + '<br>');
};
var getMouse_4 = {
    //Thuoc Tinh.
    Id: 4,
    MouseName: "Hamste ",
    MouseWeight: 10,
    MouseSpeed: 25,
    MouseLife: false,
};
function Mouse_Show_4() {
    document.querySelector('#Show_Name').innerHTML = (" Tên của chuột là : " + this.getMouse_4.MouseName + '<br>');
    document.querySelector('#Show_Weight').innerHTML = (" Trọng lượng của chuột la : " + this.getMouse_4.MouseWeight + "Kg" + '<br>');
    document.querySelector('#Show_Speed').innerHTML = (" Tốc độ la : " + this.getMouse_4.MouseSpeed + "s" + '<br>');
    document.querySelector('#Show_Life').innerHTML = (" Trạng thái của chuột la : " + this.getMouse_4.MouseLife + '<br>');
};
var getCat = {
    //Thuoc tinh.
    NameCat: "Tom",
    CatWeight: 20,
    CatSpeed: 20,

    //CatInformation
    //san mouse }
    // An thit Mouse
    // Eat_Mouse() {
    //     if (this.setMouse.getmouselife() > 0) {
    //         this.Catweight = this.Catweight + 1;
    //         return " Đã ăn một con chuột và cân nặng của mèo hiện tại là : " + this.Catweight;
    //     } else {
    //         return 'Ko';
    // id="Mouse_play4"
    // else if (this.getCat.CatSpeed > this.getMouse_3.MouseSpeed) {
    //     document.querySelector('#Ketqua').innerHTML =(" bắt đc 1 con chuột đó là " + this.getMouse_3.MouseName)
    //     document.getElementById("Mouse_play3").disabled = true;
    // }
    // else if (this.getCat.CatSpeed > this.getMouse_4.MouseSpeed) {
    //     document.querySelector('#Ketqua').innerHTML =(" bắt đc 1 con chuột đó là " + this.getMouse_4.MouseName)
    //     document.getElementById("Mouse_play4").disabled = true;
    // }
    //     }
    // },
};
function Cat_Show() {
    document.querySelector('#Show_Name').innerHTML = (" Name La : " + this.getCat.NameCat + '<br>');
    document.querySelector('#Show_Weight').innerHTML = (" Trọng lượng của mèo la : " + this.getCat.CatWeight + "Kg" + '<br>');
    document.querySelector('#Show_Speed').innerHTML = (" Tốc độ tối đa của mèo la : " + this.getCat.CatSpeed + "s" + '<br>');
};
function Catch_Mouse1() {
    if (this.getCat.CatSpeed > this.getMouse_1.MouseSpeed) {
        document.querySelector('#Ketqua').innerHTML = (" bắt đc 1 con chuột đó là " + this.getMouse_1.MouseName);
        document.getElementById("Mouse_play_1").disabled = true;
        document.querySelector('#Mouse_play_1').style.background = "gray";
    }
    else if (this.getMouse_1.MouseLife == false) {
        document.querySelector('#Ketqua').innerHTML = ("chuột này hiện đã chết không thể bắt");
        document.querySelector('#Mouse_play_4').style.background = "gray";
    }
    else {
        document.querySelector('#Ketqua').innerHTML = ("k bắt đc chuột " + this.getMouse_1.MouseName + " vì tốc độ của bạn thấp hơn tốc độ của chuột ");
        document.querySelector('#Mouse_play_1').style.background = "gray";
    }
};
const y = [];
const x =[];
function Catch_Mouse2() {
    const a = this.getMouse_2.Id;
    y.push(a);
    console.log(y)
    if (this.getCat.CatSpeed > this.getMouse_2.MouseSpeed) {
        document.getElementById('Ketqua').innerHTML = (" bắt đc 1 con chuột đó là " + this.getMouse_2.MouseName);
        document.getElementById("Mouse_play_2").disabled = true;
        document.querySelector('#Mouse_play_2').style.background = "gray";
    }
    else if (this.getMouse_2.MouseLife == false) {
        document.querySelector('#Ketqua').innerHTML = ("chuột này hiện đã chết không thể bắt");
        document.querySelector('#Mouse_play_4').style.background = "gray";
    }
    else {
        document.querySelector('#Ketqua').innerHTML = ("k bắt đc chuột " + this.getMouse_2.MouseName + " vì tốc độ của bạn thấp hơn tốc độ của chuột");
        document.querySelector('#Mouse_play_2').style.background = "gray";
    }

};
function Catch_Mouse3() {
    const b = this.getMouse_3.Id;
    x.push(b);
    console.log(x)
    if (this.getCat.CatSpeed > this.getMouse_3.MouseSpeed) {
        document.querySelector('#Ketqua').innerHTML = (" bắt đc 1 con chuột đó là " + this.getMouse_3.MouseName);
        document.getElementById("Mouse_play_3").disabled = true;
        document.getElementById("Show_Catch_Mouse1").disabled = false;
        document.querySelector('#Mouse_play_3').style.background = "gray";

    }
    else if (this.getMouse_3.MouseLife == false) {
        document.querySelector('#Ketqua').innerHTML = ("chuột này hiện đã chết không thể bắt");
        document.querySelector('#Mouse_play_4').style.background = "gray";
    }
    else {
        document.querySelector('#Ketqua').innerHTML = ("k bắt đc chuột " + this.getMouse_3.MouseName + " vì tốc độ của bạn thấp hơn tốc độ của chuột");
        document.querySelector('#Mouse_play_3').style.background = "gray";
    }
};
function Catch_Mouse4() {
    if (this.getCat.CatSpeed > this.getMouse_4.MouseSpeed) {
        document.querySelector('#Ketqua').innerHTML = (" bắt đc 1 con chuột đó là " + this.getMouse_4.MouseName);
        document.getElementById("Mouse_play_4").disabled = true;
        document.querySelector('#Mouse_play_4').style.background = "gray";

    }
    else if (this.getMouse_4.MouseLife == false) {
        document.querySelector('#Ketqua').innerHTML = ("chuột này hiện đã chết không thể bắt");
        document.querySelector('#Mouse_play_4').style.background = "gray";
    }
    else {
        document.querySelector('#Ketqua').innerHTML = ("k bắt đc chuột " + this.getMouse_3.MouseName + " vì tốc độ của bạn thấp hơn tốc độ của chuột");
        document.querySelector('#Mouse_play_4').style.background = "gray";
    }
};
function Show_Catch_Mouse() {
     if(y.includes(2) == true){
        document.querySelector('#Show1').innerHTML = this.getMouse_2.MouseName;
        document.getElementById("Eat_Mouse1").disabled = false;
    }
    else if(x.includes(3) == true){
        document.querySelector('#Show2').innerHTML = this.getMouse_3.MouseName;
        document.getElementById("Eat_Mouse2").disabled = false;
    }
    else if (y.includes(2) == true && x.includes(3) == true) {
        document.querySelector('#Show1').innerHTML = this.getMouse_2.MouseName;
        document.querySelector('#Show2').innerHTML = this.getMouse_3.MouseName;
        document.getElementById("Eat_Mouse2").disabled = false;
        document.getElementById("Eat_Mouse1").disabled = false;
    }
    else if (y.includes(2) == false && x.includes(3) == false)  {
        document.querySelector('#Show6').innerHTML = ('không có con chuột nào');
    }

}
function Play() {
    document.querySelector('#Show_Name').innerHTML = ("- Mèo Tom sẽ đi bắt một trong bốn chú chuột mà bạn chỉ định.");
    document.querySelector('#Show_Weight').innerHTML = ("- Nếu Tốc độ của Tom lớn hơn tốc độc của một trong bốn chú chuột thì sẽ bắt được chuột.");
    document.querySelector('#Show_Speed').innerHTML = ("- Nếu Tom có tốc độ thấp hơn sẽ để mất con mồi và chỉ được bắt 1 lần 1 con.");
    document.querySelector('#Show_Life').innerHTML = ("- Mỗi lần Tom ăn một con chuột sẽ tăng thêm về trọng lượng nhưng tốc độ sẽ giữ nguyên.");
    document.querySelector('#Show_Said').innerHTML = ("- Một chú chuột đã chết thì Tom sẽ không thể bắt lại.");

};
this.EatMouse1 = function () {

    this.getCat.CatWeight = this.getCat.CatWeight + 10;
    document.querySelector('#Show6').innerHTML = " Đã ăn chuột " + this.getMouse_2.MouseName + " và cân nặng của mèo hiện tại là : " + this.getCat.CatWeight;
}
function Eat_Mouse1() {
    document.getElementById("Eat_Mouse1").disabled = true;
    document.querySelector('#Eat_Mouse1').style.background = "gray";
    EatMouse1();
}
this.EatMouse2 = function () {

    this.getCat.CatWeightLast = this.getCat.CatWeight + 10;
    document.querySelector('#Show6').innerHTML = " Đã ăn chuột " + this.getMouse_3.MouseName + " và cân nặng của mèo hiện tại là : " + this.getCat.CatWeightLast;
}
function Eat_Mouse2() {
    document.getElementById("Eat_Mouse2").disabled = true;
    document.querySelector('#Eat_Mouse2').style.background = "gray";
    EatMouse1();
}
function CheckCat() {
    Cat_Show();
};

function Check_Mouse_1() {
    Mouse_Show_1(); 5
};
function Check_Mouse_2() {
    Mouse_Show_2();
};
function Check_Mouse_3() {
    Mouse_Show_3();
};
function Check_Mouse_4() {
    Mouse_Show_4();
};
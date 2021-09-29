var Mouse1 ={
    //Thuoc Tinh.

    MouseName:"Jerry ",
    MouseWeight: 10,
    MouseSpeed:25,
    MouseLife: true,
    MouseImg: '',
    Mouse1 : function () {
        document.querySelector('#checkMouseName').innerHTML =(" Name La : " + this.MouseName + '<br>');
        document.querySelector('#checkMouseWeight').innerHTML =(" Trọng lượng của chuột la : " + this.MouseWeight + "Kg" + '<br>');
        document.querySelector('#checkMouseSpeed').innerHTML =(" Tốc độ la : " + this.MouseSpeed + "s" + '<br>');
        document.querySelector('#checkMouseLife').innerHTML =(" Trạng thái của chuột la : " + this.MouseLife + '<br>');
    }
};
var Mouse2 ={
    //Thuoc Tinh.

    MouseName:"Donald ",
    MouseWeight: 20,
    MouseSpeed:10,
    MouseLife: true,
    Mouse2 : function () {
        document.querySelector('#checkMouseName2').innerHTML =(" Name La : " + this.MouseName + '<br>');
        document.querySelector('#checkMouseWeight2').innerHTML =(" Trọng lượng của chuột la : " + this.MouseWeight + "Kg" + '<br>');
        document.querySelector('#checkMouseSpeed2').innerHTML =(" Tốc độ la : " + this.MouseSpeed + "s" + '<br>');
        document.querySelector('#checkMouseLife2').innerHTML =(" Trạng thái của chuột la : " + this.MouseLife + '<br>');
    }
};
var Mouse3 ={
    //Thuoc Tinh.

    MouseName:"Peter ",
    MouseWeight: 15,
    MouseSpeed:15,
    MouseLife: true,
    Mouse3 : function () {
        document.querySelector('#checkMouseName3').innerHTML =(" Name La : " + this.MouseName + '<br>');
        document.querySelector('#checkMouseWeight3').innerHTML =(" Trọng lượng của chuột la : " + this.MouseWeight + "Kg" + '<br>');
        document.querySelector('#checkMouseSpeed3').innerHTML =(" Tốc độ la : " + this.MouseSpeed + "s" + '<br>');
        document.querySelector('#checkMouseLife3').innerHTML =(" Trạng thái của chuột la : " + this.MouseLife + '<br>');
    }
};
var Mouse4 ={
    //Thuoc Tinh.

    MouseName:"Aba ",
    MouseWeight: 10,
    MouseSpeed:25,
    MouseLife: false,
    Mouse4 : function () {

        document.querySelector('#checkMouseName4').innerHTML =(" Name La : " + this.MouseName + '<br>');
        document.querySelector('#checkMouseWeight4').innerHTML =(" Trọng lượng của chuột la : " + this.MouseWeight + "Kg" + '<br>');
        document.querySelector('#checkMouseSpeed4').innerHTML =(" Tốc độ la : " + this.MouseSpeed + "s" + '<br>');
        document.querySelector('#checkMouseLife4').innerHTML =(" Trạng thái của chuột la : " + this.MouseLife + '<br>');
    }
};
var Cat ={
    //Thuoc tinh.
    NameCat: "Tom",
    CatWeight : 20,
    CatSpeed: 20,

    //CatInformation
    Cat : function () {
        document.querySelector('#checkCatName').innerHTML =(" Name La : " + this.NameCat + '<br>');
        document.querySelector('#checkCatWeight').innerHTML =(" Trọng lượng của mèo la : " + this.CatWeight + "Kg" + '<br>');
        document.querySelector('#checkCatSpeed').innerHTML =(" Tốc độ tối đa của mèo la : " + this.CatSpeed + "s"+ '<br>');
    }
};
function Play(){
    document.querySelector('#Play1').innerHTML =("- Mèo Tom sẽ đi bắt một trong bốn chú chuột mà bạn chỉ định.");
    document.querySelector('#Play2').innerHTML =("- Nếu Tốc độ của Tom lớn hơn tốc độc của một trong bốn chú chuột thì sẽ bắt được chuột.");
    document.querySelector('#Play3').innerHTML =("- Nếu Tom có tốc độ thấp hơn sẽ để mất con mồi.");
    document.querySelector('#Play4').innerHTML =("- Mỗi lần Tom ăn một con chuột sẽ tăng thêm về trọng lượng.");
    document.querySelector('#Play5').innerHTML =("- Một chú chuột đã chết thì Tom sẽ không thể bắt lại.");

}
function checkCat(){
    console.log(Cat.Cat()); 
}
function checkMouse1(){
    console.log(Mouse1.Mouse1()); 
}
function checkMouse2(){
    console.log(Mouse2.Mouse2()); 
}
function checkMouse3(){
    console.log(Mouse3.Mouse3()); 
}
function checkMouse4(){
    console.log(Mouse4.Mouse4()); 
}
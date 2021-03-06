//temperature///////////////////////////////////////////////////////////////////

/*var report = function (celsius, farenheit) {
    document.getElementById("return").innerHTML =
        celsius + "\xb0C = " + farenheit + "\xb0F";
};

document.getElementById("f_to_c").onclick = function () {
    var f = document.getElementById("temperature").value;
    report((f - 32) / 1.8, f);
};

document.getElementById("c_to_f").onclick = function () {
    var c = document.getElementById("temperature").value;
    report(c, 1.8 * c + 32);
};*/

//length///////////////////////////////////////////////////////////////////

/*
var report2 = function (inch, feet) {
    document.getElementById("r2").innerHTML =
        inch + " in = " + feet + " ft";
};

document.getElementById("in_to_ft").onclick = function () {
    var inc = document.getElementById("length").value;
    report2(inc, inc / 12, inc);
};

document.getElementById("ft_to_in").onclick = function () {
    var ft = document.getElementById("length").value;
    report2(ft * 12, ft);
};

var lenrep = function (ft3, meter) {
    document.getElementById("r2").innerHTML =
        ft3 + " ft = " + meter + " m";
};

document.getElementById("ft_to_m").onclick = function () {
    var secFt = document.getElementById("length").value;
    lenrep(secFt, secFt/3.2808);
};

document.getElementById("m_to_ft").onclick = function () {
    var mtr = document.getElementById("length").value;
    lenrep(mtr * 3.2808, mtr);
};

var len2rep = function (mile, kilometer) {
    document.getElementById("r2").innerHTML = 
        mile + " mi = " + kilometer + " km";
};

document.getElementById("mi_to_km").onclick = function () {
    var mile = document.getElementById("length").value;
    len2rep(mile, mile / 0.62137);
};

document.getElementById("km_to_mi").onclick = function () {
    var kilom = document.getElementById("length").value;
    len2rep(kilom * 0.62137, kilom);
};
*/

//mass///////////////////////////////////////////////////////////////////

var weightless = function (pound, kilogram) {
    document.getElementById("mass").innerHTML =
        pound + " lb = " + kilogram + " kg";
};

document.getElementById("lb_to_kg").onclick = function () {
    var lb = document.getElementById("weight").value;
    weightless(lb, lb/2.2046);
};

document.getElementById("kg_to_lb").onclick = function () {
    var kg = document.getElementById("weight").value;
    weightless(kg * 2.2046 , kg);
};

var grav = function (gram, ounce) {
    document.getElementById("mass").innerHTML = 
        gram + " g = " + ounce + " oz";
};

document.getElementById("g_to_oz").onclick = function () {
    var gm = document.getElementById("weight").value;
    grav(gm, gm * 0.035274);
};

document.getElementById("oz_to_g").onclick = function () {
    var oun = document.getElementById("weight").value;
    grav(oun / 0.035274, oun);
};

var newton = function(gmz, kgz) {
    document.getElementById("mass").innerHTML =
        gmz + " g = " + kgz + " kg";
};

document.getElementById("g_to_kg").onclick = function () {
    var grmm = document.getElementById("weight").value;
    newton(grmm, grmm / 1000);
};

document.getElementById("kg_to_g").onclick = function () {
    var kgg = document.getElementById("weight").value;
    newton(kgg * 1000, kgg);
};


//data storage///////////////////////////////////////////////////////////////////

var leak = function (bit, byte) {
    document.getElementById("memory").innerHTML = 
        bit + " bit = " + byte + " byte";
};

document.getElementById("bit_to_byte").onclick = function () {
    var bit = document.getElementById("data").value;
    leak(bit, bit * 0.125);
};

document.getElementById("byte_to_bit").onclick = function () {
    var byte = document.getElementById("data").value;
    leak(byte * 8, byte);
};

var memleak = function (kilobyte, megabyte) {
    document.getElementById("memory").innerHTML = 
        kilobyte + " KB = " + megabyte + " MB"; 
};

document.getElementById("KB_to_MB").onclick = function () {
    var KB = document.getElementById("data").value;
    memleak(KB, KB * 0.001);
};

document.getElementById("MB_to_KB").onclick = function () {
    var MB = document.getElementById("data").value;
    memleak(MB * 1000, MB);
};

var binary = function (gigabyte, terabyte) {
    document.getElementById("memory").innerHTML =
        gigabyte + " GB = " + terabyte + " TB";
};

document.getElementById("GB_to_TB").onclick = function () {
    var GB = document.getElementById("data").value;
    binary(GB, GB * 0.001);
};

document.getElementById("TB_to_GB").onclick = function () {
    var TB = document.getElementById("data").value;
    binary(TB*1000, TB);
};


//cooking///////////////////////////////////////////////////////////////////

var beef = function (tsp, tbsp) {
    document.getElementById("cook").innerHTML =
        tsp + " tsp = " + tbsp.toFixed(2) + " tbsp";
    };

document.getElementById("tsp_to_tbsp").onclick = function () {
    var tea = document.getElementById("cooking").value;
    beef(tea, tea*0.3333);
};

var milk = function (tbsp2, cup) {
    document.getElementById("cook").innerHTML =
        cup + " cup = " + tbsp2 + " tbsp";
};

document.getElementById("cup_to_tbsp").onclick = function () {
    var cup = document.getElementById("cooking").value;
    milk(cup * 16, cup);
};

var juice = function(pint, cup) {
    document.getElementById("cook").innerHTML = 
        pint + " pint = " + cup + " cups";
};

document.getElementById("pint_to_cup").onclick = function () {
    var pnt = document.getElementById("cooking").value;
    juice(pnt, pnt * 2);
};

var chocoMilk = function(quart, cup) {
    document.getElementById("cook").innerHTML = 
        quart + " quart = " + cup + " cups";
};

document.getElementById("quart_to_cup").onclick = function () {
    var qrt = document.getElementById("cooking").value;
    chocoMilk(qrt, qrt * 4);
};

var milk2 = function(gallon, cup) {
    document.getElementById("cook").innerHTML = 
        gallon + " gallon = " + cup + " cups";
};

document.getElementById("gallon_to_cup").onclick = function () {
    var gall = document.getElementById("cooking").value;
    milk2(gall, gall * 16);
};

var soda = function(liter, gallon) {
    document.getElementById("cook").innerHTML =
        gallon + " gallon = " + liter + " liters";
};

document.getElementById("gallon_to_liter").onclick = function () {
    var gaL = document.getElementById("cooking").value;
    soda(gaL * 4.5, gaL);
};
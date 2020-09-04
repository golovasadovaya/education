var a=0;
var b=1;
var c=-3;


if(a==0)document.write('True'); else document.write('false');
if(b==0)document.write('True'); else document.write('false');
if(c==0)document.write('True'); else document.write('false');
document.write('                ');

if(a>0)document.write('True'); else document.write('false');
if(b>0)document.write('True'); else document.write('false');
if(c>0)document.write('True'); else document.write('false');


document.write('                    ');

if(a<0)document.write('True'); else document.write('false');
if(b<0)document.write('True'); else document.write('false');
if(c<0)document.write('True'); else document.write('false');

document.write('          ');

var test=true;
var test1=false;

if(test==true)document.write('true');else document.write('false');
document.write('     zadachi  ');

var day=Math.floor(Math.random()*(31-1))+1;

document.write(day);
if(day>=1&&day<=10) document.write('first decade');
else if(day>10&&day<=20) document.write('second decade');
else if(day>20&&day<=31) document.write('third decade');

document.write('          2zadacha ')
var month=Math.floor(Math.random()*(12-1))+1;
//month=12;

document.write(month);

if(month==12||month<=2) document.write('winter');
else if(month>2&&month<=5)document.write('spring');
else if(month>5&&month<=8)document.write('summer');
else if(month>8&&month<=11)document.write('autumn');

document.write('   zadacha 3 ');
var abc='abcde';

if(abc[0]=='a')document.write('true');

document.write('     zadacha 4');
var qwe='123';



var num=String(Math.floor(Math.random()*(999-100))+100);
document.write('chislo');
document.write(num);
document.write(' 1 cifra');
document.write(parseInt(num[0])+parseInt(num[1])+parseInt(num[2]));


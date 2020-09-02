var arr =['a','b','c'];

document.write(arr[0]+arr[1]+arr[2]);

var arr1=['a','b','c','d'];

document.write(arr1[0]+'+'+arr1[1]+','+arr1[2]+'+'+arr1[3]);

var arr2=[2,5,3,9];
var result=2*5+3*9;
document.write(result);

var obj= { a:1, b:2, c:3};
document.write(obj.c);
document.write(obj['c']);


var obj1 = {Коля: '1000',Вася:'500',Петя:'200'};

document.write('  ');
document.write(obj1.Петя);
document.write('    ');
document.write(obj1['Коля']);

document.write('                ');
var mas= [[1,2,3],[4,5,6],[7,8,9]];
document.write(mas[1][0]);

document.write('           ');
var mas1={js:['jQuery','Angular'],php:'hello',css:'world'};
document.write(mas1['js'][0]);


document.write('                ');
var lang={ru:'ru',eng:'eng'};
var day={1:'пн',2:'вт',3:'ср',4:'чт',5:'пт',6:'сб', 7:'вс'};
document.write(lang['ru']+day['3']);

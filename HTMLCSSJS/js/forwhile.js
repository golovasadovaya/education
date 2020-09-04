/*for(var i=1;i<=100;i++)
{
    document.write(i+'<br>');
}
for(var i=0;i<=100;i++)
{
    if((i%2)==0)
    {
        document.write(i+'<br>');
    }
}
*/
var result=0;
/*for(var i=0;i<=100;i++)
{
    result+=i;
}
document.write(result);
*/
var arr=[1,2,3,4,5];
for(i=0;i<arr.length;i++){
    document.write(arr[i]+'<br>');
    result+=arr[i];

}
document.write(result);

var obj={green:'зелёный',red:'красный',blue:'голубой'};
for(var key in obj){
    document.write(key+' '+obj[key]+'<br>');

}
var objname={'Коля':'200','Вася':'300','Петя':'400'}
for(var key in objname)
{
    document.write(key+' - зарплата '+objname[key]+' долларов <br>');

}
var mas1=[2,5,9,15,0,4];
for(var i=0;i<mas1.length;i++){
    if(mas1[i]>3&&mas1[i]<10)
    {
    document.write(mas1[i]+'<br>');
    }
}
var mas2=[1,2,5,9,4,4,4,4,4,413,10];
for(var i=0;i<mas2.length;i++)
{
    if(mas2[i]==4){
        document.write('<b>Есть</b>');
        break;
    }
}
const chrs = ['1', '2', '5'];
 var result1 = [10, 20, 30, 50, 235, 3000].filter(e => chrs.includes(e.toString()[0]));

document.write(result1);



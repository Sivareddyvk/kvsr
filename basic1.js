var today=new Date();
var hours= today.getHours();
var greeting;

if (hours>1 && hours<12)
{
    greeting="good morinning";
}
else if(hours=12 && hours<18)
{
    greeting="good afternoon";
}
else
{
    greeting="good evening";
}
console.log(greeting);
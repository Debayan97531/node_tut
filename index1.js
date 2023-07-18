let x='20';
if(x===20)
{
    console.log("matched");
}
else
{
    console.log("not matched");
}

// for(i=1;i<10;i++)
// {
//     console.log(i);
// }

const arr=[0,9,5,8,8];
console.log(arr);

let res = arr.filter((val)=>{
    // return val===8
    return val>=5
})
console.log(res);

let app1 = require('./app1')
console.log(app1.y);


//filter used to find a specific value in array
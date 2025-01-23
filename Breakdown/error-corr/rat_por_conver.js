//Propartions
function isPropartions(frac1,frac2){
    x=frac1.split('/')
    y=frac2.split('/')

    num1=Number(x[0])* Number(y[1])
    num2=Number(x[1])* Number(y[0])

    if(num1==num2){
        console.log(`${frac1} and ${frac2} are propartional`)
        console.log(`${num1}=${num2}`)
    }
    else{
        console.log(`${frac1} and ${frac2} are not propartional`)
        console.log(`${num1}=${num2}`)}
}
isPropartions('4/4','2/2')

function findPropation(frac1,frac2){
    x=frac1.split('/')
    y=frac2.split('/')
    z=x.concat(y)

    const findx = (element) => element == 'x';
    where_x=z.findIndex(findx)

    switch(where_x){
        case 0:
            num=Number(x[1])* Number(y[0])
            console.log(num/Number(y[1]))
            break
        
        case 1:
            num=Number(x[0])* Number(y[1])
            console.log(num/Number(y[0]))
            break
        case 2:
            num=Number(x[0])* Number(y[1])
            console.log(num/Number(x[1]))
            break
        case 3:
            num=Number(x[1])* Number(y[0])
            console.log(num/Number(x[0]))
            break
    }





}
findPropation('2/4','5/x')
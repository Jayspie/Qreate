function x_extract(term1,term2){
   let a=term1.split(/(?=[-+])/g) 
   let b=term2.split(/(?=[-+])/g) 
   return [a,b]
}
function divied(term1,term2){
    let expo
    let product
    if(term1[0]&&term2[0]!='x'){
        product=term1[0].split("x")[0]/term2[0].split("x")[0]
    }
    else if(term1[0]!="x"&&term2[0]=="x"){
        product=term1[0].split("x")[0]/1
    }
    else if(term1[0]&&term2[0]=="x")
        product="x"



    
    if(term1[0].includes("^")&&term2[0].includes("^")==true){
        expo=Number(term1[0].split("x")[1][1])-Number(term2[0].split("x")[1][1])
    }
    else if(term1[0].includes("^")==true && term2[0].includes("^")==false){
        expo=Number(term1[0].split("x")[1][1])-1
    }

    if(product=="x"){//------------------------------------
        return "x^"+expo//                                 |
    }//                                                     =====> If the answer suppose to be x^exopent but it print out 0x^exponent don't worry about I'll fix it later
    else{//                                                |
        return `${product}x^${expo}`//---------------------
    }
}


let x_term=x_extract('x^2+5x+6',"x+2")
console.log(divied(x_term[0],x_term[1]))
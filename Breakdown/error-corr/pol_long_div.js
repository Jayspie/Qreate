function x_extract(term1, term2) {
    let a = term1.split(/(?=[-+])/g)
    let b = term2.split(/(?=[-+])/g)
    return [a, b]
}
function divied(term1, term2) {
    let expo
    let product
    if (term1[0] && term2[0] != 'x') {
        product = term1[0].split("x")[0] / term2[0].split("x")[0]
    }
    else if (term1[0] != "x" && term2[0] == "x") {
        product = term1[0].split("x")[0] / 1
    }
    else if (term1[0] && term2[0] == "x")
        product = "x"

    if (term1[0].includes("^") && term2[0].includes("^") == true) {
        expo = Number(term1[0].split("x")[1][1]) - Number(term2[0].split("x")[1][1])
    }
    else if (term1[0].includes("^") == true && term2[0].includes("^") == false) {
        expo = Number(term1[0].split("x")[1][1]) - 1
    }

    if (product == "x") {//------------------------------------
        return "x^" + expo//                                   |
    }//                                                         =====> If the answer suppose to be x^exopent but it print out 0x^exponent don't worry about I'll fix it later
    else {//                                                   |
        return `${product}x^${expo}`//-------------------------
    }
}

function muiltiply(product, term2) {
    let result = []

    for (let i = 0; i < term2.length; i++) {
        if (product.includes("^") && term2[i].includes("^") == true) {
            result.push(`${product.split("x")[0] * term2[i].split("x")[0]}x^${Number(product.split("x")[1][1]) - Number(term2[i].split("x")[1][1])}`)
            console.log(term2[i])
        }
        else if (product.includes("^") == true && term2[i].includes("^") == false && term2[i].includes("x") == false) {
            if (product.split("x")[0] == 0) {
                result.push(`${(product.split("x")[0] + 1) * term2[i].split("x")[0]}x^${Number(product.split("x")[1][1])}`)
            }
            else if (term2[i].split("x")[0] == 0) {
                result.push(`${(product.split("x")[0]) * (term2[i].split("x")[0] + 1)}x^${Number(product.split("x")[1][1])}`)
            }
            else {
                result.push(`${(product.split("x")[0]) * term2[i].split("x")[0]}x^${Number(product.split("x")[1][1])}`)
            }
        }
        else if (product.includes("^") == true && term2[i].includes("^") == false) {
            if (product.split("x")[0] == 0) {
                result.push(`${(product.split("x")[0] + 1) * term2[i].split("x")[0]}x^${Number(product.split("x")[1][1]) + 1}`)
            }
            else if (term2[i].split("x")[0] == 0) {
                result.push(`${product.split("x")[0] * (term2[i].split("x")[0] + 1)}x^${Number(product.split("x")[1][1]) + 1}`)
            }
            else {
                result.push(`${product.split("x")[0] * term2[i].split("x")[0]}x^${Number(product.split("x")[1][1]) + 1}`)
            }
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i].includes("0") == true) {
            result[i] = result[i].replace('0', "")
        }
    }
    return result

}
let x_term = x_extract('x^2', "x+2")
//console.log(x_term[1][0].split("x")[0])
console.log(muiltiply(divied(x_term[0], x_term[1]), x_term[1]))
//console.log(divied(x_term[0],x_term[1]))
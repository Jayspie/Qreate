const iso8859 = {// a dict of all iso8859 charcters and their hex codes
    " ": "20",
    "!": "21",
    '"': "22",
    "#": "23",
    $: "24",
    "%": "25",
    "&": "26",
    "'": "27",
    "(": "28",
    ")": "29",
    "*": "2A",
    "+": "2B",
    ",": "2C",
    "-": "2D",
    ".": "2E",
    "/": "2F",
    0: "30",
    1: "31",
    2: "32",
    3: "33",
    4: "34",
    5: "35",
    6: "36",
    7: "37",
    8: "38",
    9: "39",
    ":": "3A",
    ";": "3B",
    "<": "3C",
    "=": "3D",
    ">": "3E",
    "?": "3F",
    "@": "40",
    A: "41",
    B: "42",
    C: "43",
    D: "44",
    E: "45",
    F: "46",
    G: "47",
    H: "48",
    I: "49",
    J: "4A",
    K: "4B",
    L: "4C",
    M: "4D",
    N: "4E",
    O: "4F",
    P: "50",
    Q: "51",
    R: "52",
    S: "53",
    T: "54",
    U: "55",
    V: "56",
    W: "57",
    X: "58",
    Y: "59",
    Z: "5A",
    "[": "5B",
    "\\": "5C",
    "]": "5D",
    "^": "5E",
    _: "5F",
    "`": "60",
    a: "61",
    b: "62",
    c: "63",
    d: "64",
    e: "65",
    f: "66",
    g: "67",
    h: "68",
    i: "69",
    j: "6A",
    k: "6B",
    l: "6C",
    m: "6D",
    n: "6E",
    o: "6F",
    p: "70",
    q: "71",
    r: "72",
    s: "73",
    t: "74",
    u: "75",
    v: "76",
    w: "77",
    x: "78",
    y: "79",
    z: "7A",
    "{": "7B",
    "|": "7C",
    "}": "7D",
    "~": "7E",
};

const hex_binary = {// each hex code and their binary
    0: "0000",
    1: "0001",
    2: "0010",
    3: "0011",
    4: "0100",
    5: "0101",
    6: "0110",
    7: "0111",
    8: "1000",
    9: "1001",
    A: "1010",
    B: "1011",
    C: "1100",
    D: "1101",
    E: "1110",
    F: "1111",
};

function to_binary(link) {//converts the link into binary 
    let binary_array = [];//           <-----------------------------------------------------------------------------|      
    let string_array = link.split("");// turns link into an array                                                    |
    //                                                                                                               |
    for (let char of string_array) {//converts each charecter from the link into hex code                            | 
        let hex_array = iso8859[char].split("");//                                                                   |
        //                                                                                                           |  
        for (let bhar of hex_array) {//conoverts each hex code into binary and putting them in array called _________|
            binary_array.push(hex_binary[bhar]);
        }
    }
    if (binary_array.join("").length <= 624) {//checks if theres no more than 624 bits in the binary string

        binary_array.push("0000")//adds the Terminator to the end binary string ------------------------>  | The reason behind it is that there can only be |
        //                                                                                                 | 78 bytes of characters in a binary string, not |
        //adding more 0's to make the length a multiple of 8                                               | including the mode, link character count, and  |
        if (binary_array.join("").length % 8 != 0) {//                                                     | terminator. Now, because there are 8 bits in a |
            let div = binary_array.join("").length / 8//                                                   | byte, there can only be 624 bits in binary     |
            let round = Math.round(div)//                                                                  | strings.                                       |
            let for_length = 0

            if (round > div) {
                for_length = (round * 8) - binary_array.join("").length

                for (let i = 0; i < for_length; i++) {
                    binary_array.push(0)
                }
                return [binary_array.join(""), link.length]
            }
            else {
                for_length = ((round + 1) * 8) - binary_array.join("").length

                for (let i = 0; i < for_length; i++) {
                    binary_array.push(0)
                }
                return [binary_array.join(""), link.length]
            }
        }
        else {
            return [binary_array.join(""), link.length]
        }
    }
    else {
        return "Binary is to big"
    }
}
console.log(to_binary("https://www.youtube.com/watch?v=ZizmvuZ3EFk&t=529s")[0].length)
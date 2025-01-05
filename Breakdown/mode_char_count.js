const mode ="0100";

function char_count(num){//converts the link count into binary
    let char_binary=[];

    while (num>=1){
        char_binary.push(num%2)// adds the remainder to char_binary list

        //reassign the num value 
        num=num/2 
        if (Number.isInteger(num)==true){
            continue
        }
        else{
            num=num-0.5
        }
    }
    
    if(char_binary.length<8){//checks if the binary is 8 character long 
        let loop=8-char_binary.length

        for(let i=0;i<loop;i++){// add 0's to binary to make it 8 characters long
            char_binary.push(0)
        } 
        return char_binary.reverse().join("")//-------------
    }//                                                    |
    //                                                      =========> reversing the list and making them into one
    else{//                                                |
        return char_binary.reverse().join("")//-------------
    }

}
let a="https://www.youtube.com/watch?v=ZizmvuZ3EFk&t=529s"
console.log(char_count(a.length))

function equation(str1) {
    let example, result = 0 ,num="", operator="";
    example = str1.split('');
    
    for (var n = 0; n < example.length ; n++) {
        if (Number.isNaN(parseInt(example[n]))) {
            operator += example[n];

        } else {
            num += example[n];
        } 
    }

    let count = 0;
    for (let n = 0; n < operator.length; n++) {
        switch(operator[n]) {
            case "+" : {
                if (count == 0) {
                    result = parseInt(num[0]) + parseInt(num[1]);
                    count++;
                } else if (count == 1 ) {
                    result += parseInt(num[2]);
                    count++;
                } else if (count == 2 ) {
                    result += parseInt(num[3]);
                    count++;
                } else if (count == 3 ) {
                    result += parseInt(num[4]);
                    count++;
                } 
                break;
            } 
            case "-" :  {
                if (count == 0) {
                    result = parseInt(num[0]) - parseInt(num[1]);
                    count++;
                } else if (count == 1 ) {
                    result -= parseInt(num[2]);
                    count++;
                } else if (count == 2 ) {
                    result -= parseInt(num[3]);
                    count++;
                } else if (count == 3 ) {
                    result -= parseInt(num[4]);
                    count++;
                } 
                break;
            }
            case "*" :  {
                if (count == 0) {
                    result = parseInt(num[0]) * parseInt(num[1]);
                    count++;
                } else if (count == 1 ) {
                    result *= parseInt(num[2]);
                    count++;
                } else if (count == 2 ) {
                    result *= parseInt(num[3]);
                    count++;
                } else if (count == 3 ) {
                    result *= parseInt(num[4]);
                    count++;
                } 
                break;
            }
        }
        
    }
    
    console.log(result);
}

equation("1+1");
equation("7*4-2");
equation("1+1+1+1+1");


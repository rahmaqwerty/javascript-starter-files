
function getGrade(total) {

    
    if (total && total >90) {
        grade ="A+"
    }

    else if (80< total && total <=90)
    {grade= "A"
    }

    else if (70<total && total <=80)
    {grade= "B"
    }

    else if (60<total && total <=70)
    {grade= "C"
    }

    else if (50<total && total<=60)
    {grade= "D"
    }

    else if (40<total && total<=50)
    {grade= "E"
    }

    else if (30<total && total<=40)
    {grade= "F"
    }

    else {
        grade = "fail"
    };


        return grade

};

console.log(getGrade(0));

//function standard if statement

function check_if_number_is_even(number) {

    if ((number %2) ==0) {
        return true
    }
    else{
        return false
    }
}

console.log(check_if_number_is_even(10))



///switch function practice

function role_at_CBF(name){ 
 
    switch(name){
        case "Harjeet":
        return "You are an instructor";

        case "Samuel":
        return "You are an instructor" ;   

        case "Sarah":
        return "You are a course co-ordinator";
        
        case "Charlene":
        return "You are the founder";


        default:
            return "you are a member of CBF community"

        
    };
}

console.log(role_at_CBF("Rahma"));



//switch function for calculator example
//Write calculator function, takes in 2 numbers and operator, depending on the operator that they have typed you need carry out the corresponding calculation

function calculator(num_1, num_2, operation) {
    if (operation === '+') {
        return num_1 + num_2;

    } else if (operation === '-') {
        return num_1 - num_2;
    } 
    
    else if (operation === '*') {
        return num_1 * num_2;
    } 
    else if (operation === '/') {
       return num_1 / num_2 
        }
 else if (operation === '%') {
            if (num_1 % num_2) {
                return "Check remainder";
            }
        return num_1 / num_2;
    } else {
        return "Invalid operator";
    }
}


console.log(calculator(10,5, "/"));
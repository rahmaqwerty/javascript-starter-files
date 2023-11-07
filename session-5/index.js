
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




function getGrade(){
    let myScore =  document.getElementById("score").value;

    if(myScore>=75 && myScore<=100){
        document.getElementById("grade").innerHTML = "A"
        document.getElementById("grade").style = "color: green;";
    }

    else if(myScore>=65 && myScore<=74){
        document.getElementById("grade").innerHTML = "B"
        document.getElementById("grade").style = "color: blue;";
    }

    else if(myScore>=55 && myScore<=64){
        document.getElementById("grade").innerHTML = "C"
        document.getElementById("grade").style = "color: purple;";
    }

    else if(myScore>=40 && myScore<=54){
        document.getElementById("grade").innerHTML = "D"
        document.getElementById("grade").style = "color: orange;";
    }

    else if(myScore>=0 && myScore<=39){
        document.getElementById("grade").innerHTML = "F"
        document.getElementById("grade").style = "color: red;";
    }

    else{
        document.getElementById("grade").innerHTML = "Invalid Input";
        document.getElementById("grade").style = "color: black;";
    }
}
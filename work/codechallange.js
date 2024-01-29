var current_date = new Date() ;


function greet (person) {
    if (person == "Count Dooku"){
        console.log("im coming for you , Douku");
    }else console.log("Good day " + person);
    console.log("on" + current_date.getHours() + ":" + current_date.getMinutes());
}

greet ("omar");
console.log("****************");
greet ("Count Dooku");

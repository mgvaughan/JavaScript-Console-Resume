let fullName = "Michael Vaughan";
let career = "Civil Engineer";
let description = "I am a licensed Professional Engineer";

console.log("Name: " + fullName.toUpperCase());
console.log("Career: " + career);
console.log("Description: " + description);
console.log("");

console.log("My Interests:");
console.log("* Playing Bass");
console.log("* Hiking");
console.log("* Reading");
console.log("* Watching quality tv and movies");
console.log("");


let myPosition1 = {
    company: "Schnabel",
    title: "Project Manager",
    descript: "Designed and Managed Earth Retention Construction Projects"
} 

let myPosition2 = {
    company: "Groundforce",
    title: "Technical Services Engineer",
    descript: "Designed Earth Retention Systems"
} 


function displayPosition(myPosition) {
    console.log("My Previous Experience:");
    console.log("* " + myPosition.company);
    console.log("* " + myPosition.title);
    console.log("* " + myPosition.descript);
    console.log("")
}

displayPosition(myPosition1)
displayPosition(myPosition2)

console.log("My Skills:");

let mySkill = [
    skill1 = {
        skill: "negotiation skills",
        value: 1
    },
    skill2 = {
        skill: "scheduling skills", 
        value: 0
    },
    skill3 = {
        skill: "designing skills",
        value: 1
    },
    skill4 = {
        skill: "communication skills",
        value: 0
    }    
]

function displaySkill(mySkill) {
    for(i = 0; i < mySkill.length; i++) {
        if(mySkill[i].value == true){
            console.log("* BAM: " + mySkill[i].skill)
        } else {
            console.log("* " + mySkill[i].skill)
        }
    }
}

displaySkill(mySkill)
let raceNumber = Math.floor(Math.random() * 1000);

var earlyTime = true;

var runnerAge = 16;

if(earlyTime && runnerAge >= 18){
    raceNumber += 1000;
}
if(runnerAge > 18){
    if(earlyTime){
        console.log(`Runner number ${raceNumber}, your race will start at 9:30 A.M.`)
    }else{
        console.log(`Runner number ${raceNumber}, your race will start at 11:00 A.M.`)
    }
}else if(runnerAge < 18){
    console.log(`Young runner number ${raceNumber}, your race will start at 12:30 P.M.`)
}else{
    console.log(`Runner ${raceNumber}, Please go to the registration desk`)
}
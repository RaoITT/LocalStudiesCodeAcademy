function getSleeptHour(day){
    day = day.charAt(0).toUpperCase() + day.slice(1);
    switch(day){
        case('Monday'):
            return 7;
            break;
        case('Tuesday'):
            return 6;
            break;
        case('Wednesday'):
            return 7;
            break;
        case('Thursday'):
            return 6;
            break;
        case('Friday'):
            return 7;
            break;
        case('Saturday'):
            return 9;
            break;
        case('Sunday'):
            return 8;
            break;
        default:
            console.log('Please choose a day to get a sleep hour')
            return false;
            break;
    }
}

getActualSleepHours = () =>{
    return getSleeptHour('Monday')+ getSleeptHour('Tuesday') + getSleeptHour('Wednesday') + 
    getSleeptHour('Thursday')+ getSleeptHour('Friday') + getSleeptHour('Saturday') + getSleeptHour('Sunday');
}

getIdealSleepHours = idealHours => idealHours * 7;

function calculateSleepDebt(){
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours(7.9);
    difference = idealSleepHours - actualSleepHours;

    if(idealSleepHours === actualSleepHours){
        console.log('Your sleep schedule is perfect!')
    }else if(idealSleepHours > actualSleepHours){
        console.log(`You need to sleep more :/, you are ${Math.floor(difference)} hours behind`);
    }else if(idealSleepHours < actualSleepHours){
        console.log(`You need to work more, you lazy human >:/, you are oversleeping ${Math.floor(difference*-1)} hours`);
    }else{
        console.log('Issues with dates')
    }
}

calculateSleepDebt();
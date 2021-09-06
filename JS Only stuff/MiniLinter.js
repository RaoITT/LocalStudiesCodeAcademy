let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

var storyWords = story.split(' ');

var counterOverused = [];

var betterwords = storyWords.filter(palabra =>{
    if(palabra !== unnecessaryWords[0] && palabra !== unnecessaryWords[1] && palabra !== unnecessaryWords[2]){
        return palabra;
    }
});

for(i = 0; i< overusedWords.length;i++){
    let counter = betterwords.filter(word =>{
        return word === overusedWords[i];
    })
    counterOverused.push(counter.length);
}

var oraciones = 0;
function contadorOraciones(){
    oraciones += 1;
}

betterwords.filter(simbolo =>{
    if(simbolo.includes('.') || simbolo.includes('!')){
        contadorOraciones();
    }
})

console.log(`this story, contains ${oraciones} sentences`);
console.log(`with a total of ${betterwords.length} words.`);
console.log(`But it have words which are overused, like`);
for(let i = 0; i<overusedWords.length;i++){
    console.log(`'${overusedWords[i]}' which is used: ${counterOverused[i]} times`);
}
console.log("Our story is \n");
console.log(betterwords.join(" "));
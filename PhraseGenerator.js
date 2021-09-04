const phraseListPull = ["If you can change something, change it. If you can't, don't waste time thinking about it. - 'Beidou'", "Only once you know and respect death, can you truly understand the value of life. - 'Hu Tao'", "The world would lose much of its appeal if wholly stripped of delusion and falsehood. - Fischl", "I don't understand why people insist on going all out to try and prove how their existence is more valuable than everyone else's. To exist in the first place is a beautiful thing, and that's enough... isn't it? - 'Ganyu'", "I love it when it snows. The world falls completely silent... and I can sleep undisturbed. - 'Kazuha', ", "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart", "I don't want to be at the mercy of my emotions. I want to use them, to enjoy them, and to dominate them.", "One thing you can't hide - is when you're crippled inside.", "The emotion that can break your heart is sometimes the very one that heals it...", "Pity those who don't feel anything at all."];

function getPhrase(){
    return phraseListPull[Math.floor(Math.random()*phraseListPull.length)];
}

console.log(getPhrase());

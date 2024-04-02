const array=[1,2,3,4,5,6]
const marvel_hero=["ironman","batman","thor"]
const dc_hero=["joker","aquawaman"]


//marvel_hero.push(dc_hero)

//concat operator
//const all_hero=  marvel_hero.concat(dc_hero);
//spred operator
const all_hero=[...marvel_hero,...dc_hero]
console.log(all_hero)
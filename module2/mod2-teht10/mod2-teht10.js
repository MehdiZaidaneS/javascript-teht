'use script';


const numberOfCandidates = prompt("Enter amount of candidates");

let candidates = []



function addCandidates(){
    for (let i = 0; i<numberOfCandidates; i++){
        const name = prompt(`Enter name for candidate ${i+1}`)
        const candidate = {
            name: name,
            votes: 0
        }
        candidates.push(candidate)
    }
}




function votingPhase(){

    const numberOfVoters = prompt("Enter amount of voters");

    for (let i = 0; i<numberOfVoters; i++){
        const nameOfVoted = prompt(`Person ${i+1} votes: `)
    
        for(let i = 0; i<candidates.length; i++){
            if(candidates[i].name == nameOfVoted){
            candidates[i].votes +=1;
            }
        }
   }   
}


function result(array){
    array.sort((a, b) => b.votes-a.votes)
    console.log(`The winner is ${array[0].name} with ${array[0].votes} votes.`)
    console.log("Results:")
    
    for (let i = 0; i<array.length; i++){
        console.log(array[i].name+ ": " + array[i].votes + " votes.")
    }
}




addCandidates()
votingPhase()
result(candidates)

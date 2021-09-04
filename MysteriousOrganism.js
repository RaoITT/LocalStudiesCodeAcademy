// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

  const pAequorFactory = number =>{
    let organism = {
        specimenNum : number,
        dna : mockUpStrand(),
        mutate(){
            let temp = Math.floor(Math.random()*this.dna.length);
            let dnaPart = this.dna[temp];
            do{
                this.dna[temp] = returnRandBase();
            }while(dnaPart === this.dna[temp])
        },
        compareDNA(pAequor){
            let temp = 0;
            console.log(pAequor)
            console.log(this.dna);
            for(i = 0; i < this.dna.length ; i++){
                if(this.dna[i] === pAequor[i]){
                    temp++;
                }
            }
            console.log(`This new specimen have a ${Math.floor((temp/this.dna.length)*100)}% in common`);
        },
        willLikelySurvive(){
            let chanceSurvival = 0;
            for(i = 0; i < this.dna.length ; i++){
                if(this.dna[i] === 'C' || this.dna[i] === 'G'){
                    chanceSurvival++;
                }
            }
            if((chanceSurvival/this.dna.length)*100 >= 60){
                return true;
            }else{
                return false;
            }
        }
    }
    return organism;
  }

  var containerPAequor = [];
  let counter = 0;
  do{
        let container = pAequorFactory(counter);
        if(container.willLikelySurvive()){
            counter++;
            containerPAequor.push(container);
        }
    }while(counter < 30)
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = [".com", ".net", ".us",".io"]

for(let i = 0; i < pronoun.length;i++){
    for(let j = 0; j < adj.length;j++){
        for(let k = 0; k < noun.length; k++){

            let domainComplete = pronoun[i] + adj[i] + noun[k];
            let nounActual = noun[k];

            for(let l = 0; l < domain.length; l++){

                let domainActual = domain[l];

                console.log(domainComplete + domainActual);

                if(nounActual === "racoon" || nounActual === "jogger"){
                    let domainCut = Math.floor(nounActual.length / 2);
                    let cut = domainComplete.slice(0,domainComplete.length - nounActual.length + domainCut)
                    let cutTwo= nounActual.slice(domainCut);

                    let domainHacked = cut + "." + cutTwo;

                    console.log(domainHacked);
                };
            };
        };
    };
};


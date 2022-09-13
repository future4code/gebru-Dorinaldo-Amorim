interface Competitor {
    name: string;
    federation: string;
    sport: string;
    numberOfMedals: number;
  }
  
  const competitors: Competitor[] = [
    {
       name: "Usain Bolt",
       federation: "Jamaica",
       sport: "Atletismo",
       numberOfMedals: 54
    },
    {
       name: "Michael Phelps",
       federation: "EUA",
       sport: "Natação",
       numberOfMedals: 71
    },
    {
       name: "Rebeca Andrade",
       federation: "Brasil",
       sport: "Ginástica",
       numberOfMedals: 33
    },
    {
       name: "Alison Santos",
       federation: "Brasil",
       sport: "Atletismo",
       numberOfMedals: 19
    },
  ]


  // ideia inicial 
    // criar um placar
  // passar por todos os atletas
  // verifica se cada pais já está no placar
  // se estiver, somo as medalhas
  // se não, insiro o pais e as medalhas
  // retorno o placar final

// Solução com array
  type MedalBoard = {
     federation: string,
     numberOfMedal: number
  }

  function calculateMedalBoardWithArray (competitors: Competitor[]): MedalBoard[] {
     const result: MedalBoard[] = []

     for(let competitor of competitors){
        const medalBoard = result.find(mb=>mb.federation === competitor.federation)
        if(medalBoard){
           medalBoard.numberOfMedal += competitor.numberOfMedals
        } else {
           const newMedalBoard: MedalBoard = {
            federation: competitor.federation,
            numberOfMedal: competitor.numberOfMedals
           }
           result.push(newMedalBoard)
        }
     }
     return result
  }

  console.table(calculateMedalBoardWithArray(competitors))


 // solução com hashTable

 type HashTable = {
    [key: string]: number
 }

 function calculateMedalBoardWithHashTable (competitors: Competitor[]): HashTable {
   const medalBoard: HashTable = {}

   for(let competitor of competitors){ 
      if(medalBoard[competitor.federation]){
         medalBoard[competitor.federation] += competitor.numberOfMedals
         // medalBoard.brasil = 33 + 19 => segunda interação
      } else {
         medalBoard[competitor.federation] = competitor.numberOfMedals
         // medalBoard.brasil = 33 => primeira interação
      }
   }
return medalBoard
 }

 console.table(calculateMedalBoardWithHashTable(competitors))
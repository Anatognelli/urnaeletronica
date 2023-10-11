function urnaEletronica() {
   console.log('n\n Opções de votação'); 
   console.log('|1| Candidato 1');
   console.log('|2| candidato 2');
   console.log('|3| candidato 3');
   console.log('|5| Branco');
   console.log('|8| Nulo');
   console.log('|0| Encerrar a votação');

   voto = parseInt(prompt('Digite sua opção de voto'));

      switch (voto) {
         case 1:
            TotaldeVotosCandidato1++; // eq. toTotalVotosCandidato1
            console.log('O candidato 1 recebeu um voto');
            break;
         case 2:
            TotaldeVotosCandidato2++;
            console.log('O candidato 2 recebeu um voto');
            break;
         case 3:
            TotaldeVotosCandidato3++;
            console.log('O candidato 3 recebeu um voto');
            break;
         case 5:
            TotaldeVotosBrancos5++;
            console.log('Um voto Branco recebido');
            break;
         case 8:
            TotaldeVotosNulos8++;
            console.log('Um voto nulo recebido');
            break;
        default:
        return;
 }
        
   
   

        
    }

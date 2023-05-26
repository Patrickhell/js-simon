/**
 * Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione 
di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande
 che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
 */



    
   
            
            
           
          
   

          const expireDate = new Date ("May 26, 2023 9:30:00").getTime();
          let x = setInterval(function(){
            let actualDate = new Date(). getTime();
            let timeReamain = expireDate - actualDate;

            let days = Math.floor(timeReamain  / (1000 *60 *60*24));
            let hours = Math.floor((timeReamain  % (1000 * 60 *60 *24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeReamain % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeReamain % (1000 * 60)) / 1000);
            document.querySelector(".day span").innerHTML = days ;
            document.querySelector(".hour span").innerHTML = hours;
            document.querySelector(".minute span").innerHTML= minutes ; 
            document.querySelector(".second span").innerHTML= seconds ;
            

            if(timeReamain < 0) {
                clearInterval(x);
                document.getElementById ("message").style.display = "none"
                document.getElementsById("time-out").innerHTML = "Is Time to begin a lesson";
                
            }
          }, 1000)
      
        
      
        
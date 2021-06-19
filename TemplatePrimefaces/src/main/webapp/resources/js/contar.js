let timer, currSeconds = 0;
 window.onload = resetTimer;
 window.onmousemove = resetTimer;
 window.onmousedown = resetTimer;
 window.ontouchstart = resetTimer;
 window.onclick = resetTimer;
 window.onkeypress = resetTimer;
 function resetTimer() {
  
            /* Hide the timer text */ 
            timeParagraph = document.getElementById("secs");
           timeParagraph.innerHTML = "";
//            timeParagraph.innerHTML = "";
//              document.querySelector(".timertext") 
//                    .style.display = 'none';
            /* Clear the previous interval */ 
            clearInterval(timer); 
  
            /* Reset the seconds of the timer */ 
            currSeconds = 30; 
  
            /* Set a new interval */ 
            timer =  
                setInterval(startIdleTimer, 1000); 
        } 
  
        // Define the events that 
        // would reset the timer 

  
        function startIdleTimer() { 
              
            /* Increment the 
                timer seconds */ 
          valido = document.getElementById("secs");

            if(currSeconds < 30 && currSeconds > 9){
                valido.innerText = "00:"+(currSeconds);  
                }else{
                    if(currSeconds <= 0){
                        valido.innerText ="00:00"; 
                        
                    }else{
                        if(currSeconds == 30){
                        valido.innerText ="00:30"; 
                        
                    }else{
                         valido.innerText ="00:0"+(currSeconds); 
                    }
                       
                    }

                } 
                currSeconds--; 
  
  
            /* Display the timer text */ 

        } 
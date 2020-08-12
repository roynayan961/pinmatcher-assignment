
let isMatchNumber;
let isMatchCal;
document.getElementById('randomGenerate').addEventListener('click', function() {
    let numberRandom = Math.floor(1000 + Math.random() * 9000);
    isMatchNumber = numberRandom;                                      //number Random will carry the random number generator value.
    document.getElementById('random-input').value = isMatchNumber;     //input at the generate box will appear at isMatchNum
pinChecker();
})

                                                                    // *Pin display value-event handler added to button 'B', loop applies from 0 -> 'B' to receive input and stored in let 'D' and assigned to isMatchCal.
function pinNumCount() {
    var calculateBtn = document.getElementsByClassName('button');
    for (let i = 0; i < calculateBtn.length; i++) {
        calculateBtn[i].addEventListener('click', function() {
            let displayCalculateNumber = document.getElementById('calculate-input');
            isMatchCal = displayCalculateNumber;                     //calculate-input=>displayCalculateNumber=>isMatchCal
            isMatchCal.value = isMatchCal.value + this.innerText;   //input at the calculate-input box will appear at isMatchCal.value
           pinChecker();                                            //*isMatchCal.value=isMatchCal.value+this.innerText =>on each click isMatchCal.value is incrementing through loop 
        })                                                          //and being assigned to pinNumCount.          
    }                                                               //'calculate-input'(type-text)=>displayCalculateNumber=>isMatchCal.then "isMatchCal.value = isMatchCal.value+this.innerText(0+3)"    
}                                                                   //then function will call function  pinChecker()

pinNumCount();                                                       // suppose we pressed 1 then 2, 3, 4. it will be assigned to isMatchCal.value and  through displayCalculateNumber and it will assigned to isMatchCal
                                                                    //after executing pinChecker inside above event handler  it will call function pinNumCount() and pinNumCount will call pinChecker inside it, after finishing then it will call pinChecker and queryLeft will be called inside pinChecker
// pin match checker
function  pinChecker() {
    document.getElementById('submit').addEventListener('click', function() {
          if (isMatchCal.value == isMatchNumber) {
            const activateScreen = document.getElementById('notify-active');
            activateScreen.style.display = "block"; 
  
           const deactivateScreen = document.getElementById('notify-deactive');
           deactivateScreen.style.display = "none";
       }
        if (isMatchCal.value != isMatchNumber) {
            const deactivateScreen = document.getElementById('notify-deactive');
            deactivateScreen.style.display = "block";
       
            const activateScreen = document.getElementById('notify-active');
            activateScreen.style.display = "none";
            queryLeft();

        }
    })
}

// Clear display number
document.getElementById('clear').addEventListener('click', function() {
    isMatchCal.value = null;
})
// clear one by   one
document.getElementById('single-number-delete').addEventListener('click', function() {
    isMatchCal.value = isMatchCal.value.substring(0,isMatchCal.value.length - 1);
})



// disabled submit button  and try-left query  function
var count = 0;
function queryLeft() {
    count =count+ 1;
    var queryLeft = document.getElementById('action-leftId'); //value=0 is coming from this id that stored in queryLeft
    var click = document.getElementById('submit');              //submit button stored to variable click
        click = count;                                          //click =1
        queryLeft = count;                                     //queryLeft=1
    var btn = document.getElementById('submit'); 

      if(click>=20){                                                        //when click count is >=20 then submit will be disabled by btn

        btn.disabled = true;
        btn.style.backgroundColor ='red'                                    // thus submit  color will be changed
        document.getElementById('submit').innerText="blocked for 24 hours" //  thus ('submit'). innerText  will set "blocked....hours

      }    
      
      
 else if (click >= 4) {
       document.getElementById('action-leftId').innerHTML = 2; 
     }
      if (click >= 12) {
       document.getElementById('action-leftId').innerHTML = 1;
   }
     if (click >= 20)
     {   document.getElementById('action-leftId').innerHTML = 0;  

}
                                                
                                                
}


function auswählen(){
let led = document.getElementById("led").checked
let verh = document.getElementById("verh").checked
let div = document.getElementById("ddd")
let error2 = document.getElementById("error2")
error2.innerHTML = ""

if(verh){
div.innerHTML = ` <form action="">
<h2>Für welches Jahr möchten Sie berechnen?</h2>

<select name="mylist" size="1" id="mylist">
    <option value="1">2020</option>
    <option value="2">2019</option>
    <option value="3">2018</option>
    <option value="4">2017</option>
    <option value="5">2016</option>
    <option value="6">2015</option>
    <option value="7">2014</option>
    <option value="8">2013</option>
    <option value="9">2012</option>



</select>
</form>
<h4 > Person1 Jahres-Einkommen</h4>
<div><input id="dd1" type="text"></div>
<h4 > Person2 Jahres-Einkommen</h4>
<div  ><input id="dd2" type="text" "></div>
<button onclick="berechnen()" > BERECHNEN</button>`}
else if(led){
    div.innerHTML = ` <form action="">
    <h2>Für welches Jahr möchten Sie berechnen?</h2>
    
    <select name="mylist" size="1" id="mylist">
        <option value="1">2020</option>
        <option value="2">2019</option>
        <option value="3">2018</option>
        <option value="4">2017</option>
        <option value="5">2016</option>
        <option value="6">2015</option>
        <option value="7">2014</option>
        <option value="8">2013</option>
        <option value="9">2012</option>
    
    
    
    </select>
    </form>
    <h4 > Ihres Jahres-Einkommen</h4>
    <div><input id="dd1" type="text"></div>
    <button onclick="berechnen()" > BERECHNEN</button>`
}
else{
    
    error2.innerHTML = "Error : Sie müssen Famielienstand auswählen und wieder klicken!!!"
}

}
 


function berechnen(){
let led = document.getElementById("led").checked
let verh = document.getElementById("verh").checked

let div = document.getElementById("ddd")
let value = document.getElementById("dd1").value 

let erge =document.getElementById("erge")
let mylist = document.getElementById("mylist").value
imm = `<img src="https://as1.ftcdn.net/jpg/01/29/10/06/500_F_129100602_7gvd3tZJkANVHJrIscf3qIWuVki2S7sP.jpg" alt="" ></img>`
imm1 = document.getElementById("imm")
imm1.innerHTML = imm
    
 // ________________________2020
    if(led){
 if(mylist == 1){
     
     if(value <= 9408){
        erge.innerHTML = "0€"
     }
     else if(9409<= value && value <=14532 ) {
         y = (value -9408)/10000
         ye = (972.87 * y + 1400*1)*y
         erge.innerHTML = ye.toFixed(2)

     }
     else if (14533<= value && value <=57051){
         y1 = (value -14532)/10000
         ye1 = (212.02 * y1 + 2397*1) * y1 + (972,79)*1
         erge.innerHTML = ye1.toFixed(2)

     }
     else if(57052<= value && value <=270500) {
            ye2 = 0.42 * value - 8963.74
            erge.innerHTML = ye2.toFixed(2)
           

     }
       else{
            ye3 = 0.45 * value - 17078.74
            erge.innerHTML = ye3.toFixed(2)
       }    


    }
    //    ________________2019
    else if(mylist == 2){
        if(value <= 9168){
           erge.innerHTML = "0€"
           
        }
        else if(9169<= value && value <=14254 ) {
            y = (value -9168)/10000
            ye = (980.14 * y + 1400*1)*y
            erge.innerHTML = ye.toFixed(2)
   
        }
        else if (14255<= value && value <=55960){
            y1 = (value -14254)/10000
            ye1 = (216.16 * y1 + 2397*1) * y1 + (965.58)*1
            erge.innerHTML = ye1.toFixed(2)
   
        }
        else if(57052<= value && value <=270500) {
               ye2 = 0.42 * value - 8780.90
               erge.innerHTML = ye2.toFixed(2)
              
   
        }
        else{
               ye3 = 0.45 * value - 16749.68
               erge.innerHTML = ye3.toFixed(2)
          }    
   
        }
        // ______________2018
    else if(mylist == 3) {
         if(value <= 9000){
                erge.innerHTML = "0€"
             }
         else if(9001<= value && value <=13996 ){
                 y = (value -9000)/10000
                 ye = (997.80 * y + 1400*1)*y
                 erge.innerHTML = ye.toFixed(2)
        
             }
        else if (13997<= value && value <=54949){
                 y1 = (value -13996)/10000
                 ye1 = (220.13 * y1 + 2397*1) * y1 + (948.49)*1
                 erge.innerHTML = ye1.toFixed(2)
        
             }
        else if(54950<= value && value <=260532) {
                 ye2 = 0.42 * value - 8621.75
                erge.innerHTML = ye2.toFixed(2)
                   
        
             }
         else{
                    ye3 = 0.45 * value - 16437.70
                    erge.innerHTML = ye3.toFixed(2)
             }    
        

        }
    }
    
    else if(verh){
       
        let value2 = document.getElementById("dd2").value 
        let value3 = (value*1+ value2*1)/2
        erge.innerHTML = value3
        // ----------2020
        if(mylist == 1){
            if(value3 <= 9408){
               erge.innerHTML = "0€"
            }
            else if(9409<= value3 && value3 <=14532 ) {
                y = (value3 -9408)/10000
                ye = (972.87 * y + 1400*1)*y
                erge.innerHTML = ye.toFixed(2)
       
            }
            else if (14533<= value3 && value3 <=57051){
                y1 = (value3 -14532)/10000
                ye1 = (212.02 * y1 + 2397*1) * y1 + (972,79)*1
                erge.innerHTML = ye1.toFixed(2)
       
            }
            else if(57052<= value3 && value3 <=270500) {
                   ye2 = 0.42 * value3 - 8963.74
                   erge.innerHTML = ye2.toFixed(2)
                  
       
            }
              else{
                   ye3 = 0.45 * value3 - 17078.74
                   erge.innerHTML = ye3.toFixed(2)
              }    
       
       
           }
           //    ________________2019
           else if(mylist == 2){
               if(value3 <= 9168){
                  erge.innerHTML = "0€"
                  
               }
               else if(9169<= value3 && value3 <=14254 ) {
                   y = (value3 -9168)/10000
                   ye = (980.14 * y + 1400*1)*y
                   erge.innerHTML = ye.toFixed(2)
          
               }
               else if (14255<= value3 && value3 <=55960){
                   y1 = (value3 -14254)/10000
                   ye1 = (216.16 * y1 + 2397*1) * y1 + (965.58)*1
                   erge.innerHTML = ye1.toFixed(2)
          
               }
               else if(57052<= value3 && value3 <=270500) {
                      ye2 = 0.42 * value3 - 8780.90
                      erge.innerHTML = ye2.toFixed(2)
                     
          
               }
               else{
                      ye3 = 0.45 * value3 - 16749.68
                      erge.innerHTML = ye3.toFixed(2)
                 }    
          
               }
               // ______________2018
           else if(mylist == 3) {
                if(value3 <= 9000){
                       erge.innerHTML = "0€"
                    }
                else if(9001<= value3 && value3<=13996 ){
                        y = (value3 -9000)/10000
                        ye = (997.80 * y + 1400*1)*y
                        erge.innerHTML = ye.toFixed(2)
               
                    }
               else if (13997<= value3 && value3 <=54949){
                        y1 = (value3 -13996)/10000
                        ye1 = (220.13 * y1 + 2397*1) * y1 + (948.49)*1
                        erge.innerHTML = ye1.toFixed(2)
               
                    }
               else if(54950<= value3 && value3 <=260532) {
                        ye2 = 0.42 * value3 - 8621.75
                       erge.innerHTML = ye2.toFixed(2)
                          
               
                    }
                else{
                           ye3 = 0.45 * value3 - 16437.70
                           erge.innerHTML = ye3.toFixed(2)
                    }    
               
       
               }





    }
        
 }


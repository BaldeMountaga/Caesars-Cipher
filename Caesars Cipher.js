function rot13(str) { // LBH QVQ VG!
   let alphabet= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", ".", "?", " "];
   
   let arryOfValue = str.split("");
      
    let decodedValuesIndex = [];
    let decodedStringArraay = [];
    
      for(var i=0; i<arryOfValue.length; i++){
          let indexOfValue = alphabet.indexOf(arryOfValue[i]);

          if(indexOfValue >= 26){
            decodedValuesIndex.push(arryOfValue[i]);
          }
          else if(indexOfValue >= 13){
            let minusThirteenFromIndexValue = indexOfValue-13;
            decodedValuesIndex.push(minusThirteenFromIndexValue);

          }else{
            let addThirtennToIndexValue = indexOfValue + 13;
            decodedValuesIndex.push(addThirtennToIndexValue);
          }
      }
      console.log(decodedValuesIndex);

     for(var i=0; i<decodedValuesIndex.length; i++){
         if(decodedValuesIndex[i] == "!" || decodedValuesIndex[i] == "?" || decodedValuesIndex[i]=="." || decodedValuesIndex[i]===" "){
            decodedStringArraay.push(decodedValuesIndex[i]);
        }
        else{
            decodedStringArraay.push(alphabet[decodedValuesIndex[i]]);
        }
     }
     let decodedWord = decodedStringArraay.join("");
     console.log(decodedWord);
     return decodedWord;
    }
    
    // Change the inputs below to test
    rot13("SERR PBQR PNZC");
    
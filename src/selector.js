// YOUR CODE HERE
class $ {
    constructor(selectorString){
        // this.elements = [];
        
        if (selectorString[0] === '#'){
            this.elements = [document.getElementById(selectorString.slice(1))];
            console.log(selectorString.slice(1))
        }
        else if (selectorString[0] === '.'){
            this.elements = Array.from(document.getElementsByClassName(selectorString.slice(1)));
            console.log(selectorString.slice(1))
        }
        else {
            this.elements = Array.from(document.getElementsByTagName(selectorString.toUpperCase()));
        }
    }

    hide(){

    }

  
}


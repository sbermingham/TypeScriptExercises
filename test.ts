
// 1. Variable declarations
/* var message: string = "Hello Sean";
console.log(message);
*/


// 2. Functions
/* var Greeting = {
    greet: function(message){
        console.log('THis is the mesasge - '+message);
    }
}

var obj = new Greeting();
obj.greet('new message'); */

/* var func = (message: string) => {
    console.log(message);
}

func('Hello Sean B'); */

// 3. Interfaces
interface HumanI {
    name: string,
    greeting: ()=> string
}

var sb: HumanI = {
    name: 'Sean B',
    greeting: ():string => {
        return 'Hello from Sean';
    }
}

console.log(sb.greeting());
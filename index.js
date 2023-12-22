let number = 10;

if (number < 50) {
    console.log('ნაკლებია 50-ზე');
} else if (number > 20) {
    console.log('მეტია 20-ზე');
} else {
    console.log(შეცდომა);
}

///

let userName = 'mariami'

if (userName == 'mariami') {
    console.log('True');
} else {
    console.log('False');
}

///

const lastName ="mariami";

switch (lastName){
    case 'mariami':
        console.log(true);
        break;
        default:
   console.log(false) 
}

///

let numbers = prompt('შეიყვანეთ ციფრი')
    if(numbers % 2 == 0) {
        console.log('ლუწია');
    } else {
        console.log('კენტია');
    }

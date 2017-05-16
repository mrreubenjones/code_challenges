// Mix Fruit Juice
// https://www.codewars.com/kata/mix-fruit-juice/train/javascript

function mixFruit (arr) {
    var bill = 0;

    // Switch statement to add to bill
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].toLowerCase()) {
            case 'banana':
            case 'orange':
            case 'apple':
            case 'lemon':
            case 'grapes':
                bill += 5;
                break;
            case 'avocado':
            case 'strawberry':
            case 'mango':
                bill += 7;
                break;
            default:
                bill += 9;
        }
    }

    // Divide bill total by number of fruit, round
    bill /= arr.length;
    bill = Math.round(bill)

    return bill;
}

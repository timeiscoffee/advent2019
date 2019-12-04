var input = `152085-670283`;

var inputs = input.split('-').map(item => Number(item));

var diff =  inputs[1] - inputs[0];

var result = [];
for (var i = 0; i < diff; i++) {
    var current = inputs[0] + i + '';
    if (validate(current)) {
        result.push(current);
    }
}

console.log(result);

function validate(input) {
    var currentArr = input.split("");

    var check1 = true;
    var check2 = false;
    var check2lock = false;
    var check2val = null;
    currentArr.forEach((item, index, arr) => {
        if (arr[index + 1] && item > arr[index + 1]) {
            check1 = false;
        }
        if (arr[index + 1] && item === arr[index + 1]) {
            if (check2lock) {
                // do nothing
            } else if (check2val === null || (check2val !== item && !check2)) {
                check2 = true;
                check2val = item;    
            } else if (check2val === item) {
                check2 = false;
            } else if (check2val !== item && check2) {
                check2lock = true;
            }
        }
    });

    return check1 && check2;
}

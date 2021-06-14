function some(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr) === true) {
            return true;
        }
    }
    return false;
}

function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr) === true) {
            return false;
        }
    }
    return true;
}
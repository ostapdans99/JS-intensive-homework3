function myForEach (array, callback, arguments) {
    for(let index = 0; index < array.length; index++){
        callback.call(arguments, array[index], index, array)
    }
}


function createDebounceFunction (callback, delay) {
    let interval;
        return (...args) => {
            clearTimeout(interval);
            interval = setTimeout(() => {
                interval = null
                callback(...args)
            }, delay)
    }
}






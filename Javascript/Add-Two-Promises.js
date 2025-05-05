/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    return new Promise(function (resolve, reject) {
        promise1.then(function (value1) {
            promise2.then(function (value2) {
                resolve(value1 + value2);
            });
        });
    });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
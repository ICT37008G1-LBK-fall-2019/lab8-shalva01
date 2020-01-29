
const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(new Date().getSeconds());
    }, 1000 );
}).then(seconds => {
    console.log(seconds, 'Seconds');
    const secPromise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(new Date().getMinutes());
        }, 2000);
    }).then(minutes => {
        console.log(minutes, ' Minutes');
        const thirdPromise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(new Date().getHours());
            }, 3000 );
        }).then(hours => {
            console.log(hours, 'Hours');
            console.group('Hours');
            console.log(hours + ':' + minutes + ':' + seconds);
            console.log('sum: ' + (seconds + minutes + hours));
            console.groupEnd();
        });
    });
});
promise.catch((err) => console.log(err))
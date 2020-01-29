function getSeconds(){

    return new Promise((resolve , reject) => {
    
    let sec = new Date().getSeconds();
    
    setTimeout(() => {
    
    return resolve(sec);
    
    } , 1000)
    
    })
    
    }
    
    function getMinutes(){
    
    return new Promise((resolve , reject) => {
    
    let min = new Date().getMinutes();
    
    setTimeout(() => {
    
    return resolve(min);
    
    } , 2000)
    
    })
    
    }
    
    function getHours(){
    
    return new Promise((resolve , reject) => {
    
    let hours = new Date().getHours();
    
    setTimeout(() => {
    
    return resolve(hours);
    
    } , 3000)
    
    })
    
    }
    let seconds = getSeconds();
    
    let minutes = getMinutes();
    
    let hours = getHours();
    
    Promise.all([seconds, minutes, hours])
    
    .then(values => {
    
    console.log('option1');
    
    console.log(values[0] + values[1] + values[2]);
    
    })
    
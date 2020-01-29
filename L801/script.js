let promise = new Promise((resolve,rejected) => {
    setTimeout( () => {
       let date = new Date().getMinutes();
      if (date % 2 == 0 ) {
          resolve(date);
      } else {
         
          rejected(date + 'კენტია');
      }
    
    },1000 * 10);
});

promise.then(result => {
    alert(`წარმატებული ${result}`);
},error => {
    console.log(`წარუმატებელი ${error}`);
})

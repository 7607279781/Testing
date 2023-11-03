const person ={
    test(){
      //var self = this;
      setTimeout(() => {
        console.log(this);
      },2000);
      setTimeout(function(){
        console.log(this);
      }, 2000);
      },
    };
    person.test();
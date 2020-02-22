var users = [
    {name: "Michael", age:37}, 
    {name: "John", age:30}, 
    {name: "David", age:27}];
  
  
  for (var a in users){
        if(users[a].name== "John"){
          console.log(users[a].age);
          
        }
  }
  
  console.log(users[0].name);
  
  for ( var i=0; i< users.length; i++){
    console.log(users[i].name + ' - ' + users[i].age);
    
   
  }
  users.push({name: "Victor", age:15});
  users.push({name: "Juan", age:13});
  users.push({name: "EXTRA", age:23});
  
  
  for( var i=0; i < users.length; i++){
    if( users[i].age > 18){
      console.log(users[i].name);
    }
  }
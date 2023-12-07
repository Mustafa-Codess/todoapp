
var titlec = document.querySelector('#title') 
var descc = document.querySelector('#desc') 
var btn = document.querySelector('#btn') 

var todo = document.querySelector('#todo')
let titleVal
let descVal
let listData = [];

function addtodo(){

  titleVal = titlec.value;
  descVal = descc.value;
  
  if(titleVal.length > 0 && descVal.length > 0){
  let obVal = {
    title: titleVal,
    desc: descVal
  } 
  listData.push(obVal)
  //  console.log(listData)
  

   localStorage.setItem('data',JSON.stringify(listData))

   titlec.value = ""
   descc.value = ""

   disp();


  }
  else{
    alert("please")
  }


}

function disp(){

    let items = listData.map((e,i)=>{
      let elem = `<div class="list"><h2>${e.title}</h2>
      <p>${e.desc}</p>
     
      <button onclick="del(${i})">Delete</button></div>`
  
      return elem;
    })
  
    todo.innerHTML = items.join('')
  
  }

  onload = function(){

  }
  
  


function del(i){
    

    listData.splice(i, 1);
        localStorage.setItem('data',JSON.stringify(listData))
        disp();
    
}





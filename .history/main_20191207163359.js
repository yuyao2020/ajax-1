myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log()
    }
  }
  request.open('GET', '/xxx')//配置request
  //request.onreadystatechange
  request.send()
  
})
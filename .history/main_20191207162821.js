myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.open('GET', '/xxx')//配置request
  //request.onreadystatechange
  request.onreadystatechange = ()=>{
    console.log(request.readyS)
  }
  request.send()
  
})
myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.onreadystatechange = ()=>{
    console.log(request.readyState)
  }
  request.open('GET', '/xxx')//配置request
  //request.onreadystatechange
  request.send()
  
})
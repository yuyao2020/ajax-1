myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.open('GET', '/xxx')//配置request
  //request.onreadystatechange
  request.send()
  console.log(request.readyState)
})
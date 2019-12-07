myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.open('POST', '/xxx')//配置request
  //request.onreadystatechange
  request.send()
})
myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.open('GET', '/xxx')//配置request
  //request.onreadystatechange
  request.send()
  setInterval(()=>{
    console.log(request.readyS)
  })
  console.log(request.readyState)
})
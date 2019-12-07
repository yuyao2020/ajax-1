myButton.addEventListener('click', (e)=>{
  let request = new XMLHttpRequest()
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      console.log("请求响应都完毕了")
    
      if(request.status >= 200 && request.status < 300){
        console.log("说明请求成功")
      }else if(request.status >= 400){
        console.log(0)
      }
    }
  }
  request.open('GET', '/xxx')//配置request
  //request.onreadystatechange
  request.send()
  
})
window.jQuery = function (nodeOrSelector) {
  let nodes = {}
  nodes.addClass = function () {}
  nodes.html = function () {}
  return nodes
}

window.jQuery.ajax = function ({url, method, body, headers}) {
  return new Promise(function(resolve, reject){
    let request = new XMLHttpRequest()
  request.open(method, url) //配置request
  for(let key in headers){
    let value = headers[key]
    request.setRequestHeader(key, value) 
  }//添加header

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        resolve.call(undefined, request.responseText)
      } else if (request.status >= 400) {
        reject.call(undefined, request)
      }
    }
  }
  request.send(body)
  })
}
window.$ = window.jQuery


myButton.addEventListener('click', (e) => {
  window.jQuery.ajax({
    url: '/xxx',
    method: 'get',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'yuyao': '18'
    },
    body: 'a=111&b222'
}).then(
  (text) => {console.log(text)},
  (request) => {console.log(request)}
)
})
//Async异步 Javascript And Xml(Json)
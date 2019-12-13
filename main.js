window.jQuery = function (nodeOrSelector) {
  let nodes = {}
  nodes.addClass = function () {}
  nodes.html = function () {}
  return nodes
}

window.jQuery.ajax = function ({url, method, body, successFn, failFn, headers}) {
  /*
  if(arguments.length === 1){
    url = options.url
  }else if(arguments.length === 2){
    url = arguments[0]
    options = arguments[1]
  }
  两种参数的写法*/

  let request = new XMLHttpRequest()
  request.open(method, url) //配置request
  for(let key in headers){
    let value = headers[key]
    request.setRequestHeader(key, value) 
  }//添加header

  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        successFn.call(undefined, request.responseText)
      } else if (request.status >= 400) {
        failFn.call(undefined, request)
      }
    }
  }
  request.send(body)
}
window.$ = window.jQuery


myButton.addEventListener('click', (e) => {
  window.jQuery.ajax({
    url: '/xxx',
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'yuyao': '18'
    },
    body: 'a=111&b222',
    successFn: (x) => {
      console.log(x)
    },
    failFn: (x) => {
      console.log(x.status)
      console.log(x.responseText)
    }//用对象的形式将参数们包裹起来)
})
})
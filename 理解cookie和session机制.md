[理解Cookie和Session机制](http://www.cnblogs.com/wsnb/p/5151620.html)


### Cookie机制
        Cookie 技术是客户端的解决方案，Cookie 就是由服务器发给客户端的特殊信息，而这些信息以文本文件的方式存放在客户端，
    然后客户端每次向服务器发送请求的时候都会带上这些特殊的信息。
    
        让我们说得更具体一些：当用户使用浏览器访问一个支持 Cookie 的网站的时候，用户会提供包括用户名在内的个人信息并且提交至服务器；
    接着，服务器在向客户端回传相应的超文本的同时也会发回这些个人信息，当然这些信息并不是存放在 HTTP 响应体（Response Body）中的，
    而是存放于 HTTP 响应头（Response Header）；当客户端浏览器接收到来自服务器的响应之后，浏览器会将这些信息存放在一个统一的位置，
    对于 Windows 操作系统而言，我们可以从： [系统盘]:\Documents and Settings\[用户名]\Cookies目录中找到存储的Cookie；
    自此，客户端再向服务器发送请求的时候，都会把相应的Cookie再次发回至服务器。而这次，Cookie 信息则存放在 HTTP 请求头
    （Request Header）了。有了Cookie 这样的技术实现，服务器在接收到来自客户端浏览器的请求之后，就能够通过分析存放于请求头的 Cookie
    得到客户端特有的信息，从而动态生成与该客户端相对应的内容。通常，我们可以从很多网站的登录界面中看到“请记住我”这样的选项，如果你
    勾选了它之后再登录，那么在下一次访问该网站的时候就不需要进行重复而繁琐的登录动作了，而这个功能就是通过 Cookie 实现的。
    
        Web 应用程序是使用 HTTP 协议传输数据的。HTTP 协议是无状态的协议。一旦数据交换完毕，客户端与服务器端的连接就会关闭，再次
    交换数据需要建立新的连接。这就意味着服务器无法从连接上跟踪会话。即用户A购买了一件商品放入购物车内，当再次购买商品时服务器已经无
    法判断该购买行为是属于用户A的会话还是用户B的会话了。要跟踪该会话，必须引入一种机制。
        
        Cookie 就是这样一种机制。它可以弥补 HTTP 协议无状态的不足。在 Session 出现之前，基本上所有的网站都采用 Cookie 来跟踪
    回话。 本质上 cookies 就是 http 协议的一个扩展。 有2个 http 头部是专门负责设置以及发送 cookie 的，他们分别为: Set-Cookie
    和 Cookie.
    
### 什么是 Cookie ?
        Cookie实际上是一小段的文本信息。客户端请求服务器，如果服务器需要记录该用户状态，就使用response向客户端浏览器颁发一个
    Cookie。客户端浏览器会把Cookie保存起来。当浏览器再请求该网站时，浏览器把请求的网址连同该Cookie一同提交给服务器。服务器检查
    该Cookie，以此来辨认用户状态。服务器还可以根据需要修改Cookie的内容。 
    
        查看某个网站颁发的Cookie很简单。在浏览器地址栏输入javascript:alert (document. cookie)就可以了（需要有网才能查看）
        
   **记录用户访问次数**
   
        Java中把Cookie封装成了javax.servlet.http.Cookie类。每个Cookie都是该Cookie类的对象。服务器通过操作Cookie类对象对
    客户端Cookie进行操作。通过request.getCookie()获取客户端提交的所有Cookie（以Cookie[]数组形式返回），通过
    response.addCookie(Cookiecookie)向客户端设置Cookie。
        Cookie对象使用key-value属性对的形式保存用户状态，一个Cookie对象保存一个属性对，一个request或者response同时使用多个
    Cookie。因为Cookie类位于包javax.servlet.http.*下面，所以JSP中不需要import该类。
    
   **Cookie的不可跨域名性**
   
   **Unicode编码：保存中文**
   
        中文与英文字符不同，中文属于 Unicode 字符，在内存中占4个字节，而英文属于 ASC11 字符，内存中只占2个字节。Cookie 中使用
    Unicode 字符时需要对 Unicode 字符进行编码，否则会乱码。
    
   **BASE64编码：保存二进制图片**
   
   
## Session 

    Session是服务器端使用的一种记录客户端状态的机制，使用上比Cookie简单一些，相应的也增加了服务器的存储压力。
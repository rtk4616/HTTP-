# http 、TCP /IP 、Socket 、UDP区别

- 1.网络由下往上分为 (ISO模型的7个分层)  [参考文章](http://www.jianshu.com/p/219eb040479b);
    + (1.)物理层
    + (2.)数据链路层
    + (3.)网络层: IP协议对应层
    + (4.)传输层: TCP/IP协议对应层。[主要解决数据如果在网络中传输: TCP/UDP两种形式]
    + (5.)会话层: 
    + (6.)表示层
    + (7.)应用层: HTTP协议对应层。[主要解决如何包装数据]
    
- 2.TCP/IP协议是指因特网整个TCP/IP协议族。不同于ISO模型的7个分层，TCP/IP协议参考模型把所有的TCP/IP系列协议归类到四个抽象层中:
    + 应用层: TFTP, HTTP, SNMP, FTP, SMTP, DNS, Telent等等
    + 传输层: TCP, UDP
    + 网络层: IP, ICMP, OSPF, EIGERP, IGMP
    + 数据链路层: SLIP, CSLIP, PPP, MTU
    每一抽象层建立在低一层提供的服务上，并且为高一层提供服务。
    ![TCP/IP协议参考模型](TCP-IP.jpg); <br/>
   **TCP/IP协议分层和ISO模型的7个分层对比**<br/>
   ![TCP/IP和ISO模式分层对比](TCP-IP-2.gif);
   
   
- 3.什么是socket? [参考文章](http://www.cnblogs.com/dolphinX/p/3460545.html) <br/>
    我们知道两个进程如果需要进行通讯最基本的一个前提是能够唯一的标识一个进程，在本地进程通讯中我们可以使用PID来唯一标识一个进程，但PID只在本地唯一，网络中的两个进程PID冲突几率很大，这时候我们需要另辟它径，我们知道IP层的ip地址可以唯一标识主机，而TCP层协议和端口号可以唯一标识主机的一个进程，这样我们就可以利用 ip地址+协议+端口号唯一标识网络中的一个进程。
    <br/>
    <br/>
    能够唯一标识网络中的进程后，他们就可以利用socket进行通信了，什么是socket? 我们经常把socket翻译为套接字，socket是在应用层和传输层之间的一个抽象层，它把TCP/IP层复杂的操作抽象为几个简单的接口供应用层调用来实现进程在网络中通信。socket启远与UNIX,在Unix一切皆文件哲学的思想下，socket是一种"打开-读/写-关闭"模式的实现，服务器和客户端各自维护一个文件，在建立连接打开后，可以向自己文件写入内容供对象读取或者读取对方内容，通讯结束时关闭文件。
   ![socket](socket.jpg); <br/>
   
   △: PID: 在计算机领域，进程标识符(英文: process identifier 又略称进程ID(英文: process ID)、PID)是大多数操作系统的内核用于唯一标识"进程"的一个数值。这一数值可以作为许多函数调用的参数，以使调整进程优先级，杀死进程之类的进程控制行为成为可能。[wiki/进程ID](https://zh.wikipedia.org/wiki/%E8%BF%9B%E7%A8%8BID)
   
   △: syn包(同步序列编号: Synchronize Sequence Numbers)
   
   
   
   
   
   
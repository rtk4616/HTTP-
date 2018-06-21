/** 封装跨浏览器添加事件 **/
var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }, //添加跨浏览器的事件

    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(element, type, handler);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },//移除跨浏览器的事件

    getEvent: function (event) {
        return event ? event : window.event;
    },//取得跨浏览器的事件event

    getTarget: function (event) {
        return event.target || event.srcElement;
    },//取得事件的目标

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = null;
        }
    },//取消事件的默认行为

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },//取消事件的进一步传播和冒泡

    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    }, //取得相关元素的方法

    getButton: function (event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },// 取得跨浏览器的鼠标按钮事件

    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    }, //鼠标滚轮事件

    getCharCode: function (event) {
        if (typeof event.charCode === "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    } //取得字符编码
};

// 获取元素的偏移量: 调用方式 getPosition(el).left/top
var getPosition = function (ele) {
    var curEleLeft = ele.offsetLeft;
    var curEleTop = ele.offsetTop;
    var curEleParent = ele.offsetParent;
    while (curEleParent !== null) {
        curEleLeft += curEleParent.offsetLeft;
        curEleTop += curEleParent.offsetTop;
        curEleParent = curEleParent.offsetParent;
    }
    return {left: curEleLeft, top: curEleTop};
};


// 确定元素大小 (js高程 chapter-12)
var getBoundingClientRect = function (ele) {
    var scrollTop = document.documentElement.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft;

    if (ele.getBoundingClientRect) {
        if (typeof arguments.callee.offset !== "number") {
            var temp = document.createElement("div");
            temp.style.cssText = "position:absolute; left:0; top:0;";
            document.body.appendChild(temp);
            arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
            document.body.removeChild(temp);
            temp = null;
        }
        var rect = ele.getBoundingClientRect();
        var offset = arguments.callee.offset;
        return {
            left: rect.left + offset,
            right: rect.right + offset,
            top: rect.top + offset,
            bottom: rect.bottom + offset
        }
    } else {
        var actualLeft = getPosition(ele).left;
        var actualTop = getPosition(ele).top;

        return {
            left: actualLeft - scrollLeft,
            right: actualLeft + ele.offsetWidth - scrollLeft,
            top: actualTop - scrollTop,
            bottom: actualTop + ele.offsetHeight - scrollTop
        }
    }
};


// 获取计算后的样式
var getStyle = function (ele, attr) {
    return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele, null)[attr];
};


// trim: 去掉字符串的前后空格。 \s: 匹配一个空白字符
var trim = function (el) {
    return el.replace(/(^\s*)|(\s*$)/g, "");
};


// 把数字转为字符串后,截取小数点后两位
// ( slice dot after two places [ Interception of two decimal places ] )
// \d: 匹配0-9的任何数字。 \(?:): 非捕获型分组。 ?: 匹配前面元字符0次或1次，/ba？/: 将匹配b 或 ba
var dotAfterTwo = function (el) {
    var reg = /^\d+(?:\.\d{0,2})?/;
    return String(el).match(reg)[0];
};

// 通过id获取元素
var getId = function (id) {
    return typeof id === "string" ? document.getElementById(id) : id;   // 如果不是字符串直接返回此参数
};

// 通过标签名tagName获取元素
var getTagName = function (tagName, oParent) {
    // 有父级就在在此元素之下查找，没有直接从document开始查找
    return (oParent || document).getElementsByTagName(tagName);
};

// 通过className获取元素
var getClassName = function (oClass, oParent) {
    var obj = oParent || document;
    var arr = [];
    if (document.getElementsByClassName) {
        return obj.getElementsByClassName(oClass);
    } else {
        var alls = obj.getElementsByTagName("*");
        for (var i = 0; i < alls.length; i++) {
            if (hasClass(alls[i], oClass)) {
                arr.push(alls[i]);
            }
        }
        return arr;
    }
};

// 取得当前元素的className的数量
var getClassNum = function (ele) {
    // split()基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。
    return ele.className.split(/\s+/);
};

// 取得当前元素的索引
var getIndex = function (el) {
    var n = 0;
    // 同级节点中第一个节点的previousSibling属性为null,最后一个节点的nextSibling属性为null;
    var pre = el.previousSibling;
    while (pre !== null) {
        if (pre.nodeType === 1) {
            n++;
        }
        pre = pre.previousSibling;
    }
    return n;
};


// 判断数组(类数组)包含特定项就返回此项的索引，如果没有就返回-1
var arrIndexOf = function (item, arr) {
    // chapter5: 5.2.7  ECMA 5 为数组实例添加了两个位置方法：indexOf()和lastIndexOf() 。
    // 接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。indexOf() 方法从数组的
    // 开头（位置 0）开始向后查找, 这两个方法都返回要查找的项在数组中的位置，没找到的情况下返回 -1。。
    if (typeof arr.indexOf === "function") {
        return arr.indexOf(item);
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return -1;
};

// 判断元素是不是有某个样式hasClass
var hasClass = function (curClass, ele) {
    var curClaNames = (ele.className || "").split(/\s+/);//通过split空字符将字符串转换成数组.
    if (arrIndexOf(curClass, curClaNames) >= 0) {
        return true;
    } else {
        return false;
    }
};


// 给元素添加class
var addClass = function (addClassName, ele) {

    if (hasClass(addClassName, ele)) {
        return null;
    } else {
        ele.className = (ele.className || "") + " " + addClassName;
    }

};

// 删除元素的class
var removeClass = function (remClassName, ele) {
    // \s:  匹配一个空白字符
    var names = (ele.className || "").split(/\s+/);
    var i = 0,
        len = names.length,
        arr = [];
    for (; i < len; i++) {
        if (names[i] !== remClassName) {
            arr.push(names[i]);
        }
    }
    ele.className = arr.join(" ");

};


// 获取元素的样式(通过计算后的所有样式)
var getCss = function (attr, el) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(el, false)[attr];
    } else {
        return el.currentStyle[attr];
    }
};

// 把字符串转换为json
var convertToJson = function (theData) {
    if (typeof(theData) === "sting") {
        return JSON.parse(theData);
    } else {
        return theData;
    }
};


// 弹框居中函数
var fnElementCenter = function (ele) {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    // 获取当前页面的scrollTop值
    var getScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(getScrollTop);
    // console.log(ele.offsetWidth);
    // console.log(ele.offsetHeight);
    var eleLeft = (parseFloat(screenWidth) - parseFloat(ele.offsetWidth)) / 2;
    var eleTop = (parseFloat(screenHeight) - parseFloat(ele.offsetHeight)) / 2.4 + parseFloat(getScrollTop);
    ele.style.left = eleLeft + "px";
    // console.log("eleLeft : " + eleLeft);
    // console.log("eleTop : " + eleTop);
    ele.style.top = eleTop + "px";
};


// 封装发送验证码对象: 因为一个页面可能有2个发送验证码的按钮，所以写成对象，在需要的地方创建单独的实例
function SendVerCode() {
    if (typeof this === "undefined" || Object.getPrototypeOf(this) !== SendVerCode.prototype) {
        return new SendVerCode();
    }
}

SendVerCode.prototype.verCode = function (ele, num) {
    sendVerCodeFun(ele, num)
};

function sendVerCodeFun(ele, num) {
    ele.style.backgroundColor = "#acaaab";
    if (num === 0) {
        //倒计时完成接触禁用发送按钮
        ele.removeAttribute("disabled");
        ele.value = "获取验证码";
        ele.style.backgroundColor = "#00dfa6";
        num = 60;
    } else {

        ele.setAttribute("disabled", true);
        ele.value = num + "S " + "后重发";
        num--;
        setTimeout(function () {
            sendVerCodeFun(ele, num)
        }, 1000);
    }
}





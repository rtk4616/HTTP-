Phpstorm/IDEA/Webstorm 快捷键操作:

  1. 改主题:
   ```base
     settings -->输入appearance -->Appearance && Behavior--> Appearance -->Darcula(黑色外观); 然后自己在设置字体大小
   ```

  2. 配色:  file --> import setting -->导入下载的字体主题
    2-1.其他编辑器的配置: file --> setting --> keymap(快捷键映射) 可以快速更换其他编辑器的快捷键映射，比如Eclipse的快捷键

  3. 更改配色字体提示颜色
  ```base
    file --> settings --> Editors --> colors&fonts --> HTML -->
    在下面黑框里点击你想设置的代码然后看到上面对应的部分(foreground)就可以设置了，
    如果不能设置上面的foreground,记得把下面的 use inherited attributed 前面的对号取消就可以了。
  ```

  13. Webstrom 中更改文档的默认字体:
  ```base
     Settings -> Editor -> Color Scheme -> General 中。
  ```

  4.更改字符编码:
  ```base
    file --> settings --> Editor --> File Encodings
  ```

  6. 只修改编辑区的背景色，不改主题:
  ```base
     Settings -> Editor -> Color Scheme -> General -> Text -> Default text
  ```

  7. webStorm 下将 vue 的代码锁紧由 2 个空格改为 4 个空格
  ```base
     1. File -> Settings -> Editor -> Code Style -> Javascript， indent 都设置为 4.

     2. Vue 项目下的 .eslintrc.js 中设置
        rules: {
             'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
             'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

             // eslint 配置
             'indent': 'off',
             'vue/script-indent': [
                 'error',
                 4,
                 { "baseIndent": 1 }
             ]
         },
  ```


  5. 安装组件
  (1)用npm安装nodejs需要的模块组件: File -> Setting -> Plugins -> Browse repositories...  <br/>
  (2)然后在Settings -- Languages & Frameworks -- Node.js and NPM中配置Node interpreter（node解释程序）：<br/>
    C:\Program Files\nodejs\node.exe(就是node在C盘的安装路径),如果此时没有安装node的核心模块，会提示让在线安装，确定就好了。下面的experss(代理)应该就是显示的版本号。-----下面的Coding assistance(编码助手)记得打开。 enabled:激活的。Disable：禁止。
  (3).在Settings -- Languages & Frameworks -- JavaScript -- libraries(库) -- 添加nodejs的核心模块. <br/>


  11. 去掉文件窗口右边的竖线 ： Setting -- Editor -- Appearance -- show hard wrap guide(configured in code style options)

  7. 更改默认的浏览器: Setting -- Tools -- Web Browsers

  8. 安装插件:
   ```base
      File -> Setting -> Plugins -> Browse repositories...
   ```

  9. 有用的快捷键:
    (1) Ctrl + d : 在不选中的情况下是复制一行，选中需要的代码按住ctrl+d就是直接复制。<br/>
    (2) Ctrl + r : 调出查找对话框 <br/>
    (3) Ctrl + z : 后退，撤销 <br/>
    (4) Ctrl + shift + z : 取消后退，取消撤销 <br/>
    (5) Ctrl + f : 查找和浏览器的查找是一个快捷键 <br/>
    (6) Ctrl + Alt + l : 格式化代码 <br/>
    (7) Ctrl + Alt + i : 自动缩进 <br/>
    (8) Ctrl + Shift + Space : 切换窗口 <br/>
    (9) Ctrl + f : 选中的文字，高亮显示，上下跳到下一个或者上一个 <br/>
    (10) Ctrl + R : 调出替换 <br/>
    (11) Ctrl + shift + "+/-" : 全部"展开/折叠"代码
    (12) Ctrl+"+/-": 当前方法展开、折叠
    (13) 按2次 shift 键: 呼出全局搜索
    (14)

  12 设置快捷键：File -> Settings -> IDE Settings -> Keymap -> 选择“选择” -> 然后“Copy”一份 -> 再个性化设置（自己习惯的）快捷键

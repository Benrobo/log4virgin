<p align="center"><img src="https://github.com/Benrobo/log4virgin/blob/main/log4virgin/icon/bae37b1f616249c6a623c880ce0f8f92.png"></p>

### Logvirgins

---

Logvirgins minimalist nodejs module for logging items in terminal

---

### installation

#### initalise a package.json file on current working directory

`npm init -y`

#### install logvirgins using the below code

`npm install --D logvirgins`

#### Require the package into your nodejs project

```javascript
const {log,table,info,error,count,cls,debug} = require("logvirgins")
```
That it you are ready to use logvirgins to log out beautiful text on console

## Code Samples
#### syntax
```javascript
  // loging 
  log([value], color[r, g,blu,y,cy,blc, [red, green, blue, yellow, cyan, black]][..optional])
  //displaying tables
  table([..obj])
  //logging out info
  info([..string])
  //logging errors
  error(values)
  //counter
  // begining of loop
  count()
  // end of loop
  count()
  // debug console
  debug([..obj])
  // clear screen
  cls()

```
#### logging default text 

```javascript
    log("hello from logvirgins")
    
    //output hello from logvirgins
```

#### logging out text with colors

```javascript
    log("hello from logvirgins", valid color name)
    //output
```
```diff
- hello from logvirgins
+ hello from logvirgins
! hello from logvirgins
```
#### logging out objects in table format

```javascript 

  table(["apples", "oranges", "bananas"])
   // output 
```
<img src="https://github.com/Benrobo/log4virgin/blob/main/log4virgin/icon/tab.png">

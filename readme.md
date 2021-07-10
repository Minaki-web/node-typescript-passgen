# Password Generator with TypeScript & Node.js

A simple password generator on CLI.  
コマンドラインで動くパスワード生成アプリケーションです。  



## Installation

Install this project on CLI  
インストール方法(コマンドラインのみ)

```bash
$ git clone https://github.com/Minaki-web/node-passgen
$ cd node-passgen
$ npm install 
$ npm run build
$ npm link
```
## Usage/Examples
#### Normal usage
```bash
$ passgen
```

#### Using option
```bash
$ passgen -l 20 or --length=20
```

If you check to output some errors when you use ``` -s ``` option,
you must fix to correct path to your desktop folder.  
``` -s ``` オプションを利用したときにエラーが出た場合、デスクトップへのパスを調べて変更する必要があります。

##### File: src/savePassword.ts
```javascript
const dir_desktop: string = 'Desktop';
```
then type on CLI

``` bash
$ npm run build
```  
## Features

- Save to passwords.txt  
Command: ``` -s ``` or ``` --save ```
- Change length of password  
Command: ``` -l <number>``` or ``` --length <number>```
- Exclude uppercase characters  
Command: ``` -nu ``` or ``` --no-uppercase ```
- Exclude numbers  
Command: ``` -nn ``` or ``` --no-number ```
- Exclude symbols  
Command: ``` -ns ``` or ``` --no-symbol ```

  
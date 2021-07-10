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
```

## Usage/Examples
#### Normal usage
```bash
$ node dist/index.js (option)
```
To create a symlink to run "passgen" from anywhere

```
npm link

# Now you can run
passgen (options)

# To remove symlink
npm unlink
```

## Options

| Short | Long               | Description                      |
| ----- | ------------------ | -------------------------------- |
| -l    | --length \<number> | length of password (default: 16) |
| -s    | --save             | save password to passwords.txt   |
| -nu   | --no-uppercase     | remove uppercase characters      |
| -nn   | --no-number        | remove numbers                   |
| -ns   | --no-symbol        | remove symbols                   |
| -h    | --help             | display help for command         |
| -V    | --version          | Show the version                 |


## License

[MIT](https://choosealicense.com/licenses/mit/)

I used [this video](https://www.youtube.com/watch?v=3Xx83JAktXk) as a reference for making this project.  
I'd wanted to use TypeScript and Webpack so I challenged it.
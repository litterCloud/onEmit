const webpack = require('webpack');
const ora = require('ora');
const config = require('./webpack.config.js');
const spinner = ora('building...').start();
webpack(config,function(err,stats){
    spinner.stop();
    if(err || stats.hasErrors()){
        stats.compilation.errors.forEach((v)=>{
            console.log(v)
        })
    }else{
        console.log('build success')
    }
});


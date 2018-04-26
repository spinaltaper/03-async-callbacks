'use strict';

const reader=module.exports={};

const fileReader=require('../lib/reader');

const fs=require('fs');

reader.read=(paths,callback)=>{
    fs.readFile(paths[0],'utf8',(err0,data0)=>
    {
        if(err0){
            return callback(err0);
        }
        callback(data1);
        return fs.readFile(paths[1],'utf8',(err1,data1)=>{
        if(err1){
            return callback(err1);
        }
            callback(data1);
            return fs.readFile(paths[2],'utf8',(err2,data2)=>{
                if(err2){
                    return callback(err2);
                }
                callback(data2);
                return undefined;
            })

        });
    });
}
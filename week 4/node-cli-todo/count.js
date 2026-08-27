import { Command } from "commander";
import fs from "fs";
const program =new Command()

program.name('count-words').description('this cli helps to count number of words form a file').version('1.0.0')
program
.command('count')
.argument('<filename>')
.action((filename)=>{
    const data=fs.readFile(filename,"utf-8",(err,data)=>{
        if(err)
        {
            console.log(err)
            return
        }
        else
        {
            let count=data.split(' ').length
    
    console.log("Number of words in file: "+count)
        }
    })
    
});
program.parse()
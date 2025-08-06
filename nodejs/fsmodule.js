const fs = require('fs')

//read
// fs.readFile('./sample.txt',(err, data)=>{
//     if(!err){
//         console.log('File reading done')
//         console.log(data.toString())
//     }else{
//         console.log(err.errno)
//     }
// })
//write
// fs.writeFile('./sample.txt', 'This is new content again',(err) => {
//     if(err) console.log(err.cause)
//     else console.log("File Write sucess")
// })
//append(update)
// fs.appendFile('./sample.txt', '\nThis is new content again',(err) => {
//     if(err) console.log(err.cause)
//     else console.log("File append sucess")
// })

//delete
// fs.unlink('./sample.txt', (err) => {
//     if (err) console.log(err.message)
//     else console.log('File deleted sucessfully')
// })
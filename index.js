const express =require('express');

const app = express();
const PORT = 3000;
const post =require('./studentList')

app.get('/studentList',(req,res)=>{
    res.json(post)
});



app.get('/',(req,res)=>{
    

    res.send('Api is running');
});
app.listen(PORT,() => console.log(`Server running on port :http://localhost:${PORT}`));
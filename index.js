const express=require('express');
const app=express();
const widget=require('./model/meals')
const resturant_data=require('./model/restaurantData');

app.get('/resturant_data/:city_name',(req,res)=>{
    let found = resturant_data.some(res => res.city_name == req.params.city_name);
    
    if(found){
        res.json(resturant_data.filter(res => res.city_name == req.params.city_name));
    }
    else{
        res.json("NOT FOUND");
    }
})


const result = [];
for(let i=0;i<widget.length;i++){
        
    result.push({
        id : i+1,
        name : widget[i].name,
        meal_type : i+1
    });
}

//widget route
app.get('/widget',(req,res)=>{
    
    res.send(result);
})


app.listen(8900)
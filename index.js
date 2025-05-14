const express = require('express');
const app = express();
const port = 3000


app.get('/', (req, res) => {
    res.send("Hello World! ");
})

app.put('/user', (req, res) => {
    res.send("This is put method here ");
})

app.delete('/userId', (req, res) => {
    res.send("This is delete method here ");
})
// partially update here 
app.patch('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;

    res.send({
        message: `Your Data id is ${id} updated now `,
        data: update
    });
})


// app.post('/products', (req, res)=>{
//     const products=[
//         {
//             id:1,
//             name:'Product one',
//         },

//         {
//             id:2,
//             name:'Product two',
//         },
//         {
//             id:3,
//             name:'Product three',
//         },

//     ];
//     res.send(products)
// })


// app.post('/api/data/', (req, res) => {
//     res.send({
//         message: "Data Received",
//         data: req.body
//     })
// })


app.listen(port, () => {
    console.log(`Your app is listening at port: ${port}`)
})

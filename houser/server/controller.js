Read:('/api/house', (req,res, next))
receive: nothing
send: [{
    id: 1,
    name: 'Example',
    address: '123 Example st',
    city: 'Orem',
    state: 'UT',
    zip: 84320

}]
Create:('/api/house')
// Receive: req.body{
//     name: '',
//    address:'',
//    city: '',
//    state:'',
//    zip:
// }
Send: status(200);

DELETE:('/api/house/:id')
Receive: req.params.id7
Send: status(200);
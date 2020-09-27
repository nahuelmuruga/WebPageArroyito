const express = require ('express')
const router = express.Router()


router.get('/', (req,res)=> {
    res.render('index.html',{title:'Iglesia de Arroyito'})
})

router.get('/actividades', (req,res)=> {
    res.render('Actividades.html',{title:'Actividades'})
})

router.get('/jesus', (req,res)=> {
    res.render('Jesus.html',{title:'Jesus'})
})

router.get('/encontranos', (req,res)=> {
    res.render('encontranos.html',{title:'Encontranos'})
})


router.get('/contacto', (req,res)=> {
    res.render('contacto.html',{title:'Contacto'})
})

router.post('/sendForm', (req,res) => {
    console.log(nombre)
    console.log(mail)
    console.log(telefono)
    console.log(mensaje)
    //res.render('mailCtrl.js', { Mensaje: 'name +  mail + telefono + mensaje'  })
    res.render('contacto.html',{title:'Contacto'})
})

router.get('/Reuniones', (req,res)=> {
    res.render('Reuniones.html',{title:'Reuniones'})
})

router.get('/GruposDeHogar', (req,res)=> {
    res.render('GruposDeHogar.html',{title:'Grupos De Hogar'})
})

router.get('/test', (req,res)=> {
    res.render('test.html',{title:'Spiner'})
})
module.exports = router
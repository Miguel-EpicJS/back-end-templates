const article = require('./articles')
const express = require('express')
const route = express.Router()

route.get('/articles', function(req, res){
    res.send(article.Articles);
})
route.get('/articles/:id', function(req, res){
    if(req.params.id >= 0 && req.params.id < article.Articles.length){
        res.send(article.Articles[req.params.id])
    }else{
        const len = article.Articles.length -1
        res.send("Id invalido, insira um numero entre 0 e " + len)
    }
})
route.post('/articles', function(req, res){
    if( req.body.title && req.body.desc && req.body.corp){
        article.Articles.push(req.body)        
        res.send("Artigo criado com sucesso!")
    }else{
        res.send("Alguem elemento está errado/vazio")
    }
})
route.put('/articles/:id', function(req, res){
    if( req.body.title && req.body.desc && req.body.corp){
        article.Articles[req.params.id].title = req.body.title;
        article.Articles[req.params.id].desc = req.body.desc;       
        article.Articles[req.params.id].corp = req.body.corp;       
        res.send("Artigo editado com sucesso!")
    }else{
        res.send("Alguem elemento está errado/vazio")
    }
})
route.delete('/articles/:id', function(req, res){
    if(req.params.id >= 0 && req.params.id < article.Articles.length){
        article.Articles.splice(req.params.id, 1)
    }else{
        const len = article.Articles.length -1
        res.send("Id invalido, insira um numero entre 0 e " + len)
    }
})

module.exports = route
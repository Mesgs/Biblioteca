const BibliotecarioModel = require("../models/BibliotecarioModel");

class BibliotecarioController{
    static async listar(req,res){
        const sucesso = req.query.s;
        const bibliotecarios = await BibliotecarioModel.find();
        res.render("bibliotecario/Listagem", {bibliotecarios, sucesso});
    }    
    
    static async cadastrarGet(req,res){
        const matricula = req.params.matricula;
        let bibliotecario = {};
        console.log(matricula);
        if(matricula != undefined){
            bibliotecario = await BibliotecarioModel.findOne({matricula});
        }
        res.render("bibliotecario/Cadastrar", {bibliotecario});
    }

    static async cadastrarPost(req,res){
        if(req.body._id){
            await BibliotecarioModel.findOneAndUpdate({_id: req.body._id},{
                matricula: req.body.matricula,
                nome: req.body.nome,
                cargo: req.body.cargo,
                turno: req.body.turno,
                salario: req.body.salario

            });
            res.redirect("/bibliotecarios?s=3");
        }else{
            const novoBibliotecario = new BibliotecarioModel({

                matricula: req.body.matricula,
                nome: req.body.nome,
                cargo: req.body.cargo,
                turno: req.body.turno,
                salario: req.body.salario
                
                });
        
                await novoBibliotecario.save();
                res.redirect("/bibliotecarios?s=1");
        }

    
    }

    static async detalhar(req,res){
        const matricula = req.params.matricula;
        const bibliotecario = await BibliotecarioModel.findOne({matricula});
        res.render("bibliotecario/detalhar",{bibliotecario});
    }

    static async remover(req,res){
        const mat = req.params.matricula;
        await BibliotecarioModel.deleteOne({matricula: mat});
        res.redirect("/bibliotecarios?s=2");
    }


}
    

module.exports = BibliotecarioController;
const ReservaModel = require("../models/ReservaModel");

class ReservaController{
    static async listar(req,res){
        const sucesso = req.query.s;
        const reservas = await ReservaModel.find();
        res.render("reserva/Listagem", {reservas, sucesso});
    }    
    
    static async cadastrarGet(req,res){
        const matricula = req.params.matricula;
        let reserva = {};
        console.log(matricula);
        if(matricula != undefined){
            reserva = await ReservaModel.findOne({matricula});
        }
        res.render("reserva/Cadastrar", {reserva});
    }

    static async cadastrarPost(req,res){
        if(req.body._id){
            await ReservaModel.findOneAndUpdate({_id: req.body._id},{
                matricula: req.body.matricula,
                matriculaB: req.body.matriculaB,
                nomeLivro: req.body.nomeLivro,
                data: req.body.data

            });
            res.redirect("/reservas?s=3");
        }else{
            const novaReserva = new ReservaModel({

                matricula: req.body.matricula,
                matriculaB: req.body.matriculaB,
                nomeLivro: req.body.nomeLivro,
                data: req.body.data
                
                });
        
                await novaReserva.save();
                res.redirect("/reservas?s=1");
        }

    
    }

    static async detalhar(req,res){
        const matricula = req.params.matricula;
        const reserva = await ReservaModel.findOne({matricula});
        res.render("reserva/detalhar",{reserva});
    }

    static async remover(req,res){
        const mat = req.params.matricula;
        await ReservaModel.deleteOne({matricula: mat});
        res.redirect("/reservas?s=2");
    }


}
    

module.exports = ReservaController;
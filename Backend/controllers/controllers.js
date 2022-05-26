const pool = require('../db');
const queries = require('../queries/queries')
const Pool = require('pg').Pool;
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs')


const getServices = (req, res) => {
    pool.query(queries.getServices,(error, results) => {
        if(error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};


const addServices = async (req,res) => {
     const {name,description, cost, image } = req.body
     pool.query(queries.checkServiceExist , [name], (error, results) => {
            
        if (results.rows.length){
            res.status(409).json({error:"Service Already exists"});
            
        }else{
            pool.query(queries.addServices, 
                [name,description, cost, image],
                (error,results)=>{
                if(error){ 
                    res.status(500).json({error: 'invalid input'})
                    throw error;
                }else{
                         // addUserMailer(name, surname, cell_no, email, password);
                    res.status(201).json("Service created successfully");
                }
            });
        }
    
    });
}

const deleteService = (req, res) =>{
    const id =parseInt(req.params.id);

    pool.query(queries.getServiceById,[id],(error, results)=>{
        const noService = !results.rows.length;
        if(noService){
            res.status(404).json("Errand does not exist in the database.");
        }else{
            pool.query(queries.deleteService,[id],(error, results)=>{
                if(error) throw error;
                res.status(200).json("Errand removed successfully");
        });
        }
    });
}

const addClient = async (req,res) => {
    // const {firstname, lastname, cell_no, password} = req.body;
     const {name, surname, cell_no, password} = req.body
     if(name.length<3){
         res.status(400).json({error:"Name cannont be less than 2 characters"});
     }else if(surname.length<3){
         res.status(400).json({error:"Surname cannont be less than 2 characters"});
     }else if(cell_no.length>0 && cell_no.length<10){
         res.status(400).json({error:"Invalid Cell number"});
     }else if(cell_no.length>10){
         res.status(400).json({error:"Invalid Cell number"});
     }else if(password.length<8){
         res.status(400).json('Your Password should be longer than 7 characters');
    //  }else if(role.length<1){
    //      res.status(400).json('Please enter your role');
     }else{
 
         //check if email exists
         pool.query(queries.checkClientCelllExists, [cell_no], (error, results) => {
             
             if (results.rows.length){
                 res.status(409).json({error:"Cell number Already exists"});
                 
             }else{
                 const salt = bcrypt.genSaltSync(10)
                 const hashedPassword = bcrypt.hashSync(password , salt)
                 console.log(hashedPassword)
                 pool.query(queries.addClient, 
                     [name,surname, cell_no, hashedPassword],
                     (error,results)=>{
                     if(error){ 
                         res.status(500).json({error: 'invalid input'})
                         throw error;
                     }else{
                         // addUserMailer(name, surname, cell_no, email, password);
                         res.status(201).json("User created successfully");
                     }
                 });
             }
         });
     
     }
 }

 const clientLogin = async (req,res) =>{
    const { cell_no,email, password } = req.body;
    pool.query(queries.checkClientEmailCellNoExists,[email,cell_no],(error, results)=>{
        // console.log(results)
        
        if(!results.rows.length){ 
            console.log(email)
            res.status(404).json({error:'user not found'})
        }else{
            
            // IF CELLPHONE IS ENTERED
            if(cell_no){

                pool.query(queries.getClientPasswordByCelllNo,[cell_no],(error, results)=>{
                    console.log(results.rows[0].password)
                    const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
                    if(!queryPassword){
                        res.status(404).json({error:'Invalid credentials'});
                    }else{
                        res.status(200).json(results.rows);
                    }
                });

            } else {

                // IF EMAIL IS ENTERED
                pool.query(queries.getClientPasswordByEmail,[email],(error, results)=>{
                    console.log(results.rows[0].password)
                    const queryPassword= bcrypt.compareSync(password, results.rows[0].password);
                    if(!queryPassword){
                        res.status(404).json({error:'Invalid credentials'});
                    }else{
                        res.status(200).json(results.rows);
                    }
                });

            }

           

        }

    });
}

const addAddress = async (req,res) => {
    
     const {street_name, suburb, city, postal_code, request_id} = req.body
     console.log(request_id);
            pool.query(queries.addAddress, 
                [street_name, suburb, city, postal_code, request_id],
                (error,results)=>{
                if(error){ 
                    res.status(500).json({error: 'invalid input'})
                    throw error;
                }else{
                        
                    res.status(201).json("Address created successfully");
                }
            });
}

const getAddress = (req, res) => {
    pool.query(queries.getAddress,(error, results) => {
        if(this.error){
            console.log("error:"+error);
            res.status(404).send(error);
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getServices,
    addServices,
    deleteService,
    addClient,
    clientLogin,
    addAddress,
    getAddress

}
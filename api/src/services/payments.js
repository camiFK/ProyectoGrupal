require('dotenv').config();
const { Payment, Contract, Publication, User }=require('../database/postgres.js')
const Stripe = require('stripe')
const axios = require('axios');

const stripe = new Stripe(process.env.STRIPEPRVKEY)


const mercadopago = require('mercadopago');

mercadopago.configure({
	access_token: process.env.MERCADOKEY,
});
  

exports.getPayments=async()=>{
    const services=await Payment.findAll()
    return services;
}


const savePayment = async function (stripeid,amount,contractId) {

    
  // Busco el contrtato

  const contract = await Contract.findByPk(contractId);

  if (contract) {
    //console.log('Payments Contrato:',contract);

    // Guardo el pago en la base de datos
    const pay = await Payment.create({stripeid,amount})
    contract.setPayment(pay)
  }
};

const sendBuyerMail = async function (usremail,title,amount) {
  const contentHtml=`
  <div style="background-color: rgb(242, 229, 206)">
  <h1 style="background-color: rgb(255, 222, 6)">Payment Confirmation</h1>
  <ul>
    <li>Name: ${usremail}</li>
    <li>Service: ${title}</li>
    <li>Amount: ${amount}</li>
    </ul>
  <p style="background-color: rgb(255, 222, 6)">Your payment has been registered</p>
  </div>
  `
      //Envio el mail al comprador
      const sendmail = await axios.post ("http://localhost:3001/emailpayment",{
        "email":usremail,
        "subject": "Servi Express - Payment Confirmation",
        "html": contentHtml
  })
}


exports.postPayment = async(stripeid, amount, usremail, idBuyer, idPublication, contractId )=>
{
  try {
    //Confirmo el pago en stripe

    const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'USD',
        payment_method: stripeid,
        payment_method_types: ['card'],
        confirm: true
    });

    savePayment(stripeid,amount,contractId);

    const pub = await Publication.findByPk(idPublication)

    sendBuyerMail(usremail,pub.title,amount);
        
      return payment
  }
  catch(error) {
        console.log(error)
        return (error)
  }
}

//exports.postMercadopago = async(title, price,usremail = 'palmabeto@hotmail.com', idBuyer=1, idPublicacion=1) =>{
  exports.postMercadopago = async(title, price, contractId,usremail) =>{
    try {
        const preference = {
            items: [{
              title,
              unit_price: parseInt(price),
              quantity: 1,
            }
            ],
            back_urls: {
              "success": "http://localhost:3000/mercado/success?title="+title+"&price="+price+"&contractId="+contractId+"&usremail="+usremail,
              "failure": "http://localhost:3000/mercado/failure",
              "pending": "http://localhost:3000/home"
            },
            auto_return: "approved",
        }

      const data = await mercadopago.preferences.create(preference);
      const respId = data.body.id;

      console.log('Respond ID de MP:', respId);
      return respId;
      
    } catch (error) {
      console.log(error);
    }
};

exports.postMercadopagoSuccess2 = async (codigoPago ,title,price,contractId,usremail) => {
  //console.log('en grabar')
  savePayment(codigoPago,price,contractId);
  sendBuyerMail(usremail,title,price);
}

exports.getTodayPayments = async () => {
  const TODAY_START = new Date().setHours(0,0,0,0);
  const NOW = new Date();
  const payments = await Payment.findAll({
    where:{
      date: {
        [Op.gt]: TODAY_START,
        [Op.lt]: NOW
      }
    }
  })
  return payments;
}

/* 
exports.getServiceById=async(id)=>{
    const service=await Service.findOne({
        where:{id:id},
        include:{
          model:Category,
          through:{
            attributes:[]
          }
        }
    })
    
    return service;
};
exports.postService=async(name,categories=[])=>{
    const service=await Service.create({name:name});
    service.setCategories(categories)
    return {message:'Service updated successfully'}
}
exports.updateService=async(id,name)=>{
  const service=await Service.findById(id);
  if(!service){
    return {err_message:'Service not found'}
  }
  service.update({name});
  return {message:'Service updated successfully'}
}
exports.deleteService=async(id)=>{
  const service= await Service.findById(id);
  if(!service){
    return {err_message:'Service not found'}
  }
  await Service.destroy({where:{id:id}});
  return {message:'Service deleted successfully'}
} */
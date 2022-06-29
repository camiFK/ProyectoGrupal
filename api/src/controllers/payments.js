const {getPayments, postPayment, postMercadopago, postMercadopagoSuccess2, getTodayPayments} = require('../services/payments');
const {BAD_REQUEST, CREATED, OK} = require('../routes/helpers/status.js')

exports.getPayments = async (req, res, next) => {
  try {
    const r = await getPayments();
    res.status(OK).json(r);
  } catch (error) {
    next(error);
  }
};

exports.postPayment = async (req, res, next) => {
    try {
      //console.log('***En payment de stripe**:',req.body.stripeid, req.body.amount, req.body.usremail, req.body.idBuyer, req.body.idPublicacion,'contrato:',req.body.contractId)
        const r = await postPayment(req.body.stripeid, req.body.amount, req.body.usremail, req.body.idBuyer, req.body.idPublicacion,req.body.contractId);


        if (r.status) {
          const response = {'status': r.status, id: r.id}
          console.log('Respuesta de stripe',r.status,'--',r.id)
          res.status(CREATED).send(response);
        } else
        {
          const response = {'status': 'rejected', id: r.message }
          console.log('Respuesta de stripe',r.statusCode ,'--',r.message)
          res.status(CREATED).send(response);
        }
      } catch (error) {
        next(error);
      }
};

exports.postMercadopago = async(req,res,next ) => {
  //console.log('POST MP',req.body.title,req.body.price,'controller',req.body.contractId,req.body.usremail);
  try {
    const r = await postMercadopago(req.body.title,req.body.price,req.body.contractId,req.body.usremail);
     res.status(CREATED).send(r);
  } catch (error) {
    next(error);
  }
};

exports.postMercadopagoSuccess = async(req,res,next ) => {
  //console.log('POST success',req.body);
  const codigoPago = 'Mercado Pago-' + req.body.payment_id + '-' + req.body.status + '-' + req.body.payment_type + '-' + req.body.merchant_order_id;
  if (req.body.contractId === 'undefined') contractId=1
  else {
    contractId = req.body.contractId
  }
  try {
    const r = await postMercadopagoSuccess2(codigoPago ,req.body.title,req.body.price,contractId,req.body.usremail);
     res.status(CREATED).send(r);
  } catch (error) {
    next(error);
  }
};


exports.getTodayPayments = async (req,res,next) => {
  try {
    const r = await getTodayPayments();
    res.status(OK).json(r)
  } catch (error) {
    next(error)
  }
}

/* 
exports.getServiceById =async (req, res, next) => {
  try {
    const r = await getServiceById(req.params.id);
    res.status(OK).json(r);
  } catch (error) {
    next(error);
  }
};
exports.postService=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de categories
    const r = await postService(req.body.name,req.body.categories);
    res.status(CREATED).send(r.message);
  } catch (error) {
    next(error);
  }
}
exports.updateService=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de categories
    const r = await updateService(req.params.id,req.body.name);
    if(r.err_message){
      res.status(BAD_REQUEST).send(r.err_message)
    }
    else{
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
}
exports.deleteService=async(req,res,next)=>{
  try {
    //req.body.categories: array de ids de categories
    const r = await deleteService(req.params.id);
    if(r.err_message){
      res.status(BAD_REQUEST).send(r.err_message)
    }
    else{
      res.status(OK).send(r.message);
    }
  } catch (error) {
    next(error);
  }
} */

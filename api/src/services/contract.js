const { Contract, User, Publication, Op } = require('../database/postgres.js');

exports.getContracts = async () => {
  const contract = await Contract.findAll({
    include: [
      {
        model: User,
        attributes: {
          exclude: [
            'buyer_reputation',
            'buyer_opinions',
            'seller_reputation',
            'seller_opinions',
            'seller_points',
            'seller_reviews'
          ]
        }
      },
      {
        model: Publication
      }
    ],
    order: [['id', 'DESC']]
  });
  return contract;
};

exports.getContractById = async (id) => {
  const contract = await Contract.findOne({
    where: { id },
    include: [
      {
        model: User,

        attributes: {
          exclude: [
            'buyer_reputation',
            'buyer_opinions',
            'seller_reputation',
            'seller_opinions'
          ]
        }
      },
      {
        model: Publication
      }
    ]
  });
  if (contract) {
    return contract;
  }
  return { err_message: 'Contract not found' };
};

exports.getContractsPercentage = async () => {
  const contracts = await Contract.findAll({
    where: {status:'Completed'},
    raw:true
  })
  const allContracts = await Contract.count();
  var percentage
  if(allContracts === 0){
    percentage = 0;    
  }else{
    percentage = (contracts.length/allContracts)*100;
  }
  return percentage.toString()
}

exports.createContract = async (
  user,
  publication,
  country,
  postal_code,
  state,
  city,
  address,
  service_date,
  status
) => {
  console.log('user', user);
  if (!user) {
    return { err_message: 'Must send user(id)' };
  }
  const usr = await User.findOne({ where: { id: user } });
  if (usr) {
    if (!publication) {
      return { err_message: 'Must send publication(id)' };
    }
    const pub = await Publication.findOne({ where: { id: publication } });
    if (pub) {
      const contract = await Contract.create({
        country,
        postal_code,
        city,
        state,
        address,
        service_date,
        status
      });
      contract.setUser(user);
      contract.setPublication(publication);
      return contract;
    }
    return { err_message: 'Publication not found' };
  }
  return { err_message: 'User not found' };
};

exports.updateContract = async (id, changes) => {
  const contract = await Contract.findOne({ where: { id } });
  if (contract) {
    await Contract.update({ ...changes }, { where: { id } });
    return { message: 'Contract updated successfully' };
  }
  return { err_message: 'Contract not found' };
};

exports.updateContractReview = async (contractId, point, comment) => {
  try{
  // Recibo id de contrato y la review
  // Obtengo datos del contrato
  const contract = await Contract.findOne({
    where: { id: contractId },
    include: [
      {
        model: User,
        attributes: 
           [
            'id',
            'email',
            'last_name',
            'seller_opinions'
          ]
      },
      {
        model: Publication,
        attributes:  [
            'userId'
          ]
      }
    ]
  });

  // contract.user es el comprador
  // contract.publication.userId es el id del vendedor

  // seller_opinions [{commenter:   comment:   rating:}]
  // commenter:  email + '-' + lastname
  // comment: comment (por parametros)
  // rating: point (por parametros)
  
  // Traer datos del venderdor
  const seller = await User.findByPk(contract.publication.userId)
  // Arma el nuevo comentario
  newSellerOpinion = {"commenter": contract.user.email+'-'+contract.user.last_name, comment: comment , "rating":point}
  //Agrega el comentario a los existentes
  let opinions = seller.seller_opinions;
  opinions.push(newSellerOpinion)

  //Calcular Seller Reputation -->> (seller_points+point)/(seller_review+1)
  const newSellerPoints = seller.seller_points+point
  const newSellerReviews = seller.seller_reviews+1
  const seller_reputation = Math.ceil(newSellerPoints/newSellerReviews);

  
  // Actualizo la review del vendedor con la opinion y la reputacion

    await User.update(
      {seller_opinions: opinions, 
      seller_reputation,
      seller_points: newSellerPoints,
      seller_reviews: newSellerReviews,
    },{ where: { id: contract.publication.userId }})

   // Actualizo el status del contract

   await contract.update({status:'Completed'})

   return contract;
  }
  catch (error){
    return { err_message: 'Contract review cannot be saved' }
  }

};

exports.deleteContract = async (id) => {
  const contract = await Contract.findOne({ where: { id } });
  if (contract) {
    await Contract.destroy({ where: { id } });
    return { message: 'Contract deleted successfully' };
  }
  return { err_message: 'Contract not found' };
};

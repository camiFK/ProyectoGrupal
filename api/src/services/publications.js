// const { publications } = require('../database/data.js');
const { Publication, Service, User, Category } = require('../database/postgres.js');
const { Op } = require('sequelize');

exports.getPublications = async (offset, limit, title, cat_id = '0') => {
  // Retorna las limit publicaciones activas a partir de la nro offset
  if (title === '' && cat_id === '0') {
    activePub = Publication.findAll({
      where: {
        state: 'Active'
      },
      include: {
        model: Service
      }
    });
    return activePub;
  }

  if (title !== '') {
    activePub = Publication.findAll({
      where: {
        state: 'Active',
        title: {
          [Op.iLike]: `%${title}%`
        }
      },
      include: {
        model: Service
      }
    });
    return activePub;
  }

  if (Number(cat_id) !== 0) {
    activePub = Publication.findAll({
      where: {
        state: 'Active',
        categoryId: Number(cat_id)
      },
      include: {
        model: Service
      }
    });
    return activePub;
  }
};

exports.getPublicationDetails = (id) => {
  // Retorna detalle de la publicacion
  const pubDetail = Publication.findOne({
    where: { id },
    include: {
      model: Service
    }
  });
  return pubDetail;
};

exports.postPublication = async (
  title,
  detail,
  detail_resume,
  price,
  album,
  categoryId,
  userId,
  services
) => {
  if (!userId) {
    return { err_msg: 'Must send userId' };
  }
  const user = await User.findOne({ where: { id: userId } });
  if (user) {
    if (!categoryId) {
      return { err_msg: 'Must send categoryId' };
    }
    const category = await Category.findOne({ where: { id: categoryId } });
    if (category) {
      if (services) {
        var serv = [];
        if (Array.isArray(services)) {
          for (let i = 0; i < services.length; i++) {
            var servM = await Service.findOne({ where: { id: services[i] } });
            if (!servM) { return { err_msg: 'Service not found' }; }
            serv.push(servM);
          }
        } else {
          if (typeof services === 'string') {
            services = services.split(',');
          } else {
            serv.push(services);
          }
          for (let i = 0; i < services.length; i++) {
            var servM = await Service.findOne({ where: { id: services[i] } });
            if (!servM) { return { err_msg: 'Service not found' }; }
            serv.push(servM);
          }
        }
      }
      const publication = await Publication.create({
        date: Date.now(),
        state: 'Active',
        title,
        detail,
        detail_resume,
        price,
        album
      });
      publication.setUser(user);
      publication.setCategory(category);
      publication.setServices(serv);
      return publication;
    }
    return { err_msg: 'Category not found' };
  }
  return { err_msg: 'User not found' };
};

exports.getPublicationsByTitle = (title) => {
  const publication = Publication.findAll({
    where: {
      title: {
        [Op.iLike]: `%${title}%`
      }
    }
  });
  return publication;
};

exports.updatePublication = async (id, publicationChanges) => {
  var publication = await Publication.findOne({ where: { id } });
  if (publication) {
    await Publication.update({ ...publicationChanges }, {
      where: { id }
    });
    if (publicationChanges.categoryId) {
      const cat = publicationChanges.categoryId;
      const category = await Category.findOne({ where: { id: cat } });
      if (category) {
        publication.setCategory(category);
      } else {
        return { err_message: 'Category not found' };
      }
    }
    if (publicationChanges.services) {
      let services = publicationChanges.services;
      const serv = [];
      if (Array.isArray(services)) {
        for (let i = 0; i < services.length; i++) {
          var servM = await Service.findOne({ where: { id: services[i] } });
          if (!servM) { return { err_msg: 'Service not found' }; }
          serv.push(servM);
        }
      } else {
        if (services) {
          services = services.split(',');
          for (let i = 0; i < services.length; i++) {
            var servM = await Service.findOne({ where: { id: services[i] } });
            if (!servM) { return { err_msg: 'Service not found' }; }
            serv.push(servM);
          }
        }
      }
      publication.setServices(serv);
    }
    var publication = await Publication.findOne({ where: { id } });
    return publication;
  }
  return { err_message: 'Publication not found' };
};

exports.deletePublication = (id) => {
/*   const publicationDelete = Publication.destroy({
    where: { id }
  }); */
  const publicationDelete = Publication.update(
    {
      state: 'Inactive'
    },
    {
      where: {
        id
      }
    }
  );
  return publicationDelete;
};

exports.getPublicationsByCategory = (cat_id) => {
  const publications = Publication.findAll({
    where: {
      categoryId: cat_id
    }
  });
  return publications;
};

exports.getPublicationsByUserId = async (id) => {
  const user = await User.findOne({
    where: { id }
  });
  if (user) {
    const publications = await Publication.findAll({
      where: { userId: id }
    });

    return publications;
  }
  return { err_message: 'User not found' };
};

exports.getPublicationsByYear = async () => {
  var totalPublications = [];
  const years=[2017,2018,2019,2020,2021,2022]
  for(let i=0;i<years.length;i++){
    var el={"year":years[i]}
    const pubs = await Publication.findAll({
      raw:true
    });
    const publications = pubs.filter((elem)=> {
      return elem.date.getFullYear() === years[i]
    })
    el.total=publications.length
    totalPublications.push(el)
  }
  return totalPublications
}
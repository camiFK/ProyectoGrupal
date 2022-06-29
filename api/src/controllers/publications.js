const { BAD_REQUEST, OK } = require('../routes/helpers/status.js');
const {
  getPublications,
  getPublicationDetails,
  postPublication,
  deletePublication,
  updatePublication,
  getPublicationsByTitle,
  getPublicationsByCategory,
  getPublicationsByUserId,
  getPublicationsByYear
} = require('../services/publications.js');

exports.getPublications = async (req, res, next) => {
  // Recibe offset y nros de registros a devolver x body
  // Recibe title por query
  try {
    const { offset = 0, limit = 0 } = req.body;
    const { title = '' } = req.query;
    const { cat_id } = req.query;
    const r = await getPublications(offset, limit, title, cat_id);
    if (r.length>0) res.json(r);
    else res.status(404).send('Not found')
  } catch (error) {
    next(error);
  }
};

exports.getPublicationDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const r = await getPublicationDetails(id);
    res.send(r);
  } catch (error) {
    next(error);
  }
};

exports.postPublication = async (req, res, next) => {
  /*   req.files = [
    {
      fieldname: 'pictures',
      originalname: 'Proyecto Final.pdf',
      encoding: '7bit',
      mimetype: 'application/pdf',
      destination: './public/img/10',
      filename: 'pictures-1654731917346.pdf',
      path: 'public\\img\\10pictures-1654731917346.pdf',
      size: 393334
    }
  ]; */
  try {
    const {
      title = '',
      detail = '',
      detail_resume = '',
      price = 0,
      userId,
      categoryId,
      services
    } = req.body;
    let album = null;
    if (req.files) {
      if (!process.env.API) {
        album = req.files.map(
          (e) =>
            'http://' +
            process.env.HOST +
            ':' +
            process.env.PORT +
            e.destination.slice(1) +
            '/' +
            e.filename
        );
      } else {
        album = req.files.map(
          (e) =>
            'http://' +
            process.env.API +
            e.destination.slice(1) +
            '/' +
            e.filename
        );
      }
    }
    const r = await postPublication(
      title,
      detail,
      detail_resume,
      price,
      album,
      categoryId,
      userId,
      services
    );
    res.status(200).send(r);
  } catch (error) {
    next(error);
  }
};

exports.getPublicationsByTitle = async (req, res, next) => {
  try {
    const { title } = req.params;
    const response = await getPublicationsByTitle(title);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

exports.getPublicationsByCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const response = await getPublicationsByCategory(categoryId);
    res.send(response);
  } catch (error) {
    next(error);
  }
};

exports.deletePublication = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await deletePublication(id);
    res.status(200).send(response);
  } catch (error) {
    next({ message: error.name });
  }
};

exports.updatePublication = async (req, res, next) => {
  try {
    const changes = req.body;
    if (req.files) {
      let album;
      if (!process.env.API) {
        album = req.files.map(
          (e) =>
            'http://' +
            process.env.HOST +
            ':' +
            process.env.PORT +
            e.destination.slice(1) +
            '/' +
            e.filename
        );
      } else {
        album = req.files.map(
          (e) =>
            'http://' +
            process.env.API +
            e.destination.slice(1) +
            '/' +
            e.filename
        );
      }
      changes.album = album;
    }
    const { id } = req.params;
    const update = await updatePublication(id, changes);
    if (update.err_message) {
      res.status(BAD_REQUEST).send(update.err_message);
    } else {
      res.status(OK).json(update);
    }
  } catch (error) {
    next(error);
  }
};

exports.getPublicationsByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const r = await getPublicationsByUserId(userId);
    if (r.err_message) {
      res.status(BAD_REQUEST).send(r.err_message);
    } else {
      res.status(OK).json(r);
    }
  } catch (error) {
    next(error);
  }
};

exports.getPublicationsByYear = async (req,res,next) => {
  try {
    const r = await getPublicationsByYear();
    if (r.err_message) {
      res.status(BAD_REQUEST).send(r.err_message);
    } else {
      res.status(OK).json(r);
    }
  } catch (error) {
    next(error);
  }
}
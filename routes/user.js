
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('detail', { title: 'Irving', apellido: 'Gonzalez'  });
};
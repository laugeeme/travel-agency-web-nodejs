'use strict';

exports.infoNosotros = (req, res) => {
  res.render('nosotros', {
    page: 'Sobre nosotros', //Create new variable to use in nosotros/index.pug
  });
};

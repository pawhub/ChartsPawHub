
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Irving', apellido: 'Gonzalez'  });
};

exports.detail = function(req, res){

	var id=req.params.id;
	var imagen;
	var icono;
	var caso;
	var imagen_caso;

	if(id%2==0){
		imagen='user';
		icono='abuse_icon';
		caso='Maltrato';
		imagen_caso='finding_home'
	}
	else{
		imagen='julius';
		icono='acci_icon';
		caso='Accidente';
		imagen_caso='finding_home2'
	}
		

	var data = {	
		user_name: 'Usuario ' + id, 
        case_description: 'En algun lugar de la mancha', 
        case_type: caso,
        user_id: imagen,
        icon_case: icono,
        image_case: imagen_caso
    }
  
	res.render('detail',data);
};
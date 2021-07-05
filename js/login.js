let usuario = {
    email: "",
    password: "",
  };
  
  let usuariosDB = JSON.parse(localStorage.getItem("usuarios")) || [];
  //obtener los datos del campo
  const handleChange = function(event){
    //para guardar los cambios de los inputs

    usuario ={
      ...usuario,
      [event.target.name]:event.target.value,
    };
  };


  const handleSubmit = function(e){
    e.preventDefault();

  
    //verificando email
   let usuarioVerificado = usuariosDB.find(function(user){
    return user.email===usuario.email
  })
  if(usuarioVerificado){
   //verificar password
     if(usuario.password===usuarioVerificado.password){
       alert("Usuario verificado");
       localStorage.setItem("usuario",JSON.stringify(usuarioVerificado))

       location.replace("/html/index.html");

     }else{
       alert("Usuario o contraseña incorrectos");
     };
  }else{
    alert("Usuario o contraseña incorrectos")
  }

  }

  
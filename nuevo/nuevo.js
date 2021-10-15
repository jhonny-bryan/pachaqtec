/*1) Crear una función que recorrar el arreglo alumnos e indique cuantos están aprobados, cuantos están desaprobandos teniendo en cuenta
que la nota mínima aprobatoria es 13. Saca el promedio de las notas aprobadas, promedio de notas desaprobadas y el promedio total de notas.
Indicar el nombre y la carrera en un console.log de los que su indice sea multiplo de 2 ejemplo: "Mi nombre es Juan y mi carrera es Biología".


3) Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los alumnos y luego la divida entre 2 para devolver
la nueva nota de los alumnos.
*/

const alumnos = [
    {
      nombre: 'Juan',
      carrera: 'Biología',
      nota: 16
    },
    {
      nombre: 'Jose',
      carrera: 'Enfermero',
      nota: 10
    },
      {
      nombre: 'Luis',
      carrera: 'Policía',
      nota: 07
    }
    ,
      {
      nombre: 'Maria',
      carrera: 'Secretariado',
      nota: 10
    },
    {
      nombre: 'Hugo',
      carrera: 'Enfermero',
      nota: 15
    },
      {
      nombre: 'Rosa',
      carrera: 'Enfermero',
      nota: 12
    }
    ,
      {
      nombre: 'Luisa',
      carrera: 'Biología',
      nota: 18
    }
  ]

  function primero(){

      
    var cantidad=alumnos.length;
    

      const alumno = [].concat(alumnos);

      console.log("aprovados")
      var cant_apro=0;
      var cant_desa=0;
      var pro_apro=0;
      var pro_desa=0;

    for(var i=0;i<cantidad;i++){
      if(alumno[i].nota>=13){
      console.log(alumno[i])
      pro_apro=parseInt(alumno[i].nota)+pro_apro;
      cant_apro++;
      }
    }

    console.log("desaprobados")
    for(var i=0;i<cantidad;i++){
      if(alumno[i].nota<=13){
      console.log(alumno[i])
      pro_desa=parseInt(alumno[i].nota)+pro_desa;
      cant_desa++;
      }
    }



    console.log((pro_apro/cant_apro).toFixed(2));
    console.log((pro_desa/cant_desa).toFixed(2));

    console.log(((pro_apro+pro_desa)/cantidad).toFixed(2));


    alumnos.forEach((p) => {
      const { nombre, carrera, nota } = p
    
      

      if (p.nota % 2 === 0) {
        console.log(`Mi nombre es ${nombre} y mi carrera es  ${carrera}`)
      }
    }
    )
  }


  primero();
//2) Crear una función que filtre en un nuevo arreglo a los alumnos que tengan de nota menor a 13.

function segundo(){
  var cont=0;
  var cantidad=alumnos.length;
  const persona = [];
  
  for(var j=1;j<cantidad;j++){
    if(alumnos[j].nota<13){
      
     persona[cont] = alumnos[j];
     cont++;
    }
  }
  console.log(persona)


}
segundo();


/*
3) Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los alumnos y luego la divida entre 2 para devolver
la nueva nota de los alumnos.*/

function tercero(){
  var cantidad=alumnos.length;
  const estudiantes = [].concat(alumnos);
  for(var k= 0;k<cantidad;k++){
    estudiantes[k].nota=(estudiantes[k].nota*3)/2;

  }
  console.log(estudiantes)
}
tercero();
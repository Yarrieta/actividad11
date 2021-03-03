class Estudiante {
    nombre;
    apellido;
    edad;
    fecha_nacimiento;
    sexo;
    año_ingreso;
    carrera;
    modalidad;
    año_en_curso;
    id_matricula;

	mostrar_datos_estudiante() {
        console.log(`Yo soy ${this.nombre} ${this.apellido} y mis datos de perfil estudiantil son: 
        
edad:${this.edad}
fecha nacimiento:${this.fecha_nacimiento}
sexo:${this.sexo}
año_ingreso:${this.año_ingreso}
carrera:${this.carrera}
modalidad:${this.modalidad}
año que curso:${this.año_en_curso}
matricula:${this.id_matricula}`)
	}
}

var estudiante1 = new Estudiante()

estudiante1.nombre = 'Yessika'
estudiante1.apellido = 'Arrieta'
estudiante1.edad= 26
estudiante1.fecha_nacimiento= '04/12/1994'
estudiante1.sexo='femenino'
estudiante1.año_ingreso= 2019
estudiante1.carrera='Informática'
estudiante1.año_en_curso= 2
estudiante1.modalidad= 'elearning'
estudiante1.id_matricula= 'DF125G3H'

estudiante1.mostrar_datos_estudiante()

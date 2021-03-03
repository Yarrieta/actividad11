class BandaMusical {
    nombre;
    genero;
    pais_origen;
    año_origen;
    miembros= []
    cantidad_integrantes;
    fecha_creacion;
    cantidad_discos;
    nombre_disco= []
    año_disco= []
    
    

	mostrar_datos_banda() {
        console.log('Los datos de la banda son :'+'\nnombre:'+ this.nombre+ ' \nGenero:'+  this.genero+ 
        ' \npais_origen:'+  this.pais_origen+ ' \naño_origen:'+  this.año_origen+ ' \nmiembros:'+  this.miembros+ ' \ncantidad_integrantes:'+  
        this.cantidad_integrantes+ ' \nfecha_creacion:'+  this.fecha_creacion+ ' \ncantidad_discos:'+  this.cantidad_discos+ ' \nnombre_disco:'+  this.nombre_disco+ 
        ' \naño_disco:'+  this.año_disco )
    }
    mostrar_discos_publicados() {

        for(let i=0; i<this.cantidad_discos; i++){
            console.log(' \nnombre_disco:'+  this.nombre_disco[i]+ 
        ' \naño_disco:'+  this.año_disco[i] )
        }
        
	}
}

var banda = new BandaMusical()

banda.nombre = 'The Beatles'
banda.genero= 'Rock'
banda.pais_origen= 'Liverpoll, Reino Unido'
banda.año_origen= 1957
banda.miembros= ['John Lennon', ' Paul McCart', ' Ringo Starr', ' George Harrison']
banda.cantidad_integrantes= 4
banda.fecha_creacion= '1957'
banda.cantidad_discos= 4
banda.nombre_disco= ['Abbey Road', 'Let It Be', 'Help!', 'Revolver']
banda.año_disco= [1969, 1970,1965,1966]
banda.mostrar_datos_banda()
banda.mostrar_discos_publicados()
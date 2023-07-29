import json

data = {}
data['usuarios'] = []


def importarDatos(direccion):
    try:
        with open(direccion, 'r') as archivo:                           # with me asegura que el archivo se cierre cuando termine de trabajar con el
            datosExternos = json.load(archivo)                          # importo los datos a la variable datosExternos (diccionario)
            
            usuariosAgregar = []
            usuariosExistentes = {usuario['userName'] for usuario in data['usuarios']}    # para cada usuario existente en data['usuarios'] ((for usuario in data['usuarios'])) tomaremos el valor correspondiente al userName ((usuario['userName'])) y lo agregaremos al conjunto usuariosExistentes ((usuariosExistentes = {}))
        
            for usuario in datosExternos['usuarios']:
                if usuario['userName'] not in usuariosExistentes:
                    usuariosAgregar.append(usuario)
                    usuariosExistentes.add(usuario['userName'])
        
        data['usuarios'].extend(usuariosAgregar)
        print(F'Datos de {direccion} importados con exito.')
    except FileNotFoundError:
        print(f'El archivo {direccion} no fue encontrado.')

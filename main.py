# Diccionario que unicamente contiene una lista de los usuarios
# Esta lista contiene diccionarios con los datos de los usuarios
# Nombre de usuarios, Contraseña
import json


data = {}
data['usuarios'] = []

# Funcion para registrar un usuarios
def registro(lugar):
    userName = input('Ingresa su nombre de usuario: ')
    while True:
        password = input('Ingresa la contraseña: ')
        
        if len(password) < 6:
            print('La contraseña debe tener al menos 6 caracteres')     # Si se cumple esto (True) para y reinicial el bucle
            
        elif not any(char.isupper() for char in password):
            print('La contraseña debe tener almenos una mayuscula')     # Si se cumple esto (True) para y reinicial el bucle
        
        elif not any(char.isdigit() for char in password):
            print('La contraseña debe tener almenos un numero')         # Si se cumple esto (True) para y reinicial el bucle

        else:
            lugar['usuarios'].append({
                'userName': userName,
                'password': password
            })
            print('Registro exitoso.')
            break
        
# Funcio para iniciar secion
def login(lugar):
    while True:
        userName = input('Ingresa su nombre de usuario: ')
        password = input('Ingresa la contraseña: ')
        
        for usuario in lugar['usuarios']:
            if usuario['userName'] == userName and usuario['password'] == password:
                print('Inicio de sesión exitoso.')
                return
        print('Algun dato fue ingresado de manera incorrecta.')

# Funcion para guardar en un archivo externo
def guardarDato(lugar):
    with open('datos/base_datos.json', 'w') as archivo:
        json.dump(lugar, archivo, indent=4)
        

# Funcion para cargar los datos desde un archivo externo y unirlos a los de la memoria
def importarDatos(direccion):
    try:
        with open(direccion, 'r') as archivo:                           # with me asegura que el archivo se cierre cuando termine de trabajar con el
            datosExternos = json.load(archivo)                          # importo los datos a la variable datosExternos (diccionario)

        
        data['usuarios'].extend(datosExternos['usuarios'])              # importa los datos de un archivo externo .json a data={}. Tiene un problema y es que importa por mas que un userName ya exista
        print(F'Datos de {direccion} importados con exito.')
    except FileNotFoundError:
        print(f'El archivo {direccion} no fue encontrado.')

        
registro(data)
registro(data)

guardarDato(data)

importarDatos('datos/base_datos_externos.json')

guardarDato(data)

importarDatos('datos/base_datos.json')

login(data)
import json

while True:
    try:
        with open('data.json', 'r') as archivo:
            datos = json.load(archivo)
            print(datos)
        # Realiza las operaciones necesarias con los datos
    except FileNotFoundError:
        print("El archivo no existe.")
    except json.JSONDecodeError as e:
        print(f"Error al decodificar JSON: {e}")

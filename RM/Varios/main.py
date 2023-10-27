import serial
import time

# Define el puerto serie al que está conectado el Arduino (cambia esto según tu configuración)
ser = serial.Serial('COM6', 9600)  # Reemplaza 'COMX' con el nombre de tu puerto COM

while True:
    user_input = input("Ingrese 'encender' para encender el LED o 'apagar' para apagarlo: ")

    linea = '123,523,642,854'
    
    if user_input == 'encender' or user_input == 'apagar':
        ser.write(linea.encode() + b'\n')  # Envia el comando al Arduino como una cadena de texto con salto de línea
        response = ser.readline().decode().strip()  # Lee la respuesta del Arduino
        print("Respuesta del Arduino:", response)
    else:
        print("Entrada no válida. Ingrese 'encender' o 'apagar'.")
    
    time.sleep(1)  # Espera 1 segundo antes de la próxima entrada
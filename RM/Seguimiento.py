import json
import serial
import cv2  
import numpy as np 
import time

ser = serial.Serial('COM4', 9600) 

def seguir():

     x=0
     y=0
     Mov= 0

     Video = cv2.VideoCapture(0)  

     while True:

          ret, frameOr = Video.read()
          frame = cv2.flip(frameOr, 1)

          if ret == True:

               # Definir rango de colores rojos en el espacio de color HSV
               lower_red = np.array([0, 100, 20])
               upper_red = np.array([5, 255, 255])
               lower_red2 = np.array([175, 100, 20])
               upper_red2 = np.array([179, 255, 255])

               # Convertir la imagen a espacio de color HSV
               hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

               # Crear una máscara para el color rojo
               mask1 = cv2.inRange(hsv_frame, lower_red, upper_red)
               mask2 = cv2.inRange(hsv_frame, lower_red2, upper_red2)
               red_mask = cv2.bitwise_or(mask1, mask2)

               # Aplicar un filtro morfológico para mejorar la máscara
               kernel = np.ones((5, 5), np.uint8)
               red_mask = cv2.morphologyEx(red_mask, cv2.MORPH_OPEN, kernel)

               # Encontrar los contornos de la estrella roja
               contours, _ = cv2.findContours(red_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

               for c in contours:
                    area = cv2.contourArea(c)
                    if area > 6000:
                         epsilon = 0.01 * cv2.arcLength(c, True)
                         approx = cv2.approxPolyDP(c, epsilon, True)
                         if len(approx) == 10:
                              M = cv2.moments(c)
                              if M["m00"] == 0:
                                   M["m00"] = 1
                              x = int(M["m10"] / M["m00"])
                              y = int(M['m01'] / M['m00'])
                              x, y, w, h = cv2.boundingRect(c)
                              cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)
                              center_x = x + w // 2
                              center_y = y + h // 2
                              cv2.circle(frame, (center_x,  center_y), 5, (0, 0, 255), -1)
                              font = cv2.FONT_HERSHEY_SIMPLEX
                              cv2.putText(frame, '{},{}'.format(x, y), (x + 10, y), font, 1.2, (0, 0, 255), 2, cv2.LINE_AA)
                              cv2.drawContours(frame, [approx], 0, (255, 0, 0), 3)

                              if x < 200: #800
                                   Mov= "000,000,000,000,000,000,000,000,000,000,003"
                                   ser.write(Mov.encode() + b'\n') 
                                   print("izquierdo")
                                   print(Mov)
                                   # Mover adelante
                              elif 300 <= x < 360: #860 1000
                                   Mov = "000,000,000,000,000,000,000,000,000,000,001"
                                   ser.write(Mov.encode() + b'\n') 
                                   print("centro")
                                   print(Mov)
                                   #Mover derecha
                              elif 400 <= x < 600: #1100 1920
                                   Mov = "000,000,000,000,000,000,000,000,000,000,002"
                                   ser.write(Mov.encode() + b'\n') 
                                   print("derecha")
                                   print(Mov)

               cv2.imshow('Seguimiento', frame)
               if cv2.waitKey(1) & 0xFF == ord('q'):
                    ser.close()
                    break
     Video.release()
     cv2.destroyAllWindows()

while True:
    time.sleep(1)
    try:
        with open('data.json', 'r') as file:
            datos = json.load(file)
            #print(datos) 

        if datos['modo'] == 'Seguimiento': 
            seguir()
        elif datos['modo'] == 'Manipulacion':
            linea = ""
            linea = linea + datos['sld1']
            linea = linea + ","
            linea = linea + datos['sld2']
            linea = linea + ","
            linea = linea + datos['sld3']
            linea = linea + ","
            linea = linea + datos['sld4']
            linea = linea + ","
            linea = linea + datos['sld5']
            linea = linea + ","
            linea = linea + datos['sld6']
            linea = linea + ","
            linea = linea + datos['sld7']
            linea = linea + ","
            linea = linea + datos['sld8']
            linea = linea + ","
            linea = linea + datos['sld9']
            linea = linea + ","
            linea = linea + datos['sld10']
            linea = linea + ","
            if datos['despl'] == 'quieto':
                linea = linea + "000"
            elif datos['despl'] == 'adelante':
                linea = linea + "001"
            elif datos['despl'] == 'derecha':
                linea = linea + "002"
            elif datos['despl'] == 'izquierda':
                linea = linea + "003"
            elif datos['despl'] == 'atras':
                linea = linea + "004"
            
            Manp = str(linea)
            ser.write(str(Manp).encode() + b'\n')
            print(Manp)
        else:
            print("Modo no válido")
            break  # Salir del bucle si el modo no es válido 
    except FileNotFoundError:
        print("El archivo no existe.")
    except json.JSONDecodeError as e:
        print(f"Error al decodificar JSON: {e}")

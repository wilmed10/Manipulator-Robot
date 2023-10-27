const int ledPin = 13;  // Define el pin del LED en el Arduino (puede cambiar según la configuración física)
String command = "";    // Variable para almacenar el comando recibido

void setup() {
  Serial.begin(9600);  // Inicia la comunicación serial a 9600 baudios
  pinMode(ledPin, OUTPUT);
}

void loop() {
  while (Serial.available() > 0) {
    char c = Serial.read();  // Lee el carácter recibido desde Python
    command += c;           // Agrega el carácter al comando
    
    // Si se recibe un salto de línea (indicando el final del comando)
    if (c == '\n') {
      if (command == "123,523,642,854\n") {
        digitalWrite(ledPin, HIGH);  // Enciende el LED
        Serial.println("LED encendido");
      } else if (command == "apagar\n") {
        digitalWrite(ledPin, LOW);   // Apaga el LED
        Serial.println("LED apagado");
      } else {
        Serial.println("Comando no reconocido");
      }
      command = "";  // Limpia el comando para la próxima entrada
    }
  }
}

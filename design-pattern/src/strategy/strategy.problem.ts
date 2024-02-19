// CAR =>  ["Paso 1: Conducir por carretera principal", "Paso 2: Girar a la derecha", "Paso 3: Llegar al destino"];
// WALKING => ["Paso 1: Caminar por calles peatonales", "Paso 2: Cruzar la plaza", "Paso 3: Llegar al destino"];
// BusTransport => ["Paso 1: Tomar el autobús", "Paso 2: Hacer transbordo en la estación central", "Paso 3: Llegar al destino"]
// CYCLING => ["Paso 1: Pedalear por carriles para bicicletas", "Paso 2: Cruzar el puente en bicicleta", "Paso 3: Llegar al destino"]

class RoutePlanner {
  generateRoute(start: string, end: string, transporteMode: string): string[] {
    if (transporteMode === "car") {
        console.log(`Generando ruta en coche ${start} hasta ${end}`)
        return ["Paso 1: Conducir por carretera principal", "Paso 2: Girar a la derecha", "Paso 3: Llegar al destino"];
    } else if (transporteMode === "walking") {
        console.log(`Generando ruta a pie ${start} hasta ${end}`);
        return ["Paso 1: Caminar por calles peatonales", "Paso 2: Cruzar la plaza", "Paso 3: Llegar al destino"];
    } else if (transporteMode === "busTransport") {
        console.log(`Generando ruta en autobús ${start} hasta ${end}`);
        return ["Paso 1: Tomar el autobús", "Paso 2: Hacer transbordo en la estación central", "Paso 3: Llegar al destino"];
    } else if (transporteMode === "cycling") {
        console.log(`Generando ruta en bicicleta ${start} hasta ${end}`);
        return ["Paso 1: Pedalear por carriles para bicicletas", "Paso 2: Cruzar el puente en bicicleta", "Paso 3: Llegar al destino"]
    } else {
        console.log("Ruta no soportada")
        return []
    }
  }
}

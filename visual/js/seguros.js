// Definir un objeto para representar a la aseguradora
const aseguradora = {
    clientes: [],
    polizas: [],
  };
  
  // Definir una función para agregar un nuevo cliente
  function agregarCliente(nombre, edad) {
    const nuevoCliente = {
      nombre,
      edad,
    };
    aseguradora.clientes.push(nuevoCliente);
    console.log(`Nuevo cliente agregado: ${nombre}`);
  }
  
  // Definir una función para crear una nueva póliza
  function crearPoliza(cliente, tipo, cobertura) {
    const nuevaPoliza = {
      cliente,
      tipo,
      cobertura,
    };
    aseguradora.polizas.push(nuevaPoliza);
    console.log(`Nueva póliza creada para ${cliente}: Tipo ${tipo}, Cobertura ${cobertura}`);
  }
  
  // Mostrar la información de todas las pólizas
  function mostrarPolizas() {
    console.log("Lista de Pólizas:");
    aseguradora.polizas.forEach((poliza, index) => {
      console.log(`Póliza ${index + 1}: Cliente ${poliza.cliente}, Tipo ${poliza.tipo}, Cobertura ${poliza.cobertura}`);
    });
  }
  
  // Ejemplo de uso
  agregarCliente("Juan Perez", 30);
  agregarCliente("Maria Garcia", 25);
  
  crearPoliza("Juan Perez", "Auto", "Responsabilidad civil");
  crearPoliza("Maria Garcia", "Hogar", "Daños materiales");
  
  mostrarPolizas();
  
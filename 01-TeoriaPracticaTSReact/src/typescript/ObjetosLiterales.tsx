interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona:Persona = {
    nombreCompleto: "Lucho",
    edad: 34,
    direccion: {
      pais: "Colombia",
      casaNo: 68,
    },
  };
  
  return (
    <>
      <h3>ObjetosLiterales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};

/*
1. {JSON.stringify(persona)} => De esta forma se puede renderizar en pantalla un Objeto. Con este metodo Se pueden renderizar objetos literales en pantalla.

1.1 Forma de ver mucho mas lindo el objeto. Ejemplo.
{
  /* <code>
    <pre>
        {JSON.stringify(persona, null, 2)}
    </pre>
</code> 
}

2. interface => es una palabra reservada en typescript y se utiliza para el tipado. Por convención la primera letra debe ser en mayuscula.

3. Para tipar un objeto dentro de un objeto, lo que se realiza es que se crea una segunda interfaces con el tipado de ese objeto. Y al clave se le pasa el tipado. 

*/

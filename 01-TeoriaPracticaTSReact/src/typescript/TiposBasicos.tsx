export const TiposBasicos = () => {
  const name = "Lucho";
  const edad = 35;
  const estaActivo = true;

  const poderes = ["Velocidad", "Volar", "Respirar en el agua"];
  const powers: number[] = [];

  powers.push(1, 2, 3);

  return (
    <>
      <h3>Tipos Básicos</h3>
      {name} , {edad}, {estaActivo ? "activo" : "no activo"}
      <br />
      {poderes.join(", ")}
      <br />
      {powers.join(" - ")}
    </>
  );
};

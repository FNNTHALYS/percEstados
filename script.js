const fat = [
    { estado: "SP", valor: 67836.43 },
    { estado: "RJ", valor: 36678.66 },
    { estado: "MG", valor: 29229.88 },
    { estado: "ES", valor: 27165.48 },
    { estado: "Outros", valor: 19849.53 }
  ];
  
  const total = fat.reduce((acc, curr) => acc + curr.valor, 0);
  
  const tabelaEstados = document.getElementById("tabelaEstados");
  
  fat.forEach(({ estado, valor }) => {
    const perc = (valor / total * 100).toFixed(2);
    const row = `
      <tr>
        <td>${estado}</td>
        <td>${valor.toFixed(2)}</td>
        <td>${perc}%</td>
      </tr>
    `;
    tabelaEstados.insertAdjacentHTML("beforeend", row);
  });
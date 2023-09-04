// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Dados do programa de treinamento
const programaTreinamento = [
    {
      dia: "Dia 1: Peito e Tríceps",
      exercicios: [
        { nome: "Supino reto", series: "4 x 8-10" },
        { nome: "Crucifixo com halteres", series: "3 x 10-12" },
        { nome: "Tríceps testa com barra EZ", series: "4 x 8-10" },
        { nome: "Tríceps corda no pulley", series: "3 x 10-12" },
      ],
    },
    {
      dia: "Dia 2: Costas e Bíceps",
      exercicios: [
        { nome: "Barra fixa ou puxada alta", series: "4 x 8-10" },
        { nome: "Pulldown na máquina", series: "3 x 10-12" },
        { nome: "Rosca direta com barra reta", series: "4 x 8-10" },
        { nome: "Rosca martelo", series: "3 x 10-12" },
      ],
    },
    {
      dia: "Dia 3: Pernas",
      exercicios: [
        { nome: "Agachamento livre", series: "4 x 8-10" },
        { nome: "Leg press", series: "3 x 10-12" },
        { nome: "Extensora de quadril", series: "3 x 10-12" },
        { nome: "Flexora deitada", series: "3 x 10-12" },
        { nome: "Panturrilha no leg press", series: "4 x 12-15" },
      ],
    },
    {
        dia: "Dia 4: Ombros e Trapezoides",
        exercicios: [
          { nome: "Desenvolvimento militar", series: "4 x 8-10" },
          { nome: "Elevação lateral com halteres", series: "3 x 10-12" },
          { nome: "Encolhimentos com barra", series: "4 x 8-10" },
          { nome: "Remada alta com barra T", series: "3 x 10-12" },
        ],
    },
    {
        dia: "Dia 5: Braços",
        exercicios: [
          { nome: "Rosca Scott", series: "4 x 8-10" },
          { nome: "Tríceps pulley com corda", series: "3 x 10-12" },
          { nome: "Curl de bíceps com barra reta", series: "4 x 8-10" },
          { nome: "Tríceps mergulho na máquina", series: "3 x 10-12" },
        ],
    },
    {
      dia: "Dia 6: Braços",
      exercicios: [
        { nome: "Rosca Scott", series: "4 x 8-10" },
        { nome: "Tríceps pulley com corda", series: "3 x 10-12" },
        { nome: "Curl de bíceps com barra reta", series: "4 x 8-10" },
        { nome: "Tríceps mergulho na máquina", series: "3 x 10-12" },
      ],
    },
  ];
  
  // Função para exibir o programa de treinamento
  function exibirProgramaTreinamento() {
    const tabelaTreinamento = document.getElementById("programa-treinamento");
  
    programaTreinamento.forEach((dia) => {
      const diaRow = document.createElement("tr");
      diaRow.innerHTML = `<th colspan="4">${dia.dia}</th>`;
      tabelaTreinamento.appendChild(diaRow);
  
      dia.exercicios.forEach((exercicio) => {
        const exercicioRow = document.createElement("tr");
        exercicioRow.innerHTML = `
          <td>${exercicio.nome}</td>
          <td>${exercicio.series}</td>
        `;
        tabelaTreinamento.appendChild(exercicioRow);
      });
    });
  }
  
  // Chame a função para exibir o programa de treinamento quando a página for carregada
  window.addEventListener("load", exibirProgramaTreinamento);})
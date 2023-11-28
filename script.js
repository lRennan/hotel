let hotelName = '';
let userName = '';
let userPassword = '';

function mainMenu() {
  alert(`Bem-vindo ao Hotel ${hotelName}, ${userName}. É um imenso prazer ter você por aqui!`);

  let choice;
  do {
    choice = prompt(
      'Escolha uma opção:\n' +
      '1) Quantos quartos são?\n' +
      '2) Como soletra?\n' +
      '3) Com "S" ou com "Z"?\n' +
      '4) Festa ou trabalho?\n' +
      '5) Hora de comer\n' +
      '6) Auditório para quantos?\n' +
      '7) Que horas você pode?\n' +
      '8) Álcool ou gasolina?\n' +
      '9) Ar puro, finalmente.\n' +
      '10) Sair'
    );

    switch (choice) {
      case '1':
        handleQuartos();
        break;
      case '2':
        handleCadastroHospedes();
        break;
      case '3':
        handlePesquisaHospedes();
        break;
      case '4':
        handleCustoGarcons();
        break;
      case '5':
        handleCustoBuffet();
        break;
      case '6':
        handleAuditório();
        break;
      case '7':
        handleRestaurante();
        break;
      case '8':
        handleCombustivel();
        break;
      case '9':
        handleManutencaoArCondicionado();
        break;
      case '10':
        alert(`Muito obrigado e até logo, ${userName}.`);
        break;
      default:
        alert('Opção inválida. Tente novamente.');
        break;
    }
  } while (choice !== '10');
}

function handleQuartos() {
  const dailyRate = parseFloat(prompt('Qual o valor da diária no hotel?'));
  const stayDuration = parseInt(prompt('Quantos dias de hospedagem?'));

  if (dailyRate >= 0 && stayDuration >= 1 && stayDuration <= 30) {
    const guestName = prompt('Qual o nome do hóspede?');
    const totalCost = dailyRate * stayDuration;

    const confirmation = prompt(`${userName}, você confirma a hospedagem para ${guestName} por ${stayDuration} dias? S/N`);

    if (confirmation.toUpperCase() === 'S') {
      alert(`${userName}, reserva efetuada para ${guestName}. O valor total é de R$${totalCost.toFixed(2)}.`);
    } else {
      alert(`${userName}, reserva não efetuada.`);
    }
  } else {
    alert('Valor ou duração da hospedagem inválidos.');
  }

  backToMainMenu();
}

function handleCadastroHospedes() {
  let guests = [];
  let totalGratuidades = 0;
  let totalMeiasHospedagens = 0;

  while (true) {
    const guestName = prompt('Qual o nome do Hóspede? (Digite "PARE" para encerrar)');
    if (guestName.toUpperCase() === 'PARE') {
      break;
    }

    const guestAge = parseInt(prompt('Qual a idade do Hóspede?'));
    if (guestAge < 6) {
      guests.push(`${guestName} possui gratuidade`);
      totalGratuidades++;
    } else if (guestAge > 60) {
      guests.push(`${guestName} paga meia`);
      totalMeiasHospedagens++;
    } else {
      guests.push(`${guestName} cadastrada(o) com sucesso.`);
    }
  }

  alert(`${userName}, o valor total das hospedagens é: R$${(totalGratuidades * 0 + totalMeiasHospedagens * (dailyRate / 2)).toFixed(2)}; ${totalGratuidades} gratuidade(s); ${totalMeiasHospedagens} meia(s)`);

  backToMainMenu();
}

function handlePesquisaHospedes() {
  const guests = [];
  while (true) {
    const option = prompt('Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair');

    if (option === '1') {
      const guestName = prompt('Qual o nome do Hóspede?');
      guests.push(guestName);
      alert(`Hóspede ${guestName} foi cadastrada(o) com sucesso!`);
    } else if (option === '2') {
      const guestName = prompt('Qual o nome do Hóspede?');
      if (guests.includes(guestName)) {
        alert(`Hóspede ${guestName} foi encontrada(o)!`);
      } else {
        alert(`Hóspede ${guestName} não foi encontrada(o)!`);
      }
    } else if (option === '3') {
      break;
    } else {
      alert('Opção inválida. Tente novamente.');
    }
  }

  backToMainMenu();
}

function handleCustoGarcons() {
  const numGarcons = parseInt(prompt('Quantos garçons serão necessários?'));
  const numHoras = parseInt(prompt('Qual a duração do evento em horas?'));

  if (numGarcons >= 1 && numHoras >= 1) {
    const totalCost = numGarcons * numHoras * 10.5;
    const confirmation = prompt(`Custo total: R$ ${totalCost.toFixed(2)}. Gostaria de efetuar a reserva? S/N`);

    if (confirmation.toUpperCase() === 'S') {
      alert(`${userName}, reserva efetuada com sucesso.`);
    } else {
      alert(`${userName}, reserva não efetuada.`);
    }
  } else {
    alert('Valores de garçons ou horas inválidos.');
  }

  backToMainMenu();
}

function handleCustoBuffet() {
  const refeicoesDisponiveis = ['Café da Manhã', 'Almoço', 'Jantar'];
  let escolhaRefeicao = prompt(`Escolha uma refeição:\n1) Café da Manhã\n2) Almoço\n3) Jantar`);

  if (escolhaRefeicao === '1') {
    escolhaRefeicao = 'Café da Manhã';
  } else if (escolhaRefeicao === '2') {
    escolhaRefeicao = 'Almoço';
  } else if (escolhaRefeicao === '3') {
    escolhaRefeicao = 'Jantar';
  } else {
    alert('Opção inválida. Tente novamente.');
    return;
  }

  if (refeicoesDisponiveis.includes(escolhaRefeicao)) {
    const numConvidados = parseInt(prompt('Quantas pessoas estarão na refeição?'));

    if (numConvidados > 350) {
      alert('Quantidade de convidados superior à capacidade máxima.');
      return;
    }

    let pratosDisponiveis = [];
    let precoPorPrato = {};

    // Define the available dishes and their prices based on the mealtime
    if (escolhaRefeicao === 'Café da Manhã') {
      pratosDisponiveis = ['Café', 'Pão', 'Frutas', 'Bolo'];
      precoPorPrato = {
        'Café': 3.99,
        'Pão': 2.49,
        'Frutas': 4.99,
        'Bolo': 5.99
      };
    } else if (escolhaRefeicao === 'Almoço') {
      pratosDisponiveis = ['Prato Principal', 'Salada', 'Sobremesa', 'Bebida'];
      precoPorPrato = {
        'Prato Principal': 12.99,
        'Salada': 5.99,
        'Sobremesa': 4.99,
        'Bebida': 3.49
      };
    } else if (escolhaRefeicao === 'Jantar') {
      pratosDisponiveis = ['Entrada', 'Prato Principal', 'Sobremesa', 'Bebida'];
      precoPorPrato = {
        'Entrada': 6.99,
        'Prato Principal': 15.99,
        'Sobremesa': 6.49,
        'Bebida': 3.99
      };
    }

    let pedido = [];

    // Allow the user to select items and calculate the total cost
    while (true) {
      const opcao = prompt(`Escolha uma opção para ${escolhaRefeicao}:\n${pratosDisponiveis.map((prato, index) => `${index + 1}. ${prato}`).join('\n')}\n${pratosDisponiveis.length + 1}. Sair`);
      const opcaoInt = parseInt(opcao);

      if (opcaoInt >= 1 && opcaoInt <= pratosDisponiveis.length) {
        pedido.push(pratosDisponiveis[opcaoInt - 1]);
      } else if (opcaoInt === pratosDisponiveis.length + 1) {
        break;
      } else {
        alert('Opção inválida. Tente novamente.');
      }
    }

    let custoTotal = 0;

    pedido.forEach(item => {
      custoTotal += precoPorPrato[item];
    });

    const confirmation = prompt(`O evento de ${escolhaRefeicao} inclui os seguintes itens:\n${pedido.join(', ')}\n
    O custo total do evento será de R$ ${custoTotal.toFixed(2)}. Gostaria de efetuar a reserva? S/N`);

    if (confirmation.toUpperCase() === 'S') {
      alert(`${userName}, reserva efetuada com sucesso.`);
    } else {
      alert(`${userName}, reserva não efetuada.`);
    }
  } else {
    alert('Refeição escolhida não está disponível.');
  }

  backToMainMenu();
}

function handleAuditório() {
  const numPessoas = parseInt(prompt('Quantas pessoas estarão no auditório?'));

  if (numPessoas <= 0) {
    alert('Número inválido de pessoas.');
  } else if (numPessoas <= 50) {
    alert('Auditório adequado para acomodar até 50 pessoas.');
  } else if (numPessoas <= 100) {
    alert('Auditório adequado para acomodar até 100 pessoas.');
  } else {
    alert('Auditório adequado para acomodar mais de 100 pessoas.');
  }

  backToMainMenu();
}

function handleRestaurante() {
  const horariosDisponiveis = ['12:00', '13:00', '19:00', '20:00'];
  const horarioEscolhido = prompt(`Horários disponíveis: ${horariosDisponiveis.join(', ')}. Escolha um horário:`);

  if (horariosDisponiveis.includes(horarioEscolhido)) {
    alert(`Horário escolhido: ${horarioEscolhido}. Reserva efetuada.`);
  } else {
    alert('Horário indisponível ou inválido.');
  }

  backToMainMenu();
}

function handleCombustivel() {
  const combustivelEscolhido = prompt('Escolha o tipo de combustível: Álcool ou Gasolina?').toLowerCase();

  if (combustivelEscolhido === 'álcool' || combustivelEscolhido === 'gasolina') {
    const litrosAbastecidos = parseFloat(prompt('Quantos litros deseja abastecer?'));

    if (isNaN(litrosAbastecidos) || litrosAbastecidos <= 0) {
      alert('Quantidade de litros inválida.');
      return;
    }

    const precoPorLitro = combustivelEscolhido === 'álcool' ? 4.49 : 5.09;
    const totalAPagar = litrosAbastecidos * precoPorLitro;

    // Calculate fuel consumption
    const consumoKmPorLitro = combustivelEscolhido === 'álcool' ? 9 : 12; // Adjust these values as needed
    const distanciaPercorrida = litrosAbastecidos * consumoKmPorLitro;

    const confirmation = prompt(`Total a pagar: R$ ${totalAPagar.toFixed(2)}\n
    Distância percorrida: ${distanciaPercorrida.toFixed(2)} km\n
    Confirmar abastecimento? S/N`);

    if (confirmation.toUpperCase() === 'S') {
      alert('Abastecimento confirmado. Obrigado!');
    } else {
      alert('Abastecimento cancelado.');
    }
  } else {
    alert('Tipo de combustível inválido.');
  }

  backToMainMenu();
}

function handleManutencaoArCondicionado() {
  const manutencaoEscolhida = prompt('Deseja agendar a manutenção do ar condicionado? S/N').toUpperCase();

  if (manutencaoEscolhida === 'S') {
    let dataManutencao = '';
    while (true) {
      dataManutencao = prompt('Digite a data e hora para a manutenção (DD/MM/AAAA HH:MM): Digite "VOLTAR" para voltar ao menu principal.');

      if (dataManutencao.toUpperCase() === 'VOLTAR') {
        break;
      }

      const dataRegex = /^(\d{2}\/\d{2}\/\d{4} \d{2}:\d{2})$/;

      if (dataRegex.test(dataManutencao)) {
        alert(`Manutenção agendada para ${dataManutencao}.`);
        break;
      } else {
        alert('Formato de data e hora inválido. Use o formato DD/MM/AAAA HH:MM.');
      }
    }
  } else {
    alert('Manutenção não agendada.');
  }

  backToMainMenu();
}

// Function to return to the main menu
function backToMainMenu() {
  const returnToMenu = prompt('Pressione Enter para voltar ao menu principal.');
  if (returnToMenu) {
    mainMenu();
  }
}

// Código principal
hotelName = prompt('Qual o nome do hotel?');
userName = prompt('Qual o nome do usuário?');
userPassword = prompt('Digite a senha:');

if (userPassword === '2678') {
  mainMenu();
} else {
  alert('Senha inválida');
}

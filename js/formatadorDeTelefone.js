function formatPhoneNumber(phoneNumber) {
  // Remove tudo que não for número do telefone
  const cleaned = phoneNumber.replace(/\D/g, '');

  // Adiciona a máscara do telefone
  const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);

  if (match) {
    return '(' + match[1] + ')' + match[2] + '-' + match[3];
  }

  return phoneNumber;
}

// Exemplo de uso
const inputPhoneNumber = document.getElementById('inputTel');
inputPhoneNumber.addEventListener('input', (event) => {
  const formattedPhoneNumber = formatPhoneNumber(event.target.value);
  event.target.value = formattedPhoneNumber;
});

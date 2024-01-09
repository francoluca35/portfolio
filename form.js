const btnF = document.getElementById('button');
const successMessage = document.getElementById('success-message');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btnF.value = 'Sending...';

   const serviceID = 'service_c71qrxk';
   const templateID = 'template_umz9nzf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btnF.value = 'Send Email';
      showSuccessMessage();
    }, (err) => {
      btnF.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
function showSuccessMessage() {
    successMessage.style.display = 'block';
    setTimeout(() => {
      successMessage.style.display = 'none';
      // Recargar la página después de 2000 milisegundos (2 segundos)
      setTimeout(() => {
        location.reload();
      }, 1000);
    }, 2000);
  }
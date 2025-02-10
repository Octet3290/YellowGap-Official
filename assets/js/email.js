const sendEmail = (e) => {
    e.preventDefault();
  
    const form = e.target;
  

 
    emailjs.sendForm('service_zd8xqwp', 'template_eiipjqr', form, '3DMbVSwwfMxaSPTxz')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert(`There was an error sending your message: ${error.text}`);
        }
      );
  };
  

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', sendEmail);
  } else {
    console.error('Form with ID "contact-form" not found!');
  }




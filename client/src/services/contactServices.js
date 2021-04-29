function sendEmail(mailData){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mailData),
    };
    
    return fetch(window.location.href + 'api/contact/mail', requestOptions)
        .then( res => console.log(res))
        .catch(function(error) {
            console.log('Looks like there was a problem: \n', error);
        });
}

export default  {
    sendEmail,
}
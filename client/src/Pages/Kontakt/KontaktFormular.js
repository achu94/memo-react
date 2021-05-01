import React from 'react';

import contactServices from '../../services/contactServices';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tel:'',
      email: '',
      message: '',
      fields: {name: false, tel: false, email: false, message : false},
      errors: {}
    }
  }

  render() {
    return(
      <div>
      <header className="form-header" >KONTAKTIEREN SIE UNS</header>
        <form id="form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" className="form-input" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            <label htmlFor="name">Tel</label>
            <input name="tel" type="text" className="form-input" value={this.state.tel} onChange={this.onTelChange.bind(this)} />
            <label htmlFor="Email1">Email Address</label>
            <input name="email" type="email" className="form-input" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            <label htmlFor="message">Nachricht</label>
            <textarea name="textArea" className="form-textarea" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          <button id="submit" type="submit">Senden</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState( () => ({
      name : event.target.value
    }));

    if(this.state.name.length < 3){
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          name : 'Ist nicht valid.'
        }
      }));
    }

  }

  onTelChange(event) {
    this.setState({tel: event.target.value});
  }

  onEmailChange(event) {
    this.setState({email: event.target.value});

    let lastAtPos = this.state.email.lastIndexOf('@');
    let lastDotPos = this.state.email.lastIndexOf('.');

    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          message: 'Die Email-Adresse ist nicht korrekt!'
        }
      }))
    }
  }

  onMessageChange(event) {
    this.setState({message: event.target.value});

    if(this.state.message.length < 10){
      return this.setState(prevState => ({
        ...prevState,
        errors: {
          message: 'Die angegebene Nachricht ist zu kurz!'
        }
      }))
    }
  }

  handleValidation(){
    Object.keys(this.state.errors).map( (error) => {
      // return console.log(error);
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    contactServices.sendEmail(this.state);
  }
}

export default App;
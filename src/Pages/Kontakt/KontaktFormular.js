import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tel:'',
      email: '',
      message: ''
    }
  }

  render() {
    return(
      <div>
      <header className="form-header" >KONTAKTIEREN SIE UNS</header>
        <form id="form" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-input" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            <label htmlFor="name">Tel:</label>
            <input type="text" className="form-input" value={this.state.tel} onChange={this.onTelChange.bind(this)} />
            <label htmlFor="Email1">Email address</label>
            <input type="email" className="form-input" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            <label htmlFor="message">Message</label>
            <textarea className="form-textarea" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          <button id="submit" type="submit">Submit</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onTelChange(event) {
    this.setState({tel: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
    // alert(this.state.message);
    console.table([this.state.message]);
  }
}

export default App;
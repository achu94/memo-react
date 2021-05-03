import './Footer.css';

const Footer = () => {

  return(
      <div className="main footer">
        <p style={{float: 'right', color: "#E89B00"}} >&copy; 2021 HM TROCKENBAU</p>
        <a style={{color: "#E89B00"}} href={window.location.origin + '/impresium'}>Impresium</a>
      </div>
  )
};
  
  export default Footer;
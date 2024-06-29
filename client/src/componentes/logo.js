const Logo = (props) => {
  return (
    <div className='img-link'>
      <a href={props.destino}>
        <img src={props.img} alt='Logo' />
      </a>
    </div>
  );
};

  
  export default Logo;
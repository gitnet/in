
 
const  Svgicons = (props) => (
  <>

    <svg width="24" height="24">
      <symbol id={props.iconname} viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z" />
      </symbol>
      <use xlinkHref= {"#"+ props.iconname} />
    </svg>
    </>
  );
  
  export default Svgicons;
import 'react';

const Button = ({children, onClick, ...other}) => {

  return <button onClick={onClick} {...other}>{children}</button>
}

export default Button;

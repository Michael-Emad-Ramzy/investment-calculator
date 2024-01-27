import logo from '../assets/investment-calculator-logo.png';

export default function Header({title}){
    return (
        <div id="header">
            <img src={logo} alt='logo showing a money bag'/>
            <h1>{title}</h1>
        </div>
    )
}
import { useDispatch, useSelector } from 'react-redux';
import { Logo_url } from '../../Services/Constants';
import style from '../../StyleComponent/Header.module.scss';
import { setInputValue, setShowData } from '../../Reduxtoolkit/slice/homeslice';
import { Link } from 'react-router-dom';
const NavBarComponent = () => {
    const {inputsearch}=useSelector((state)=>state.inputFieldSlice)
    const dispatch=useDispatch();
    const searchhandleClick = (e) => {
        dispatch(setInputValue(e.target.value))
      }


  const handleShow = () => dispatch(setShowData(true));
  return (
    <nav className={style.navbar_nav}>
        <Link to="/">
        <div className={style.first_div}>
        <img src={Logo_url} alt="logo"/>
        <span>stage</span>
      </div>
        </Link>
      
      <div className={style.second_div}>
        <div className={style.sec_div}>
        <input type="text" autoComplete="off" name="search" 
        value={inputsearch}
        onChange={searchhandleClick}
         placeholder='Search here...'
        className={style.inputField}/>
     
        </div>
       
      </div>
      <div className={style.third_div} >
        <Link to="/login">
        <button tyepe="button" className={`btn ${style.buttonLogin}`}
        onClick={handleShow}
      >Login</button>
        </Link>
     

      </div>
    </nav>
  );
};
export default NavBarComponent;

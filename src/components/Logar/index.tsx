import './styles.css';
import { ReactComponent as LogImage } from 'assets/images/logomedio.svg';
import { Link } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon';

const Logar = () => {
    return (
        
        <div className="login-container">
            <div className="base-card login" >
            
            <div className="user-login">
                <h1 className="user-login__title">Acessar o Sistema</h1>
                <form autoComplete="nope">
                    <div className="user-login__form-control">
                        <label htmlFor="email">Identificação</label>
                        <input id="email" type="text" name="email" autoComplete="off" />
                    </div>
                    <div className="user-login__form-control">
                        <label htmlFor="password">Senha</label>
                        <input id="password" type="password" name="password" />
                    </div>
                    <div className="btn-container">
                        <Link to="/Admin">
                            <ButtonIcon text="Entrar"/>
                        </Link>
                        <div className="nav-logo-container">
        <Link to="/" className="nav-logo-text">
              <LogImage />
            </Link>
            </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Logar;

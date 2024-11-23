import LogoLaranja from '../../img/logolaranja.png'
import '../Styles/Login.css'

function Login() {
    return (
      <>
      <section className='ContainerLogin'>
        <div className='BoxForm'>
          <form action="" >
            <div className='TituloLogo'>
              <img src={LogoLaranja} alt="" className='LogoImg'/>
              <h4 className='TituloLogin'>Aprender algo novo é a certeza de um futuro melhor.</h4>
            </div>
            <p className='TituloForm'>Faça seu login:</p>
            <input className='InputForm' type="email" name="" id="" placeholder='Email:'/>
            <input className='InputForm' type="password" name="" id="" placeholder='Senha:'/>
            <a href="" className='LinkSenha'><p className='PSenha'>Esqueceu sua senha?</p></a>
            <button className='ButtonForm'>Login</button>
            <a href="" className='LinkLoginCadastro'>
              <p className='P01Cadastro'>Não está cadastrado?</p>
              <p className='P02Cadastro'>Cadastre-se agora</p>
            </a>
          </form>
        </div>
        <div className='BoxFrase'>
          Conhecimento quando é dividido se multiplica.
        </div>
      </section>
      </>
    )
  }
  
  export default Login
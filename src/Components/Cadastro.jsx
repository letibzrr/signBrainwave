import LogoLaranja from '../../img/logolaranja.png'
import '../Styles/Cadastro.css'

function Cadastro() {
  return (
    <>
      <section className='ContainerCadastro'>
        <div className='BoxForm'>
          <form action="">
            <div className='TituloLogo'>
              <img src={LogoLaranja} alt="" className='LogoImg'/>
              <h4 className='TituloLogin'>Aprender algo novo é a certeza de um futuro melhor.</h4>
            </div>
            <p className='TituloForm'>Faça seu cadastro:</p>
            <input className='InputForm' type="text" name="" id="" placeholder='Nome Completo:'/>
            <input className='InputForm' type="number" name="" id="" placeholder='CPF:'/>
            <input className='InputForm' type="email" name="" id="" placeholder='Email:'/>
            <input className='InputForm' type="password" name="" id="" placeholder='Senha:'/>
            <input className='InputForm' type="password" name="" id="" placeholder='Confirme a senha:'/>
            <button className='ButtonForm'>Cadastrar</button>
            <a href="" className='LinkLogin'>
              <p className='P01Login'>Já está cadastrado?</p>
              <p className='P02Login'>Faça o login agora</p>
            </a>
          </form>
        </div>
        <div className='BoxFrase'> 
          Conhecimento transforma sonhos em realidade.
        </div>
      </section>
    </>
  )
}

export default Cadastro;
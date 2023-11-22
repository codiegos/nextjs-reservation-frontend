import LoginButton from '@/components/button/LoginButton'
import { EmailIcon, LockIcon } from '@/components/icons'
import { InputForm } from '@/components/input'

function LoginPage() {
  return (
    <section className='bg-mountains grid min-h-screen place-content-center gap-12 bg-cover bg-center bg-no-repeat text-xl text-white'>
      <div className='flex flex-col gap-12 rounded-3xl border-2 p-24 py-20 shadow-md backdrop-blur-lg'>
        <h1 className='mx-auto rounded-xl bg-primary-500/10 p-2.5 px-4 text-center text-4xl font-extrabold tracking-wide'>
          Iniciar Sesión
        </h1>
        <form className='flex flex-col space-y-4 '>
          <InputForm
            htmlFor='email'
            placeholder='Correo Electrónico'
            className='w-full rounded-full bg-transparent p-4 px-5 pr-12 text-white ring-2 ring-primary-200 duration-150 placeholder:text-primary-50 focus:ring-white'
            icon={<EmailIcon className='text-white' />}
          />
          <InputForm
            htmlFor='password'
            placeholder='Contraseña'
            type='password'
            className='w-full rounded-full bg-transparent p-4 px-5 pr-12 text-white ring-2 ring-primary-200 duration-150 placeholder:text-primary-50 focus:ring-white'
            icon={<LockIcon className='text-white' />}
          />
          <div className='text-md flex items-center justify-between gap-16 whitespace-nowrap py-2 pb-4'>
            <div>
              <input type='checkbox' name='recordar' id='recordar' />
              <span>Recordar cuenta</span>
            </div>
            <a className='text-blue-300 underline'>Olvidaste tu contraseña?</a>
          </div>
          <LoginButton>Ingresar</LoginButton>
        </form>
        <p>
          No tienes cuenta?{' '}
          <a className='text-blue-300 underline'>Registrate aquí</a>
        </p>
      </div>
    </section>
  )
}
export default LoginPage

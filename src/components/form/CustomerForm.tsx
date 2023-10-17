function CustomerForm() {
  return (
    <form>
      <label htmlFor='name'>Nombre</label>
      <input type='text' id='name' name='name' />
      <label htmlFor='surname'>Apellido</label>
      <input type='text' id='surname' name='surname' />
      <label htmlFor='email'>Correo electrónico</label>
      <input type='email' id='email' name='email' />
      <label htmlFor='phone'>Teléfono</label>
      <input type='tel' id='phone' name='phone' />
    </form>
  )
}
export default CustomerForm

import RegisterForm from '../../containers/RegisterForm'
import SideBar from '../../containers/Sidebar'

const NewContactPage = () => {
  return (
    <>
      <SideBar showFilters={false} />

      <RegisterForm />
    </>
  )
}

export default NewContactPage
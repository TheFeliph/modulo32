import ListContacts from '../../containers/ListContatcs'
import SideBar from '../../containers/Sidebar'

const HomePage = () => {
  return (
    <>
      <SideBar showFilters />
      <ListContacts />
    </>
  )
}

export default HomePage
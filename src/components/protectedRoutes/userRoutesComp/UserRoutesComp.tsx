import { Navigate, Outlet } from "react-router-dom";
import { getDataFromLocalStorage } from "../../localStorageComp/LocalStorageComp";


const UserRoutesComp = () => {

  const accessLogin = getDataFromLocalStorage('accessLogin');

  console.log(accessLogin)

  // if ( accessLogin.user.active && accessLogin.user.role === 'user' ) {
  //   console.log('dentro del if')
  //   return <Outlet/>;
  // }
  console.log('fuera del if')
  return <Navigate to='/login' />
};

export default UserRoutesComp
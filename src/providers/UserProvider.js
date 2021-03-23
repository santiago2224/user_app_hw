import React, {useState, useEffect} from 'react'

export const UserContext = React.createContext();
export const UserConsumer = UserContext.Consumer

const UserProvider = (props) => {

  const [user, setUser] =useState (null)
  const [initialLoadInProgress, setInitialLoadingProgress] = useState(true)

  useEffect (()=> {
    console.log('UserProvider mounted')

    setTimeout(()=>{
      console.log('getting data')
      getData()

    }, 1500)
  }, [])

  const getData = () => {
    setUser({
      firstName:'',
      lastName:'',
      emailAddress:'',
      avatar:'',
    })
    setInitialLoadingProgress(false)
  }


  return (
    <UserContext.Provider value={{...user, updateUser: setUser, initialLoadInProgress}}>
      {props.children}
    </UserContext.Provider>
  )

}

export default UserProvider
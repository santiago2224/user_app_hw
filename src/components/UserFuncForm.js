import { useState, useContext} from 'react'
import {Form} from 'semantic-ui-react'
import {UserContext} from '../providers/UserProvider'

const UserFuncForm = (props) => {
  const {firstName, lastName, emailAddress, updateUser} = useContext(UserContext)
}
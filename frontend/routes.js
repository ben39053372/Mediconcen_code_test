import React from 'react'

import Login from './View/Login'
import SignUp from './View/SignUp'
import ConsultationRecordList from './View/ConsultationRecordList'
import ConsultationRecordDetail from './View/ConsultationRecordDetail'
import LogOutButton from './Components/LogoutButton'

export default routes = [
  [
    { name: "Login", component: Login, options: {} },
    { name: "SignUp", component: SignUp, options: {} },
  ],
  [
    {
      name: "Consultations", component: ConsultationRecordList, options: {
        headerLeft: null,
        gestureEnabled: false,
        headerRight: () => (
          <LogOutButton />
        ),
      }
    },
    { name: "Consultation Detail", component: ConsultationRecordDetail }
  ]

]
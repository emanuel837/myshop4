import { useState } from 'react'
import EmployeeDetailsScreen from './app/screens/EmployeeDetailsScreen'
import HomeScreen from './app/screens/HomeScreen'
import LoginScreen from './app/screens/LoginScreen'

export default function App() {
  const [route, setRoute] = useState<'login' | 'employeeDetails' | 'home'>(
    'login',
  )

  if (route === 'home') {
    return <HomeScreen onLogout={() => setRoute('login')} />
  }

  if (route === 'employeeDetails') {
    return <EmployeeDetailsScreen onSubmitSuccess={() => setRoute('home')} />
  }

  return <LoginScreen onSuccess={() => setRoute('employeeDetails')} />
}


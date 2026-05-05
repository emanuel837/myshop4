import { useState } from 'react'
import HomeScreen from './app/screens/HomeScreen'
import LoginScreen from './app/screens/LoginScreen'

export default function App() {
  const [route, setRoute] = useState<'login' | 'home'>('login')

  if (route === 'home') {
    return <HomeScreen onLogout={() => setRoute('login')} />
  }

  return <LoginScreen onSuccess={() => setRoute('home')} />
}



import SideBar from './components/layuot/SideBar.tsx'
import CenterPanel from './components/layuot/CenterPanel.tsx'
import RightPanel from './components/layuot/RightPanel.tsx'

function App() {

  return (
    <main className="flex-1 flex flex-col md:flex-row h-[calc(100vh-64px)] md:h-screen md:ml-64 w-full">
      {/*<SideBar/>*/}
      <CenterPanel/>
      <RightPanel/>
    </main>
  )
}

export default App

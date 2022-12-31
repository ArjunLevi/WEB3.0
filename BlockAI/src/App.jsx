import{Navbar,Loader,Welcome,Transaction,Footer,Services} from './Components'
  const App =() =>{

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transaction/>
      <Footer/>
    </div>
  )
}

export default App;

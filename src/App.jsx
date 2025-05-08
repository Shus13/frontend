
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>This is home page</h1>}/>
      <Route path="/about" element={<h2>This is about page</h2>}/>
      <Route path="/contact" element={
        <div>
          <h2>This is contact page</h2>
          <p>Here is contact Information</p>
          <p>Contact No : 9816543474</p>
        </div>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

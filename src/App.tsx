import { JogodaVelha } from './pages/JogodaVelha';
import { HomePage } from './pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
            <Route index element={<HomePage/>}/>
            <Route path='game1' element={<JogodaVelha/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App

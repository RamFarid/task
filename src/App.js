import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UploadImages from './routes/UploadImages'
import Main from './routes/Main'

function App() {
  return (
    <main className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route path='/uploadimages' element={<UploadImages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

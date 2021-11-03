import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './core/App'
import { BookProvider } from './core/context/Book'

render(
  <BookProvider>
    <App />
  </BookProvider>
  , document.getElementById('root'))
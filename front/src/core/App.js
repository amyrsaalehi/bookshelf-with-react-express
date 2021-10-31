import React, { useEffect, useState } from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import AxiosInstance from './api/configs/axiosInstance'
import Card from '../components/atoms/Card'
import './styles/App.css'

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)


  const getBooks = async () => {
    try {
      setLoading(true)
      const res = await AxiosInstance.get('/api/v1/books')
      setBooks(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])


  return (
    <Container fluid="md" style={{ height: '100%' }}>
      {
        loading ? (
          <Row style={{ justifyContent: 'center', height: '100%', alignItems: 'center' }}>
            <Spinner animation="border" role="status" />
          </Row>
        ) :
          <Row style={{ gap: 12, justifyContent: 'center' }}>
            {
              books?.map((book, index) => (
                <Card key={index} book={book} />
              ))
            }
          </Row>
      }
    </Container>
  )
}

export default App

import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import Card from '../../components/atoms/Card/'
import Searchbar from '../../components/atoms/SearchBar/'
import { useBook } from '../context/Book'

function Home() {
  const { allBooks, books, setBooks, loading } = useBook()
  return (
    <Container fluid="xs" style={{ height: '100%' }}>
      <Searchbar allBooks={allBooks} setBooks={setBooks} />
      {
        loading ? (
          <Row style={{ justifyContent: 'center', height: '100%', alignItems: 'center' }}>
            <Spinner animation="border" role="status" />
          </Row>
        ) : (
          <Row style={{ gap: 12, justifyContent: 'center' }}>
            {
              books.length > 0 ? books?.map((book, index) => (
                <Card key={index} book={book} />
              )) : (
                <p>No books found</p>
              )
            }
          </Row>
        )
      }
    </Container>
  )
}

export default Home

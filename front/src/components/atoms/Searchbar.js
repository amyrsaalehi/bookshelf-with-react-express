import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const btnStyles = {
  position: 'fixed',
  right: 20,
  bottom: 20,
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '45%'
}

const inputStyles = {
  padding: '20px 10px',
  fontSize: 20,
}

function Searchbar({ allBooks, setBooks }) {
  const [show, setShow] = useState(false);
  const [searchText, setSearchText] = useState('')
  const [isInValid, setIsInValid] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSearchTextChanged = (e) => setSearchText(e.target.value)
  const handleSubmitSearch = (e) => {
    e.preventDefault()
    setIsInValid(false)
    if (searchText === '') {
      setBooks(allBooks)
      handleClose()
    } else {
      const fbs = allBooks.filter((book) => book.title.toLowerCase().search(searchText.toLowerCase()) !== -1)
      if (fbs.length > 0) {
        setBooks(fbs)
        handleClose()
      } else {
        setIsInValid(true)
        setBooks([])
      }
    }

  }

  return (
    <>
      <Button variant="light" style={btnStyles} onClick={handleShow}>
        <img src="https://cdn.iconscout.com/icon/free/png-256/search-2287049-1907871.png" width={50} height={50} />
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmitSearch}>
          <Form.Control isInvalid={isInValid} autoFocus value={searchText} onChange={handleSearchTextChanged} style={inputStyles} type="text" placeholder="Search..." />
        </Form>
      </Modal>
    </>
  );
}

export default Searchbar
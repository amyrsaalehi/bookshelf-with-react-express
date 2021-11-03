import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useBook } from '../../../core/context/Book'
import { searchToText } from '../../../core/utils/searchToText'
import { useStyles } from './styles'

function Searchbar({ allBooks, setBooks }) {
  const { loading } = useBook()
  const [show, setShow] = useState(false);
  const [searchText, setSearchText] = useState('')
  const [isInValid, setIsInValid] = useState(false)
  const classes = useStyles({ loading })

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => {
    setShow(true)
  }

  const handleSearchTextChanged = (e) => {
    setSearchText(e.target.value)
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault()
    setIsInValid(false)
    if (searchText === '') {
      setBooks(allBooks)
      handleClose()
    } else {
      const fbs = searchToText({ data: allBooks, prop: 'title', searchText })
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
      <Button disabled={loading} variant="light" className={classes.btn} onClick={handleShow}>
        <img src="https://cdn.iconscout.com/icon/free/png-256/search-2287049-1907871.png" alt="search icon" width={50} height={50} />
      </Button>

      <Modal centered show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmitSearch}>
          <Form.Control isInvalid={isInValid} autoFocus value={searchText} onChange={handleSearchTextChanged} className={classes.input} type="text" placeholder="Search..." />
        </Form>
      </Modal>
    </>
  );
}

export default Searchbar
// Basic Imports from React
import React, { useState, useEffect, useCallback, useContext, createContext } from 'react'
// Import AxiosInstance for API calls
import AxiosInstance from '../api/configs/axiosInstance'

// Creating Context
export const BookContext = createContext(null)

// Creating Context to access datas all over
export const BookProvider = ({ children }) => {
  const [allBooks, setAllBooks] = useState([])
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)


  const getBooks = useCallback(async () => {
    try {
      setLoading(true)
      const res = await AxiosInstance.get('/api/v1/books')
      setAllBooks(res.data)
      setBooks(res.data)
    } catch (err) {
      console.log(err)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }
  }, [])

  useEffect(() => {
    getBooks()
  }, [getBooks])

  useEffect(() => {
    console.log('allBooks', allBooks)
  }, [allBooks])

  useEffect(() => {
    console.log('books', books)
  }, [books])

  useEffect(() => {
    console.log('loading', loading)
  }, [loading])


  return (
    <BookContext.Provider value={{ allBooks, setAllBooks, books, setBooks, loading, setLoading }}>
      {children}
    </BookContext.Provider>
  )
}

export const useBook = () => {
  const books = useContext(BookContext)

  if (!books) throw new Error('You cannot use useBook here outside of BookContex')

  return books
}
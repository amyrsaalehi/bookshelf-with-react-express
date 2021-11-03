import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useBook } from '../../core/context/Book'
import { makeOriginal, makePascalCase } from '../../core/utils/typo'
import { useStyles } from './styles'

function DetailsContainer() {
  const { title } = useParams()
  const { allBooks } = useBook()
  const [currentBook, setCurrentBook] = useState({})
  const [bg, setBg] = useState(null)
  const classes = useStyles({ bg: currentBook?.imageLink })

  useEffect(() => {
    const originalTitle = makeOriginal(title)
    const book = allBooks.find(b => b.title === originalTitle)
    setCurrentBook({
      ...book,
      title: makePascalCase(originalTitle)
    })
    // const image = require(currentBook?.imageLink)
    setBg(currentBook?.imageLink)
    console.log(book)
  }, [title])

  return (
    <>
      <div className={classes.container} >
        {currentBook.title}
      </div>
    </>
  )
}

export default DetailsContainer

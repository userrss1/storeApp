import Book from "../modal/book.modal.js";


export const bookStore = async (req,res) => {
  try {
    const data = await Book.find()
    res.status(200).json(data)
  } catch (error)
  {
     console.log("Error: ",error)
     res.status(500).json(error)
  }
}


import { useState } from "react"

const AddPost = ({onAdd}) => {

    const [text, setText] = useState('')
    const [write, setWrite] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }
        onAdd({text, write})
        setText('')
        setWrite('')
    }

    return (
      <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Username- ***Could've bind it dynamically***</label>
        <input
          type='text'
          placeholder='Post'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Post</label>
        <input
          type='text'
          placeholder='How do you feel today?'
          value={write}
          onChange={(e) => setWrite(e.target.value)}
        />
      </div>
      <input type='submit' value='Post' className='btn btn-block' />
        </form>
    )
}

export default AddPost

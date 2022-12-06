import React from 'react'
import TextEditor from '../../../components/partial/TextEditor'
import Input from '../../../components/shared/input/input'
const CreateTextPost = () => {
    const option=["programming","Maths","english","history","computer"]
  return (
    <>
    <div className="container mt-5" style={{border:"1px solid black"}}>
        <div className='d-flex justify-content-center'>
            <div className="container mt-5">
                <h3>TItle</h3>
                <Input placeholder="enter a Title"/>
                <h2 className='mt-5'>Description</h2>
                <TextEditor />
                <h3 className='mt-5'>Select a category</h3>
                <select name="slect" id="" >
                    {option.map((item)=>{
                        return(
                            <option>{item}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default CreateTextPost
import React from 'react'
import {useParams} from 'react-router-dom';
import PrimaryNavbar from '../../../components/partial/Navbar/primaryNavbar/primaryNavbar'
import Card from '../.././../components/shared/Cards'
import question from '../../../questions'
import TextEditor from '../../../components/partial/TextEditor';
const TextEditorAnswer = () => {
    const {id}=useParams()
    const product = question.find((p)=>p.id === id)
    console.log(product)
  return (
    <div><div>
    <PrimaryNavbar></PrimaryNavbar>
    <div className="container-fluid ">
        <div className="row">
            <div className="col-lg-2 pt-5 ">
                <div className='ms-5 mt-3' >
                
                <h5 >TEXT EDITOR</h5>
                <h5 className='mt-3'>GRAPH</h5>
                <h5 className='mt-3'>COMPILER</h5>
                <h5 className='mt-3'>GRAPH</h5>
                <h5 className='mt-3'>CHART</h5>
                </div>
            </div>
            <div className="col-lg-6  pt-3">
                <div className="container ">
                    <div className=' mt-4 ' >
                    <h1>{product.Title}</h1>
                    <p>{product.description}</p>
                    </div> 
                    <div className=' mt-4 ' style={{border:'1px solid black'}} >
                    <h2>Answers:</h2>
                    <p>{product.answer}</p>
                    </div> 
                    <div className=' mt-4 ' >
                    <h2>Include your Answer:</h2>
                    <TextEditor/>
                    </div> 
                    </div>
            </div>
            <div className="col-lg-2 mt-2">
            <div className=' mt-5 ' style={{border:"1px solid black"}}>
                        <h4 className='ms-3'>Create a post...</h4>
                        <button className='btn btn-dark btn-md mt-3 ms-3 mb-3'>Create a post</button>
                    </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default TextEditorAnswer
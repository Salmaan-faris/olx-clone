import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { Authcontext, fireebaseContext } from '../../store/Context';

const Create = () => {

   const [name,setName]=useState('')
   const [category,setCategory]=useState('')
   const [price,setPrice]=useState('')
   const [image, setImage]=useState(null)
   const {firebase}=useContext(fireebaseContext)
   const {user}= useContext(Authcontext)
   const date=new Date()
    function handleSubmit() {
      firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
        ref.getDownloadURL().then((url)=>{
          
          firebase.firestore().collection('products').add({
            name,
            category, 
            price,
            url,
            userId:user.uid,
            createDate : date.toDateString()

          })
        })
      })

    }
 
    
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              id="fname"
              onChange={(e)=>{setName(e.target.value)}}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={category}
              name="category"
              onChange={(e)=>{setCategory(e.target.value)}}
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input 
            className="input" 
            type="number" 
            value={price}
            id="fname" 
            onChange={(e)=>{setPrice(e.target.value)}}
            name="Price" />
            <br />
          
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) :''}></img>
          
            <br />
            <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;



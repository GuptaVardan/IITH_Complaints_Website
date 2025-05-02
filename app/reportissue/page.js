"use client"
import React from 'react'
import { useState } from 'react'
import {db} from '../firebaseConfig'
import { collection,addDoc } from 'firebase/firestore'
async function addReportsAndSuggestionsToDatabase(issue) {
    try {
        const docRef = await addDoc(collection(db,"issues_and_suggestions"),{
            issue : issue,
        });
        
        console.log("Document written with ID:",docRef.id);
        return true;
    } catch (error) {
        console.log("Error encountered while writing the document into database!");
        return false;
    }
}
const Report = () => {
    const [issue, setissue] = useState("")
    const [issues, setissues] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await addReportsAndSuggestionsToDatabase(issue);
        if(added)
        {
            alert("Reported an issue!");
        }
    }
    const handleChange = (e) => {
        setissue(e.target.value)
    }
  return (
    <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex items-center justify-center"> 
      <form action="submit" onSubmit={handleSubmit} >
      <div className="flex flex-col gap-2 text-2xl w-[50vw] items-start text-white">
                        <label className="self-center" htmlFor="other-issue">Suggestions for Improvements:</label>
                        <textarea
                            className="w-full border-2 border-l-white h-32 p-2 "
                            id="other-issue"
                            name="other-issue"
                            placeholder="Suggest.."
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='flex justify-center'> 
                    <button
                        type="submit"
                        className="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    >
                        <span className="hover:cursor-pointer relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Submit
                        </span>
                    </button>
                    </div>
      </form>
    </div>
  )
}

export default Report

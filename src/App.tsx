import React, {
    // useState,
    // useEffect,
    FC,
} from 'react'
import axios from 'axios'

const App: FC = () => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            const uploadFile = files[0]
            const formData = new FormData()
            formData.append(uploadFile.name, uploadFile)
            axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(resp => {
                console.log(resp)
            })
        }
    }

    return (
        <div className="App" style={{marginTop: '100px', marginLeft: '100px'}}>
            <input type='file' name="myFile" onChange={handleFileChange} />
        </div>
    )
}

export default App
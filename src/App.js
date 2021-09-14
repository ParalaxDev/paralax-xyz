import marked from "marked";
import './App.css'
import { useState, useEffect } from "react";
import { sampleText } from "./sampleText";

import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll } from "firebase/storage"

const firebaseConfig = {
	apiKey: process.env.APIKEY,
	authDomain: process.env.AUTHDOMAIN,
	projectId: process.env.PROJECTID,
	storageBucket: 'paralax-interactive-portfolio.appspot.com',
	messagingSenderId: process.env.MESSAGINGSENDERID,
	appId: process.env.APPID
}

const App = () => {

	const [text, setText] = useState(sampleText)
	const [numFiles, setNumFiles] = useState(null)
	const [imageUrl, setImageUrl] = useState(null)
	const [fileName, setFileName] = useState('default')
	const [projectName, setProjectName] = useState(null)

	const firebaseApp = initializeApp(firebaseConfig)

	const storage = getStorage(firebaseApp)

	const handleChange = (e) => {
		setText(e.target.value)
	}

	const renderText = (text) => {
		const __html = marked(text)
		return { __html }
	}

	const getRandomInt = (max) => {
		return Math.floor(Math.random() * max);
	}

	const getNumberOfFiles = async () => {
		const listRef = ref(storage, 'markdown/')

		await listAll(listRef)
			.then(async (res) => {
				// console.log(res.items.length)
				await setNumFiles('Project ' + res.items.length)
				// console.log(res.items.length)
				// console.log(numFiles)

			})

		// console.log(total)
		// return total
	}


	const uploadMDFile = (data, name) => {

		const blob = new Blob([data], { type: 'md' })
		const storageRef = ref(storage, `Projects/${projectName}/markdown/${name}`)

		uploadBytesResumable(storageRef, blob).then((snapshot) => {
			console.log('Uploaded', name);
			getDownloadURL(snapshot.ref).then((downloadURL) => {
				console.log('File available at', downloadURL);
			});

		});
	}

	const handleImageUploadChange = (e) => {
		let selected = e.target.files[0]

		if (selected) {

			const storageRef = ref(storage, `Projects/${projectName}/images/${selected.name}`)

			uploadBytesResumable(storageRef, selected).then((snapshot) => {
				console.log('Uploaded', selected.name);
				getDownloadURL(snapshot.ref).then((downloadURL) => {
					// console.log('File available at', downloadURL);
					setImageUrl(downloadURL)
				});

			});

		}
	}

	getNumberOfFiles()
	console.log(fileName)

	return (
		<div className='container'>
			<div className='row'>
				<input type='text' defaultValue={numFiles} onChange={(e) => setProjectName(e.target.value)} />
			</div>
			<div className='row'>
				<div className='col-sm-6'>
					<button onClick={() => { uploadMDFile(text, fileName) }}>Upload Markdown File</button>
					<input type='text' defaultValue={numFiles} onChange={(e) => setFileName(e.target.value)} />
				</div>
				<div className='col-sm-6'>
					<input type='file' onChange={handleImageUploadChange} />
					<input type='text' defaultValue={imageUrl} disabled />
				</div>
			</div>
			<div className='row'>
				<div className='col-sm-6'>
					<textarea className='form-control' rows='35' onChange={handleChange} defaultValue={sampleText} />

				</div>
				<div className='col-sm-6'>
					<div dangerouslySetInnerHTML={renderText(text)} />
				</div>
			</div>
		</div>
	)
}

export default App;

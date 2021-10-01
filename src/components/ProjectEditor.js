// import 'bootstrap/dist/css/bootstrap.min.css';

import marked from "marked";
import { useState, useEffect } from "react";
import { sampleText } from "../sampleText";
import { collection, doc, setDoc, getFirestore, getDocs, addDoc, getDoc, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app"
// import { getFirestore } from 'firebase/firestore';


const ProjectEditor = () => {

    const [text, setText] = useState(sampleText)
    const [projects, setProjects] = useState([])

    const db = getFirestore();

    useEffect(() => {
        getFirestoreProjects()
        getMDFromFirestore('YKykekq1sQc2MusXoJ1r')
    }, [])

    // #region Firestore

    const getFirestoreProjects = async () => {
        const array = []
        const querySnapshot = await getDocs(collection(db, "projects"));
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            // console.log(doc.id)
            array.push(doc.data().title)
        });

        // console.log(array)
        setProjects(array)

    }

    const getMDFromFirestore = async (id) => {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data().projectPageMD);

            const fetchedData = fetch(docSnap.data().projectPageMD)
                .then(function (response) {
                    response.text().then(function (text) {
                        // console.log(text);
                        setText(text)
                        // markdownDataList.push(text)

                        // return (<div dangerouslySetInnerHTML={renderText('#loading')} />)


                        // console.log(markdownList)
                    });

                    // return markdownDataList
                });


        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    }


    // #endregion

    const handleTextAreaChange = async (e) => {

        const projectsRef = collection(db, "projects");

        const q = query(projectsRef, where("title", "==", e.target.value));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            getMDFromFirestore(doc.id)
        });
    }


    //  #region Markdown Renderer

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const renderText = (text) => {
        const __html = marked(text)
        return { __html }
    }

    // #endregion

    return (
        <div className='container'>
            <select className="form-select col-sm-6" aria-label="Default select example" onChange={handleTextAreaChange}>
                {projects.map((item, i) => {
                    return <option key={i}>{item}</option>

                })}
                <option>New Project</option>
            </select>
            <div className='row'>
                <div className='col-sm-6'>
                    <textarea className='form-control' rows='35' onChange={handleChange} value={text} />

                </div>
                <div className='col-sm-6'>
                    <div dangerouslySetInnerHTML={renderText(text)} />
                </div>
            </div>
        </div>
    )

}

export default ProjectEditor
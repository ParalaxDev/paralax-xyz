import { useParams, Redirect } from "react-router-dom"
import { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL, list, listAll } from "firebase/storage";
import marked from "marked";
import { collection, doc, setDoc, getFirestore, getDocs, addDoc, getDoc, query, where } from "firebase/firestore";
import '../styles/generalStyles.scss'
// import '../styles/notion.css'

// import 'bootstrap/dist/css/bootstrap.min.css';




const Project = () => {
    const [text, setText] = useState('# loading...')
    const [projects, setProjects] = useState([])

    const db = getFirestore();

    const params = useParams()

    useEffect(() => {
        getFirestoreProjects()
        getMD()
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

    const getMD = async () => {

        const projectsRef = collection(db, "projects");

        const q = query(projectsRef, where("urlName", "==", params.name));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            console.log(doc.data().title)
            getMDFromFirestore(doc.id)
        });
    }

    const renderText = (text) => {
        const __html = marked(text)
        return { __html }
    }

    return (
        <div className='md'>


            {/* <div dangerouslySetInnerHTML={renderText(markdownList)} /> */}
            {

            }
            <div dangerouslySetInnerHTML={renderText(text)} />

            {/* <p>{markdownData}</p> */}
        </div>
    )
}

export default Project
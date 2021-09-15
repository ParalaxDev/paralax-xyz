import { useParams, Redirect } from "react-router-dom"
import { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL, list, listAll } from "firebase/storage";


const Project = () => {

    const params = useParams()
    const storage = getStorage()

    const [isProject, setIsProject] = useState(true)


    useEffect(() => {
        checkProject()
    }, []);

    const checkProject = async () => {

        const listRef = ref(storage, `Projects/${params.name}`)

        const storageData = await listAll(listRef)
            .then(async (res) => {
                // const projectList = []
                // res.prefixes.forEach((folderRef) => {
                //     // console.log(folderRef.fullPath.replace(/Projects\//gm, ''))
                //     projectList.push(folderRef.fullPath.replace(/Projects\//gm, ''))
                // });
                // return projectList
                setIsProject(res.prefixes.length == 0 && res.items.length == 0 ? false : true)


            })

        // console.log('PROJECT LIST ==========>', storageData)

        // return storageData

    }



    return (
        <>
            <h4>{params.name}</h4>
            {isProject ? <h4>This is a project!</h4> : <Redirect to='/' />}
        </>
    )
}

export default Project
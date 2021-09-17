import { getStorage, ref, getDownloadURL, list, listAll } from "firebase/storage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import marked from "marked";



const ProjectViewer = () => {

    const [projects, setProjects] = useState(null)

    const storage = getStorage()


    const getProjects = async () => {

        const listRef = ref(storage, 'Projects/')

        const storageData = await listAll(listRef)
            .then(async (res) => {
                const projectList = []
                res.prefixes.forEach((folderRef) => {
                    // console.log(folderRef.fullPath.replace(/Projects\//gm, ''))
                    projectList.push(folderRef.fullPath.replace(/Projects\//gm, ''))
                });
                return projectList


            })

        console.log('PROJECT LIST ==========>', storageData)

        setProjects(storageData)

        // return storageData

    }


    useEffect(() => {
        getProjects()
    }, [])
    // console.log(projectList[3])

    // console.log(getProjects())



    return (
        <>
            <h1>Projects</h1>
            {projects == null ? <h3>No Projects</h3> : projects.map((project, i) => {
                return <Link to={`/projects/${project}`} key={i} >{project} <br /></Link>
            })}

            {/* <h3>{projectList[3]}</h3> */}

        </>
    )
}

export default ProjectViewer
import { useParams, Redirect } from "react-router-dom"
import { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL, list, listAll } from "firebase/storage";
import marked from "marked";



const Project = () => {

    const params = useParams()
    const storage = getStorage()

    const [isProject, setIsProject] = useState(true)
    // const [markdownList, setMarkdownList] = useState(null)
    const [markdownData, setMarkdownData] = useState(['# loading'])


    useEffect(() => {

        getProjects()


    }, []);

    const getProjects = async () => {

        const listRef = ref(storage, `Projects/${params.name}/markdown`)

        const markdownData = await listAll(listRef)
            .then(async (res) => {
                // const projectList = []
                // res.prefixes.forEach((folderRef) => {
                //     // console.log(folderRef.fullPath.replace(/Projects\//gm, ''))
                //     projectList.push(folderRef.fullPath.replace(/Projects\//gm, ''))
                // });
                // return projectList
                setIsProject(res.prefixes.length == 0 && res.items.length == 0 ? false : true)
                const markdownList = []
                res.items.forEach((itemRef) => {
                    markdownList.push(itemRef.fullPath.replace(new RegExp(`Projects\/${params.name}\/markdown\/`, 'gm'), ''))
                })

                return markdownList

            })

        console.log('MARKDOWN LIST ==========>', markdownData)

        // setMarkdownList(markdownData)
        getMarkdown(markdownData)

    }

    const getMarkdown = async (markdownList) => {


        if (markdownList == null) return

        const markdownDataList = []

        markdownList.forEach((file) => {
            const listRef = ref(storage, `Projects/${params.name}/markdown/${file}`)

            const getMarkdownData = getDownloadURL(listRef).then(data => {
                const fetchedData = fetch(data)
                    .then(function (response) {
                        response.text().then(function (text) {
                            // console.log(text);
                            // setMarkdownList(text)
                            markdownDataList.push(text)

                            // return (<div dangerouslySetInnerHTML={renderText('#loading')} />)


                            // console.log(markdownList)
                        });

                        return markdownDataList
                    });

                return fetchedData


            });

            console.log('download url data', getMarkdownData)
            // markdownDataList.push(getMarkdownData)


        })

        console.log(markdownDataList)


        setMarkdownData(markdownDataList)
    }

    const renderText = (text) => {
        // console.log(text)
        const __html = marked(text)
        return { __html }
    }



    return (
        <>
            <h4>{params.name}</h4>
            {isProject ? <h4>This is a project!</h4> : <Redirect to='/' />}


            {/* <div dangerouslySetInnerHTML={renderText(markdownList)} /> */}
            {

            }

            {markdownData.map((md, i) => {
                return (<p key={i}>lets friking go!?!?</p>)
            })}
            <p>{markdownData}</p>
        </>
    )
}

export default Project
import { useParams } from "react-router-dom"

const ArticlePage = () => {

    const { articleId } = useParams()

    return (
        <div>
            ArticlePage - 
            {articleId}
        </div>
    )
}

export default ArticlePage
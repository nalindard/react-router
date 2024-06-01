import { useSearchParams } from "react-router-dom"

interface SearchQueryPageProps {
    title: string
}

const SearchQueryPage = ({ title }: SearchQueryPageProps) => {

    // const [searchParams, setSearchParams] = useSearchParams()
    const [searchParams] = useSearchParams()

    return (
        <div>
            <div>SearchQueryPage</div>
            <h2><code>title:</code>{title}</h2>

            <h2> <code>lang:</code> {searchParams.get('lang')}</h2>
            <h2> <code>theme:</code> {searchParams.get('theme')}</h2>
            <h2> <code>name:</code> {searchParams.get('name')}</h2>
            <h2> <code>autherized:</code> {searchParams.get('autherized')}</h2>
            <hr />
            <h2><code>searchParams.has('lang'):</code>{searchParams.has('lang')}</h2>
        </div>
    )
}

export default SearchQueryPage
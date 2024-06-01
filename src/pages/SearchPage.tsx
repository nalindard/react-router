import React from 'react';
import { useNavigate } from 'react-router-dom';
interface SearchPageProps {
    fromHome: boolean;
    searchTitle?: string
}

const SearchPage: React.FC<SearchPageProps> = ({ fromHome, searchTitle }) => {
    const navigate = useNavigate();


    const queryString = "?lang=en&theme=light&name=falcon";
    const sp = new URLSearchParams(queryString);

    sp.set('autherized', false.toString());
    sp.append('2024', true.toString())
    sp.delete('name')

    console.log(sp.toString());


    return (
        <>
            <div><code>fromHome:</code> {fromHome ? 'From Home' : 'Not from Home'}</div>
            <div><code>searchTitle:</code> {searchTitle}</div>
            <hr />
            <button onClick={() => navigate('/searchquery?lang=en&theme=light&name=falcon')}>CLICK HERE FOR SEARCH QUERY PAGE</button>
            <hr />
            <h2>{sp.getAll('lang')}</h2>
            <h2>{sp.toString()}</h2>
            <button onClick={() => navigate('/searchquery?' + sp.toString())}>CLICK HERE FOR SEARCH QUERY PAGE</button>
        </>
    )
};

export default SearchPage;
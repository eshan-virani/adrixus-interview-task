import styled from 'styled-components';


export const Table = styled.div` 
    padding: 1rem;
    
    table {
        border-spacing: 0;
        border: 1px solid #000;
        margin: 20px auto;
    }
    tr {
        :last-child {
            td {
                border-bottom: 0;
            }
        }
    }

    th, td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;
    
        :last-child {
            border-right: 0;
        }
    }
`;

export const ThSort = styled.th`
    cursor: pointer;
`;
export const SearchBar = styled.input`
    border-width: 1px;
    border: 1px solid;
    border-radius: 0.50rem 0 0 0.50rem  ;
    padding: 0.6rem;
    outline: 0;
    font-family: inherit;
    font-size: 0.95em;
    margin-top: 1.5rem;
    border-right: 0
`;

export const SearchBarDiv = styled.div`
    text-align: center;
`
export const SearchButton = styled.button`
    border: 1px solid;
    border-left: 0;
    padding: 0.6rem;
    outline: 0;
    font-family: inherit;
    border-radius: 0 0.50rem  0.50rem 0 ;
    font-size: 0.95em;
    cursor: pointer;

`
export const PaginationButton = styled.button`
    border: none;
    padding: 1rem;
    outline: 0;
    font-family: inherit;
    font-size: 0.95em;
    width: 145px;
    margin-left: 10px;
    cursor: pointer;
`
import styled, {Keyframes, css} from 'styled-components';

export const Container = styled.div`
  
`;

export const Form = styled.form`
    margin-top:30px;
    display:flex;
    flex-direction:row;
    
    input{
        flex:1;
        border:1px solid #eee;
        padding: 10px 15px;
        border-radius: 4px;
        font-size:16px;

    }
`;

export const SubmitButton = styled.button.attrs(props => ({

    type:'submit',
    
}))`
background:#7159c1;
border:0;
padding-left:15px;
padding-right:5px;
margin-left:12px;
border-radius:4px;

display:flex;
justify-content:center;
align-items:center;

`
export const List = styled.ul`
    list-style:none;
    margin-top:30px;
    
    li{
        padding: 15px 0;

        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items:center;
        
        & + li {
            border-top:1px solid #eee;
        } 

        a{
            color:#7159c1;
            text-decoration:none;

        }
    }

`;
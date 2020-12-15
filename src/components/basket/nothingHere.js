import React from "react"


export default function NothingHere (props){
    return(
        <div style={{
            fontSize: '40px',
            maxWidth: '800px',
            padding: 'auto',
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: '150px',
            color: '#CE7AFA',
            textAlign: 'center',
            margin: '40px'
        }}>
            {props.alert}
        </div>
    );
}




import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //         color: 'black',
    //         backgroundColor: 'white'
    
    //     })

    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
        boxShadow: 'none'
    }
    // #030415

    // const [btnText, setBtnText] = useState("Enable Dark Mode")
    
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white',
    //             borderRadius: '6px'
    //         })

    //         setBtnText("Enable Light Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })

    //         setBtnText("Enable Dark Mode")
    //     }
    // }
    return (
        <div className="container">
            <h1 className="my-5" style={{color: props.mode === 'dark'?'white':'#288ad8'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze your text</strong>
                    </button>
                    </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or manipulate word in whatever way you want.
                    </div>
                </div>
            </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character count tool that provide instant character count & word count statistics for a given text. TextUtils report the number of words or characters. Thus suitable for writing text in words/characters limit.
                    </div>
                </div>
            </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software works in any browser such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, books, excel docs, pdf, essays, etc.
                    </div>
                </div>
            </div>
            </div>
            {/* <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-dark">{btnText}</button>
            </div> */}
        </div>
    )
}

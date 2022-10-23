import React from 'react';

function PageTitle(props) {
    let {title, subtitle} = props
    return (
        <section className="page-title" style={{backgroundImage: "url(assets/images/background/page-title.jpg)"}}>
            <div className="pattern-layer" style={{backgroundImage: "url(assets/images/shape/pattern-35.png)"}}></div>
            <div className="auto-container">
                <div className="content-box">
                    <div className="title-box centred">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PageTitle;

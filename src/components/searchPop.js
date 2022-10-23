import React from 'react';

function SearchPop() {
    return (
        <div id="search-popup" className="search-popup">
            <div className="close-search"><i className="flaticon-close"></i></div>
            <div className="popup-inner">
                <div className="overlay-layer"></div>
                <div className="search-form">
                    <form method="post" action="http://st.ourhtmldemo.com/new/Eazyrecruitz/index.html">
                        <div className="form-group">
                            <fieldset>
                                <input onChange={()=>alert()} type="search" className="form-control" name="search-input" value=""
                                       placeholder="Search Here" required/>
                                <input onChange={()=>alert()}  type="submit" value="Search Now!" className="theme-btn style-four"/>
                            </fieldset>
                        </div>
                    </form>
                    <h3>Recent Search Keywords</h3>
                    <ul className="recent-searches">
                        <li><a href="index-2.html">Finance</a></li>
                        <li><a href="index-2.html">Idea</a></li>
                        <li><a href="index-2.html">Service</a></li>
                        <li><a href="index-2.html">Growth</a></li>
                        <li><a href="index-2.html">Plan</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SearchPop;

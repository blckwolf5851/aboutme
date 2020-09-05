import React, { useRef, useEffect } from 'react';

const { tableau } = window;

function TableauEmb() {
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/bookRecommender/Sheet1?:language=en-GB&:display_count=y&publish=yes&:origin=viz_share_link";
    function initViz() {
        var viz = new tableau.Viz(ref.current, url);
    }
    useEffect(() => {
        initViz();
    }, [])
    return (
        <section id="portfolio">
            <div className='row'>
                <h1>Check Out Some of My Works. (Titles are hyperlinked)</h1>
                <div className='nine columns main-col'>
                    <a href="https://github.com/blckwolf5851/BookRecommendation"><h2>Book Embedding Project</h2></a>
                    <p>An content similarity and rating similarity approach to book recommendation. This project used contrastive learning on content similarity to map book into vector space. The closer the book is in the shown embedding space, the more similar they are to each other. (Hover your mouse onto data points to see book ISBN and titles.</p>
                    <div ref={ref}>
                    </div>
                    <a href="https://github.com/blckwolf5851/Sketch2Painting"><h2>Sketch2Paint Project</h2></a>
                    <p>A project that takes sketches as input, and generate a black and white painting.</p>
                    <img src="images/sketch2paint_demo.jpg" alt="Sketch2Paint Demo" />

                    <a href='https://openreview.net/forum?id=H27oOePp_K'><h2>NLP Research Reproduction</h2></a>
                    <p>Reproduced the paper: "Are 16 heads really better than one?” - A research in the field of NLP that studies prunning of BERT's attention heads, and whether it has an effect on efficiency and accuracy.</p>
                    <a href='https://github.com/blckwolf5851/gesture_classification'><h2>Gesture Classification Project</h2></a>
                    <p>Predict 6 hand gestures from EMG signals (8 channels) using Bi-LSTM, achieving an accuracy of 91%</p>
                </div>
            </div>
        </section>
    );
}



export default TableauEmb;
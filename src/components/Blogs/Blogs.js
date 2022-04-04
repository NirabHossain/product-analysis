import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className="container ">
                <h4 className='mt-5'>What is context api? Why is it necessary?</h4>
                <p className='mt-3'>
                    Context API is a feature which allows us to share state across the entire project very easily.<br />
                    Without context-api, passing the information using state from one component to another is too complicated. We need to pass these to parent after parent and so on from the lower end. And from the upper end, the states are passed from child to child. And passing the information of props in this way is called <strong>Props Drilling</strong>. To avoid this, react introduced the <strong>Context API</strong> with which we can easily pass any information using the <strong>.Provider</strong> argument which can be accessible from any component at instance.
                </p>

            </div>

            <div className="container">
                <h4 className='mt-5'>What is semantic tag?</h4>
                <p className='mt-3'>
                    A semantic element clearly describes its meaning to both the browser and the developer.<br />

                    An important principle in web design is the idea of using HTML elements to indicate what they actually are, rather than how they may appear in the browser by default. This is known as using semantic HTML.

                    For example, if we write <code>table, article</code> commands in html, we can easily understand that, it will show a table, that's why it's a semantic tag. But using <code>div, span</code>, these means nothing to the developer but it has well defined meaning in browser, that's why they are non-semantic.
                </p>
            </div>

            <div className="container">
                <h4 className='mt-5'>What are the difference between inline, block and inline-block elements?</h4>
                <p className='mt-3'>
                    An inline element does not start on a new line. An inline element only takes up as much width as necessary. For example, <code>span</code> is an inline element.

                    A block-level element always starts on a new line, and the browsers fill the whole space right and left to it. The block elements always take the full width available. Another inline or block element can not be placed right or left to it.

                    For example, <code>p, div</code> are the block elements.

                    Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. It is to be declared as display: inline-block in CSS code. Otherwise it will behave like it's original system.
                </p>
            </div>


        </div>
    );
};

export default Blogs;
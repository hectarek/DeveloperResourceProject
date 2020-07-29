import React from 'react';

 export default function Modal () {
    return (
        <div>
            <div className="modal" tabindex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Thanks for Your Interest!</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Thank you for taking the time and effort to support this project. I know many things are going on at work and in the world. I appreciate and thank you for taking the time for this.</p>
                            <p>The purpose of this project is to provide a curated list of resources for developers to use personally and professionally. There have been so many different resources we have used in class to learn various languages and concepts, and I want to get those all together into one list that is well organized and useable.</p>
                            <p>What I want from you is to think about some of those great resources you have found, and share a link to it with a few details. Submit the form, and I will slowly update the current list of resources. I also appreciate any feedback on how to organize or categorize the resources better.</p>
                            <p>I hope to have something done by the end of the program that we can all take to our jobs and have the ultimate resource to make learning new concepts simple or brushing up on languages easy.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary btn-one" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
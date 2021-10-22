import React from 'react'
import './Main.css'

export default function Main() {
    return (
        <main>
            <div className="wrapper">
                <div className="image"></div>
                <div className="content">
                    <h1>FAQ</h1>
                    <div className="accord">
                    <button className="accordion">How many team members can I invite?</button>
                    <div className="panel">
                        <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
                    </div>

                    <button className="accordion">What is the maximum file upload size?</button>
                    <div className="panel">
                        <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                    </div>

                    <button className="accordion">How do I reset my password?</button>
                    <div className="panel">
                        <p>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
                    </div>

                    <button className="accordion">Can I cancel my subscription?</button>
                    <div className="panel">
                        <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
                    </div>

                    <button className="accordion">Do you provide additional support?</button>
                    <div className="panel">
                        <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                    </div>
                    </div>
                </div> 
            </div>            
        </main>
    )
}

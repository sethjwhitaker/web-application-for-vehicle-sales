import React, { Component } from 'react';

class Success extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center">Thank you for your order!</h2>
                <h3 className="text-center">
                    You're order is now being processed and we will update you once it is complete.
                </h3>
            </div>
        )
    }
}
export default Success;
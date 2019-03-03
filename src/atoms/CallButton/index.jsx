import React from 'react';
import './styles.css';

const CallButton = (props) => (
    <div className="btn btn-success text-white rounded-pill linkFix">
        <a className="phoneNumber" href="tel:+7 (800) 555 35 35">+7 (800) 555 35 35</a>
        <i class="fas fa-phone"></i>
    </div>

)
export default CallButton;
import { useState } from 'react';

const useAlert = () => {
    const [alertState, setAlertState] = useState({
        show: false,
        text: '',
        type: 'danger',
    });

    const showAlert = ({ text, type = 'danger' }) => {
        setAlertState((prevState) => ({ ...prevState, show: true, text, type }));
    };

    const hideAlert = () => {
        setAlertState({ show: false, text: '', type: 'danger' });
    };

    // Return only the necessary state and functions
    return { alert: alertState, showAlert, hideAlert };
};

export default useAlert;

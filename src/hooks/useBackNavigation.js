import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useGoBack = (fallback = '/') => {
    const navigate = useNavigate();
    const location = useLocation();

    return useCallback(() => {
        const canGoBack = location.state?.canGoBack;

        if (canGoBack || window.history.length > 1) {
            navigate(-1);
        } else {
            navigate(fallback, { replace: true });
        }
    }, [location, fallback, navigate]);
};

export default useGoBack;

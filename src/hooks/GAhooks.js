import ReactGA from 'react-ga';

ReactGA.initialize('UA-192616362-1');

export const useGAPageViewHook = (pathname) => {
    return ReactGA.pageview(pathname);
};


export const useGAEventTracker = (category = "Category") => {
    const trackEvent = (action = "action", label = "label") => {
        ReactGA.event({
            category,
            action,
            label,
        });
    };

    return trackEvent;
};

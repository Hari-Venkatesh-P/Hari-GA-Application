import ReactGA from 'react-ga';

ReactGA.initialize('UA-192616362-1');

export const useGAPageViewHook = (pathname) => {
    return ReactGA.pageview(pathname);
};


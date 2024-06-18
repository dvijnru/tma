export function usePlatform() {
    let ua = navigator.userAgent || navigator.vendor || window.opera;
    ua = ua.toLowerCase();
    const isApple = checkAppleOS(ua);
    return isApple ? 'ios' : 'android';
}

function checkAppleOS(ua) {
    const ios = /ipad|iphone|ipod/.test(ua);
    const macOS = ua.includes('mac os');
    if (macOS || ios) {
        return true;
    }
    return false;
}

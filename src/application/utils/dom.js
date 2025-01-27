/**
 * Injects a script tag into the DOM, keeps a map in memory
 * to prevent a script from being injected twice in the page.
 * @type {function({src: *, attributes: *}): Promise<Event>}
 */

export const injectScript = (({document}) => {
    const ScriptsInjected = {};
    return ({src, attributes}) => {
        return new Promise((resolve, reject) => {
            const alreadyInjected = ScriptsInjected[src];
            if (alreadyInjected) {
                resolve(alreadyInjected);
            } else {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = src;
                if (attributes) {
                    Object.keys(attributes).forEach(key => {
                        script[key] = attributes[key];
                    });
                }
                script.onload = event => {
                    ScriptsInjected[src] = event;
                    resolve(event);
                };
                script.onerror = reject;
                const [head] = document.getElementsByTagName('head');
                head.appendChild(script);
            }
        });
    };

})(window);

class GoogleOptimize {
    version = '1.0.0'
    headScript: HTMLScriptElement | null = null
    /**
     * @param {string} source
     * @param {Object} attributes to extend the script tag.
     * Do not add async as an attribute, as this is dynamically added by browsers.
     */
    getScriptTag(source: string, attributes: object = {}) {

        const scriptTag = document.createElement('script')
        scriptTag.setAttribute('src', source)

        for (const [attributeName, attributeValue] of Object.entries(attributes)) {
            scriptTag.setAttribute(attributeName, String(attributeValue))
        }

        return scriptTag
    }

    addScriptWithCustomContainer(optimizeContainerID: string){
        this.addHeadScript(`https://www.googleoptimize.com/optimize.js?id=${optimizeContainerID}`)
    }

    removeHeadScript() {
        if (this.headScript !== null && document.head.contains(this.headScript)) {
            this.headScript.remove()
        }
    }

    addHeadScript(source: string, attributes: object = {}) {
        this.headScript = this.getScriptTag(source, attributes);
        document.head.appendChild(this.headScript);
    }
    
    activateEvent(eventName: string  = 'optimize.activate', options: Object) {
        // @ts-ignore
        window.dataLayer = window.dataLayer || [];
        // @ts-ignore
        if (window.dataLayer) {
            // @ts-ignore
            window.dataLayer.push({'event': eventName});
        }
    }
}


export const googleOptimize = new GoogleOptimize()

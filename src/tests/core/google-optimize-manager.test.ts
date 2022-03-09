/**
 * @jest-environment jsdom
 */
import {googleOptimize} from "../../core/google-optimize-manager"
import {DocumentWindow} from "../../core/document-window"

const TAG_URL = 'https://www.googleoptimize.com/optimize.js?id=EXAMPLE_ID'

let window: DocumentWindow

describe('Google Optimize Manager Tests', () => {

    afterEach(() => {
        document.getElementsByTagName('html')[0].innerHTML = ''
    })

    it('Can Generate Script Tag', () => {

        const scriptTag = googleOptimize.getScriptTag(TAG_URL)

        expect(scriptTag.src).toBe(TAG_URL)
    })

    it('Can Remove Head Script Tag', () => {

        googleOptimize.addHeadScript(TAG_URL)

        const scripts = document.getElementsByTagName("script")

        googleOptimize.removeHeadScript()

        expect(scripts.length).toBe(0)
    })

    it('Can Generate Head Script Tag', () => {

        googleOptimize.addHeadScript(TAG_URL)

        const scripts = document.getElementsByTagName("script")

        expect(scripts.length).toBe(1)
        expect(document.head.childNodes.length).toBe(1)
    })
    
    it('Cannot Add an event without Google Optimized called before', () => {
       expect(() => googleOptimize.activateEvent()).toThrowError("You must call useGoogleOptimize hook before this hook.")
    })
    
    it('Can call `optimize.activate` event', () => {
        googleOptimize.addHeadScript(TAG_URL)
        googleOptimize.activateEvent() // this call optimize.activate by default

        expect(window.dataLayer).toEqual(
            expect.arrayContaining([{'event': 'optimize.activate'}])
        )
    })
    
    it('Can call any event', () => {
        const eventName = 'custom.event'
        googleOptimize.addHeadScript(TAG_URL)
        googleOptimize.activateEvent(eventName)

        expect(window.dataLayer).toEqual(
            expect.arrayContaining([{'event': eventName}])
        )
    })
})


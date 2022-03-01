/**
 * @jest-environment jsdom
 */
import {googleOptimize} from "../../core/google-optimize-manager"

const TAG_URL = 'https://www.googleoptimize.com/optimize.js?id=EXAMPLE_ID'

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
})


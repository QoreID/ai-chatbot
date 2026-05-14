/**
 * This is the main entry point for the AI Chatbot JavaScript package. It exports the necessary functions and classes to interact with the AI chatbot API.
 * The package is built using Vite and includes optimizations for production use, such as minification and removal of console logs.
 *
 * The exported functions and classes can be used to create and manage chatbot instances, send messages, and handle responses from the AI chatbot API.
 *
 * The package is designed to be easy to integrate into any JavaScript project, allowing developers to quickly add AI chatbot functionality to their applications.
 *
 * For more information on how to use the package, please refer to the documentation and examples provided in the repository.
 */
/**
 * AiChatbot wrapper class that manages loading the SDK and initializing the chatbot.
 * Provides a simple interface for integrating the AI chatbot into any JavaScript application.
 */
export class AiChatbot {
    constructor() {
        this.sdkInstance = null;
        this.defaultUrl = 'https://web-widget.verifyme.ng/chatbot/latest/chatbot.iife.js';
    }
    /**
     * Gets or creates a singleton instance of the AiChatbot wrapper.
     */
    static getInstance() {
        if (!AiChatbot.instance) {
            AiChatbot.instance = new AiChatbot();
        }
        return AiChatbot.instance;
    }
    /**
     * Initializes the AI chatbot by loading the SDK script and calling the underlying init method.
     * @param config - The initialization configuration for the chatbot
     * @param url - Optional URL to load the chatbot SDK from. Defaults to the production CDN URL.
     */
    async init(config, url) {
        const sdkUrl = url || this.defaultUrl;
        this.sdkInstance = await this.loadSDK(sdkUrl);
        this.sdkInstance.init(config);
    }
    /**
     * Sets the active context for the chatbot.
     * @param key - The context key to set as active
     */
    setActiveContext(key) {
        if (!this.sdkInstance) {
            throw new Error('Chatbot SDK not initialized. Call init() first.');
        }
        this.sdkInstance.setActiveContext(key);
    }
    /**
     * Gets the context for a given key or the current active context.
     * @param key - Optional context key. If omitted, returns the current active context.
     */
    getContext(key) {
        if (!this.sdkInstance) {
            throw new Error('Chatbot SDK not initialized. Call init() first.');
        }
        return this.sdkInstance.getContext(key);
    }
    /**
     * Loads the chatbot SDK from the specified URL.
     * @param url - The URL of the chatbot SDK script
     * @returns A promise that resolves to the chatbot SDK instance
     */
    loadSDK(url) {
        return new Promise((resolve, reject) => {
            // Check if already loaded
            if (window.AiChatbot) {
                resolve(window.AiChatbot);
                return;
            }
            // Load the script
            this.loadScript(url).then(() => {
                // Wait for the SDK to be available
                const checkLoaded = () => {
                    if (window.AiChatbot) {
                        resolve(window.AiChatbot);
                    }
                    else {
                        setTimeout(checkLoaded, 100);
                    }
                };
                checkLoaded();
                // Timeout after 10 seconds
                setTimeout(() => reject(new Error('Chatbot SDK failed to load')), 10000);
            }).catch(reject);
        });
    }
    /**
     * Loads a script from the given URL.
     * @param url - The URL of the script to load
     * @returns A promise that resolves when the script is loaded
     */
    loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Failed to load chatbot SDK from ${url}`));
            document.head.appendChild(script);
        });
    }
}
export default AiChatbot.getInstance();

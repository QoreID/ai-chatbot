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
interface UIConfig {
    /**
     *  @type string
     *  @example
     *  // SVG without the height and width attributes.
     *  logoUrl: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.48 4h4l.5.5v2.03h.52l.5.5V8l-.5.5h-.52v3l-.5.5H9.36l-2.5 2.76L6 14.4V12H3.5l-.5-.64V8.5h-.5L2 8v-.97l.5-.5H3V4.36L3.53 4h4V2.86A1 1 0 0 1 7 2a1 1 0 0 1 2 0 1 1 0 0 1-.52.83V4zM12 8V5H4v5.86l2.5.14H7v2.19l1.8-2.04.35-.15H12V8zm-2.12.51a2.71 2.71 0 0 1-1.37.74v-.01a2.71 2.71 0 0 1-2.42-.74l-.7.71c.34.34.745.608 1.19.79.45.188.932.286 1.42.29a3.7 3.7 0 0 0 2.58-1.07l-.7-.71zM6.49 6.5h-1v1h1v-1zm3 0h1v1h-1v-1z"/></svg>`
     *
     *  // OR
     *  logoUrl: "https://your-logo.png"
     */
    logoUrl?: string;
    colors?: {
        primary?: string;
        background?: string;
        border?: string;
        shadow?: string;
        logoBg?: string;
    };
}
export interface InitAiChatbot {
    botName: string;
    projectId: string;
    suggestions?: string[] | Record<string, string[]>;
    customGreeting?: string;
    delayBeforeGreeting?: string;
    uiConfig: UIConfig;
}
export interface IAiChatbotSDK {
    init(config: InitAiChatbot): void;
    setActiveContext(key: string): void;
    getContext(key?: string): any;
}
declare global {
    interface Window {
        AiChatbot?: IAiChatbotSDK;
    }
}
/**
 * AiChatbot wrapper class that manages loading the SDK and initializing the chatbot.
 * Provides a simple interface for integrating the AI chatbot into any JavaScript application.
 */
export declare class AiChatbot {
    private static instance;
    private sdkInstance;
    private defaultUrl;
    private constructor();
    /**
     * Gets or creates a singleton instance of the AiChatbot wrapper.
     */
    static getInstance(): AiChatbot;
    /**
     * Initializes the AI chatbot by loading the SDK script and calling the underlying init method.
     * @param config - The initialization configuration for the chatbot
     * @param url - Optional URL to load the chatbot SDK from. Defaults to the production CDN URL.
     */
    init(config: InitAiChatbot, url?: string): Promise<void>;
    /**
     * Sets the active context for the chatbot.
     * @param key - The context key to set as active
     */
    setActiveContext(key: string): void;
    /**
     * Gets the context for a given key or the current active context.
     * @param key - Optional context key. If omitted, returns the current active context.
     */
    getContext(key?: string): any;
    /**
     * Loads the chatbot SDK from the specified URL.
     * @param url - The URL of the chatbot SDK script
     * @returns A promise that resolves to the chatbot SDK instance
     */
    private loadSDK;
    /**
     * Loads a script from the given URL.
     * @param url - The URL of the script to load
     * @returns A promise that resolves when the script is loaded
     */
    private loadScript;
}
declare const _default: AiChatbot;
export default _default;

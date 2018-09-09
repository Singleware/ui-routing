import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Router template class.
 */
export declare class Template extends Control.Component<Properties> {
    /**
     * Router states.
     */
    private states;
    /**
     * Router manager.
     */
    private router;
    /**
     * Router skeleton.
     */
    private skeleton;
    /**
     * Route match event handler.
     * @param route Route element.
     */
    private matchHandler;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Assign all element properties.
     */
    private assignProperties;
    /**
     * Register all specified routes.
     * @param routes List of routes.
     */
    private registerRoutes;
    /**
     * Default constructor.
     * @param properties Router properties.
     * @param children Router children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Current opened path.
     */
    readonly path: string;
    /**
     * Router base path.
     */
    readonly base: string;
    /**
     * Router element.
     */
    readonly element: Element;
    /**
     * Opens the specified path.
     * @param path Path to be opened.
     */
    open(path: string): Promise<void>;
    /**
     * Resets the current opened route.
     */
    reset(): Promise<void>;
}

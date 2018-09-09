import * as Routing from '@singleware/routing';
import * as Control from '@singleware/ui-control';
import { Properties } from './properties';
import { Element } from './element';
/**
 * Route template class.
 */
export declare class Template extends Control.Component<Properties> {
    /**
     * Router skeleton.
     */
    private skeleton;
    /**
     * Bind exposed properties to the custom element.
     */
    private bindProperties;
    /**
     * Default constructor.
     * @param properties Route properties.
     * @param children Route children.
     */
    constructor(properties?: Properties, children?: any[]);
    /**
     * Determines whether this route mus be exact or not.
     */
    readonly exact: boolean;
    /**
     * Route path.
     */
    readonly path: string;
    /**
     * Route constraint.
     */
    readonly constraint: Routing.Constraint;
    /**
     * Route element.
     */
    readonly element: Element;
}

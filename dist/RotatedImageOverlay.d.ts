import { ImageOverlay, type ImageOverlayOptions, type LatLngExpression } from "leaflet";
import 'leaflet-imageoverlay-rotated';
export interface RotatedImageOverlayProps {
    imgSrc: string | HTMLImageElement | HTMLCanvasElement;
    topleft: LatLngExpression;
    topright: LatLngExpression;
    bottomleft: LatLngExpression;
    options?: ImageOverlayOptions;
}
export interface RotatedImageOverlayHandle {
    getOverlay: () => ImageOverlay.Rotated | null;
}
declare const RotatedImageOverlay: import("react").ForwardRefExoticComponent<RotatedImageOverlayProps & import("react").RefAttributes<RotatedImageOverlayHandle>>;
export default RotatedImageOverlay;

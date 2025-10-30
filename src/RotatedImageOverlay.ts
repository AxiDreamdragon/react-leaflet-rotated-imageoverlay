import { ImageOverlay, type ImageOverlayOptions, type LatLngExpression } from "leaflet";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import L from 'leaflet';
import { useMap } from "react-leaflet";
import 'leaflet-imageoverlay-rotated';

export interface RotatedImageOverlayProps {
	imgSrc: string | HTMLImageElement | HTMLCanvasElement,
	topleft: LatLngExpression,
	topright: LatLngExpression,
	bottomleft: LatLngExpression,
	options?: ImageOverlayOptions
}

export interface RotatedImageOverlayHandle {
	getOverlay: () => ImageOverlay.Rotated | null
}

const RotatedImageOverlay = forwardRef<RotatedImageOverlayHandle, RotatedImageOverlayProps>(
	function RotatedImageOverlay({ imgSrc, topleft, topright, bottomleft, options }, ref) {
		const map = useMap();
		const overlayRef = useRef<ImageOverlay.Rotated>(null);

		useEffect(() => {
			const overlay: ImageOverlay.Rotated = (L as any).imageOverlay.rotated(
				imgSrc,
				topleft,
				topright,
				bottomleft,
				options
			);

			overlay.addTo(map);
			overlayRef.current = overlay;

			return () => {
				map.removeLayer(overlay);
				overlayRef.current = null;
			}
		}, [map, imgSrc, topleft, topright, bottomleft, options]);

		useImperativeHandle(ref, () => ({
			getOverlay: () => overlayRef.current
		}))

		return null;
	}
);

export default RotatedImageOverlay;
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import L from 'leaflet';
import { useMap } from "react-leaflet";
import 'leaflet-imageoverlay-rotated';
const RotatedImageOverlay = forwardRef(function RotatedImageOverlay({ imgSrc, topleft, topright, bottomleft, options }, ref) {
    const map = useMap();
    const overlayRef = useRef(null);
    useEffect(() => {
        const overlay = L.imageOverlay.rotated(imgSrc, topleft, topright, bottomleft, options);
        overlay.addTo(map);
        overlayRef.current = overlay;
        return () => {
            map.removeLayer(overlay);
            overlayRef.current = null;
        };
    }, [map, imgSrc, topleft, topright, bottomleft, options]);
    useImperativeHandle(ref, () => ({
        getOverlay: () => overlayRef.current
    }));
    return null;
});
export default RotatedImageOverlay;

# react-leaflet-rotated-imageoverlay

This is a React wrapper for [leaflet-imageoverlay-rotated](https://github.com/IvanSanchez/Leaflet.ImageOverlay.Rotated), alongside its typings.

## Installation

```bash
npm install react-leaflet-rotated-imageoverlay
```

## Usage

The component accepts the same parameters as [leaflet-imageoverlay-rotated](https://github.com/IvanSanchez/Leaflet.ImageOverlay.Rotated), just as props.

A ref/handle is also supported to access the underlying Leaflet element with `getOverlay()`.

```jsx
<RotatedImageOverlay
	topleft={new LatLng(40.52256691873593, -3.7743186950683594)}
	topright={new LatLng(40.5210255066156, -3.7734764814376835)}
    bottomleft={new LatLng(40.52180437272552, -3.7768453359603886)}
    imgSrc={palacioDeElPardoImage}
	ref={rotatedImageOverlayRef}
    options={{
        opacity: .8,
        interactive: true,
        attribution: "Historical building plan &copy; <a href='http://www.ign.es'>Instituto Geográfico Nacional de España</a>"
	}}
/>
```

## Source Code

The source code is available on [GitHub](https://github.com/AxiDreamdragon/react-leaflet-rotated-imageoverlay).
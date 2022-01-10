export const config = {
  automaticRearrangeAfterDropNode: true,
  collapsible: true,
  directed: false,
  focusAnimationDuration: 0.75,
  focusZoom: 1,
  freezeAllDragEvents: false,
  highlightDegree: 2,
  highlightOpacity: 0.2,
  linkHighlightBehavior: true,
  maxZoom: 12,
  minZoom: 0.05,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: false,
  staticGraphWithDragAndDrop: false,
  d3: {
    alphaTarget: 0.05,
    gravity: -100,
    linkLength: 60,
    linkStrength: 2,
    disableLinkForce: false,
  },
  node: {
    color: '#C5CAE9',
    fontColor: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    highlightColor: '#2962FF',
    highlightFontSize: 10,
    highlightFontWeight: 'bold',
    highlightStrokeColor: '#2962FF',
    highlightStrokeWidth: 1.5,
    mouseCursor: 'crosshair',
    opacity: 0.9,
    renderLabel: true,
    size: 200,
    strokeColor: 'none',
    strokeWidth: 1.5,
    svg: '',
    symbolType: 'circle',
  },
  link: {
    color: '#C5CAE9',
    fontColor: 'black',
    fontSize: 8,
    fontWeight: 'normal',
    highlightColor: '#2962FF',
    highlightFontSize: 8,
    highlightFontWeight: 'normal',
    mouseCursor: 'pointer',
    opacity: 1,
    renderLabel: false,
    semanticStrokeWidth: true,
    strokeWidth: 3,
    markerHeight: 6,
    markerWidth: 6,
    strokeDasharray: 0,
    strokeDashoffset: 0,
    strokeLinecap: 'butt',
  },
};

interface Window {
  tooltipCanvasCtx: CanvasRenderingContext2D
}

declare namespace JSX {
  interface IntrinsicElements {
    [elem: string]: unknown;
  }

  interface IntrinsicAttributes {
    /**
     * customId directive
     */
    [elem: string]: unknown;
  }
}

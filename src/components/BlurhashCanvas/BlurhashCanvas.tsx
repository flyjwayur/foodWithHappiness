import React from 'react';
import { decode } from 'blurhash';

export type Props = React.CanvasHTMLAttributes<HTMLCanvasElement> & {
  hash: string;
  height?: number;
  punch?: number;
  width?: number;
};

export default class BlurhashCanvas extends React.PureComponent<Props> {
  static defaultProps = {
    height: 128,
    width: 128
  };

  canvas: HTMLCanvasElement | null = null;

  componentDidUpdate() {
    this.draw();
  }

  handleRef = (canvas: HTMLCanvasElement) => {
    try {
      this.canvas = canvas;
      if (!canvas) {
        console.log('Canvas is null');
        return;
      }
      if (!canvas.getContext) {
        console.log('Canvas.getContext is null');
        return;
      }

      const ctx = this.canvas.getContext('2d');
      if (!ctx) {
        console.log('Failed in getting context from ctx');
        return;
      }
      this.draw();
    } catch (error) {
      console.log('error while handling ref');
    }
  };

  draw = () => {
    const { hash, height, punch, width } = this.props;

    const nullSafeWidth = width || 100;
    const nullSafeHeight = height || 100;

    if (this.canvas) {
      const pixels = decode(hash, nullSafeWidth, nullSafeHeight, punch);

      const ctx = this.canvas.getContext('2d');

      if (!ctx) {
        console.log('Failed in getting context from ctx');
        return;
      }

      const imageData = ctx.createImageData(nullSafeWidth, nullSafeHeight);
      imageData.data.set(pixels);
      ctx.putImageData(imageData, 0, 0);
    }
  };

  render() {
    const { hash, height, width, ...rest } = this.props;

    return <canvas {...rest} height={height} width={width} ref={this.handleRef} />;
  }
}

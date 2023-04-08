import Image from 'next/image'
import styled from 'styled-components'

type GearImageProps = {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

const GearImage = styled(Image)<GearImageProps>`
  position: absolute;
  opacity: 0.5;
  z-index: 1;
  top: ${(props) =>
    props.top !== undefined ? String(props.top) + 'px' : 'auto'};
  right: ${(props) =>
    props.right !== undefined ? String(props.right) + 'px' : 'auto'};
  bottom: ${(props) =>
    props.bottom !== undefined ? String(props.bottom) + 'px' : 'auto'};
  left: ${(props) =>
    props.left !== undefined ? String(props.left) + 'px' : 'auto'};

  animation: rotation infinite 30s linear;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`

type GearProps = GearImageProps & {
  src: string
  width: number
  height: number
}

const Gear = ({ src, width, height, ...props }: GearProps) => {
  return <GearImage src={src} width={width} height={height} alt="" {...props} loading='eager' quality={10} />
}

export default Gear

import Image from 'next/image';
import { useDeviceType } from '@/hooks/useDeviceType';

interface ResponsiveBackgroundImageProps {
  mobileImage: string;
  tabletImage?: string;
  desktopImage: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const ResponsiveBackgroundImage = ({
  mobileImage,
  tabletImage,
  desktopImage,
  alt,
  className = 'w-full h-full object-cover absolute inset-0 z-0',
  width = 1000,
  height = 1000,
  priority = false,
}: ResponsiveBackgroundImageProps) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  // Determine which image to use based on device type
  const getImageSrc = () => {
    if (isMobile) return mobileImage;
    if (isTablet && tabletImage) return tabletImage;
    if (isTablet && !tabletImage) return mobileImage; // Fallback to mobile for tablet if no tablet image
    return desktopImage;
  };

  return (
    <Image 
      src={getImageSrc()} 
      alt={alt} 
      className={className}
      width={width} 
      height={height}
      priority={priority}
    />
  );
}; 
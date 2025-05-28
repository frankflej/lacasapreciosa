import Image from 'next/image';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useState, useEffect } from 'react';

interface ResponsiveBackgroundImageProps {
  mobileImage: string | string[];
  tabletImage?: string | string[];
  desktopImage: string | string[];
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  slideInterval?: number; // Time in milliseconds between slides
  enableSlideshow?: boolean; // Whether to enable slideshow functionality
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
  slideInterval = 50000, // Default 12 seconds
  enableSlideshow = false,
}: ResponsiveBackgroundImageProps) => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Get the appropriate image array based on device type
  const getImageArray = () => {
    if (isMobile) {
      return Array.isArray(mobileImage) ? mobileImage : [mobileImage];
    }
    if (isTablet && tabletImage) {
      return Array.isArray(tabletImage) ? tabletImage : [tabletImage];
    }
    if (isTablet && !tabletImage) {
      return Array.isArray(mobileImage) ? mobileImage : [mobileImage];
    }
    return Array.isArray(desktopImage) ? desktopImage : [desktopImage];
  };

  const imageArray = getImageArray();

  // Slideshow effect
  useEffect(() => {
    if (!enableSlideshow || imageArray.length <= 1) return;

    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // Change image after fade out completes, then fade in
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % imageArray.length
        );
        setIsVisible(true);
      }, 30000); // 3 seconds for fade out, then fade in
    }, slideInterval);

    return () => clearInterval(interval);
  }, [enableSlideshow, imageArray.length, slideInterval]);

  // Reset index when device type changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsVisible(true);
  }, [isMobile, isTablet, isDesktop]);

  const currentImageSrc = imageArray[currentImageIndex];

  return (
    <Image 
      key={`${currentImageSrc}-${currentImageIndex}`}
      src={currentImageSrc} 
      alt={`${alt} ${currentImageIndex + 1}`} 
      className={`${className} transition-opacity duration-[3000ms] ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-95'
      }`}
      width={width} 
      height={height}
      priority={priority}
    />
  );
}; 
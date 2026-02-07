import React from 'react';
import { renderIconSafeHelper, FallbackIconSVG } from './iconUtils';

/**
 * Safe Icon Component wrapper
 * Use this component to render icons safely throughout the app
 * Handles missing icons, invalid components, and rendering errors
 */
const SafeIcon = React.memo(
  ({
    Icon,
    iconName = 'Icon',
    className = '',
    fallback = null,
    onError = null,
  }) => {
    try {
      if (!Icon) {
        const error = new Error(`Icon "${iconName}" is undefined`);
        if (onError) onError(error);
        return fallback || <FallbackIconSVG className={className} />;
      }

      if (typeof Icon !== 'function' && typeof Icon !== 'object') {
        const error = new Error(`Icon "${iconName}" is not a valid component`);
        if (onError) onError(error);
        return fallback || <FallbackIconSVG className={className} />;
      }

      return <Icon className={className} />;
    } catch (error) {
      console.error(`[SafeIcon] Error rendering "${iconName}":`, error);
      if (onError) onError(error);
      return fallback || <FallbackIconSVG className={className} />;
    }
  }
);

SafeIcon.displayName = 'SafeIcon';

export default SafeIcon;

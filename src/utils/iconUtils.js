import React from 'react';

/**
 * Safe Icon Utilities - Pure functions for icon rendering
 * Separated from component for Fast Refresh compatibility
 */

/**
 * Fallback icon SVG component
 */
export const FallbackIconSVG = ({ className = '' }) => {
  return React.createElement(
    'svg',
    {
      className,
      fill: 'currentColor',
      viewBox: '0 0 24 24',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    React.createElement('circle', { cx: '12', cy: '12', r: '1' }),
    React.createElement('circle', { cx: '19', cy: '12', r: '1' }),
    React.createElement('circle', { cx: '5', cy: '12', r: '1' })
  );
};

/**
 * Validate if IconComponent is a valid React component
 * @param {any} IconComponent - Component to validate
 * @returns {boolean}
 */
export const isValidIconComponent = (IconComponent) => {
  return (
    IconComponent &&
    (typeof IconComponent === 'function' ||
      (typeof IconComponent === 'object' && IconComponent.render))
  );
};

/**
 * Render icon safely with error handling
 * Returns either the icon or fallback SVG
 * @param {React.ComponentType} IconComponent - React icon component to render
 * @param {string} iconName - Name of icon for error reporting
 * @param {string} className - CSS classes to apply
 * @param {React.ReactElement} fallback - Custom fallback element
 * @returns {React.ReactElement}
 */
export const renderIconSafeHelper = (
  IconComponent,
  iconName = 'Icon',
  className = '',
  fallback = null
) => {
  try {
    if (!isValidIconComponent(IconComponent)) {
      console.warn(
        `[IconWarning] Icon "${iconName}" is not defined or invalid. Using fallback.`
      );
      return fallback || React.createElement(FallbackIconSVG, { className });
    }
    return React.createElement(IconComponent, { className });
  } catch (error) {
    console.error(`[IconError] Failed to render icon "${iconName}":`, error);
    return fallback || React.createElement(FallbackIconSVG, { className });
  }
};

export default {
  FallbackIconSVG,
  isValidIconComponent,
  renderIconSafeHelper,
};

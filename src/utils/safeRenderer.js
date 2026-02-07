/**
 * Safe Component Renderer
 * Wraps component rendering with try-catch to prevent app crashes
 */

/**
 * Safely render any component with fallback
 * @param {React.ComponentType} Component - Component to render
 * @param {object} props - Props to pass to component
 * @param {React.ReactElement} fallback - Fallback UI if component fails
 * @param {string} componentName - Name for error reporting
 * @returns {React.ReactElement}
 */
export const renderComponentSafe = (
  Component,
  props = {},
  fallback = null,
  componentName = 'Unknown Component'
) => {
  try {
    if (!Component) {
      throw new Error(`Component "${componentName}" is not defined`);
    }

    if (typeof Component !== 'function' && typeof Component !== 'object') {
      throw new Error(`"${componentName}" is not a valid React component`);
    }

    return <Component {...props} />;
  } catch (error) {
    console.error(`[ComponentRenderError] Failed to render "${componentName}":`, error);
    return fallback || null;
  }
};

/**
 * Safe async data handler for component props
 * Prevents runtime errors from malformed data
 */
export const safeDataHandler = (data, defaultValue = null) => {
  try {
    if (!data) return defaultValue;
    return data;
  } catch (error) {
    console.error('[SafeDataHandler] Error processing data:', error);
    return defaultValue;
  }
};

/**
 * Safe array mapper with error handling
 * @param {Array} array - Array to map
 * @param {Function} mapFn - Map function
 * @param {any} defaultValue - Default return if mapping fails
 */
export const safeMap = (array, mapFn, defaultValue = []) => {
  try {
    if (!Array.isArray(array)) {
      console.warn('[SafeMap] Expected array, got:', typeof array);
      return defaultValue;
    }

    return array.map((item, index) => {
      try {
        return mapFn(item, index);
      } catch (error) {
        console.error(`[SafeMap] Error mapping item at index ${index}:`, error);
        return null; // Skip this item
      }
    }).filter(item => item !== null);
  } catch (error) {
    console.error('[SafeMap] Error in map function:', error);
    return defaultValue;
  }
};

/**
 * Safe property access with deep path support
 * @param {object} obj - Object to access
 * @param {string} path - Dot-separated path (e.g., "user.profile.name")
 * @param {any} defaultValue - Value if path doesn't exist
 */
export const safeGet = (obj, path, defaultValue = undefined) => {
  try {
    if (!obj || typeof obj !== 'object') return defaultValue;

    const keys = path.split('.');
    let current = obj;

    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return defaultValue;
      }
    }

    return current;
  } catch (error) {
    console.error('[SafeGet] Error accessing property:', error);
    return defaultValue;
  }
};

export default {
  renderComponentSafe,
  safeDataHandler,
  safeMap,
  safeGet,
};

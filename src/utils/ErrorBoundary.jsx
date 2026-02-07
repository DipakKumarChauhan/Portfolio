import React from 'react';

/**
 * Error Boundary Component
 * Catches React component errors and displays fallback UI
 * Prevents entire app crash from component-level errors
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorCount: 0,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console for debugging
    console.error('Error caught by ErrorBoundary:', error);
    console.error('Error Info:', errorInfo);

    // Update state with error details
    this.setState(prevState => ({
      error,
      errorInfo,
      errorCount: prevState.errorCount + 1,
    }));

    // Optional: Send error to logging service
    // Uncomment and configure for production error tracking:
    // if (import.meta.env.PROD) {
    //   logErrorToService(error, errorInfo);
    // }
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    const { hasError, error, errorInfo, errorCount } = this.state;
    const { children, fallback, componentName = 'Component' } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return typeof fallback === 'function'
          ? fallback(error, this.handleReset)
          : fallback;
      }

      // Default fallback UI
      return (
        <div
          className="flex flex-col items-center justify-center min-h-[200px] bg-black/50 border border-red-500/30 rounded-lg p-6"
          role="alert"
        >
          <div className="text-red-400 text-sm font-semibold mb-2">
            ⚠️ {componentName} Error
          </div>
          <p className="text-white/60 text-xs text-center mb-3">
            {error?.message || 'An unexpected error occurred'}
          </p>
          {import.meta.env.DEV && (
            <details className="text-white/40 text-xs bg-black/50 p-2 rounded mb-3 w-full max-h-[100px] overflow-auto">
              <summary className="cursor-pointer font-mono text-white/50 mb-1">
                Error Details (Dev Only)
              </summary>
              <pre className="text-[10px] font-mono overflow-auto">
                {errorInfo?.componentStack}
              </pre>
            </details>
          )}
          <button
            onClick={this.handleReset}
            className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white/70 text-xs rounded transition"
          >
            Try Again
          </button>
          {errorCount > 2 && (
            <p className="text-yellow-400/60 text-xs mt-2">
              Multiple errors detected. Please reload the page.
            </p>
          )}
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

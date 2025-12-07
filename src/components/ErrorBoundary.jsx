import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background-dark text-white p-4">
          <div className="bg-background-card p-8 rounded-lg shadow-xl max-w-md w-full border border-red-500/30">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Oops! Something went wrong.</h2>
            <p className="text-slate-300 mb-6">
              We're sorry for the inconvenience. Please try refreshing the page.
            </p>
            <div className="bg-slate-900 p-4 rounded overflow-auto max-h-40 text-sm font-mono text-red-400 mb-6">
              {this.state.error && this.state.error.toString()}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 px-4 bg-red-500 hover:bg-red-600 rounded-lg font-medium transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

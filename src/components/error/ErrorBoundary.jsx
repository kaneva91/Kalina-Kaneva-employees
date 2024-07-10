import { Component } from "react";

import ErrorNotification from "./ErrorNotification";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorNotification />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

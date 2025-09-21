import React from 'react';
import Button from 'react-bootstrap/Button';

class PDFErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el state para mostrar la UI de error
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('PDFErrorBoundary capturó un error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
    // Forzar re-render del componente padre si se proporciona una función
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '30px',
          textAlign: 'center',
          border: '2px dashed #dc3545',
          borderRadius: '8px',
          margin: '20px 0',
          backgroundColor: 'rgba(220, 53, 69, 0.1)',
          color: 'var(--imp-text-color)'
        }}>
          <h5 style={{ color: '#dc3545', marginBottom: '15px' }}>
            ⚠️ Error en el visor de PDF
          </h5>
          <p>
            Hubo un problema al cargar el contenido del PDF.
            <br />
            <small>Esto puede deberse a problemas de conectividad o compatibilidad.</small>
          </p>
          <div style={{ marginTop: '15px' }}>
            <Button 
              variant="outline-primary" 
              size="sm" 
              onClick={this.handleRetry}
              style={{ marginRight: '10px' }}
            >
              🔄 Intentar de nuevo
            </Button>
            <Button 
              variant="outline-secondary" 
              size="sm" 
              onClick={() => window.location.reload()}
            >
              🔄 Recargar página
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default PDFErrorBoundary;
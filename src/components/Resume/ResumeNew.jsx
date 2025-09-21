
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import { useTheme } from "../../hooks/useTheme";
import PDFErrorBoundary from "./PDFErrorBoundary";

// Configuración del worker con fallback completo
let workerEnabled = false;
try {
  // Intentar deshabilitar completamente el worker para evitar errores
  pdfjs.GlobalWorkerOptions.workerSrc = null;
  pdfjs.disableWorker = true;
  console.log("🔧 Worker deshabilitado para mayor estabilidad");
} catch (error) {
  console.warn("Error configurando PDF:", error);
}


function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [documentLoaded, setDocumentLoaded] = useState(false);
  const [pageErrors, setPageErrors] = useState({});
  const [forceReload, setForceReload] = useState(0);
  const { getCurrentPdfFile } = useTheme();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadSuccess = ({ numPages }) => {
    console.log("✅ PDF cargado exitosamente. Páginas:", numPages);
    setNumPages(numPages);
    setDocumentLoaded(true);
    setPageErrors({}); // Limpiar errores previos
  };

  const handleDocumentError = (error) => {
    console.error("❌ Error cargando documento PDF:", error);
    setDocumentLoaded(false);
    setNumPages(null);
  };

  const handlePageError = (pageNumber, error) => {
    console.error(`❌ Error en página ${pageNumber}:`, error);
    setPageErrors(prev => ({
      ...prev,
      [pageNumber]: error
    }));
  };

  const handleForceReload = () => {
    setForceReload(prev => prev + 1);
    setDocumentLoaded(false);
    setNumPages(null);
    setPageErrors({});
  };

  // Función para renderizar una página con manejo de errores
  const renderPage = (pageNumber) => {
    if (pageErrors[pageNumber]) {
      return (
        <div key={`page_${pageNumber}`} style={{
          padding: '20px',
          textAlign: 'center',
          border: '1px dashed #ccc',
          margin: '20px 0',
          color: 'var(--imp-text-color)'
        }}>
          Error cargando página {pageNumber}
          <br />
          <small>Intenta recargar la página</small>
        </div>
      );
    }

    return (
      <PDFErrorBoundary key={`boundary_${pageNumber}`} onRetry={() => {
        // Limpiar error y forzar re-render
        setPageErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[pageNumber];
          return newErrors;
        });
      }}>
        <Page
          key={`page_${pageNumber}`}
          pageNumber={pageNumber}
          scale={width > 786 ? 1.5 : 0.6}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          onLoadError={(err) => handlePageError(pageNumber, err)}
          onLoadSuccess={() => {
            // Limpiar error si la página se carga exitosamente
            if (pageErrors[pageNumber]) {
              setPageErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[pageNumber];
                return newErrors;
              });
            }
          }}
          style={{
            marginBottom: "40px",
          }}
        />
      </PDFErrorBoundary>
    );
  };

  return (
    <div>
      <Container fluid className="resume-section">

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={getCurrentPdfFile()}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <div style={{ maxWidth: "800px", width: "100%" }}>
            <PDFErrorBoundary onRetry={handleForceReload}>
              <Document
                key={`document_${forceReload}`} // Force reload with key change
                file={getCurrentPdfFile()}
                onLoadSuccess={handleLoadSuccess}
                onLoadError={handleDocumentError}
                loading={
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '50px', 
                    color: 'var(--imp-text-color)' 
                  }}>
                    🔄 Cargando PDF... (modo sin worker)
                  </div>
                }
                error={
                  <div style={{ 
                    textAlign: 'center', 
                    padding: '50px', 
                    color: 'red' 
                  }}>
                    ❌ Error al cargar el PDF
                    <br />
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      onClick={handleForceReload}
                      style={{ marginTop: '10px', marginRight: '10px' }}
                    >
                      🔄 Reintentar
                    </Button>
                    <Button 
                      variant="outline-secondary" 
                      size="sm" 
                      onClick={() => window.location.reload()}
                      style={{ marginTop: '10px' }}
                    >
                      🔄 Recargar página
                    </Button>
                  </div>
                }
                options={{
                  // Configuraciones sin worker
                  disableWorker: true,
                  isEvalSupported: false,
                  // Recursos básicos
                  cMapUrl: 'https://unpkg.com/pdfjs-dist@5.3.31/cmaps/',
                  cMapPacked: true,
                  standardFontDataUrl: 'https://unpkg.com/pdfjs-dist@5.3.31/standard_fonts/'
                }}
              >
                {documentLoaded && numPages && Array.from(new Array(numPages), (_, index) => 
                  renderPage(index + 1)
                )}
              </Document>
            </PDFErrorBoundary>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={getCurrentPdfFile()}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

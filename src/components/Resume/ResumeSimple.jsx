import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { AiOutlineDownload } from "react-icons/ai";
import { useTheme } from "../../hooks/useTheme";

function ResumeSimple() {
  const [showIframe, setShowIframe] = useState(true);
  const { getCurrentPdfFile } = useTheme();
  const { t } = useTranslation();

  const toggleView = () => {
    setShowIframe(!showIframe);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
          <div style={{ textAlign: "center" }}>
            <Button
              variant="primary"
              href={getCurrentPdfFile()}
              target="_blank"
              style={{ maxWidth: "250px", marginRight: "10px" }}
            >
              <AiOutlineDownload />
              &nbsp;{t('resume.downloadCV')}
            </Button>
         
          </div>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <div style={{ maxWidth: "900px", width: "100%" }}>
            {showIframe ? (
              // Vista con iframe (más compatible)
              <div style={{ 
                width: "100%", 
                height: "800px", 
                border: "2px solid var(--imp-text-color)",
                borderRadius: "8px",
                overflow: "hidden"
              }}>
                <iframe
                  src={`${getCurrentPdfFile()}#view=FitH`}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                  title="CV Preview"
                  onError={() => {
                    console.error("Error cargando iframe");
                  }}
                />
              </div>
            ) : (
              // Vista alternativa con enlace directo
              <div style={{
                textAlign: "center",
                padding: "60px",
                border: "2px dashed var(--imp-text-color)",
                borderRadius: "8px",
                backgroundColor: "rgba(255,255,255,0.05)"
              }}>
                <h4 style={{ color: "var(--imp-text-color)", marginBottom: "20px" }}>
                  📄 {t('resume.cvTitle')}
                </h4>
                <p style={{ color: "var(--imp-text-color)", marginBottom: "30px" }}>
                  {t('resume.cvDescription')}
                </p>
                <Button
                  variant="primary"
                  href={getCurrentPdfFile()}
                  target="_blank"
                  size="lg"
                >
                  <AiOutlineDownload />
                  &nbsp;{t('resume.viewPdf')}
                </Button>
              </div>
            )}
          </div>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "20px" }}>
          <Button
            variant="primary"
            href={getCurrentPdfFile()}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;{t('resume.downloadCV')}
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeSimple;
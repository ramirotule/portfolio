# Google Analytics Setup - Vercel Deployment

## Archivos de entorno locales:

```
.env                    # Variables base (no commitear)
.env.development        # Variables de desarrollo (opcional commitear)
.env.production         # Variables de producción (opcional commitear)
```

## Variables de entorno requeridas en Vercel:

### Production & Preview:
```
VITE_GA_TRACKING_ID = G-M6N3X257Y9
VITE_NODE_ENV = production
```

## Configuración por entorno:

### Development (.env.development):
- Debug activado
- Site speed sample rate: 100%
- Console logs habilitados

### Production (.env.production):
- Debug desactivado
- Site speed sample rate: 10%
- IP anonimizada (GDPR compliant)

## Pasos para configurar en Vercel:

1. Ve a https://vercel.com/dashboard
2. Selecciona tu proyecto "portfolio"  
3. Ve a **Settings** → **Environment Variables**
4. Agrega las variables:
   - Name: `VITE_GA_TRACKING_ID`
   - Value: `G-M6N3X257Y9`
   - Environments: Production (y Preview si deseas)
   - Name: `VITE_NODE_ENV`
   - Value: `production`
   - Environments: Production
5. Save y redeploy

## Verificación:

Una vez deployado, puedes verificar que funciona:
- Abre la consola del navegador en tu sitio en producción
- Deberías ver: "Google Analytics inicializado con ID: G-M6N3X257Y9 (production)"
- Ve a Google Analytics dashboard para ver datos en tiempo real

## Estructura de archivos:

```
├── .env                     # Variables locales base (gitignore)
├── .env.development         # Variables de desarrollo
├── .env.production          # Variables de producción
├── src/
│   └── utils/
│       └── analytics.js     # Configuración de GA4
└── ANALYTICS_SETUP.md       # Esta documentación
```

## Notas importantes:

- Las variables de Vite deben empezar con `VITE_`
- El GA Tracking ID es público (está en el bundle final)
- Los archivos .env.development y .env.production pueden commitearse
- El archivo .env base debe estar en .gitignore
- Vercel automáticamente usa las variables de entorno correctas por ambiente
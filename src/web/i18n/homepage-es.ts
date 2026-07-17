/**
 * Spanish copy for the marketing homepage.
 * Keys match data-i18n attributes on homepage sections.
 * Values may include trusted HTML (code tags only) when the key ends with Html.
 */
export const HOMEPAGE_ES: Record<string, string> = {
  'util.platform': 'Plataforma Telvri Security',
  'util.call': 'Llamar a Telvri Security',
  'util.region': 'Región',
  'util.regionSelect': 'Seleccionar país o región',
  'util.login': 'Iniciar sesión',

  'nav.platform': 'Plataforma',
  'nav.developers': 'Desarrolladores',
  'nav.docs': 'Docs API',
  'nav.getStarted': 'Empezar',
  'nav.openMenu': 'Abrir menú',
  'nav.closeMenu': 'Cerrar menú',
  'nav.primary': 'Navegación principal',

  'hero.eyebrow': 'Cortafuegos de identidad para el riesgo del número móvil',
  'hero.title1': 'Telvri Security protege la identidad móvil',
  'hero.title2': 'Y cada señal de alto riesgo, de máquina a humano.',
  'hero.lede':
    'Una API de seguridad pensada para desarrolladores que detecta cambios de identidad móvil de alto riesgo antes de la recuperación de acceso, pagos, restablecimientos de cartera y acciones sensibles.',
  'hero.ctaPrimary': 'Empezar',
  'hero.ctaSecondary': 'Contactar ventas',

  'trust.label': 'Diseñado para flujos de identidad de alto riesgo',
  'trust.1': 'Defensa ante toma de cuentas',
  'trust.2': 'Recuperación de carteras',
  'trust.3': 'Protección de pagos',
  'trust.4': 'Confianza en marketplaces',
  'trust.5': 'Controles de inicio de sesión de alto riesgo',

  'platform.eyebrow': 'Plataforma para desarrolladores',
  'platform.title': 'Integra con seguridad en tres pasos.',
  'platform.lede':
    'Llama a un endpoint de riesgo, autentica con claves API y genera SDKs desde el contrato OpenAPI.',
  'platform.tabs': 'Capacidades de la plataforma',
  'platform.tab.endpoint': 'Endpoint de riesgo',
  'platform.tab.auth': 'Auth API',
  'platform.tab.openapi': 'OpenAPI',
  'platform.endpoint.caption': 'Señales de riesgo de red móvil',
  'platform.endpoint.badge': '01 · Endpoint de riesgo',
  'platform.endpoint.title': 'Un solo endpoint de riesgo',
  'platform.endpoint.bodyHtml':
    'Ejecuta comprobaciones SIM-swap con <code>POST /v1/security/sim-check</code> y un payload JSON limpio. El endpoint devuelve una decisión de fraude directa que tu backend puede aplicar antes de recuperación de cuenta, pago o escalado de login.',
  'platform.endpoint.p1': 'Un POST con número de teléfono y ventana max-age',
  'platform.endpoint.p2': 'Decisión clara de permitir, step-up o bloquear en JSON',
  'platform.endpoint.p3': 'Pensado para recuperación, pagos y flujos de login',
  'platform.auth.caption': 'Clave API y autenticación Bearer',
  'platform.auth.badge': '02 · Auth API',
  'platform.auth.title': 'Auth API sencilla',
  'platform.auth.bodyHtml':
    'Usa credenciales <code>X-API-Key</code> o <code>Authorization: Bearer</code>. Las claves siguen el prefijo <code>rt_live_</code> para integrar con un modelo de seguridad familiar.',
  'platform.auth.p1': 'Auth por cabecera, sin ceremonias OAuth',
  'platform.auth.p2': 'Prefijos tipo live para claridad de entorno',
  'platform.auth.p3': 'Rutas protegidas con respuestas 401 estructuradas',
  'platform.openapi.caption': 'Contrato OpenAPI y SDKs',
  'platform.openapi.badge': '03 · OpenAPI',
  'platform.openapi.title': 'Nativo OpenAPI',
  'platform.openapi.bodyHtml':
    'Genera SDKs cliente desde <code>/docs-json</code>, importa la API en Postman y prueba cada endpoint en Swagger UI sin recrear esquemas a mano.',
  'platform.openapi.p1Html': 'Swagger UI en <code>/docs</code> para pruebas en vivo',
  'platform.openapi.p2Html': 'Contrato legible por máquina en <code>/docs-json</code>',
  'platform.openapi.p3': 'Generación de SDK para cualquier lenguaje soportado',

  'builtFor.eyebrow': 'Hecho para lo que estás construyendo',
  'builtFor.segments': 'Segmentos',
  'builtFor.agents': 'Agentes IA',
  'builtFor.tools': 'Herramientas IA',
  'builtFor.b2b': 'B2B',
  'builtFor.b2c': 'B2C',
  'builtFor.fintech': 'Fintech',
  'builtFor.banks': 'Bancos digitales',
  'builtFor.commerce': 'Ecommerce',
  'builtFor.web3': 'Crypto y carteras Web3',
  'builtFor.agents.title': 'Asegura acciones autónomas antes de tocar cuentas reales.',
  'builtFor.agents.body':
    'Controla recuperación, ediciones de perfil y flujos privilegiados impulsados por agentes con señales de riesgo telefónico.',
  'builtFor.tools.title': 'Añade controles de riesgo de identidad a journeys con IA.',
  'builtFor.tools.body':
    'Protege onboarding, verificación y soporte donde la automatización puede ir más rápido que los equipos antifraude.',
  'builtFor.b2b.title': 'Protege usuarios admin, workspaces y cuentas empresariales.',
  'builtFor.b2b.body':
    'Eleva la verificación en recuperaciones y cambios de cuenta de riesgo antes de que un atacante gane acceso organizativo.',
  'builtFor.b2c.title': 'Mantén los flujos de identidad del consumidor rápidos sin hacerlos frágiles.',
  'builtFor.b2c.body':
    'Usa comprobaciones SIM-swap antes de restablecer contraseñas, cambios de dispositivo y acciones de perfil de alto valor.',
  'builtFor.fintech.title': 'Detén la toma de cuentas antes de que se muevan fondos.',
  'builtFor.fintech.body':
    'Añade controles de riesgo telefónico antes de pagos, cambios de tarjeta, creación de beneficiarios y recuperación de cuenta.',
  'builtFor.banks.title': 'Refuerza la seguridad bancaria mobile-first.',
  'builtFor.banks.body':
    'Integra inteligencia telco en autenticación step-up, operaciones antifraude y políticas de recuperación.',
  'builtFor.commerce.title': 'Reduce chargebacks y abuso de cuentas.',
  'builtFor.commerce.body':
    'Comprueba el compromiso del teléfono antes de cambios de pago guardados, reembolsos, pagos de marketplace y canjes de fidelidad.',
  'builtFor.web3.title': 'Protege la recuperación de carteras y los retiros.',
  'builtFor.web3.body':
    'Detecta cambios de teléfono de alto riesgo antes de recuperación de seed, allowlists de retiro y aprobaciones de transferencia.',

  'proof.eyebrow': 'Base de la plataforma de seguridad',
  'proof.title': 'Hecho para equipos que necesitan pruebas antes de confiar.',
  'proof.lede':
    'Telvri Security convierte la inteligencia de red móvil en una capa de decisión simple para protección de cuentas, onboarding, recuperación de carteras y riesgo transaccional.',
  'proof.1.label': 'Inteligencia de amenazas',
  'proof.1.title': 'Señales de riesgo SIM-swap',
  'proof.1.body':
    'Evalúa el riesgo del número antes de momentos de identidad sensibles y devuelve una decisión clara para tu backend.',
  'proof.2.label': 'Control para desarrolladores',
  'proof.2.title': 'Acceso protegido por clave API',
  'proof.2.body':
    'Usa claves tipo live, validación estricta de requests, contratos Swagger y respuestas JSON predecibles.',
  'proof.3.label': 'Preparación enterprise',
  'proof.3.title': 'OpenAPI como fuente de verdad',
  'proof.3.body':
    'Usa el contrato OpenAPI para generar SDKs, importar en gateways y mantener la documentación alineada.',
  'proof.4.label': 'Flujo operativo',
  'proof.4.title': 'Decisiones de step-up o bloqueo',
  'proof.4.body':
    'Enruta señales de alto riesgo a MFA, revisión manual, cooldowns o flujos de recuperación bloqueados.',

  'use.eyebrow': 'Dónde encaja',
  'use.title': 'Protege los momentos que los atacantes buscan primero.',
  'use.lede': 'Despliega controles de riesgo telefónico en los eventos de identidad que más importan a los equipos antifraude.',
  'use.1.title': 'Recuperación de acceso',
  'use.1.body': 'Comprueba el riesgo SIM-swap antes de permitir restablecimientos de contraseña o re-enrolamiento de dispositivo.',
  'use.2.title': 'Retiros de cartera',
  'use.2.body': 'Eleva la verificación antes de transferencias crypto, fintech o de valor almacenado.',
  'use.3.title': 'Nuevos beneficiarios',
  'use.3.body': 'Detecta el compromiso del número antes de añadir destinos de pago.',
  'use.4.title': 'Onboarding de alto riesgo',
  'use.4.body': 'Combina inteligencia telefónica con flujos KYC y de screening antifraude.',

  'dev.eyebrow': 'Flujo para desarrolladores',
  'dev.title': 'De la clave API a la primera comprobación en minutos.',
  'dev.lede':
    'Abre el dashboard, copia una clave tipo live, elige tu lenguaje y pega la petición generada en tu backend. El mismo contrato alimenta Swagger, la generación de SDKs y futuras librerías de producción.',
  'dev.1.title': 'Crea o copia la clave',
  'dev.1.body': 'Usa la clave live de prueba ahora y sustitúyela después por credenciales reales del tenant.',
  'dev.2.title': 'Elige el lenguaje del SDK',
  'dev.2.body':
    'Los ejemplos de JavaScript, Python, Go, PHP, Ruby, Java, .NET y cURL ya están agrupados por pestañas.',
  'dev.3.title': 'Envía la comprobación',
  'dev.3.body': 'Llama al endpoint SIM-swap antes de acciones sensibles como recuperación de acceso o pagos.',

  'resources.eyebrow': 'Lee. Mira. Aprende. Más.',
  'resources.title': 'Inteligencia de seguridad de identidad para builders.',
  'resources.lede':
    'Artículos, investigación y vídeos seleccionados para equipos que construyen flujos de identidad resistentes al fraude.',
  'resources.tabs': 'Categorías de recursos',
  'resources.tab.ai': 'IA e innovación',
  'resources.tab.identity': 'Seguridad de identidad',
  'resources.tab.product': 'Lanzamientos de producto',
  'resources.tab.industry': 'Perspectivas del sector',
  'resources.loading': 'Obteniendo recursos en vivo...',

  'cta.eyebrow': 'Listo para integrar',
  'cta.titleHtml': 'Empieza en el dashboard.<br />Escala con SDKs generados.',
  'cta.lede':
    'Copia tu clave API, elige un lenguaje y lanza tu primera comprobación SIM-swap antes de recuperación de acceso, pagos o restablecimientos de cartera.',
  'cta.primary': 'Crear cuenta',
  'cta.secondary': 'Ver OpenAPI JSON',
  'cta.points': 'Destacados de integración',
  'cta.p1.title': 'Claves API',
  'cta.p1.body': 'Credenciales emitidas desde el dashboard',
  'cta.p2.title': '8 lenguajes SDK',
  'cta.p2.body': 'De JavaScript a .NET',
  'cta.p3.title': 'OpenAPI 3.0',
  'cta.p3.body': 'Genera clientes desde la especificación',

  'footer.tagline': 'Seguridad de identidad telco para desarrolladores y flujos de cuenta antifraude.',
  'footer.platform': 'Plataforma',
  'footer.sim': 'Comprobaciones SIM-swap',
  'footer.swagger': 'Docs Swagger',
  'footer.openapi': 'OpenAPI JSON',
  'footer.developers': 'Desarrolladores',
  'footer.dashboard': 'Dashboard',
  'footer.keys': 'Claves API',
  'footer.sdks': 'Ejemplos SDK',
  'footer.security': 'Seguridad',
  'footer.recovery': 'Recuperación de cuenta',
  'footer.payout': 'Protección de pagos',
  'footer.risk': 'Decisiones de riesgo',
  'footer.company': 'Empresa',
  'footer.login': 'Iniciar sesión',
  'footer.contact': 'Contacto',
  'footer.rights': '© 2026 Telvri Security. Todos los derechos reservados.',
  'footer.built': 'Hecho para seguridad de identidad centrada en desarrolladores.',
};

export function serializeHomepageEsDictionary(): string {
  return JSON.stringify(HOMEPAGE_ES);
}

const PHOTO_BASE = '/photos';

const PHOTO_MAP: Record<string, string> = {
  'transform': 'robotic-manufacturing-4-0',
  'transform/digital-transformation': 'robotic-manufacturing-4-0',
  'transform/engineering-transformation': 'cnc-fadal-machines',
  'transform/manufacturing-transformation': 'automotive-production-line',
  'transform/plm-transformation': 'cnc-laser-cutting',
  'transform/digital-thread': 'data-center',
  'transform/ai-transformation': 'robot-arm-manufacturing',
  'transform/digital-twin': 'control-room',

  'technology': 'cnc-fadal-machines',
  'technology/plm-pdm': 'cnc-fadal-machines',
  'technology/mes-mom': 'automotive-assembly-line',
  'technology/erp-integration': 'data-center',
  'technology/digital-manufacturing': 'automotive-production-line',
  'technology/digital-twin': 'control-room',
  'technology/mbse': 'cnc-laser-cutting',
  'technology/ai-genai': 'robot-arm-manufacturing',
  'technology/machine-learning': 'data-center',
  'technology/iot': 'wind-turbine-factory',
  'technology/intelligent-automation': 'robotic-manufacturing-4-0',
  'technology/enterprise-integration': 'data-center',

  'solutions': 'automotive-assembly-line',
  'solutions/bom-management': 'cnc-fadal-machines',
  'solutions/product-data-management': 'data-center',
  'solutions/variant-management': 'automotive-production-line',
  'solutions/engineering-change-management': 'cnc-laser-cutting',
  'solutions/digital-manufacturing': 'automotive-assembly-line',
  'solutions/engineering-automation': 'robotic-manufacturing-4-0',
  'solutions/enterprise-integration': 'data-center',
  'solutions/ai-for-engineering': 'robot-arm-manufacturing',
  'solutions/ai-for-manufacturing': 'robotic-manufacturing-4-0',
  'solutions/digital-thread': 'control-room',

  'products': 'data-center',
  'products/hiindsight-university': 'data-center',
  'products/digital-twin-suite': 'control-room',
  'products/bom-management': 'cnc-fadal-machines',
  'products/variant-management': 'automotive-production-line',
  'products/engineering-intelligence': 'robot-arm-manufacturing',
  'products/manufacturing-intelligence': 'robotic-manufacturing-4-0',
  'products/digital-thread': 'data-center',
  'products/ai-copilot': 'robot-arm-manufacturing',
  'products/analytics': 'control-room',

  'industries': 'shipyard-construction',
  'industries/automotive': 'automotive-assembly-line',
  'industries/aerospace-defence': 'a380-final-assembly',
  'industries/energy': 'oil-refinery-blue-hour',
  'industries/heavy-machinery': 'cnc-laser-cutting',
  'industries/industrial-manufacturing': 'robotic-manufacturing-4-0',

  'insights': 'data-center',
  'insights/articles': 'cnc-fadal-machines',
  'insights/case-studies': 'control-room',
  'insights/whitepapers': 'data-center',
  'insights/videos': 'control-room',
  'insights/podcasts': 'data-center',
  'insights/webinars': 'robotic-manufacturing-4-0',
  'insights/research': 'wind-turbine-factory',
  'insights/case-studies/aerospace-pdm-change-control': 'a380-final-assembly',
  'insights/case-studies/manufacturing-digital-twin-production': 'control-room',
  'insights/case-studies/mes-iiot-machine-learning-uptime': 'robotic-manufacturing-4-0',

  'careers': 'robot-arm-manufacturing',
  'contact': 'control-room',
};

export function pageVisual(key: string): string {
  const photo = PHOTO_MAP[key];
  if (photo) return `${PHOTO_BASE}/${photo}.webp`;
  return `/visuals/pages/${key.replace('/', '-')}.webp`;
}

export function pageVisualIsPhoto(key: string): boolean {
  return Boolean(PHOTO_MAP[key]);
}

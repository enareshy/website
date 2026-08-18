import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(process.cwd());
const OUT = path.join(ROOT, 'public', 'photos');
fs.mkdirSync(OUT, { recursive: true });

const UA = { headers: { 'User-Agent': 'HiindsightSite/1.0 (website build; contact@hiindsight.com)' } };

const SOURCES = [
  {
    key: 'cnc-laser-cutting',
    title: 'CNC Laser Cutting Machine in Operation at Martin Guitar Factory',
    lic: 'CC BY 4.0',
    author: 'Martin Guitar / Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/CNC_Laser_Cutting_Machine_in_Operation_at_Martin_Guitar_Factory.jpg/1920px-CNC_Laser_Cutting_Machine_in_Operation_at_Martin_Guitar_Factory.jpg',
  },
  {
    key: 'cnc-fadal-machines',
    title: 'TGFT25 Fadal CNC machines - Taylor Guitar Factory',
    lic: 'CC BY 2.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/TGFT25_Fadal_CNC_machines_-_Taylor_Guitar_Factory.jpg/1920px-TGFT25_Fadal_CNC_machines_-_Taylor_Guitar_Factory.jpg',
  },
  {
    key: 'robot-arm-manufacturing',
    title: 'Lexington Medical, Inc. Universal Reload Manufacturing Robot Arm',
    lic: 'CC0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Lexington_Medical%2C_Inc._Manufacturing_Robot_Arm.jpg/1920px-Lexington_Medical%2C_Inc._Manufacturing_Robot_Arm.jpg',
  },
  {
    key: 'robotic-manufacturing-4-0',
    title: 'MIREA Laboratory Industry 4.0 - Digital robotic manufacturing',
    lic: 'CC BY-SA 4.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/MIREA_Laboratory_Industry_4.0._Digital_robotic_manufacturing_5.jpg/1920px-MIREA_Laboratory_Industry_4.0._Digital_robotic_manufacturing_5.jpg',
  },
  {
    key: 'automotive-assembly-line',
    title: '001 Car factory assembly line - Opel factory in Gliwice, Poland',
    lic: 'CC BY 3.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/001_Car_factory_assembly_line_-_Opel_factory_in_Gliwice%2C_Poland.jpg/1920px-001_Car_factory_assembly_line_-_Opel_factory_in_Gliwice%2C_Poland.jpg',
  },
  {
    key: 'automotive-production-line',
    title: '002 Production line - car assembly line in General Motors Manufacturing Poland',
    lic: 'CC BY 3.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/002_Production_line_-_car_assembly_line_in_General_Motors_Manufacturing_Poland_-_Gliwice%2C_Poland.jpg/1920px-002_Production_line_-_car_assembly_line_in_General_Motors_Manufacturing_Poland_-_Gliwice%2C_Poland.jpg',
  },
  {
    key: 'a380-final-assembly',
    title: 'Jean-Luc Lagardère A380 Final Assembly Line',
    lic: 'CC BY-SA 3.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/%22Jean-Luc_Lagard%C3%A8re%22_A380_Final_assembly_line.JPG/1920px-%22Jean-Luc_Lagard%C3%A8re%22_A380_Final_assembly_line.JPG',
  },
  {
    key: 'shipyard-construction',
    title: 'Ships under construction at Chantiers de l\'Atlantique shipyard, 2025',
    lic: 'CC BY 4.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ships_under_construction_at_Chantiers_de_l%27Atlantique_shipyard%2C_2025_%282%29.jpg/1920px-Ships_under_construction_at_Chantiers_de_l%27Atlantique_shipyard%2C_2025_%282%29.jpg',
  },
  {
    key: 'oil-refinery',
    title: 'Anacortes Refinery',
    lic: 'CC BY 2.5',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Anacortes_Refinery_31911.JPG/1920px-Anacortes_Refinery_31911.JPG',
  },
  {
    key: 'oil-refinery-blue-hour',
    title: 'Blue hour fog over Preemraff oil refinery by Brofjorden',
    lic: 'CC BY-SA 4.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Blue_hour_fog_over_Preemraff_oil_refinery_by_Brofjorden.jpg/1920px-Blue_hour_fog_over_Preemraff_oil_refinery_by_Brofjorden.jpg',
  },
  {
    key: 'data-center',
    title: 'BalticServers data center',
    lic: 'CC BY-SA 3.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/BalticServers_data_center.jpg/1920px-BalticServers_data_center.jpg',
  },
  {
    key: 'solar-factory',
    title: 'Solar panels at the factory of China Steel in Kaohsiung',
    lic: 'CC BY 2.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Solar_panels_at_the_factory_of_China_Steel_in_Kaohsiung_2023-02-13.jpg/1920px-Solar_panels_at_the_factory_of_China_Steel_in_Kaohsiung_2023-02-13.jpg',
  },
  {
    key: 'wind-turbine-factory',
    title: 'Siemens Wind Turbine Blade Factory',
    lic: 'CC BY-SA 2.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Siemens_Wind_Turbine_Blade_Factory_-_geograph.org.uk_-_5199182.jpg',
  },
  {
    key: 'control-room',
    title: 'Nuclear power plant control room',
    lic: 'CC BY 2.0',
    author: 'Wikimedia Commons',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Nuclear_power_plant_control_room_%2815856397259%29.jpg/1920px-Nuclear_power_plant_control_room_%2815856397259%29.jpg',
  },
];

async function main() {
  const credits = [];
  for (const s of SOURCES) {
    const outFile = path.join(OUT, `${s.key}.webp`);
    try {
      const r = await fetch(s.url, UA);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const buf = Buffer.from(await r.arrayBuffer());
      const meta = await sharp(buf).metadata();
      const targetW = Math.min(meta.width || 1920, 1920);
      const img = sharp(buf).resize({ width: targetW, height: Math.round(targetW * 0.625), fit: 'cover', position: 'attention' });
      await img.webp({ quality: 82, effort: 4 }).toFile(outFile);
      credits.push({ key: s.key, title: s.title, lic: s.lic, author: s.author });
      console.log(`OK ${s.key}`);
    } catch (e) {
      console.log(`ERR ${s.key}: ${e.message}`);
    }
  }
  fs.writeFileSync(path.join(ROOT, 'content', 'photo-credits.ts'), `export interface PhotoCredit {\n  key: string;\n  title: string;\n  lic: string;\n  author: string;\n}\n\nexport const photoCredits: PhotoCredit[] = ${JSON.stringify(credits, null, 2)};\n`);
  console.log(`Wrote ${credits.length} photos + credits`);
}

main();

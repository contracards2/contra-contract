import { config } from 'dotenv';
import fs from 'fs';
config();

const BATCH_ENV = process.env.BATCH_ENV

for (let i = 0; i <= 420; i++) {
  const jsonData = {
    id: i,
    name: `Contra Card #${i}`,
    description: 'Contra Card NFT',
    image: `https://${BATCH_ENV}.contra.cards/nfts/${i}`,
    animation_url: `https://${BATCH_ENV}.contra.cards/nfts/${i}`,
    external_url: 'https://contra.cards/',
    background_color: '#4e4a4e',
  };

  const filename = `${i}`;
  const filePath = `./generator/metadata/${filename}`;

  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
  console.log(`Created ${filename}`);
}

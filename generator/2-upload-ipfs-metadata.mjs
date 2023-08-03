import fs from 'fs';

import { ThirdwebStorage } from '@thirdweb-dev/storage';

const storage = new ThirdwebStorage();

(async () => {
  let metadataArray = [];

  for (let i = 0; i <= 420; i++) {
    metadataArray.push(fs.readFileSync('./generator/metadata/' + i));
  }

  const upload = await storage.uploadBatch(metadataArray, {
    uploadWithGatewayUrl: true,
    uploadWithoutDirectory: false,
  });

  console.log(`Gateway URL 1 - ${storage.resolveScheme(upload[0])}`);
  console.log(`URL 1 - ${upload[0]}`);
  console.log(`Gateway URL 2 - ${storage.resolveScheme(upload[420])}`);
  console.log(`URL 2 - ${upload[420]}`);
})();

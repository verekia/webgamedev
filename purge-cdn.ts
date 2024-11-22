if (!process.env.BUNNY_PULLZONE_ID || !process.env.BUNNY_ACCESS_KEY) {
  console.warn('BUNNY_PULLZONE_ID or BUNNY_ACCESS_KEY is not set')
  process.exit(0)
}

try {
  await fetch(`https://api.bunny.net/pullzone/${process.env.BUNNY_PULLZONE_ID}/purgeCache`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      AccessKey: process.env.BUNNY_ACCESS_KEY as string,
    },
  })
  console.log('Purged CDN cache')
} catch (e) {
  console.error(e)
}

export {}

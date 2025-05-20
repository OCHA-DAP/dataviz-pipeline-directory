import cronstrue from 'cronstrue';

export function parseJenkinsCron(cron) {
  // Temporarily replace "H" with placeholder "2" in order to run through cronstrue
  const placeholder = '02'; 
  const replaced = cron.replace(/\bH\b/g, placeholder);
  const readable = cronstrue.toString(replaced, { verbose: true });

  // Replace placeholder
  const masked = readable.replace(
    /:(\d\d)/,
    (_, mm) => ':' + mm.replace(new RegExp(placeholder, 'g'), 'XX')
  );

  return masked;
}

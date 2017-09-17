import { charsetCode } from './constants';

const MIME = {
  '.txt': `text/plain; ${charsetCode}`,
  '.htm': `text/html; ${charsetCode}`,
  '.html': `text/html; ${charsetCode}`,
  '.js': `text/javascript; ${charsetCode}`,
  '.css': `text/css; ${charsetCode}`,
  '.bin': 'application/binary',
  '.json': `application/json; ${charsetCode}`,
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.mp3': 'audio/mp3',
  '.gif': 'image/gif'
};

export default (mime = '.html') => {
  if (!/^\..*/.test(mime)) {
    mime = `.${mime}`;
  }

  return MIME[mime];
};

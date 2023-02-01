import child from 'child_process';

const exec = child.exec;
const m3u8 = 'https://video7.sesongshu.com/video/20211031/076846a9571b649cae5e923c22194e2f/index.m3u8'
exec('wget ' + m3u8 + ' -O ./ffmpeg/1.m3u8', function (error, stdout, stderr) {
  if (error) {
    console.log(error)
  } else {
    console.log('success', stdout);
  }
});

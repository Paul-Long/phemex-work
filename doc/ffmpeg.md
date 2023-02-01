time ffmpeg -hwaccel videotoolbox  -y -threads 2 -i https://video7.sesongshu.com/video/20211031/076846a9571b649cae5e923c22194e2f/index.m3u8  -bsf:a aac_adtstoasc -vcodec copy -c copy  5-58-1.mp4

# GetYoutubeTitle
NextJS endpoint for getting the title of a youtube video via url

install:
```
npm install
```

lunch vercel:
```
vercel
```

receives the slug of a youtube video, so from **https://www.youtube.com/watch?v=dHhr30207JY&ab_channel=LinusTechTips** 
remove **https://www.youtube.com/watch?v=** from url
fetch **https://get-youtube-title-###.vercel.app/api/dHhr30207JY&ab_channel=LinusTechTips**
receive **The Most BIZARRE Keyboard...**

NOTICE
* If using a free vercel account you may have timeout issues
* To test run project localy with 
```
node index.js
```

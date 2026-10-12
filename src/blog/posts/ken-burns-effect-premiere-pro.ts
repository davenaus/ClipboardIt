import { BlogPost } from '../types';

const post: BlogPost = {
  "id": "7",
  "slug": "ken-burns-effect-premiere-pro",
  "title": "How to Add a Pan and Zoom (Ken Burns) Effect in Premiere Pro",
  "description": "Animate still photos with slow pans and zooms using Scale and Position keyframes, smooth the motion with easing, and reuse it across a whole slideshow.",
  "author": "Austin Davenport",
  "publishDate": "2026-10-11",
  "lastModified": "2026-10-11",
  "tags": [
    "premiere-pro",
    "still-images",
    "keyframes",
    "motion"
  ],
  "category": "video-editing",
  "readingTime": 3,
  "featured": false,
  "seoTitle": "Ken Burns Pan & Zoom Effect in Premiere Pro | Clipboard It",
  "seoDescription": "Create a Ken Burns pan and zoom on photos in Premiere Pro with Scale and Position keyframes, add easing, avoid soft images, and copy the motion to other clips.",
  "image": {
    "url": "/blog/ken-burns-effect-premiere-pro.webp",
    "width": 1600,
    "height": 1067,
    "alt": "Purple photo with a zoom frame and motion path"
  },
  "relatedPosts": [
    "6",
    "2"
  ],
  "directAnswer": "Select the photo on the timeline and open Effect Controls. At the start of the clip, click the stopwatch next to Scale and Position to create keyframes. Move to the end of the clip and change Scale (for example from 100 to 115) and Position; Premiere animates between the two keyframes. Right-click the keyframes and choose Ease In or Ease Out for smoother motion, and use Set to Frame Size rather than Scale to Frame Size so the zoom stays sharp.",
  "tutorialGroup": "images",
  "productFit": "context",
  "ctaType": "none",
  "workflow": {
    "title": "A pan and zoom in three moves",
    "steps": [
      [
        "Start keyframes",
        "Scale and Position at the first frame"
      ],
      [
        "End keyframes",
        "Change Scale and Position at the last frame"
      ],
      [
        "Ease and reuse",
        "Smooth motion, paste to other clips"
      ]
    ]
  },
  content: `# How to Add a Pan and Zoom (Ken Burns) Effect in Premiere Pro

A Ken Burns effect is two keyframes on a clip's built-in Motion properties; no plugins needed.

## Before You Start: Keep the Image Sharp

Zooming enlarges the image, so it needs pixels to spare.

1. Use images larger than the sequence frame. For 1080p, a photo around 3000 to 4000 pixels wide leaves plenty of room.
2. Fit the image with **Set to Frame Size**, not Scale to Frame Size. Scale to Frame Size reduces the image to the sequence size, and zooming into that copy looks soft. See [how to fit an image to the frame](/blog/fit-image-to-frame-premiere-pro).

## Create the Pan and Zoom

1. Place the photo on the timeline and select it.
2. Open **Effect Controls** (Window > Effect Controls) and expand **Motion**.
3. Move the playhead to the first frame of the clip.
4. Click the **stopwatch** next to **Scale**, then next to **Position**, to set start keyframes.
5. Move to the last frame of the clip: press the Down Arrow key to jump to the next edit point, then the Left Arrow key to step back one frame onto the clip.
6. Change **Scale**, for example from 100 to 115. Premiere adds the keyframe automatically.
7. Change **Position** to drift toward the subject.
8. Play the clip back to check the motion.

To position the image visually, click the word **Motion** in Effect Controls and drag the image in the Program Monitor.

## Choose a Direction

- Push in (scale up): draws attention to a face, detail, or line of text.
- Pull out (scale down): reveals context, such as a person in a wide landscape.
- Pan (position only): follows a line in the image, such as a road or a group of people.

Keep it subtle: 10 to 20 percent of Scale change over five seconds feels deliberate. Make sure the image covers the frame at both keyframes, or empty edges slide into view.

## Smooth the Motion with Easing

Keyframes are linear by default, so motion starts and stops abruptly.

1. In Effect Controls, drag a box around the Scale and Position keyframes to select them.
2. Right-click a selected keyframe.
3. Choose **Temporal Interpolation > Ease Out** for the first keyframes and **Ease In** for the last. **Bezier** gives similar results with adjustable handles.

For a steady drift through a slideshow, linear keyframes can look better: motion does not stop at every cut.

## Reuse the Motion on Other Photos

1. Select the finished clip and copy it (Cmd+C on Mac, Ctrl+C on Windows).
2. Select the other photo clips.
3. Choose **Edit > Paste Attributes**.
4. Check **Motion**. Leave **Scale Attribute Times** checked so the keyframes stretch to each clip's length.
5. Click **OK**.

Then adjust Position per image, and check any photo with different dimensions.

## Optional: Add Motion Blur

Fast pans can stutter. The **Transform** effect (Effects > Video Effects > Distort > Transform) has its own Scale and Position controls plus a Shutter Angle setting. Uncheck **Use Composition's Shutter Angle**, raise Shutter Angle, and animate Transform's properties instead of Motion.

## Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| Image looks soft while zooming | Scale to Frame Size was used, or the image is small | Use Set to Frame Size and a larger image |
| Black edges appear | Image does not cover the frame at one keyframe | Raise Scale at that keyframe |
| Motion jumps at the start | Keyframes were not created on the first frame | Drag the first keyframes to the clip start |
| Pasted motion looks wrong | Different image sizes, or Scale Attribute Times was off | Paste again with Scale Attribute Times on, then adjust each clip |

If you collect photos from a browser as you edit, [pasting images straight into a Premiere bin](/blog/why-you-cant-copy-paste-images-premiere-pro) skips the save-rename-import routine for each one.
`
};

export default post;
